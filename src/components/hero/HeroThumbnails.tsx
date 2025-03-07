
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
  
  // Create a Set of unique image paths
  const uniqueThumbnails = Array.from(new Set(heroBackgrounds));

  const handleThumbnailClick = (bgUrl: string, index: number) => {
    onThumbnailClick(index);
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
            className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-all ${
              currentBgIndex === index ? 'border-wrap-red scale-110' : 'border-white/30'
            }`}
            aria-label={`View vehicle wrap ${index + 1}`}
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="contentUrl" content={bg} />
            <meta itemProp="name" content={`Vehicle wrap ${index + 1}`} />
            <div className="w-full h-full relative">
              <img 
                src={bg} 
                alt={`Vehicle wrap ${index + 1}`} 
                className="w-full h-full object-cover"
                itemProp="thumbnail"
                onError={(e) => {
                  e.currentTarget.classList.add('opacity-30');
                }} 
              />
            </div>
          </button>
        ))}
      </div>

      {/* Enlarged image view with proper sizing */}
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
          
          <div className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center">
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
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              itemProp="contentUrl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroThumbnails;
