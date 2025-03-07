
import React from 'react';
import FAQSection from '@/components/FAQSection';
import { ServiceInfo } from '@/data/serviceData';

interface ServiceFAQsProps {
  service: ServiceInfo;
}

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ service }) => {
  const serviceFaqs = [
    {
      question: `How much does a ${service.title.toLowerCase()} cost?`,
      answer: (
        <p>
          The cost of {service.title.toLowerCase()} depends on your vehicle size, the job complexity, and your specific needs. 
          We offer options for all budgets. Contact us for a free quote tailored to your situation.
        </p>
      )
    },
    {
      question: `How long does a ${service.title.toLowerCase()} last?`,
      answer: (
        <p>
          With proper care, our {service.title.toLowerCase()} typically last 5-7 years. 
          We use top-quality materials designed to handle Midwest weather conditions.
          Regular cleaning and avoiding harsh car washes can help your service last even longer.
        </p>
      )
    },
    {
      question: `Do you offer warranties for ${service.title.toLowerCase()}?`,
      answer: (
        <p>
          Yes, we provide warranties for all our {service.title.toLowerCase()}. The exact terms depend on 
          the service and materials used. Our team will explain the warranty details before we start work.
        </p>
      )
    }
  ];

  return <FAQSection faqs={serviceFaqs} />;
};

export default ServiceFAQs;
