
import React, { useState, useEffect, useCallback } from 'react';

// Updated hero backgrounds with more premium-looking wraps
const heroBackgrounds = [
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // Pink Dodge
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // Silver Mercedes
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // Blue Camaro
  '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png', // White Bentley
  '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png', // Golden Tixx SUV
  '/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png'  // MH Equipment Service Van
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
    // Immediately set images as loaded to show something
    onImagesLoaded(true, false);
    
    // Also try to preload images for smoother experience
    const loadImages = async () => {
      try {
        for (let i = 0; i < heroBackgrounds.length; i++) {
          preloadImage(heroBackgrounds[i]);
        }
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    
    loadImages();
  }, [preloadImage, onImagesLoaded]);

  // Get current background based on index, with fallback if index is out of range
  const heroBackground = heroBackgrounds[currentBgIndex] || heroBackgrounds[0];
  
  // Log the current background being used
  console.log('Current hero background:', heroBackground);

  return (
    <>
      {/* Fixed Background Image - Always Display */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
        }}
      />
      
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
    </>
  );
};

export { heroBackgrounds };
export default HeroBackground;
