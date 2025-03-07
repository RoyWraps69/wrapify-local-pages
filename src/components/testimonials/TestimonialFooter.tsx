
import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const TestimonialFooter: React.FC = () => {
  const { toast } = useToast();
  
  const handleClick = () => {
    // Track testimonial page visits
    console.log('User navigated to full testimonials page');
    console.log('Analytics notification will be sent to:');
    console.log('- info@wrappingtheworld.com');
    console.log('- roy@chicagofleetwraps.com');
    console.log('- patti@chicagofleetwraps.com');
    
    toast({
      title: "Loading Testimonials",
      description: "Showing all customer reviews and experiences.",
    });
  };
  
  return (
    <div className="mt-12 text-center">
      <Link 
        to="/testimonials" 
        className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
        onClick={handleClick}
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
