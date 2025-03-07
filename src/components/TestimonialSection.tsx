
import React, { useState } from 'react';
import TestimonialHeading from './testimonials/TestimonialHeading';
import TestimonialGrid from './testimonials/TestimonialGrid';
import TestimonialShareSection from './testimonials/TestimonialShareSection';
import TestimonialFooter from './testimonials/TestimonialFooter';
import { DEFAULT_TESTIMONIALS } from './testimonials/data';
import { Testimonial } from './testimonials/types';
import { getSourceIcon } from './testimonials/TestimonialUtils';

interface TestimonialSectionProps {
  townName?: string;
  testimonials?: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ 
  townName = 'Chicago',
  testimonials = DEFAULT_TESTIMONIALS 
}) => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredTestimonials = filter 
    ? testimonials.filter(t => t.source === filter)
    : testimonials;

  return (
    <section className="py-20 bg-wrap-light">
      <div className="container mx-auto px-4">
        <TestimonialHeading 
          townName={townName} 
          filter={filter} 
          setFilter={setFilter}
          getSourceIcon={getSourceIcon}
        />

        <TestimonialGrid testimonials={filteredTestimonials} />
        
        <TestimonialShareSection getSourceIcon={getSourceIcon} />
        
        <TestimonialFooter />
      </div>
    </section>
  );
};

export default TestimonialSection;
