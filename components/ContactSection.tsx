
import React from 'react';

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);


export const ContactSection: React.FC = () => {
  const contacts = ["07061787829", "09074657724", "08127846008", "09135515606"];
  
  const ctaButtonStyle = "w-full md:w-auto px-8 py-4 bg-neon-blue text-black font-bold font-orbitron uppercase rounded-full tracking-wider transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-neon-blue shadow-neon-blue hover:shadow-lg";

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-neon-blue drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] mb-10">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto bg-dark-purple p-8 rounded-lg border border-neon-pink shadow-neon-pink">
            <h3 className="text-2xl font-orbitron font-bold text-neon-pink uppercase mb-6">Contact Numbers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {contacts.map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="flex items-center justify-center text-lg text-white hover:text-neon-pink transition-colors">
                        <PhoneIcon /> {phone}
                    </a>
                ))}
            </div>
            
            <div className="border-t border-neon-purple my-8"></div>

            <h3 className="text-2xl font-orbitron font-bold text-neon-pink uppercase mb-6">Partnership & Inquiries</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                 <a href="#registration" className={ctaButtonStyle}>Vendor Space</a>
                 <a href="#registration" className={ctaButtonStyle}>Become a Sponsor</a>
                 <a href="#registration" className={ctaButtonStyle}>General Enquiries</a>
            </div>
        </div>
      </div>
    </section>
  );
};
