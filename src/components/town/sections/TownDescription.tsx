
import React from 'react';
import { MapPin } from 'lucide-react';
import TownStats from './TownStats';
import TownOverview from './TownOverview';
import TownActionButtons from './TownActionButtons';

interface TownDescriptionProps {
  townName: string;
  townData: any;
}

const TownDescription: React.FC<TownDescriptionProps> = ({ townName, townData }) => {
  if (!townData) {
    return <div className="py-8 text-center">Loading town information...</div>;
  }
  
  const { description, population, businessCount, state, distance } = townData;
  
  // Format state name fully
  const stateFullName = 
    state === 'IL' ? 'Illinois' : 
    state === 'MI' ? 'Michigan' : 
    state === 'IN' ? 'Indiana' : 
    state === 'WI' ? 'Wisconsin' : state;
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <MapPin className="text-wrap-red mr-2" size={24} />
            <h1 className="text-3xl font-serif font-semibold text-wrap-blue">
              Vehicle Wrapping Services in {townName}, {stateFullName}
            </h1>
          </div>

          <TownStats 
            population={population} 
            businessCount={businessCount} 
            distance={distance} 
          />

          <TownOverview 
            townName={townName}
            stateFullName={stateFullName}
            description={description}
            population={population}
            businessCount={businessCount}
          />
          
          <TownActionButtons townName={townName} />
        </div>
      </div>
    </section>
  );
};

export default TownDescription;
