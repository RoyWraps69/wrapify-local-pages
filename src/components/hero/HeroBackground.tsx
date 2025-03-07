
import React, { useState, useEffect, useCallback } from 'react';

// Main page hero backgrounds - using premium looking wraps
const heroBackgrounds = [
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // Pink Dodge
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // Silver Mercedes
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // Blue Camaro
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

  const heroBackground = heroBackgrounds[currentBgIndex];

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
