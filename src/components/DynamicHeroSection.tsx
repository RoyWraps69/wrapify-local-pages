
import React, { useState, useEffect } from 'react';
import HeroLoader from './hero/HeroLoader';
import HeroBackground from './hero/HeroBackground';
import HeroThumbnails from './hero/HeroThumbnails';
import HeroContentContainer from './hero/HeroContentContainer';

interface DynamicHeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

const DynamicHeroSection: React.FC<DynamicHeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Show content with animation on load
  useEffect(() => {
    setIsVisible(true);
    
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Handler for when images are loaded (or failed to load)
  const handleImagesLoaded = (loaded: boolean, error: boolean) => {
    setImagesLoaded(loaded);
    setLoadingError(error);
  };

  // Handler for thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentBgIndex(index);
  };
  
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-wrap-blue">
      {/* Loading spinner */}
      {!imagesLoaded && <HeroLoader />}
      
      {/* Error message */}
      {loadingError && (
        <div className="absolute top-4 left-4 right-4 bg-wrap-red text-white px-4 py-2 rounded z-40 text-center">
          Some images couldn't be loaded. Using available images instead.
        </div>
      )}
      
      {/* Background Image with Parallax Effect */}
      <HeroBackground 
        scrollPos={scrollPos} 
        imagesLoaded={imagesLoaded}
        currentBgIndex={currentBgIndex}
        onImagesLoaded={handleImagesLoaded}
      />
      
      {/* Image selection thumbnails */}
      {imagesLoaded && (
        <HeroThumbnails 
          currentBgIndex={currentBgIndex} 
          onThumbnailClick={handleThumbnailClick} 
        />
      )}
      
      {/* Content Container */}
      <HeroContentContainer 
        isVisible={isVisible} 
        townName={townName} 
        scrollToServices={scrollToServices} 
      />
    </section>
  );
};

export default DynamicHeroSection;
