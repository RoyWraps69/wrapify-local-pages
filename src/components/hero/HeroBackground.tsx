
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
  // Default reliable background image
  const defaultBackground = '/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png'; 
  
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
