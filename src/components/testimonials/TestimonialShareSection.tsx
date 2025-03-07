
import React from 'react';

interface TestimonialShareSectionProps {
  getSourceIcon: (source?: 'Google' | 'Yelp' | 'Facebook' | 'Website') => React.ReactNode;
}

const TestimonialShareSection: React.FC<TestimonialShareSectionProps> = ({ getSourceIcon }) => {
  return (
    <div className="mt-12 text-center">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-wrap-blue mb-3">
          Share Your Vehicle Wrap Experience
        </h3>
        <p className="text-wrap-grey mb-4">
          Love your new vehicle wrap? Leave a review and get <span className="font-semibold">10% OFF</span> your next service!
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <a 
            href="https://g.page/review/ChicagoFleetWraps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {getSourceIcon('Google')}
            <span className="ml-2">Review on Google</span>
          </a>
          <a 
            href="https://www.yelp.com/writeareview/biz/chicago-fleet-wraps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {getSourceIcon('Yelp')}
            <span className="ml-2">Review on Yelp</span>
          </a>
          <a 
            href="https://www.facebook.com/chicagofleetwraps/reviews/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {getSourceIcon('Facebook')}
            <span className="ml-2">Review on Facebook</span>
          </a>
        </div>
        <p className="text-xs text-wrap-grey mt-3">
          *Show your review to our team to claim your discount. Valid for 90 days after posting.
        </p>
      </div>
    </div>
  );
};

export default TestimonialShareSection;
