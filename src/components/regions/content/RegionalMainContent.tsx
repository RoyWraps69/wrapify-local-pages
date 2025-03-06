
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
}

const RegionalMainContent: React.FC<RegionalMainContentProps> = ({
  regionName,
  regionDescription,
  regionFocus,
  citiesServed
}) => {
  return (
    <div className="md:col-span-2">
      <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
        Professional Vehicle Wrapping Services in {regionName}
      </h2>
      
      <div className="prose prose-lg max-w-none text-wrap-grey">
        <p dangerouslySetInnerHTML={{ __html: regionDescription }}></p>
        
        <h3>Why Choose Wrapping The World for {regionName} Vehicle Services?</h3>
        <ul>
          <li>Expert vehicle wrap installation by certified professionals</li>
          <li>Premium 3M and Avery Dennison materials for exceptional durability</li>
          <li>Comprehensive vehicle protection solutions including ceramic coatings</li>
          <li>Custom designs tailored to your brand and business needs</li>
          <li>Exceptional service from concept to completion</li>
        </ul>
        
        <h3>Our Services in {regionName}</h3>
        <p>{regionFocus}</p>
        
        <CitiesServedGrid regionName={regionName} citiesServed={citiesServed} />
      </div>
    </div>
  );
};

export default RegionalMainContent;
