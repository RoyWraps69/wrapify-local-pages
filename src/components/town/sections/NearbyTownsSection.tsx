
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNearbyTowns } from '@/utils/townData';
import { MapPin, Navigation } from 'lucide-react';

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
  const [nearbyTowns, setNearbyTowns] = useState<any[]>([]);
  
  useEffect(() => {
    const towns = getNearbyTowns(townId, maxDistance);
    setNearbyTowns(towns);
  }, [townId, maxDistance]);
  
  if (nearbyTowns.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <MapPin className="text-wrap-red mr-2" size={24} />
            <h2 className="text-3xl font-serif font-semibold text-wrap-blue">
              Vehicle Wrapping Services Near {townName}
            </h2>
          </div>
          
          <p className="text-wrap-grey mb-8">
            We provide professional vehicle wrapping, ceramic coatings, and paint protection services throughout the greater {townName} area. Explore our services in these nearby locations:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {nearbyTowns.map((town) => (
              <Link 
                key={town.id}
                to={`/locations/${town.id}`}
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow flex flex-col border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-wrap-blue mb-2">
                  {town.name}
                </h4>
                <div className="flex items-center text-wrap-grey text-sm mb-2">
                  <Navigation className="mr-1" size={14} />
                  <span>
                    {Math.abs(town.distance - (nearbyTowns[0]?.distance || 0)).toFixed(0)} miles away
                  </span>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-wrap-grey">
                    Pop: {town.population.toLocaleString()}
                  </span>
                  <span className="text-wrap-red text-sm">
                    View Services
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/locations" 
              className="bg-wrap-blue/10 hover:bg-wrap-blue/20 text-wrap-blue px-6 py-3 rounded-md transition-colors inline-block"
            >
              View All Service Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyTownsSection;
