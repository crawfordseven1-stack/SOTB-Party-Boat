
import React from 'react';
import { AboutSectionData } from '../types';

interface AboutSectionProps {
  data: AboutSectionData;
}

const SkullIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 inline-block text-orange-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-5h2v2h-2v-2zm0-4h2v2h-2V7z" />
     <path fillRule="evenodd" d="M10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9a1 1 0 100 2h4a1 1 0 100-2h-4zm-1-4a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    <path d="M14.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 14c-2.33 0-4.32 1.36-5.26 3.26.24.11.49.2.76.26.9.2 1.95.3 3.5.3s2.6-.1 3.5-.3c.27-.06.52-.15.76-.26C14.32 15.36 12.33 14 10 14z" />
     <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM5.5 5.5a.75.75 0 01.53-.22l1.25.5a.75.75 0 01-.53 1.44l-1.25-.5a.75.75 0 010-1.22zM2 10a.75.75 0 01.75-.75h1.25a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm3.28-3.97a.75.75 0 011.06-.22l1 .75a.75.75 0 01-.84 1.28l-1-.75a.75.75 0 01-.22-1.06zM14.5 5.5a.75.75 0 011.06 0l1.25 1.25a.75.75 0 01-1.06 1.06L14.5 6.56a.75.75 0 010-1.06zM18 10a.75.75 0 01.75-.75h1.25a.75.75 0 010 1.5h-1.25A.75.75 0 0118 10zm-3.28 3.97a.75.75 0 01-1.06.22l-1-.75a.75.75 0 11.84-1.28l1 .75c.3.22.37.66.15 1.01a.75.75 0 01-.07.05zM10 18a.75.75 0 01-.75-.75v-1.25a.75.75 0 011.5 0v1.25A.75.75 0 0110 18zm-4.5-5.5a.75.75 0 01-.53.22l-1.25-.5a.75.75 0 01.53-1.44l1.25.5a.75.75 0 010 1.22z"/>
  </svg>
);


const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-orange-400 mb-6">{data.title}</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        
        <div className="text-gray-300 leading-relaxed text-lg space-y-4">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <p className="font-bold text-orange-300 text-xl my-8 tracking-wider uppercase">
          {data.callToAction}
        </p>

        <div className="mt-10 text-left max-w-2xl mx-auto">
            <ul className="space-y-4">
                {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <SkullIcon />
                        <span className="text-gray-200 text-lg">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;