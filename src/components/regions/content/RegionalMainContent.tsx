
import React from 'react';
import CitiesServedGrid from '../cities/CitiesServedGrid';

interface RegionalLocation {
  name: string;
  slug: string;
  county: string;
  population: string;
  distance: string;
}

interface RegionalMainContentProps {
  regionName: string;
  regionDescription: string;
  regionFocus: string;
  citiesServed: RegionalLocation[];
  // Add these new props to match usage in RegionalPageTemplate.tsx
  title?: string;
  description?: string;
  content?: string;
}

const RegionalMainContent: React.FC<RegionalMainContentProps> = ({
  regionName,
  regionDescription,
  regionFocus,
  citiesServed,
  // Add the new props with defaults
  title = '',
  description = '',
  content = '',
}) => {
  // Use the new props if provided, otherwise fall back to the original ones
  const displayTitle = title || `Professional Vehicle Wrapping Services in ${regionName}`;
  const displayDescription = description || regionDescription;
  const displayContent = content || regionFocus;

  return (
    <div className="md:col-span-2">
      <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
        {displayTitle}
      </h2>
      
      <div className="prose prose-lg max-w-none text-wrap-grey">
        <p dangerouslySetInnerHTML={{ __html: displayDescription }}></p>
        
        <h3>Why Choose Wrapping The World for {regionName} Vehicle Services?</h3>
        <ul>
          <li>Expert vehicle wrap installation by certified professionals</li>
          <li>Premium 3M and Avery Dennison materials for exceptional durability</li>
          <li>Comprehensive vehicle protection solutions including ceramic coatings</li>
          <li>Custom designs tailored to your brand and business needs</li>
          <li>Exceptional service from concept to completion</li>
        </ul>
        
        <h3>Our Services in {regionName}</h3>
        <p>{displayContent}</p>
        
        {citiesServed && citiesServed.length > 0 && (
          <CitiesServedGrid regionName={regionName} citiesServed={citiesServed} />
        )}
      </div>
    </div>
  );
};

export default RegionalMainContent;
