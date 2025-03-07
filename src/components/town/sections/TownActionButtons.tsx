
import React from 'react';
import { Link } from 'react-router-dom';

interface TownActionButtonsProps {
  townName: string;
}

const TownActionButtons: React.FC<TownActionButtonsProps> = ({ townName }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link 
        to="/contact" 
        className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors inline-block"
      >
        Get a Free Quote for Your {townName} Vehicle
      </Link>
      
      <Link 
        to="/services" 
        className="bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors inline-block"
      >
        Explore Our Services
      </Link>
    </div>
  );
};

export default TownActionButtons;
