
import React from 'react';
import { Link } from 'react-router-dom';

interface RegionalLocation {
  name: string;
  slug: string;
  county: string;
  population: string;
  distance: string;
}

interface CitiesServedGridProps {
  regionName: string;
  citiesServed: RegionalLocation[];
}

const CitiesServedGrid: React.FC<CitiesServedGridProps> = ({ regionName, citiesServed }) => {
  return (
    <div className="not-prose mt-8">
      <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
        Serving All {regionName} Communities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {citiesServed.map((city) => (
          <Link 
            key={city.slug}
            to={`/locations/${city.slug}`}
            className="block p-4 border border-gray-200 rounded-lg hover:border-wrap-blue hover:shadow-md transition-all"
          >
            <h4 className="font-medium text-wrap-blue">{city.name}</h4>
            <p className="text-sm text-wrap-grey">
              {city.county} County | Pop: {city.population} | {city.distance}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitiesServedGrid;
