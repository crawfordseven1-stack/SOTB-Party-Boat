
import React, { useState, useEffect, DragEvent } from 'react';
import { HeroSectionData } from '../types';

interface HeroSectionProps {
  data: HeroSectionData;
}

const LocationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [background, setBackground] = useState<{ type: 'image' | 'video' | 'iframe'; src: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (data.videoURL) {
      setBackground({ type: 'iframe', src: data.videoURL });
    } else if (data.imageURL) {
      setBackground({ type: 'image', src: data.imageURL });
    }
  }, [data.videoURL, data.imageURL]);

  const handleDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        if (loadEvent.target?.result) {
          const newSrc = loadEvent.target.result as string;
          const type = file.type.startsWith('video/') ? 'video' : 'image';
          setBackground({ type, src: newSrc });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const renderBackground = () => {
    if (!background) return <div className="absolute inset-0 bg-gray-800"></div>;
    
    switch (background.type) {
      case 'iframe':
        return (
          <iframe
            className="w-full h-full object-cover"
            src={background.src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="background-video"
          ></iframe>
        );
      case 'image':
        return (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${background.src})` }}
          />
        );
      case 'video':
        return (
          <video
            className="w-full h-full object-cover"
            src={background.src}
            autoPlay
            loop
            muted
            playsInline
          />
        );
      default:
        return <div className="absolute inset-0 bg-gray-800"></div>;
    }
  };

  return (
    <section 
      className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
      aria-label="Hero section with event details"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30 border-4 border-dashed border-orange-500 pointer-events-none">
          <p className="text-2xl font-bold text-white">Drop to change background</p>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {renderBackground()}
      </div>
      
      <div className="relative z-20 p-4 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-light tracking-widest text-orange-300 uppercase">{data.subtitle}</h2>
        <h1 className="font-cinzel text-5xl md:text-8xl font-bold my-4 leading-tight shadow-lg">
          {data.title}
        </h1>
        <div className="mt-8 space-y-3 text-sm md:text-base text-gray-200">
            <p className="flex items-center justify-center"><CalendarIcon />{data.date}</p>
            <p className="flex items-center justify-center"><LocationIcon /> {data.location}</p>
        </div>
      </div>
      
      <div className="absolute bottom-8 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
