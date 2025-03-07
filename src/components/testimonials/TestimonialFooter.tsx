
import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialFooter: React.FC = () => {
  return (
    <div className="mt-12 text-center">
      <Link 
        to="/testimonials" 
        className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
      >
        <span>See All Customer Reviews</span>
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

export default TestimonialFooter;
