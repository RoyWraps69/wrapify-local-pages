
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
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mt-8 mb-4">
        Where can I find quality vehicle wraps near {townName}, {stateFullName}?
      </h2>
      
      <p className="text-wrap-grey mb-6">
        <span className="text-wrap-blue font-bold">WRAPPING THE WORLD</span> provides premium vehicle wrapping and protection services to businesses and individuals throughout <span className="font-medium">{townName}, {stateFullName}</span> and nearby areas. {description}
      </p>
      
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mt-8 mb-4">
        Why do {townName} businesses need vehicle wraps?
      </h2>
      
      <p className="text-wrap-grey mb-6">
        With a population of {population.toLocaleString()} and approximately {businessCount.toLocaleString()} local businesses, {townName} is a thriving community with growing demand for professional vehicle branding and protection services. Local businesses that invest in vehicle wraps gain a significant competitive advantage through increased brand visibility.
      </p>
      
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mt-8 mb-4">
        What vehicle wrap services are available near {townName}?
      </h2>
      
      <p className="text-wrap-grey mb-6">
        Our services near {townName} include commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom vehicle graphics. We understand the specific needs of {townName} businesses and provide tailored solutions that help you stand out in your local market.
      </p>
      
      <p className="text-wrap-grey mb-6">
        If you're searching for "vehicle wraps near me" in the {townName} area, we offer convenient consultations, professional design services, and expert installation of all types of vehicle graphics and protection films.
      </p>
    </div>
  );
};

export default TownOverview;
