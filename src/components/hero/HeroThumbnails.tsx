
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
  // Adding all previously uploaded photos
  const allThumbnails = [
    ...heroBackgrounds,
    '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png',
    '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png',
    '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png',
    '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png',
    '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png',
    '/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png',
    '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png'
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 max-w-4xl px-4">
      {allThumbnails.map((bg, index) => (
        <button
          key={index}
          onClick={() => onThumbnailClick(index)}
          className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
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
