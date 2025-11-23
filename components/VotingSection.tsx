
import React from 'react';

export const VotingSection: React.FC = () => {
  return (
    <section id="vote" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-orbitron font-bold uppercase text-neon-blue drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] mb-10">
          How to Vote
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Offline Voting Card */}
          <div className="bg-dark-purple border-2 border-neon-purple p-8 rounded-lg shadow-[0_0_20px_rgba(148,0,211,0.5)] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-neon-purple uppercase mb-4">Offline Voting</h3>
              <p className="text-gray-300 text-lg">
                Send contestant name & category via SMS to <strong className="text-white">07061787829</strong>.
              </p>
            </div>
            <a href="sms:07061787829" className="mt-6 w-full px-6 py-3 bg-transparent border-2 border-neon-purple text-neon-purple font-bold font-orbitron uppercase rounded-full tracking-wider transform transition-all duration-300 hover:bg-neon-purple hover:text-white">
              SMS Voting Instructions
            </a>
          </div>

          {/* Online Voting Card */}
          <div className="bg-dark-purple border-2 border-neon-pink p-8 rounded-lg shadow-neon-pink flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-neon-pink uppercase mb-4">Online Voting</h3>
              <p className="text-gray-300 text-lg">
                Visit <strong className="text-white">g4connect.xyz</strong> and sign up with your email to get your Username & User ID.
              </p>
            </div>
            <a href="https://g4connect.xyz" target="_blank" rel="noopener noreferrer" className="mt-6 w-full px-6 py-3 bg-neon-pink text-white font-bold font-orbitron uppercase rounded-full tracking-wider transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-neon-pink">
              Vote Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
