
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
  
  // Enhanced logging for troubleshooting
  useEffect(() => {
    console.log("HeroBackground - All backgrounds:", backgrounds);
    console.log("HeroBackground - Valid backgrounds:", validBackgrounds);
    console.log("HeroBackground - Active background index:", activeBackground);
    console.log("HeroBackground - Current background image:", currentBackground);
    
    // Validate that images actually exist by preloading them
    validBackgrounds.forEach((bg, index) => {
      const img = new Image();
      img.src = bg;
      img.onload = () => console.log(`Background ${index + 1} loaded successfully:`, bg);
      img.onerror = () => console.error(`ERROR: Background ${index + 1} failed to load:`, bg);
    });
  }, [backgrounds, activeBackground, validBackgrounds, currentBackground]);

  return (
    <>
      {/* Dynamic background with transition effect - map only valid backgrounds */}
      {validBackgrounds.length > 0 ? (
        validBackgrounds.map((bg, index) => {
          // Ensure we have a valid image URL
          const bgUrl = bg || fleetWrapBackground;
          
          // Log each background URL
          console.log(`Background ${index + 1} URL:`, bgUrl);
          
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
        })
      ) : (
        // Fallback if no valid backgrounds
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
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>
      
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
