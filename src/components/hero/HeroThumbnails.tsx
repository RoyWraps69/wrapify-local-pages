import React, { useState } from 'react';
import { heroBackgrounds } from './HeroBackground';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface HeroThumbnailsProps {
  currentBgIndex: number;
  onThumbnailClick: (index: number) => void;
}

const HeroThumbnails: React.FC<HeroThumbnailsProps> = ({ 
  currentBgIndex, 
  onThumbnailClick 
}) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  
  // Create a Set of unique image paths, keeping only one copy of each image
  const uniqueThumbnails = Array.from(new Set([
    ...heroBackgrounds,
    '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png',
    '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png',
    '/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png',
    '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png'
  ]));

  const handleThumbnailClick = (bgUrl: string, index: number) => {
    // Set the selected background in the parent component
    onThumbnailClick(index);
    // Also show the enlarged view
    setEnlargedImage(bgUrl);
  };

  const closeEnlargedView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEnlargedImage(null);
  };

  return (
    <>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 max-w-4xl px-4">
        {uniqueThumbnails.map((bg, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(bg, index)}
            className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
              currentBgIndex === index ? 'border-wrap-red scale-110' : 'border-white/30'
            }`}
            aria-label={`View vehicle wrap ${index + 1}`}
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="contentUrl" content={bg} />
            <meta itemProp="name" content={`Vehicle wrap ${index + 1}`} />
            <img 
              src={bg} 
              alt={`Vehicle wrap ${index + 1}`} 
              className="w-full h-full object-cover"
              itemProp="thumbnail"
              onError={(e) => {
                // If thumbnail fails to load, add a class to dim it
                e.currentTarget.classList.add('opacity-30');
              }} 
            />
          </button>
        ))}
      </div>

      {/* Enlarged image view */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeEnlargedView}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged vehicle wrap image"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <meta itemProp="contentUrl" content={enlargedImage} />
          <meta itemProp="name" content="Enlarged vehicle wrap image" />
          
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute top-2 right-2 z-10 rounded-full bg-black/50 hover:bg-black text-white" 
              onClick={closeEnlargedView}
              aria-label="Close enlarged image"
            >
              <X size={24} />
            </Button>
            <img 
              src={enlargedImage} 
              alt="Enlarged vehicle wrap" 
              className="w-full h-full object-contain rounded-lg"
              itemProp="contentUrl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroThumbnails;
