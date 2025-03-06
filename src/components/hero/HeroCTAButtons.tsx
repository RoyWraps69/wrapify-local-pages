
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Truck } from 'lucide-react';

interface HeroCTAButtonsProps {
  townName: string;
}

const HeroCTAButtons: React.FC<HeroCTAButtonsProps> = ({ townName }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link 
        to="/contact" 
        className="relative overflow-hidden group px-6 py-3 rounded-md bg-gradient-to-r from-wrap-red to-wrap-red/80 text-white font-medium shadow-xl hover:shadow-wrap-red/30 transition-all duration-300 hover:scale-105"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Get a Free {townName} Quote
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </Link>
      <a 
        href="tel:+13125971286" 
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <Phone className="w-5 h-5" />
        <span>Call For {townName} Service</span>
      </a>
      <Link 
        to="/print-ship" 
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <Truck className="w-5 h-5" />
        <span>Nationwide Print & Ship</span>
      </Link>
      
      {/* Mobile service availability indicator */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">✓ Mobile Service Available in {townName}</span>
      </div>
    </div>
  );
};

export default HeroCTAButtons;
