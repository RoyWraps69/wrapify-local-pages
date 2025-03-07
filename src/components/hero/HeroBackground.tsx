
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
  // Make sure we're using a valid background, with fallbacks
  const validBackgrounds = backgrounds.filter(bg => bg && bg.length > 0);
  const currentBackground = backgroundImage || 
    (validBackgrounds[activeBackground] || 
    validBackgrounds[0] || 
    fleetWrapBackground || 
    '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png'); // Ultimate fallback
  
  // Log backgrounds to help debug
  useEffect(() => {
    console.log("HeroBackground - All backgrounds:", backgrounds);
    console.log("HeroBackground - Active background index:", activeBackground);
    console.log("HeroBackground - Valid backgrounds count:", validBackgrounds.length);
    console.log("HeroBackground - Current background:", currentBackground);
  }, [backgrounds, activeBackground, validBackgrounds, currentBackground]);

  return (
    <>
      {/* Dynamic background with transition effect - map only valid backgrounds */}
      {validBackgrounds.map((bg, index) => {
        // Ensure we have a valid image URL
        const bgUrl = bg || fleetWrapBackground;
        
        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center",
              activeBackground === index ? "opacity-100" : "opacity-0"
            )}
            style={{
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
            }}
          />
        );
      })}
      
      {/* Backup single background if the array is empty */}
      {validBackgrounds.length === 0 && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
          }}
        />
      )}
      
      {/* Increased opacity for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      
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
