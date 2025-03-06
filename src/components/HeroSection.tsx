
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage = 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
}) => {
  return (
    <section 
      className="hero-section relative bg-cover bg-center min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(29, 53, 87, 0.9), rgba(29, 53, 87, 0.7)), url(${backgroundImage})`
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center relative z-10 py-20">
        <div className="max-w-3xl mt-16 md:mt-0">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1 bg-wrap-red/20 text-wrap-light rounded-full text-sm font-medium mb-6">
              Professional Vehicle Wraps, Ceramic Coatings & Paint Protection in {townName}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
              Transform Your Vehicles with Premium Wraps & Protection in {townName}
            </h1>
            <p className="text-xl text-wrap-light/90 mb-8 max-w-2xl">
              Chicago Fleet Wraps delivers exceptional vehicle wrapping services, ceramic coating protection, and paint protection film for businesses and individuals in {townName}. 
              From commercial fleet branding to hydrophobic ceramic coatings, we transform vehicles into mobile billboards while providing lasting protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+13125555555" 
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center text-wrap-light/70">
              <span className="text-sm">Serving {townName} and surrounding areas</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">Premium 3M & Avery Dennison Materials</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="text-sm">5+ Years Durability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Design element */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-2/5 h-80 bg-wrap-red/10 backdrop-blur-md rounded-l-3xl z-0"></div>
    </section>
  );
};

export default HeroSection;
