
import React from 'react';

const MapPinIcon: React.FC = () => (
  <svg className="w-12 h-12 text-neon-pink drop-shadow-[0_0_8px_#f0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-center text-neon-blue drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] mb-10">
          Venue & Location
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-dark-purple p-8 rounded-lg border border-neon-purple shadow-[0_0_20px_rgba(148,0,211,0.5)] text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <MapPinIcon />
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-white">Find Us Here</h3>
                <p className="text-lg text-gray-300 mt-2">
                  Football Field, Behind ECWA Church Gyel, Bukuru
                </p>
              </div>
            </div>
          </div>
          <div className="h-64 lg:h-full bg-dark-purple rounded-lg border-2 border-dashed border-neon-purple flex items-center justify-center">
             <p className="text-gray-400 font-orbitron">Google Map Embed Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};
