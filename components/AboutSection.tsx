
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-neon-blue drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] mb-6">
          About The Event
        </h2>
        <div className="max-w-3xl mx-auto border-2 border-neon-purple p-8 rounded-lg shadow-[0_0_20px_rgba(148,0,211,0.5)] bg-dark-purple/50">
          <p className="text-lg text-gray-300 leading-relaxed">
            The G4 Connect Festival is a one-of-a-kind community sports festival where passion for the game meets the thrill of technology. Featuring exciting tournaments in football, volleyball, and chess, the festival is amplified with tech-infused side attractions like AI experiences, VR worlds, and spectacular drone shows. It all culminates in a glamorous awards night celebrating talent, sportsmanship, and innovation, packed with top-tier entertainment.
          </p>
        </div>
      </div>
    </section>
  );
};
