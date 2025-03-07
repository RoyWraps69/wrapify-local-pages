
import React from 'react';
import ServicesSection from '@/components/ServicesSection';

const RelatedServices: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-12 text-center">
          Related Services
        </h2>
        <ServicesSection townName="Chicago" />
      </div>
    </section>
  );
};

export default RelatedServices;
