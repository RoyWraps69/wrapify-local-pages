
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroSectionProps {
  townName?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  townName = 'Chicago',
  backgroundImage = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}) => {
  return (
    <section 
      className="hero-section relative bg-cover bg-center min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(29, 53, 87, 0.85), rgba(29, 53, 87, 0.6)), url(${backgroundImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
        <div className="max-w-2xl mt-16 md:mt-0 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Car Wraps & Protection in {townName}
          </h1>
          <p className="text-xl text-wrap-light/90 mb-8">
            We transform and protect vehicles with quality wraps, graphics, and coatings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+13125971286" 
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
