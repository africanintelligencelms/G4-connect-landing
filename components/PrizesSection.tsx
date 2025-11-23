
import React from 'react';

interface PrizeCardProps {
  place: string;
  amount: string;
  color: 'pink' | 'blue';
}

const PrizeCard: React.FC<PrizeCardProps> = ({ place, amount, color }) => {
  const shadowClass = color === 'pink' ? 'shadow-neon-pink' : 'shadow-neon-blue';
  const borderClass = color === 'pink' ? 'border-neon-pink' : 'border-neon-blue';
  const textClass = color === 'pink' ? 'text-neon-pink' : 'text-neon-blue';

  return (
    <div className={`bg-dark-purple border-2 ${borderClass} rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 ${shadowClass}`}>
      <h3 className={`text-3xl font-orbitron font-bold uppercase ${textClass}`}>{place}</h3>
      <p className="text-5xl font-orbitron font-extrabold text-white mt-4">{amount}</p>
    </div>
  );
};

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-neon-blue drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] mb-4">
          Football Tournament Prizes
        </h2>
        <p className="text-lg text-gray-400 mb-10">Compete for the ultimate glory and cash prizes!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PrizeCard place="1st Place" amount="₦100,000" color="blue" />
          <PrizeCard place="2nd Place" amount="₦50,000" color="pink" />
        </div>
      </div>
    </section>
  );
};
