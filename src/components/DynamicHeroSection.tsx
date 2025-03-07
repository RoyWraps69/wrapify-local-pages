import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import HeroHeadline from './hero/HeroHeadline';
import HeroServiceFeatures from './hero/HeroServiceFeatures';
import HeroCTAButtons from './hero/HeroCTAButtons';
import HeroFooterInfo from './hero/HeroFooterInfo';

interface DynamicHeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

// Main page hero backgrounds - using premium looking wraps
const heroBackgrounds = [
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // Pink Dodge
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // Silver Mercedes
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // Blue Camaro
];

const DynamicHeroSection: React.FC<DynamicHeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
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

  // Show content with animation on load and handle image preloading
  useEffect(() => {
    setIsVisible(true);
    
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Try to preload images and set loaded state
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
        
      } catch (error) {
        console.error("Error loading images:", error);
        setLoadingError(true);
        setImagesLoaded(true); // Still mark as loaded to show fallback
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
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [imagesLoaded, preloadImage]);
  
  // Handle scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Ensure we have a valid background image, use provided or cycle through defaults
  const heroBackground = backgroundImage || heroBackgrounds[currentBgIndex];
  
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-wrap-blue">
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
      
      {/* Lighter overlay for better visibility - changed from opacity-80 to opacity-50 */}
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
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0 text-center">
          <div className={cn(
            "transition-all duration-1000 transform backdrop-blur-sm bg-black/30 p-6 rounded-lg", // Changed from bg-black/40 to bg-black/30
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Big WRAPPING THE WORLD logo - with object-contain to maintain aspect ratio */}
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
                alt="WRAPPING THE WORLD" 
                className="w-64 h-auto max-w-full animate-fade-in-down drop-shadow-lg object-contain"
              />
            </div>
            
            <HeroHeadline townName={townName} />
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              <span className="font-bold">WRAPPING THE WORLD</span> offers premier car wrapping and protection services in {townName}. From business fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect cars with quality materials and expert installation.
            </p>
            
            <HeroServiceFeatures />
            
            <HeroCTAButtons townName={townName} />
            
            <HeroFooterInfo townName={townName} scrollToServices={scrollToServices} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHeroSection;
