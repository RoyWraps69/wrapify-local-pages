
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTowns } from '@/utils/townData';
import { MapPin, ArrowRight } from 'lucide-react';

const LocationsSection = () => {
  // Get all towns
  const allTowns = getAllTowns();
  
  // Group towns by state
  const stateNames = {
    'IL': 'Illinois',
    'MI': 'Michigan',
    'IN': 'Indiana',
    'WI': 'Wisconsin'
  };
  
  // Get top towns from each state (limit to 5 per state)
  const topTownsByState = Object.entries(stateNames).map(([stateCode, stateName]) => {
    const stateTowns = allTowns
      .filter(town => town.state === stateCode)
      .sort((a, b) => a.population > b.population ? -1 : 1)
      .slice(0, 5);
      
    return {
      stateCode,
      stateName,
      towns: stateTowns
    };
  });
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Our Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Vehicle Wrapping Services Near You
          </h2>
          <p className="text-lg text-wrap-grey max-w-3xl mx-auto">
            Wrapping The World provides premium vehicle wrapping and protection services throughout the Midwest. 
            Find a location near you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {topTownsByState.map(({ stateCode, stateName, towns }) => (
            <div key={stateCode} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-wrap-blue flex items-center">
                  <MapPin className="text-wrap-red mr-2" size={20} />
                  {stateName}
                </h3>
                <Link to={`/regions/${stateName.toLowerCase()}`} className="text-sm text-wrap-red hover:underline flex items-center">
                  View Region <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              
              <div className="space-y-1">
                {towns.map(town => (
                  <Link 
                    key={town.id} 
                    to={`/locations/${town.id}`}
                    className="block py-2 px-3 hover:bg-gray-50 rounded-md transition-colors flex justify-between items-center"
                  >
                    <span className="text-wrap-grey">{town.name}</span>
                    <span className="text-xs text-gray-400">{town.distance} mi</span>
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Link 
                  to="/locations" 
                  className="text-sm text-wrap-blue hover:text-wrap-red font-medium"
                >
                  View all {stateName} locations
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/locations" 
            className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
          >
            Find Vehicle Wrapping Services In Your Area <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
