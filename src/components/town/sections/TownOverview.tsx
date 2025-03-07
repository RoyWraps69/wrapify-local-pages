import React from 'react';
import { Star } from 'lucide-react';
import TownStats from './TownStats';

export interface TownOverviewProps {
  townName: string;
  townData: any;
}

const TownOverview: React.FC<TownOverviewProps> = ({ townName, townData }) => {
  const rating = townData?.rating || 4.9;
  const reviewCount = townData?.reviewCount || 87;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
        Where can I find professional vehicle wrapping in {townName}?
      </h3>
      <p className="text-wrap-grey mb-6">
        Wrapping The World provides premium vehicle wrapping services in {townName} and surrounding areas. 
        Our team of certified installers has extensive experience working with businesses and individuals 
        throughout {townData.state}. We offer convenient service for all {townName} residents and businesses, 
        with flexible scheduling and optional mobile installation for fleet vehicles.
      </p>
      
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-wrap-grey">{rating} stars ({reviewCount} reviews)</span>
      </div>
      
      <div className="my-8">
        <TownStats 
          townData={townData} 
        />
      </div>
      
      <p className="text-wrap-grey">
        We specialize in commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom graphics using premium 3M and Avery Dennison materials.
      </p>
    </div>
  );
};

export default TownOverview;
