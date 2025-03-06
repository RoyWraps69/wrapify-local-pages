
import React from 'react';

interface CaseStudiesHeaderProps {
  title: string;
  description: string;
}

const CaseStudiesHeader: React.FC<CaseStudiesHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
        {title}
      </h1>
      <p className="text-wrap-grey text-lg mb-8 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default CaseStudiesHeader;
