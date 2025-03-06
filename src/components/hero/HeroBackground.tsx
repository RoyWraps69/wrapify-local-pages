
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
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${fleetWrapBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dynamic background with transition effect */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out",
            activeBackground === index ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${backgroundImage || bg})`,
            backgroundAttachment: 'fixed',
            transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
          }}
        >
          {/* Animated overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
      ))}
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-4 h-4 bg-wrap-red/30 rounded-full top-1/4 left-1/4 animate-ping"></div>
        <div className="absolute w-3 h-3 bg-white/20 rounded-full top-1/3 right-1/4 animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-2 h-2 bg-wrap-red/20 rounded-full bottom-1/3 left-1/3 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-5 h-5 bg-white/30 rounded-full bottom-1/4 right-1/3 animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>
    </>
  );
};

export default HeroBackground;
