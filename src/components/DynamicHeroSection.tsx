
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

// New hero backgrounds with the uploaded vehicle wrap images
const heroBackgrounds = [
  '/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png', // Blue/red van with American flag 
  '/lovable-uploads/bd00fa2f-6aa7-4400-ac3f-100c2b957604.png', // Green/orange leprechaun car
  '/lovable-uploads/3ab4ec3b-922a-452c-997a-58979643de96.png', // ProTap white/gold van
  '/lovable-uploads/534b738a-234d-4256-b471-ec668cdf8035.png', // DinoRoof truck with dinosaur
  '/lovable-uploads/591f84c2-c45c-4b93-a7c8-66da870f3cf8.png', // White Mercedes with blue windows
  '/lovable-uploads/8c159fc0-a3cf-4be9-87e1-f30adcef078e.png', // Hot pink car wrap
  '/lovable-uploads/3906054e-2f97-4984-ba74-f8e08d20db82.png', // T-Mobile pink truck
];

// Fleet wrap background to use as default fallback
const fleetWrapBackground = '/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png';

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
    
    console.log("DynamicHero - Using new vehicle wrap images");
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
