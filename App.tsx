
import React from 'react';
import { pageData } from './constants';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SoundsSection from './components/SoundsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen antialiased">
      <main>
        <HeroSection data={pageData.heroSection} />
        <AboutSection data={pageData.aboutSection} />
        <SoundsSection data={pageData.soundsSection} />
        <CtaSection data={pageData.ctaSection} />
      </main>
      <Footer socialMedia={pageData.socialMedia} />
    </div>
  );
};

export default App;
