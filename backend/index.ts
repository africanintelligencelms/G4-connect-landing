import express, { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import dotenv from 'dotenv';
import { z, ZodError } from 'zod';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Zod schema for registration validation
const registrationSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  category: z.string().min(1, { message: "Category is required" }),
  teamName: z.string().optional(),
  participants: z.number().int().min(1, { message: "At least one participant is required" }),
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// Registration endpoint
app.post('/api/register', async (req: Request, res: Response) => {
  try {
    // 1. Validate request body
    const validatedData = registrationSchema.parse(req.body);

    // 2. Save to database
    const newRegistration = await prisma.registration.create({
      data: validatedData,
    });

    // 3. Return success response
    res.status(201).json(newRegistration);

  } catch (error) {
    // 4. Handle errors
    if (error instanceof ZodError) {
      // Validation error
      return res.status(400).json({ 
        message: "Invalid input data. Please check the fields.", 
        errors: error.flatten().fieldErrors 
      });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Unique constraint violation (e.g., duplicate email)
      if (error.code === 'P2002') {
        return res.status(409).json({ message: 'A registration with this email already exists.' });
      }
    }

    // Generic server error
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'An internal server error occurred. Please try again later.' });
  }
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  // FIX: __dirname is not available in ES module scope. This recreates it using import.meta.url.
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const frontendDistPath = path.join(__dirname, '..', '..', 'dist');
  
  // Serve static files from the React app
  app.use(express.static(frontendDistPath));

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
// FIX: Cast `process` to `any` to address a TypeScript typing issue where the global `process` object's type lacks the 'on' method.
(process as any).on('beforeExit', async () => {
  await prisma.$disconnect();
});
