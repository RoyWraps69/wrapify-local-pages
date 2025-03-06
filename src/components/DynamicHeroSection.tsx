import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Check, ChevronDown, Sparkles, Star } from 'lucide-react';
import { getTownByName } from '@/utils/townData';
import { cn } from '@/lib/utils';

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
  
  // Get the town's government website URL
  const townData = getTownByName(townName);
  const townUrl = townData?.governmentUrl || `https://www.google.com/search?q=${townName}+government+website`;
  
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
      style={{ 
        backgroundImage: `url(${fleetWrapBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dynamic background with transition effect */}
      {heroBackgrounds.map((bg, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out",
            activeBackground === index ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${backgroundImage || bg})`,
            backgroundAttachment: 'fixed',
            transform: `translateY(${scrollPos * 0.2}px)` // Parallax effect
          }}
        >
          {/* Animated overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
      ))}
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-4 h-4 bg-wrap-red/30 rounded-full top-1/4 left-1/4 animate-ping"></div>
        <div className="absolute w-3 h-3 bg-white/20 rounded-full top-1/3 right-1/4 animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-2 h-2 bg-wrap-red/20 rounded-full bottom-1/3 left-1/3 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-5 h-5 bg-white/30 rounded-full bottom-1/4 right-1/3 animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0 text-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Animated badge with sparkle effect */}
            <div className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-wrap-red/80 to-wrap-red rounded-full text-sm font-medium mb-6 shadow-lg animate-pulse">
              <Sparkles className="text-white w-4 h-4" />
              <span className="text-white">Premium Car Wraps & Protection in {townName}</span>
              <Sparkles className="text-white w-4 h-4" />
            </div>
            
            {/* Enhanced headline with text gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-white via-white to-wrap-red/90 bg-clip-text text-transparent">
                Top Car Wraps & Protection
              </span>
              <br />
              <span className="text-white">in {townName}</span>
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-black/10 p-4 rounded-lg">
              Wrapping The World offers premier car wrapping and protection services in {townName}. From business fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect cars with quality materials and expert installation.
            </p>
            
            <div className="mb-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg transition-all duration-300 hover:bg-black/60 hover:shadow-lg border border-white/10 group hover:-translate-y-1">
                <h3 className="text-white font-medium mb-2 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-wrap-red to-wrap-red/70 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={14} />
                  </div>
                  Car Wrapping
                </h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-white text-sm">Business Fleet Graphics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-white text-sm">Color Change Wraps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-white text-sm">Custom Graphics & Designs</span>
                  </li>
                </ul>
                <Link to="/services" className="text-white hover:text-wrap-red text-xs inline-flex items-center mt-2 group">
                  Learn more <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={12} />
                </Link>
              </div>
              <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg transition-all duration-300 hover:bg-black/60 hover:shadow-lg border border-white/10 group hover:-translate-y-1">
                <h3 className="text-white font-medium mb-2 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-wrap-red to-wrap-red/70 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                    <Star className="text-white" size={14} />
                  </div>
                  Car Protection
                </h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-white text-sm">Ceramic Coatings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-white text-sm">Paint Protection Film</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-white text-sm">Winter & Sun Protection</span>
                  </li>
                </ul>
                <Link to="/services" className="text-white hover:text-wrap-red text-xs inline-flex items-center mt-2 group">
                  Learn more <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={12} />
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="relative overflow-hidden group px-6 py-3 rounded-md bg-gradient-to-r from-wrap-red to-wrap-red/80 text-white font-medium shadow-xl hover:shadow-wrap-red/30 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get a Free Quote for {townName}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <a 
                href="tel:+13125971286" 
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call For {townName} Service</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center text-white/70">
              <span className="text-sm">Serving {townName} and nearby areas</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">Quality <a href="https://www.3m.com/3M/en_US/graphics-signage-us/graphics-films/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white underline">3M</a> & <a href="https://graphics.averydennison.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white underline">Avery Dennison</a> Materials</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">5+ Years Durability</span>
            </div>
            
            {/* Enhanced scroll indicator */}
            <div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform" 
              onClick={scrollToServices}
            >
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-bounce shadow-lg">
                <ChevronDown className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHeroSection;
