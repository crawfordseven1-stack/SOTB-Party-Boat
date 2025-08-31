import React from 'react';
import { AboutSectionData } from '../types';

interface AboutSectionProps {
  data: AboutSectionData;
}

const SkullIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 inline-block text-orange-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
     <path fillRule="evenodd" d="M10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9a1 1 0 100 2h4a1 1 0 100-2h-4zm-1-4a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const TicketIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

        <div className="mt-12">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a 
                  href={data.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-xl py-5 px-14 rounded-full uppercase tracking-wider transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 shadow-lg shadow-orange-500/30 w-full sm:w-auto">
                    <TicketIcon />
                    Buy Tickets
                </a>
                <a 
                  href={data.googleCalendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-orange-400 text-orange-400 font-bold text-lg py-4 px-10 rounded-full uppercase tracking-wider transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-orange-400/25 hover:border-orange-300 hover:text-orange-300 w-full sm:w-auto">
                    <CalendarIcon />
                    Save the Date
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;