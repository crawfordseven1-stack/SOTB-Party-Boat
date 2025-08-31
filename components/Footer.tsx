
import React from 'react';
import { SocialMediaLink } from '../types';

interface FooterProps {
  socialMedia: SocialMediaLink[];
}

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
    </svg>
);

const WebsiteIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9" />
    </svg>
);


const Footer: React.FC<FooterProps> = ({ socialMedia }) => {
  const getIcon = (platform: string) => {
    switch(platform.toLowerCase()) {
      case 'instagram': return <InstagramIcon />;
      case 'website': return <WebsiteIcon />;
      default: return null;
    }
  };

  return (
    <footer className="bg-black py-8 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center text-gray-400">
        <div className="flex justify-center items-center space-x-6 mb-6">
          {socialMedia.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
              {getIcon(link.platform)}
            </a>
          ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Sabor On The Bay. All Rights Reserved.</p>
        <p className="text-xs mt-2">Designed for an unforgettable night.</p>
      </div>
    </footer>
  );
};

export default Footer;
