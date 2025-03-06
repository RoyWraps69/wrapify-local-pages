
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { getTownByName } from '@/utils/townData';

interface HeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}) => {
  // Get the town's government website URL
  const townData = getTownByName(townName);
  const townUrl = townData?.governmentUrl || `https://www.google.com/search?q=${townName}+government+website`;
  
  return (
    <section 
      className="hero-section relative bg-cover bg-center min-h-[700px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(29, 53, 87, 0.85), rgba(29, 53, 87, 0.6)), url(${backgroundImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0 text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1 bg-wrap-red/20 text-wrap-light rounded-full text-sm font-medium mb-6">
              Professional Vehicle Wraps, Ceramic Coatings & Paint Protection in {townName}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
              Premium Vehicle Wraps & Protection Services in {townName}
            </h1>
            <p className="text-xl text-wrap-light/90 mb-8 max-w-2xl mx-auto">
              Chicago Fleet Wraps delivers exceptional vehicle wrapping and protection services in {townName}. From commercial fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect vehicles with premium materials and expert installation.
            </p>
            
            <div className="mb-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Vehicle Wrapping</h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-wrap-light text-sm">Commercial Fleet Graphics</span>
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
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Vehicle Protection</h3>
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
                    <span className="text-wrap-light text-sm">Winter & UV Protection</span>
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
                <span>Get a Free Quote for {townName}</span>
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
              <span className="text-sm">Serving {townName} and surrounding areas</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">Premium <a href="https://www.3m.com/3M/en_US/graphics-signage-us/graphics-films/" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">3M</a> & <a href="https://graphics.averydennison.com" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">Avery Dennison</a> Materials</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">5+ Years Durability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
