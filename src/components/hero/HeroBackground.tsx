
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
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  
  // Make sure we're using a valid background, with fallbacks
  // Ensure all image paths start with / if they don't already
  const validBackgrounds = backgrounds
    .filter(bg => bg && bg.length > 0)
    .map(bg => bg.startsWith('/') ? bg : `/${bg}`);
  
  // If we have no valid backgrounds, use a single fallback
  const hasValidBackgrounds = validBackgrounds.length > 0;
  
  // Ultimate fallback (Bratcher fleet vans image)
  const ultimateFallback = '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png'; 
  
  // Current background image with fallback chain
  const currentBackground = backgroundImage || 
    (validBackgrounds[activeBackground] || 
    validBackgrounds[0] || 
    fleetWrapBackground || 
    ultimateFallback);
  
  // Enhanced logging and image preloading for troubleshooting
  useEffect(() => {
    console.log("HeroBackground - Component mounted");
    console.log("HeroBackground - All backgrounds:", backgrounds);
    console.log("HeroBackground - Valid backgrounds:", validBackgrounds);
    console.log("HeroBackground - Active background index:", activeBackground);
    console.log("HeroBackground - Current background image:", currentBackground);
    
    // Reset images loaded state when backgrounds change
    setImagesLoaded(Array(validBackgrounds.length).fill(false));
    
    // Validate that images actually exist by preloading them
    const imageStatuses = Array(validBackgrounds.length).fill(false);
    
    validBackgrounds.forEach((bg, index) => {
      const img = new Image();
      img.src = bg;
      img.onload = () => {
        console.log(`Background ${index + 1} loaded successfully:`, bg);
        imageStatuses[index] = true;
        setImagesLoaded([...imageStatuses]);
      };
      img.onerror = () => {
        console.error(`ERROR: Background ${index + 1} failed to load:`, bg);
        imageStatuses[index] = false;
        setImagesLoaded([...imageStatuses]);
      };
    });
    
    // Also test the fallback image
    const fallbackImg = new Image();
    fallbackImg.src = ultimateFallback;
    fallbackImg.onload = () => console.log("Fallback image loaded successfully");
    fallbackImg.onerror = () => console.error("ERROR: Even the fallback image failed to load!");
    
  }, [backgrounds, activeBackground, validBackgrounds]);

  return (
    <>
      {/* Dynamic background with transition effect */}
      {hasValidBackgrounds ? (
        // Map only valid backgrounds
        validBackgrounds.map((bg, index) => {
          return (
            <div
              key={index}
              className={cn(
                "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center",
                activeBackground === index ? "opacity-100" : "opacity-0"
              )}
              style={{
                backgroundImage: `url(${bg})`,
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
      <div className="absolute inset-0 bg-black opacity-70 z-1"></div>
      
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
