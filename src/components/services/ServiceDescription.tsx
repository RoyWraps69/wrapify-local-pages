
import React from 'react';

interface ServiceDescriptionProps {
  title: string;
  description: string;
  longDescription: string;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ 
  title, 
  description, 
  longDescription 
}) => {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg">
      <h1 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
        {title}
      </h1>
      <p className="mb-6 text-wrap-grey text-lg">
        {description}
      </p>
      <p className="mb-6 text-wrap-grey text-lg">
        {longDescription}
      </p>
    </div>
  );
};

export default ServiceDescription;
