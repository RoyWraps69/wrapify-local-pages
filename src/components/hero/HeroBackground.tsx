
import React, { useEffect, useState } from 'react';
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
  // Use a single background image instead of trying to validate multiple
  const fallbackImage = '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png'; 
  
  // Simplify to a direct usage of backgroundImage or fallback to a static image
  const currentBackground = backgroundImage || 
    backgrounds[activeBackground] || 
    fallbackImage;
    
  // Log background for debugging
  useEffect(() => {
    console.log("HeroBackground - Using background:", currentBackground);
  }, [currentBackground]);

  return (
    <>
      {/* Single background with no transitions for reliability */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
        }}
      />
      
      {/* Increased opacity overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-75 z-1"></div>
      
      {/* Vehicle silhouette overlay effect for added dimension */}
      <div className="absolute inset-0 bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png')",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          mixBlendMode: "overlay"
        }}
      />
    </>
  );
};

export default HeroBackground;
