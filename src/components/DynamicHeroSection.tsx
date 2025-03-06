
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getTownByName } from '@/utils/townData';
import HeroBackground from './hero/HeroBackground';
import HeroHeadline from './hero/HeroHeadline';
import HeroServiceFeatures from './hero/HeroServiceFeatures';
import HeroCTAButtons from './hero/HeroCTAButtons';
import HeroFooterInfo from './hero/HeroFooterInfo';

interface DynamicHeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

const heroBackgrounds = [
  'https://images.unsplash.com/photo-1621447578051-310ce127825a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Colorful car wrap
  'https://images.unsplash.com/photo-1569171210192-83541e3777ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Vehicle detail
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80', // Detailed car shot
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80', // Modern car
  'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Fleet vehicles
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Colorful sports car
  'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'  // Car detail close-up
];

// Fleet wrap background to use during transitions
const fleetWrapBackground = 'https://images.unsplash.com/photo-1621447578051-310ce127825a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';

const DynamicHeroSection: React.FC<DynamicHeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage
}) => {
  const [activeBackground, setActiveBackground] = useState(4); // Start with fleet image
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  
  useEffect(() => {
    // Show content with animation on load
    setIsVisible(true);
    
    // Change background every 5 seconds
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
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
  
  return (
    <section 
      className="hero-section relative bg-cover bg-center min-h-[90vh] overflow-hidden"
    >
      <HeroBackground 
        backgrounds={heroBackgrounds}
        activeBackground={activeBackground}
        scrollPos={scrollPos}
        backgroundImage={backgroundImage}
        fleetWrapBackground={fleetWrapBackground}
      />
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0 text-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <HeroHeadline townName={townName} />
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-black/10 p-4 rounded-lg">
              Wrapping The World offers premier car wrapping and protection services in {townName}. From business fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect cars with quality materials and expert installation.
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
