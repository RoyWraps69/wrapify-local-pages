
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

// Updated hero backgrounds with impressive vehicle photos
const heroBackgrounds = [
  '/lovable-uploads/15b9c65f-a662-4712-a305-d20c02f5ca70.png', // Blue Ford truck
  '/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png', // Tesla Cybertruck green camo
  '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png', // Tesla Cybertruck black camo
  '/lovable-uploads/712c766b-dd74-41af-942c-ef67e92c62c8.png', // Rivian truck
  '/lovable-uploads/9523f1f5-8b31-4d2f-b869-620325b6ea59.png', // Fleet of Rivian trucks
  '/lovable-uploads/6f06c0f2-2138-4d06-87b1-52a216974632.png', // Blue Lexus sports car
  '/lovable-uploads/82b9909a-f0d1-4fd3-aa13-a2e8c40659af.png', // Fighting Illini bus
  '/lovable-uploads/39af2f7f-a89b-42b4-833b-75a980a647ba.png'  // Red vintage car
];

// Fleet wrap background to use during transitions - Bratcher fleet vans
const fleetWrapBackground = '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png';

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
            {/* Big WRAPPING THE WORLD logo - Updated to be 1.5x larger */}
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
                alt="WRAPPING THE WORLD" 
                className="w-96 h-auto max-w-full animate-fade-in-down drop-shadow-lg"
              />
            </div>
            
            <HeroHeadline townName={townName} />
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-black/10 p-4 rounded-lg">
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
