
import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyCard from './CaseStudyCard';
import ClientTestimonial from './ClientTestimonial';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  industry: string;
  location: string;
  results: string;
  slug: string;
}

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
}

const CaseStudyList: React.FC<CaseStudyListProps> = ({ caseStudies }) => {
  // Client testimonial data
  const testimonial = {
    quote: "Working with Wrapping The World transformed our fleet from ordinary vehicles to powerful marketing assets. The team's expertise in design and installation was impressive, and the results have exceeded our expectations.",
    author: "Michael Johnson",
    position: "Fleet Manager",
    company: "Midwest Logistics",
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png"
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </div>
      
      {/* Client Testimonial */}
      <div className="mt-16">
        <ClientTestimonial {...testimonial} />
      </div>
    </div>
  );
};

export default CaseStudyList;
