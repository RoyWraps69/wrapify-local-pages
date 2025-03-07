
import React from 'react';
import FAQSection from '@/components/FAQSection';
import { ServiceInfo } from '@/data/serviceData';

interface ServiceFAQsProps {
  service: ServiceInfo;
}

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ service }) => {
  // Check if we're on the vehicle wraps page to show more specific FAQs
  const isVehicleWraps = service.title === 'Vehicle Wraps';
  
  const commonFaqs = [
    {
      question: `How much does ${service.title.toLowerCase()} cost near me?`,
      answer: (
        <p>
          The cost of {service.title.toLowerCase()} depends on your vehicle size, the job complexity, and your specific needs. 
          We offer options for all budgets. Contact us for a free quote tailored to your situation, whether you're located in Chicago or any nearby suburb.
        </p>
      )
    },
    {
      question: `How long does ${service.title.toLowerCase()} last in Chicago's climate?`,
      answer: (
        <p>
          With proper care, our {service.title.toLowerCase()} typically last 5-7 years. 
          We use top-quality materials designed to handle Midwest weather conditions including Chicago's harsh winters and hot summers.
          Regular cleaning and avoiding harsh car washes can help your service last even longer.
        </p>
      )
    },
    {
      question: `Where can I find the best ${service.title.toLowerCase()} services near me?`,
      answer: (
        <p>
          Wrapping The World provides premium {service.title.toLowerCase()} services throughout Chicago and surrounding suburbs. 
          Our expert technicians deliver exceptional quality and attention to detail for every project. 
          We're conveniently located to serve clients throughout the Chicagoland area with mobile consultations available.
        </p>
      )
    },
    {
      question: `Do you offer warranties for ${service.title.toLowerCase()} near Chicago?`,
      answer: (
        <p>
          Yes, we provide comprehensive warranties for all our {service.title.toLowerCase()}. The exact terms depend on 
          the service and materials used. Our team will explain the warranty details before we start work, ensuring you have complete
          peace of mind with your vehicle enhancement project.
        </p>
      )
    }
  ];
  
  // Additional FAQs specific to vehicle wraps
  const vehicleWrapFaqs = isVehicleWraps ? [
    {
      question: "How do I wash my car after getting a vehicle wrap near Chicago?",
      answer: (
        <p>
          Yes, but we recommend waiting at least 7 days after installation before washing. Use gentle, 
          non-abrasive cleaning methods - hand washing with mild soap is best. Avoid automatic car washes 
          with brushes and high-pressure sprayers as they can damage the edges of the wrap. Chicago's winter road salt
          should be rinsed off promptly to prevent damage to your wrap.
        </p>
      )
    },
    {
      question: "Will a vehicle wrap damage my car's paint?",
      answer: (
        <p>
          No, when properly installed and removed by professionals, vehicle wraps actually protect your 
          original paint. The adhesive used is designed to be removable without damaging the factory finish. 
          In fact, areas covered by the wrap will be shielded from UV rays and minor abrasions, potentially 
          preserving your paint&apos;s condition better than exposed areas.
        </p>
      )
    },
    {
      question: "Where can I get a vehicle wrap installed near Chicago?",
      answer: (
        <p>
          Wrapping The World provides professional vehicle wrap installation throughout Chicago and surrounding suburbs. 
          Our state-of-the-art facility is equipped with climate-controlled installation bays for optimal results. 
          We service all areas including Naperville, Schaumburg, Aurora, Oak Brook, and other Chicagoland communities with 
          expert installation services using premium 3M and Avery Dennison materials.
        </p>
      )
    },
    {
      question: "How long does it take to install a vehicle wrap?",
      answer: (
        <p>
          A full vehicle wrap typically takes 3-5 business days to complete, depending on the complexity 
          of your vehicle and the design. Partial wraps and simple designs may be completed in 1-2 days. 
          We&apos;ll provide you with a specific timeframe during your consultation.
        </p>
      )
    }
  ] : [];
  
  // Combine common FAQs with vehicle wrap specific FAQs
  const serviceFaqs = [...commonFaqs, ...vehicleWrapFaqs];

  return <FAQSection faqs={serviceFaqs} />;
};

export default ServiceFAQs;
