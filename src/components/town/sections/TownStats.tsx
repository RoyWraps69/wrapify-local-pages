
import React from 'react';
import { Users, Building2, Car } from 'lucide-react';

interface TownStatsProps {
  population: number;
  businessCount: number;
  distance: number;
}

const TownStats: React.FC<TownStatsProps> = ({ population, businessCount, distance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
        <Users className="text-wrap-blue mr-3" size={24} />
        <div>
          <p className="text-sm text-wrap-grey font-medium">Population</p>
          <p className="text-xl font-bold text-wrap-blue">{population.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
        <Building2 className="text-wrap-blue mr-3" size={24} />
        <div>
          <p className="text-sm text-wrap-grey font-medium">Businesses</p>
          <p className="text-xl font-bold text-wrap-blue">{businessCount.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
        <Car className="text-wrap-blue mr-3" size={24} />
        <div>
          <p className="text-sm text-wrap-grey font-medium">Distance from Chicago</p>
          <p className="text-xl font-bold text-wrap-blue">{distance} miles</p>
        </div>
      </div>
    </div>
  );
};

export default TownStats;
