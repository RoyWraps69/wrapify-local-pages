
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
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
      className="hero-section relative bg-cover bg-center min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(29, 53, 87, 0.85), rgba(29, 53, 87, 0.6)), url(${backgroundImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1 bg-wrap-red/20 text-wrap-light rounded-full text-sm font-medium mb-6">
              Professional Vehicle Wraps, Ceramic Coatings & Paint Protection in <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">{townName}</a>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
              Premium Vehicle Wraps & Protection Services in <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-wrap-red/90 underline">{townName}</a>
            </h1>
            <p className="text-xl text-wrap-light/90 mb-8 max-w-2xl">
              Chicago Fleet Wraps delivers exceptional vehicle wrapping and protection services in <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">{townName}</a>. From commercial fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect vehicles with premium materials and expert installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="mt-8 flex flex-wrap items-center text-wrap-light/70">
              <span className="text-sm">Serving <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">{townName}</a> and surrounding areas</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">Premium <a href="https://www.3m.com/3M/en_US/graphics-signage-us/graphics-films/" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">3M</a> & <a href="https://avery-dennison.com/graphics" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">Avery Dennison</a> Materials</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">5+ Years Durability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Remove the design elements that create the fuzzy placeholder effect */}
    </section>
  );
};

export default HeroSection;
