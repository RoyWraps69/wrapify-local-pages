
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
  // Add these new props to match usage in RegionalPageTemplate.tsx
  mainCity?: string;
  cities?: string[];
}

const CitiesServedGrid: React.FC<CitiesServedGridProps> = ({ 
  regionName, 
  citiesServed = [],
  mainCity,
  cities = [],
}) => {
  // If we have cities as strings (from new prop), convert them to RegionalLocation format
  const displayCities = cities.length > 0 
    ? cities.map(city => ({
        name: city,
        slug: city.toLowerCase().replace(/\s+/g, '-'),
        county: '',
        population: '',
        distance: '',
      }))
    : citiesServed;

  // Use mainCity as regionName if provided
  const displayRegionName = mainCity || regionName;

  return (
    <div className="not-prose mt-8">
      <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
        Serving All {displayRegionName} Communities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {displayCities.map((city) => (
          <Link 
            key={city.slug || city.name}
            to={`/locations/${city.slug}`}
            className="block p-4 border border-gray-200 rounded-lg hover:border-wrap-blue hover:shadow-md transition-all"
          >
            <h4 className="font-medium text-wrap-blue">{city.name}</h4>
            {city.county && (
              <p className="text-sm text-wrap-grey">
                {city.county} County | Pop: {city.population} | {city.distance}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitiesServedGrid;
