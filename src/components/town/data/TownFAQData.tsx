
import React from 'react';

interface CreateTownFAQsProps {
  townName: string;
}

export const createTownFAQs = ({ townName }: CreateTownFAQsProps) => {
  return [
    {
      question: `How much do vehicle wraps cost in ${townName}?`,
      answer: (
        <p>
          Vehicle wrap pricing in {townName} varies based on several factors: vehicle size, wrap complexity, design requirements, and material quality. For commercial fleet wraps, pricing typically ranges from $2,500-$5,000 per vehicle. Custom color change wraps range from $3,000-$6,000 depending on vehicle size. Partial wraps start around $1,200. We provide free, detailed quotes specific to your {townName} project requirements.
        </p>
      )
    },
    {
      question: `How long do vehicle wraps last in ${townName}?`,
      answer: (
        <p>
          Professionally installed vehicle wraps from Wrapping The World typically last 5-7 years in {townName}. Our premium 3M and Avery Dennison vinyl materials are specifically engineered to withstand local weather conditions. With proper maintenance and care, your {townName} vehicle wrap will maintain its vibrant appearance and promotional effectiveness throughout this period, making it an excellent long-term investment for your business.
        </p>
      )
    },
    {
      question: `Do you offer mobile installation services in ${townName}?`,
      answer: (
        <p>
          Yes, we offer mobile installation services throughout {townName} for certain projects. Our mobile team can come to your location for consultations, measurements, and in some cases, complete installations. This service is particularly valuable for businesses with multiple vehicles or fleets that cannot afford downtime. Contact us to discuss your specific needs in {townName} and determine if mobile service is appropriate for your project.
        </p>
      )
    },
    {
      question: `How do I maintain my vehicle wrap in ${townName}?`,
      answer: (
        <p>
          To maintain your vehicle wrap in {townName}, we recommend hand washing with mild soap and water, avoiding high-pressure car washes and harsh chemicals. In winter months, regularly rinse off road salt. For optimal protection, park in covered areas when possible to minimize UV exposure. We provide all {townName} clients with detailed care instructions specific to local conditions to maximize the lifespan of your investment.
        </p>
      )
    },
    {
      question: `What businesses in ${townName} benefit most from vehicle wraps?`,
      answer: (
        <p>
          In {townName}, businesses that benefit most from vehicle wraps include service-based companies (HVAC, plumbing, landscaping), delivery services, construction companies, real estate agencies, food trucks, and retail businesses with delivery vehicles. Any business with vehicles that travel throughout {townName} can leverage the high visibility and local recognition that professionally wrapped vehicles provide. Our team can help you assess how vehicle wraps can specifically benefit your {townName} business.
        </p>
      )
    }
  ];
};
