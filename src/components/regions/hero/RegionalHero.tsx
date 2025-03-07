
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface RegionalHeroProps {
  regionName: string;
  regionImage: string;
}

// Vehicle background images for carousel
const vehicleBackgrounds = [
  '/lovable-uploads/15b9c65f-a662-4712-a305-d20c02f5ca70.png', // Blue Ford truck
  '/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png', // Tesla Cybertruck green camo
  '/lovable-uploads/9523f1f5-8b31-4d2f-b869-620325b6ea59.png', // Fleet of Rivian trucks
  '/lovable-uploads/6f06c0f2-2138-4d06-87b1-52a216974632.png'  // Blue Lexus sports car
];

const RegionalHero: React.FC<RegionalHeroProps> = ({ regionName, regionImage }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Use regionImage or fallback to carousel images
  const heroImageUrl = regionImage || vehicleBackgrounds[currentBgIndex];
  
  // Implement background carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % vehicleBackgrounds.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="text-white py-20 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <div className="md:max-w-2xl backdrop-blur-sm bg-black/40 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="font-bold">WRAPPING THE WORLD</span>
              <br />
              in {regionName}
            </h1>
            <p className="text-xl max-w-2xl mb-8">
              Premium commercial fleet wraps, ceramic coatings, and paint protection services throughout {regionName}. Your local source for exceptional vehicle transformation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors">
                Request a Free Quote
              </Link>
              <a href="tel:+13125971286" className="bg-white hover:bg-gray-100 text-wrap-blue px-6 py-3 rounded-md transition-colors flex items-center gap-2">
                <Phone size={18} />
                <span>312-597-1286</span>
              </a>
            </div>
          </div>
          <img 
            src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
            alt="WRAPPING THE WORLD" 
            className="w-48 h-auto mt-6 md:mt-0 drop-shadow-lg object-contain"
          />
        </div>
      </div>
      
      {/* Background image indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {vehicleBackgrounds.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentBgIndex ? 'bg-wrap-red' : 'bg-white/50'}`}
            onClick={() => setCurrentBgIndex(index)}
            aria-label={`Switch to background ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RegionalHero;
