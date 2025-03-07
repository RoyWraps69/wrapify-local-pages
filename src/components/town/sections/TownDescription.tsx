
import React from 'react';
import TownOverview from './TownOverview';

interface TownDescriptionProps {
  townName: string;
  description: string;
  population: number;
  businessCount: number;
  townData: any;
}

const TownDescription: React.FC<TownDescriptionProps> = ({
  townName,
  description,
  population,
  businessCount,
  townData
}) => {
  
  return (
    <div className="mb-10">
      <TownOverview 
        townName={townName}
        townData={townData}
      />
      
    </div>
  );
};

export default TownDescription;
