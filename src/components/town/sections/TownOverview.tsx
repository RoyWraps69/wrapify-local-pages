
import React from 'react';

interface TownOverviewProps {
  townName: string;
  stateFullName: string;
  description: string;
  population: number;
  businessCount: number;
}

const TownOverview: React.FC<TownOverviewProps> = ({
  townName,
  stateFullName,
  description,
  population,
  businessCount
}) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:flex-1">
          <p className="text-wrap-grey">
            <span className="text-wrap-blue font-bold">WRAPPING THE WORLD</span> provides premium vehicle wrapping and protection services to businesses and individuals throughout <span className="font-medium">{townName}, {stateFullName}</span>. {description}
          </p>
          
          <p className="text-wrap-grey mt-4">
            With a population of {population.toLocaleString()} and approximately {businessCount.toLocaleString()} local businesses, {townName} is a thriving community with growing demand for professional vehicle branding and protection services.
          </p>
        </div>
        
        <div className="md:w-1/3 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png" 
            alt={`Vehicle wrapping in ${townName}`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p className="text-wrap-grey">
        Our services in {townName} include commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom vehicle graphics. We understand the specific needs of {townName} businesses and provide tailored solutions that help you stand out in your local market.
      </p>
    </div>
  );
};

export default TownOverview;
