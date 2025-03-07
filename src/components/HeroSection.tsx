
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { getTownByName } from '@/utils/townData';

interface HeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

// Updated vehicle backgrounds with new uploaded images
const vehicleBackgrounds = [
  '/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png', // Blue/red van with American flag 
  '/lovable-uploads/bd00fa2f-6aa7-4400-ac3f-100c2b957604.png', // Green/orange leprechaun car
  '/lovable-uploads/3ab4ec3b-922a-452c-997a-58979643de96.png', // ProTap white/gold van
  '/lovable-uploads/534b738a-234d-4256-b471-ec668cdf8035.png', // DinoRoof truck with dinosaur
  '/lovable-uploads/591f84c2-c45c-4b93-a7c8-66da870f3cf8.png', // White Mercedes with blue windows
  '/lovable-uploads/8c159fc0-a3cf-4be9-87e1-f30adcef078e.png', // Hot pink car wrap
  '/lovable-uploads/3906054e-2f97-4984-ba74-f8e08d20db82.png', // T-Mobile pink truck
];

const HeroSection: React.FC<HeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage
}) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Get the town's government website URL
  const townData = getTownByName(townName);
  const townUrl = townData?.governmentUrl || `https://www.google.com/search?q=${townName}+government+website`;
  
  // Use provided backgroundImage or cycle through vehicle backgrounds
  const currentBackground = backgroundImage || vehicleBackgrounds[currentBgIndex];
  
  // Background image carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % vehicleBackgrounds.length);
    }, 5000);
    
    // Log for debugging
    console.log("HeroSection - Using new vehicle wrap images");
    console.log("HeroSection - Current background:", currentBackground);
    
    return () => clearInterval(intervalId);
  }, [currentBackground]);
  
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out'
        }}
      />
      
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-80 z-1"></div>
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0 text-center">
          <div className="backdrop-blur-sm bg-black/30 p-6 rounded-lg">
            {/* Added logo */}
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
                alt="WRAPPING THE WORLD" 
                className="w-52 h-auto object-contain"
              />
            </div>
            
            <span className="inline-block px-4 py-1 bg-wrap-red/20 text-wrap-light rounded-full text-sm font-medium mb-6">
              <span className="font-bold">WRAPPING THE WORLD</span> - Car Wraps & Protection in {townName}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
              Top Car Wraps & Protection in {townName}
            </h1>
            <p className="text-xl text-wrap-light/90 mb-8 max-w-2xl mx-auto">
              <span className="font-bold">WRAPPING THE WORLD</span> offers great car wrapping and protection services in {townName}. From business fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect cars with quality materials and expert installation.
            </p>
            
            <div className="mb-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Car Wrapping</h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-wrap-light text-sm">Business Fleet Graphics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-wrap-light text-sm">Color Change Wraps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-wrap-light text-sm">Custom Graphics & Designs</span>
                  </li>
                </ul>
                <Link to="/services" className="text-white hover:text-wrap-red text-xs inline-flex items-center mt-2">
                  Learn more <ArrowRight className="ml-1" size={12} />
                </Link>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Car Protection</h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-wrap-light text-sm">Ceramic Coatings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-wrap-light text-sm">Paint Protection Film</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-wrap-light text-sm">Winter & Sun Protection</span>
                  </li>
                </ul>
                <Link to="/services" className="text-white hover:text-wrap-red text-xs inline-flex items-center mt-2">
                  Learn more <ArrowRight className="ml-1" size={12} />
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <span>Get a Free <span className="font-bold">WRAPPING THE WORLD</span> Quote</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+13125971286" 
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call For {townName} Service</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center text-wrap-light/70">
              <span className="text-sm"><span className="font-bold">WRAPPING THE WORLD</span> - Serving {townName} and nearby areas</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">Quality <a href="https://www.3m.com/3M/en_US/graphics-signage-us/graphics-films/" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">3M</a> & <a href="https://graphics.averydennison.com" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">Avery Dennison</a> Materials</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">5+ Years Durability</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background image indicators - repositioned higher */}
      <div className="absolute bottom-24 md:bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
        {vehicleBackgrounds.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentBgIndex ? 'bg-wrap-red scale-110' : 'bg-white/70'}`}
            onClick={() => setCurrentBgIndex(index)}
            aria-label={`Switch to background ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
