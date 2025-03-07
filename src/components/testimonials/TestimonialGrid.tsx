
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from './types';
import { renderStars, getSourceIcon } from './TestimonialUtils';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={index}
          testimonial={testimonial}
          renderStars={renderStars}
          getSourceIcon={getSourceIcon}
        />
      ))}
    </div>
  );
};

export default TestimonialGrid;
