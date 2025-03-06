
import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroServiceFeatures: React.FC = () => {
  return (
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
  );
};

export default HeroServiceFeatures;
