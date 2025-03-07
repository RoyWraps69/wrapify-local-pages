
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
  backgroundImage?: string;
  scrollPos: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  backgroundImage,
  scrollPos
}) => {
  // Default reliable background image - pink car image
  const defaultBackground = '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png'; 
  
  // Use the provided backgroundImage or fall back to default
  const currentBackground = backgroundImage || defaultBackground;
  
  return (
    <>
      {/* Single static background with parallax effect */}
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
          backgroundImage: "url('/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png')",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          mixBlendMode: "overlay"
        }}
      />
    </>
  );
};

export default HeroBackground;
