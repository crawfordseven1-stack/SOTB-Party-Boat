
import React, { useState, useEffect, useRef, DragEvent, ReactNode } from 'react';
import { GallerySectionData, GalleryItem } from '../types';

const STORAGE_KEY = 'sabor-gallery-items';

// Dropzone component for individual images, inspired by SoundsSection
const ImageDropzone: React.FC<{
  onImageUpload: (newImageUrl: string) => void;
  children: ReactNode;
}> = ({ onImageUpload, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onImageUpload(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
      {children}
      <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 rounded-lg ${isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <p className="text-white text-center font-bold text-sm px-2">{isDragging ? 'Drop Image' : 'Change Photo'}</p>
      </div>
    </div>
  );
};


interface GalleryItemDisplayProps {
  item: GalleryItem;
}

const GalleryItemDisplay: React.FC<GalleryItemDisplayProps> = ({ item }) => {
  return (
    <div
      className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 aspect-square"
      aria-label={item.alt}
      role="img"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
      />
    </div>
  );
};

interface GallerySectionProps {
  data: GallerySectionData;
}

const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  const [items, setItems] = useState<GalleryItem[]>(data.items);

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

  const handleImageChange = (indexToUpdate: number, newImageUrl: string) => {
    setItems(currentItems =>
      currentItems.map((item, index) => {
        if (index === indexToUpdate) {
          return { ...item, src: newImageUrl };
        }
        return item;
      })
    );
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setItems(data.items);
  };

  return (
    <section
      className="py-20 px-6 bg-gray-900 text-center relative"
      aria-label="Experience the Vibe gallery"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-orange-400 mb-6">{data.title}</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((item, index) => (
              <ImageDropzone
                key={`${item.src.substring(0, 30)}-${index}`}
                onImageUpload={(newUrl) => handleImageChange(index, newUrl)}
              >
                <GalleryItemDisplay item={item} />
              </ImageDropzone>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/50">
            <p className="text-gray-400 text-xl">Gallery is empty. Default images could not be loaded.</p>
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
