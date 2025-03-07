
import React from 'react';
import { Link } from 'react-router-dom';
import { getNearbyTowns, Town } from '@/utils/townData';
import { MapPin, ArrowRight } from 'lucide-react';

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
  // Get nearby towns
  const nearbyTowns = getNearbyTowns(townId, maxDistance);
  
  // If no nearby towns, don't render section
  if (nearbyTowns.length === 0) return null;
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-3">
            Vehicle Wrapping Services Near {townName}
          </h2>
          <p className="text-wrap-grey max-w-2xl mx-auto">
            We provide vehicle wrapping and protection services in these nearby communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {nearbyTowns.slice(0, 8).map(town => (
            <Link 
              key={town.id}
              to={`/locations/${town.id}`}
              className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col"
            >
              <h3 className="text-lg font-medium text-wrap-blue mb-1 flex items-start">
                <MapPin className="text-wrap-red mr-1 flex-shrink-0 mt-1" size={16} />
                <span>{town.name}</span>
              </h3>
              <p className="text-xs text-wrap-grey mb-2">
                {town.distance} miles from {townName}
              </p>
              <span className="text-sm text-wrap-red flex items-center mt-auto">
                View Location <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>
          ))}
        </div>
        
        {nearbyTowns.length > 8 && (
          <div className="text-center mt-8">
            <Link to="/locations" className="text-wrap-blue hover:text-wrap-red font-medium">
              View all service areas
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NearbyTownsSection;
