
import React from 'react';

export interface RegionalPageContentProps {
  regionName: string;
  regionDescription?: string;
  regionFocus?: string;
  regionImage?: string;
  citiesServed?: string[];
  adjacentRegions?: string[];
}

const RegionalPageContent: React.FC<RegionalPageContentProps> = ({
  regionName,
  regionDescription = "Providing professional vehicle wrapping services throughout the region.",
  regionFocus = "Commercial fleet branding, color change wraps, and paint protection",
  regionImage = "/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png",
  citiesServed = [],
  adjacentRegions = []
}) => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-wrap-blue mb-6">
        Vehicle Wrapping Services in {regionName}
      </h1>
      <p className="text-lg text-wrap-grey mb-6">
        {regionDescription}
      </p>
      <div className="bg-wrap-blue/5 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-wrap-blue mb-3">Our {regionName} Focus</h2>
        <p className="text-wrap-grey">{regionFocus}</p>
      </div>
      
      {citiesServed.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-wrap-blue mb-4">Cities We Serve in {regionName}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {citiesServed.map((city, index) => (
              <div key={index} className="bg-white p-3 rounded shadow-sm border border-gray-100">
                {city}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {adjacentRegions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-wrap-blue mb-4">We Also Serve</h2>
          <div className="flex flex-wrap gap-3">
            {adjacentRegions.map((region, index) => (
              <a 
                key={index}
                href={`/regions/${region.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-wrap-light text-wrap-blue py-2 px-4 rounded-full hover:bg-wrap-blue hover:text-white transition-colors"
              >
                {region}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionalPageContent;
