
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GalleryCTAProps {
  itemLimit?: number;
  totalItems: number;
}

const GalleryCTA: React.FC<GalleryCTAProps> = ({ itemLimit, totalItems }) => {
  if (!itemLimit || itemLimit >= totalItems) {
    return null;
  }

  return (
    <div className="text-center mt-12">
      <Link 
        to="/gallery" 
        className="inline-flex items-center justify-center px-6 py-3 bg-wrap-blue text-white rounded-lg hover:bg-wrap-blue/90 transition-all shadow-md"
      >
        <span>View All Projects</span>
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
};

export default GalleryCTA;
