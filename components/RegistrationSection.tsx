import React, { useState, useEffect } from 'react';
import { RegistrationCategory, FormData } from '../types';

const initialFormData: FormData = {
  fullName: '',
  phone: '',
  email: '',
  category: RegistrationCategory.FOOTBALL,
  teamName: '',
  participants: 1,
};

export const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'participants' ? parseInt(value) || 1 : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed. Please try again.');
      }

      setIsSuccess(true);
      setFormData(initialFormData); // Reset form on success
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const inputStyle = "w-full bg-dark-purple/50 border border-neon-purple text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-pink transition-all duration-300 placeholder-gray-500 disabled:opacity-50";
  const labelStyle = "block text-sm font-bold mb-2 text-neon-blue uppercase tracking-wider";

  return (
    <section id="registration" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-center text-neon-blue drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] mb-10">
          Register Your Spot
        </h2>
        <div className="max-w-2xl mx-auto bg-dark-purple border-2 border-neon-pink p-8 rounded-xl shadow-neon-pink">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className={labelStyle}>Full Name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputStyle} placeholder="e.g., Ada Lovelace" disabled={isLoading} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className={labelStyle}>Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className={inputStyle} placeholder="08012345678" disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="email" className={labelStyle}>Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} placeholder="you@example.com" disabled={isLoading} />
              </div>
            </div>
            <div>
              <label htmlFor="category" className={labelStyle}>Select Category</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} required className={`${inputStyle} appearance-none`} disabled={isLoading}>
                {Object.values(RegistrationCategory).map(cat => (
                  <option key={cat} value={cat} className="bg-dark-purple text-white">{cat}</option>
                ))}
              </select>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="teamName" className={labelStyle}>Team/Group Name <span className="text-gray-400 normal-case">(Optional)</span></label>
                <input type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} className={inputStyle} placeholder="e.g., The Matrix Coders" disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="participants" className={labelStyle}>No. of Participants</label>
                <input type="number" id="participants" name="participants" value={formData.participants} onChange={handleChange} required min="1" className={inputStyle} disabled={isLoading} />
              </div>
            </div>

            {isSuccess && (
              <div className="text-center p-3 rounded-md bg-green-900/50 border border-green-500 text-green-300">
                Registration successful! Thank you for joining the G4 Connect Festival.
              </div>
            )}
            {error && (
               <div className="text-center p-3 rounded-md bg-red-900/50 border border-red-500 text-red-300">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="w-full mt-4 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg bg-neon-blue text-black font-bold font-orbitron uppercase rounded-full tracking-wider transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-neon-blue shadow-neon-blue hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Registration'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};