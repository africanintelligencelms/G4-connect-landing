import React from 'react';

const NeonGridBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-dark-purple opacity-80"></div>
    <div 
      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,0,211,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,0,211,0.3)_1px,transparent_1px)]"
      style={{ backgroundSize: '40px 40px' }}
    ></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.2)_0%,transparent_70%)]"></div>
  </div>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center p-4 overflow-hidden">
      <NeonGridBackground />
      <div className="relative z-10 flex flex-col items-center animate-pulse-glow">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">
          G4 Connect Festival
        </h1>
        <p className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-neon-blue drop-shadow-[0_0_8px_rgba(0,255,255,0.7)] mt-2">
          2025
        </p>
        <p className="mt-6 text-lg md:text-xl font-roboto text-gray-300 max-w-3xl">
          Soccer • Volleyball • Chess • Awards Night • Tech Experiences
        </p>
        <a 
          href="#registration"
          className="mt-10 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg bg-neon-pink text-white font-bold font-orbitron uppercase rounded-full tracking-wider transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-neon-pink shadow-neon-pink hover:shadow-lg"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};