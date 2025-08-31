
import React from 'react';
import { CtaSectionData } from '../types';

interface CtaSectionProps {
  data: CtaSectionData;
}

const CtaSection: React.FC<CtaSectionProps> = ({ data }) => {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-orange-400 mb-4">{data.title}</h2>
        <p className="text-gray-300 mb-8">{data.description}</p>
        <a 
          href="https://www.saboronthebay.com/sabor-on-the-bay-events/sd-dia-de-los-muertos-cruise/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-black font-bold text-lg py-4 px-10 rounded-full uppercase tracking-wider hover:bg-orange-400 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/30">
          Secure Your Spot
        </a>
      </div>
    </section>
  );
};

export default CtaSection;