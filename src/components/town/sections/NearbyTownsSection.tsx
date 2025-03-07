
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { getNearbyTowns } from '@/utils/townFunctions';

interface NearbyTownsSectionProps {
  townId: string;
  townName: string;
  maxDistance?: number;
}

const NearbyTownsSection: React.FC<NearbyTownsSectionProps> = ({ 
  townId,
  townName,
  maxDistance = 50
}) => {
  // Get nearby towns data
  const nearbyTowns = getNearbyTowns(townId, maxDistance);
  
  if (!nearbyTowns || nearbyTowns.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <MapPin className="text-wrap-red mr-2" size={24} />
            <h2 className="text-2xl font-serif font-semibold text-wrap-blue">
              Vehicle Wrapping Services Near {townName}
            </h2>
          </div>
          
          <p className="text-wrap-grey mb-10 max-w-3xl">
            Looking for vehicle wrapping services in other nearby areas? We provide premium vehicle wraps, 
            ceramic coatings, and paint protection film to these locations near {townName} as well.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {nearbyTowns.map(town => (
              <Link 
                key={town.id}
                to={`/locations/${town.id}`}
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all flex flex-col border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-wrap-blue mb-2">{town.name}, {town.state}</h3>
                <p className="text-sm text-wrap-grey mb-3 flex-grow">
                  {town.distance} miles from Chicago
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-wrap-grey">Pop: {town.population.toLocaleString()}</span>
                  <span className="text-wrap-red text-sm flex items-center">
                    Visit <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyTownsSection;
