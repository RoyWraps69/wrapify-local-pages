
import React, { useState, useEffect, useCallback } from 'react';

interface DynamicHeroImageCarouselProps {
  scrollPos: number;
  onImagesLoaded: (loaded: boolean, error: boolean) => void;
}

// Main page hero backgrounds - using premium looking wraps
const heroBackgrounds = [
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // Pink Dodge
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // Silver Mercedes
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // Blue Camaro
];

const DynamicHeroImageCarousel: React.FC<DynamicHeroImageCarouselProps> = ({ 
  scrollPos,
  onImagesLoaded
}) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  
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
    const loadImages = async () => {
      try {
        // Force a small delay to ensure the loading spinner appears
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let imageLoaded = false;
        
        // Try to load at least one image
        for (let i = 0; i < heroBackgrounds.length; i++) {
          const success = await preloadImage(heroBackgrounds[i]);
          if (success) {
            setCurrentBgIndex(i);
            imageLoaded = true;
            break;
          }
        }
        
        // If no images loaded, use the first one anyway and show error
        if (!imageLoaded) {
          setLoadingError(true);
          setCurrentBgIndex(0);
        }
        
        // Always set images as loaded to remove spinner
        setImagesLoaded(true);
        onImagesLoaded(true, !imageLoaded);
        
      } catch (error) {
        console.error("Error loading images:", error);
        setLoadingError(true);
        setImagesLoaded(true); // Still mark as loaded to show fallback
        onImagesLoaded(true, true);
      }
    };
    
    loadImages();
    
    // Cycle through background images only after we know at least one works
    const interval = setInterval(() => {
      if (imagesLoaded) {
        setCurrentBgIndex((prevIndex) => {
          // Try next image
          const nextIndex = (prevIndex + 1) % heroBackgrounds.length;
          
          // Preload the next image to check if it works
          preloadImage(heroBackgrounds[nextIndex])
            .then(success => {
              if (!success) {
                // If image fails, try the next one on the next cycle
                console.log("Image failed to load, will try another one on next cycle");
              }
            });
          
          return nextIndex;
        });
      }
    }, 5000); // Change image every 5 seconds
    
    return () => {
      clearInterval(interval);
    };
  }, [imagesLoaded, preloadImage, onImagesLoaded]);

  const heroBackground = heroBackgrounds[currentBgIndex];
  
  return (
    <>
      {/* Loading state while images preload */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-wrap-blue to-black flex items-center justify-center z-30">
          <div className="text-center text-white">
            <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading stunning vehicle images...</p>
          </div>
        </div>
      )}
      
      {/* Show error message if all images failed */}
      {loadingError && (
        <div className="absolute top-4 left-4 right-4 bg-wrap-red text-white px-4 py-2 rounded z-40 text-center">
          Some images couldn't be loaded. Using available images instead.
        </div>
      )}
      
      {/* Main background image */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          imagesLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
        }}
      />
      
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      
      {/* Thumbnail previews of other vehicle wraps */}
      {imagesLoaded && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroBackgrounds.map((bg, index) => (
            <button
              key={index}
              onClick={() => {
                preloadImage(bg).then(success => {
                  if (success) {
                    setCurrentBgIndex(index);
                  }
                });
              }}
              className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                currentBgIndex === index ? 'border-wrap-red scale-110' : 'border-white/30'
              }`}
            >
              <img 
                src={bg} 
                alt={`Vehicle wrap ${index + 1}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If thumbnail fails to load, add a class to dim it
                  e.currentTarget.classList.add('opacity-30');
                }} 
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default DynamicHeroImageCarousel;
