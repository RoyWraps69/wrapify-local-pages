
import React from 'react';
import { Store, Navigation, Phone, Star } from 'lucide-react';

interface TownStatsProps {
  population: number;
  businessCount: number;
  distance: number;
}

const TownStats: React.FC<TownStatsProps> = ({
  population,
  businessCount,
  distance
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100 shadow-sm">
      <div className="flex flex-wrap gap-6 text-wrap-grey mb-4">
        <div className="flex items-center">
          <Store className="text-wrap-blue mr-2" size={18} />
          <span>Population: {population.toLocaleString()}</span>
        </div>
        <div className="flex items-center">
          <Store className="text-wrap-blue mr-2" size={18} />
          <span>Local Businesses: ~{businessCount.toLocaleString()}</span>
        </div>
        <div className="flex items-center">
          <Navigation className="text-wrap-blue mr-2" size={18} />
          <span>{distance} miles from Chicago</span>
        </div>
        <div className="flex items-center">
          <Phone className="text-wrap-blue mr-2" size={18} />
          <span>312-597-1286</span>
        </div>
        <div className="flex items-center">
          <Star className="text-wrap-red mr-2" size={18} />
          <span>Premium Vehicle Wrapping Services</span>
        </div>
      </div>
    </div>
  );
};

export default TownStats;
