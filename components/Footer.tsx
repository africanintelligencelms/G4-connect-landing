
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-purple/50 border-t border-neon-purple py-6">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="font-roboto">&copy; {new Date().getFullYear()} G4 Connect Festival. All Rights Reserved.</p>
        <p className="text-sm font-orbitron uppercase tracking-wider mt-2">Powered by Innovation & Community</p>
      </div>
    </footer>
  );
};
