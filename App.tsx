
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RegistrationSection } from './components/RegistrationSection';
import { PrizesSection } from './components/PrizesSection';
import { VotingSection } from './components/VotingSection';
import { AttractionsSection } from './components/AttractionsSection';
import { VenueSection } from './components/VenueSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-200 font-roboto overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(148,0,211,0.2)_0,_rgba(148,0,211,0)_50%)] z-0"></div>
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <RegistrationSection />
        <PrizesSection />
        <VotingSection />
        <AttractionsSection />
        <VenueSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
