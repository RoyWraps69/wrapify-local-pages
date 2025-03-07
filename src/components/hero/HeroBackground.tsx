
import React from 'react';
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
  return (
    <>
      {/* Base background during transitions */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ 
          backgroundImage: `url(${fleetWrapBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dynamic background with transition effect */}
      {backgrounds.map((bg, index) => {
        const bgUrl = backgroundImage || bg;
        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out overflow-hidden",
              activeBackground === index ? "opacity-100" : "opacity-0"
            )}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${bgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
            }}
          >
            {/* Very light overlay for text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        );
      })}
      
      {/* Vehicle silhouette overlay effect for added dimension */}
      <div className="absolute inset-0 bg-center bg-no-repeat opacity-15 overflow-hidden"
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
