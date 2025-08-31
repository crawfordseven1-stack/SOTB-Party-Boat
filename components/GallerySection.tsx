
import React, { useState, useEffect, DragEvent } from 'react';
import { GallerySectionData, GalleryItem } from '../types';

const STORAGE_KEY = 'sabor-gallery-items';

interface GalleryItemDisplayProps {
  item: GalleryItem;
}

const GalleryItemDisplay: React.FC<GalleryItemDisplayProps> = ({ item }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 group aspect-square"
      aria-label={item.alt}
      role="img"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

interface GallerySectionProps {
  data: GallerySectionData;
}

const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  const [items, setItems] = useState<GalleryItem[]>(data.items);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    try {
      const savedItems = localStorage.getItem(STORAGE_KEY);
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      } else {
        setItems(data.items);
      }
    } catch (error) {
      console.error("Failed to load gallery items from localStorage", error);
      setItems(data.items);
    }
  }, [data.items]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save gallery items to localStorage", error);
    }
  }, [items]);

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
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    
    if (files.length === 0) return;

    const readUploadedFileAsDataURL = (file: File): Promise<GalleryItem> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            src: reader.result as string,
            alt: file.name,
          });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    Promise.all(files.map(readUploadedFileAsDataURL)).then(newItems => {
      setItems(prevItems => [...newItems, ...prevItems]);
    });
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setItems(data.items);
  };

  return (
    <section 
      className="py-20 px-6 bg-gray-900 text-center relative"
      aria-label="Experience the Vibe gallery"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-30 border-4 border-dashed border-orange-500 pointer-events-none">
          <p className="text-2xl font-bold text-white">Drop images to add to gallery</p>
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-orange-400 mb-6">{data.title}</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((item, index) => (
              <GalleryItemDisplay key={`${item.src.substring(0, 30)}-${index}`} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/50">
            <p className="text-gray-400 text-xl">Drop images here to build your gallery</p>
          </div>
        )}
        <div className="mt-8">
            <button
                onClick={handleReset}
                className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition-colors duration-300 text-sm"
            >
                Reset Gallery
            </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
