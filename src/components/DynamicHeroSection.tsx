
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getTownByName } from '@/utils/townData';
import HeroHeadline from './hero/HeroHeadline';
import HeroServiceFeatures from './hero/HeroServiceFeatures';
import HeroCTAButtons from './hero/HeroCTAButtons';
import HeroFooterInfo from './hero/HeroFooterInfo';

interface DynamicHeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

// Array of high-quality background images to cycle through
const heroBackgrounds = [
  '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png', // Pink car
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png', // Green car
  '/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png', // Vans
  '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png'  // White car
];

const DynamicHeroSection: React.FC<DynamicHeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Show content with animation on load
  useEffect(() => {
    setIsVisible(true);
    
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cycle through background images
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === heroBackgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);
  
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
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Main background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
        }}
      />
      
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-80 z-1"></div>
      
      {/* Thumbnail previews of other vehicle wraps */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex space-x-2">
        {heroBackgrounds.map((bg, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
              currentBgIndex === index ? 'border-wrap-red scale-110' : 'border-white/30'
            }`}
          >
            <img src={bg} alt={`Vehicle wrap ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      
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
    </section>
  );
};

export default DynamicHeroSection;
