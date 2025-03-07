
import React, { useState, useEffect } from 'react';
import DynamicHeroImageCarousel from './hero/DynamicHeroImageCarousel';
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
  
  // Show content with animation on load and handle image preloading
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
  
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-wrap-blue">
      <DynamicHeroImageCarousel 
        scrollPos={scrollPos} 
        onImagesLoaded={handleImagesLoaded} 
      />
      
      <HeroContentContainer 
        isVisible={isVisible} 
        townName={townName} 
        scrollToServices={scrollToServices} 
      />
    </section>
  );
};

export default DynamicHeroSection;
