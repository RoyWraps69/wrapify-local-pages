
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Navigation, Building } from 'lucide-react';
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
    <section className="py-16 bg-gray-50" id="nearby-towns">
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
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all flex flex-col border border-gray-100 hover:border-wrap-red"
                aria-label={`Vehicle wrapping services in ${town.name}, ${town.state}`}
                itemScope
                itemType="https://schema.org/Place"
              >
                <meta itemProp="name" content={`${town.name}, ${town.state}`} />
                <meta itemProp="address" content={`${town.name}, ${town.state}`} />
                
                <h3 className="text-lg font-semibold text-wrap-blue mb-2 flex items-center">
                  <span itemProp="name">{town.name}, {town.state}</span>
                  <ArrowRight size={14} className="ml-2 text-wrap-red opacity-70" />
                </h3>
                
                <div className="flex flex-col space-y-2 text-sm text-wrap-grey mb-4">
                  <div className="flex items-center">
                    <Building className="mr-1 h-3 w-3" />
                    <span>Population: {town.population.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="mr-1 h-3 w-3" />
                    <span>{town.distance} miles from Chicago</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-gray-100">
                  <span className="text-xs text-wrap-blue flex items-center">
                    View wrapping services
                    <ArrowRight size={12} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/locations" 
              className="inline-flex items-center justify-center px-6 py-3 bg-wrap-blue text-white rounded-md hover:bg-wrap-blue/90 transition-colors"
            >
              <span>View All Service Locations</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyTownsSection;
