
import React from 'react';

interface TestimonialHeadingProps {
  townName: string;
  filter: string | null;
  setFilter: (filter: string | null) => void;
  getSourceIcon: (source?: 'Google' | 'Yelp' | 'Facebook' | 'Website') => React.ReactNode;
}

const TestimonialHeading: React.FC<TestimonialHeadingProps> = ({ 
  townName, 
  filter, 
  setFilter,
  getSourceIcon 
}) => {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
        Customer Testimonials
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
        What Do People Near {townName} Say About Our Vehicle Wraps?
      </h2>
      <p className="text-wrap-grey text-lg max-w-2xl mx-auto">
        Real feedback from real customers who found us by searching for "vehicle wraps near me" in the {townName} area.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === null 
              ? 'bg-wrap-blue text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Reviews
        </button>
        <button
          onClick={() => setFilter('Google')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
            filter === 'Google' 
              ? 'bg-wrap-blue text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {getSourceIcon('Google')}
          <span className="ml-2">Google Reviews</span>
        </button>
        <button
          onClick={() => setFilter('Yelp')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
            filter === 'Yelp' 
              ? 'bg-wrap-blue text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {getSourceIcon('Yelp')}
          <span className="ml-2">Yelp Reviews</span>
        </button>
        <button
          onClick={() => setFilter('Facebook')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
            filter === 'Facebook' 
              ? 'bg-wrap-blue text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {getSourceIcon('Facebook')}
          <span className="ml-2">Facebook Reviews</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialHeading;
