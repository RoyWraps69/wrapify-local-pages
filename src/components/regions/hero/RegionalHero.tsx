
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface RegionalHeroProps {
  regionName: string;
  regionImage?: string;
}

// Static background image
const staticBackground = '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png';

const RegionalHero: React.FC<RegionalHeroProps> = ({ regionName, regionImage }) => {
  // Use the provided regionImage or fall back to our static image
  const bgImage = regionImage || staticBackground;
  
  return (
    <section className="text-white py-20 min-h-[90vh] flex items-center relative overflow-hidden bg-transparent">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-80 z-1"></div>
      
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
    </section>
  );
};

export default RegionalHero;
