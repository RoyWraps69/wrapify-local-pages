
import React from 'react';
import { ServiceBenefit } from '@/data/serviceData';

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
  serviceName: string;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits, serviceName }) => {
  if (benefits.length === 0) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-8 text-center">
        Benefits of Our {serviceName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-wrap-blue mb-3">{benefit.title}</h3>
            <p className="text-wrap-grey">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;
