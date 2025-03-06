
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Check, ChevronDown } from 'lucide-react';
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
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80' // Modern car
];

const DynamicHeroSection: React.FC<DynamicHeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage
}) => {
  const [activeBackground, setActiveBackground] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show content with animation on load
    setIsVisible(true);
    
    // Change background every 5 seconds
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    
    return () => clearInterval(interval);
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
            backgroundAttachment: 'fixed'
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0 text-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="inline-block px-4 py-1 bg-wrap-red/20 text-wrap-light rounded-full text-sm font-medium mb-6 animate-pulse">
              Premium Car Wraps & Protection in {townName}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
              Top Car Wraps & Protection in {townName}
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Wrapping The World offers premier car wrapping and protection services in {townName}. From business fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect cars with quality materials and expert installation.
            </p>
            
            <div className="mb-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 hover:bg-black/40 hover:shadow-lg">
                <h3 className="text-white font-medium mb-2">Car Wrapping</h3>
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
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 hover:bg-black/40 hover:shadow-lg">
                <h3 className="text-white font-medium mb-2">Car Protection</h3>
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
                className="btn-primary flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Get a Free Quote for {townName}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              <a 
                href="tel:+13125971286" 
                className="btn-secondary flex items-center justify-center gap-2 hover:scale-105 transition-transform"
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
            
            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToServices}>
              <ChevronDown className="text-white/80 hover:text-white transition-colors" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHeroSection;
