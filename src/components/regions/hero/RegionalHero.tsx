
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface RegionalHeroProps {
  regionName: string;
  regionImage: string;
}

const RegionalHero: React.FC<RegionalHeroProps> = ({ regionName, regionImage }) => {
  return (
    <section 
      className="bg-wrap-blue text-white py-16 bg-center bg-cover bg-blend-overlay bg-black/30" 
      style={{ backgroundImage: `url(${regionImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="font-bold">WRAPPING THE WORLD</span>
              <br />
              in {regionName}
            </h1>
            <p className="text-xl max-w-2xl mb-8">
              Premium commercial fleet wraps, ceramic coatings, and paint protection services throughout {regionName}. Your local source for exceptional vehicle transformation.
            </p>
          </div>
          <img 
            src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
            alt="WRAPPING THE WORLD" 
            className="w-48 h-auto mt-6 md:mt-0 drop-shadow-lg"
          />
        </div>
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
    </section>
  );
};

export default RegionalHero;
