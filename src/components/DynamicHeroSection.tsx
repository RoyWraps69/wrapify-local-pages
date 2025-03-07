
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

// Simplified hero backgrounds - using only the most reliable images
const heroBackgrounds = [
  '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png', // Bratcher fleet vans
  '/lovable-uploads/15b9c65f-a662-4712-a305-d20c02f5ca70.png', // Blue Ford truck
  '/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png', // White Chevy truck
  '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png', // Tesla Cybertruck black
];

// Fleet wrap background to use as default
const fleetWrapBackground = '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png';

const DynamicHeroSection: React.FC<DynamicHeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage
}) => {
  const [activeBackground, setActiveBackground] = useState(0);
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
    
    console.log("DynamicHero - Initial background:", heroBackgrounds[0]);
    
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
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-transparent">
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
            "transition-all duration-1000 transform backdrop-blur-sm bg-black/40 p-6 rounded-lg",
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
      
      {/* Background image indicators */}
      <div className="absolute bottom-40 md:bottom-32 left-0 right-0 flex justify-center gap-2 z-20">
        {heroBackgrounds.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === activeBackground ? 'bg-wrap-red scale-110' : 'bg-white/70'}`}
            onClick={() => setActiveBackground(index)}
            aria-label={`Switch to background ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DynamicHeroSection;
