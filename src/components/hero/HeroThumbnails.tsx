
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
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
      {heroBackgrounds.map((bg, index) => (
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
