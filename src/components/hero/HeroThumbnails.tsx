import React from 'react';
import { heroBackgrounds } from './HeroBackground';

interface HeroThumbnailsProps {
  currentBgIndex: number;
  onThumbnailClick: (index: number) => void;
}

const HeroThumbnails: React.FC<HeroThumbnailsProps> = ({ 
  currentBgIndex, 
  onThumbnailClick 
}) => {
  // Create a Set of unique image paths, keeping only one copy of each image
  const uniqueThumbnails = Array.from(new Set([
    ...heroBackgrounds,
    '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png',
    '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png',
    '/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png',
    '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png'
  ]));

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 max-w-4xl px-4">
      {uniqueThumbnails.map((bg, index) => (
        <button
          key={index}
          onClick={() => onThumbnailClick(index)}
          className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
            currentBgIndex === index ? 'border-wrap-red scale-110' : 'border-white/30'
          }`}
        >
          <img 
            src={bg} 
            alt={`Vehicle wrap ${index + 1}`} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // If thumbnail fails to load, add a class to dim it
              e.currentTarget.classList.add('opacity-30');
            }} 
          />
        </button>
      ))}
    </div>
  );
};

export default HeroThumbnails;
