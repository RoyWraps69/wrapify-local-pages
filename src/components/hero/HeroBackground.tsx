
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
  backgrounds: string[];
  activeBackground: number;
  scrollPos: number;
  backgroundImage?: string;
  fleetWrapBackground: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  backgrounds,
  activeBackground,
  scrollPos,
  backgroundImage,
  fleetWrapBackground
}) => {
  // Default fallback image if everything else fails
  const fallbackImage = '/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png'; 
  
  // Directly use backgroundImage if provided, otherwise use the active background from the carousel
  const currentBackground = backgroundImage || 
    backgrounds[activeBackground] || 
    fleetWrapBackground ||
    fallbackImage;
    
  // Log background for debugging
  useEffect(() => {
    console.log("HeroBackground - Using background:", currentBackground);
  }, [currentBackground]);

  // Preload images to prevent blank backgrounds
  useEffect(() => {
    backgrounds.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [backgrounds]);

  return (
    <>
      {/* Single background with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
        }}
      />
      
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-80 z-1"></div>
      
      {/* Vehicle silhouette overlay effect for added dimension */}
      <div className="absolute inset-0 bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png')",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          mixBlendMode: "overlay"
        }}
      />
    </>
  );
};

export default HeroBackground;
