
import React from 'react';
import { AiIcon, VrIcon, DroneIcon, PopcornIcon, BonfireIcon, FlexIcon } from './icons/AttractionIcons';

interface AttractionItemProps {
  icon: React.ReactNode;
  label: string;
}

const AttractionItem: React.FC<AttractionItemProps> = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center space-y-3 p-4 bg-dark-purple/50 border border-neon-blue rounded-lg transition-all duration-300 hover:border-neon-pink hover:shadow-neon-pink hover:-translate-y-2">
    <div className="w-16 h-16 text-neon-blue">{icon}</div>
    <span className="font-orbitron font-bold uppercase text-center text-sm">{label}</span>
  </div>
);


export const AttractionsSection: React.FC = () => {
  const attractions = [
    { icon: <AiIcon />, label: 'Artificial Intelligence' },
    { icon: <VrIcon />, label: 'Virtual Reality' },
    { icon: <DroneIcon />, label: 'Drone Shows' },
    { icon: <PopcornIcon />, label: 'Popcorn & Grills' },
    { icon: <BonfireIcon />, label: 'Bonfire' },
    { icon: <FlexIcon />, label: 'Flex Zone' },
  ];

  return (
    <section id="attractions" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-neon-blue drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] mb-10">
          Side Attractions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {attractions.map(attraction => (
            <AttractionItem key={attraction.label} {...attraction} />
          ))}
        </div>
      </div>
    </section>
  );
};
