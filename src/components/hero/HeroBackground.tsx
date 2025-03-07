
import React, { useState, useEffect, useCallback } from 'react';

// Main page hero backgrounds - using premium looking wraps
const heroBackgrounds = [
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // Pink Dodge
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // Silver Mercedes
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // Blue Camaro
  '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png', // Additional image
  '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png', // Additional image
  '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png', // Additional image
  '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png', // Additional image
  '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png', // Additional image
  '/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png', // Additional image
  '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png'  // Additional image
];

interface HeroBackgroundProps {
  scrollPos: number;
  imagesLoaded: boolean;
  currentBgIndex: number;
  onImagesLoaded: (loaded: boolean, error: boolean) => void;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  scrollPos, 
  imagesLoaded,
  currentBgIndex,
  onImagesLoaded
}) => {
  const [internalImagesLoaded, setInternalImagesLoaded] = useState(false);
  
  // Function to preload a single image and handle success/error
  const preloadImage = useCallback((src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log(`Successfully loaded image: ${src}`);
        resolve(true);
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        resolve(false);
      };
    });
  }, []);

  // Handle image preloading
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Force a small delay to ensure the loading spinner appears
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let imageLoaded = false;
        
        // Try to load at least one image
        for (let i = 0; i < heroBackgrounds.length; i++) {
          const success = await preloadImage(heroBackgrounds[i]);
          if (success) {
            imageLoaded = true;
            break;
          }
        }
        
        // Always set images as loaded to remove spinner
        setInternalImagesLoaded(true);
        onImagesLoaded(true, !imageLoaded);
        
      } catch (error) {
        console.error("Error loading images:", error);
        setInternalImagesLoaded(true); // Still mark as loaded to show fallback
        onImagesLoaded(true, true);
      }
    };
    
    loadImages();
  }, [preloadImage, onImagesLoaded]);

  // Get current background based on index, with fallback if index is out of range
  const heroBackground = heroBackgrounds[currentBgIndex] || heroBackgrounds[0];

  return (
    <>
      {/* Main background image */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          imagesLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
        }}
      />
      
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
    </>
  );
};

export { heroBackgrounds };
export default HeroBackground;
