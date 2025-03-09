
import React from 'react';

interface ServiceKeywordsGeneratorProps {
  serviceTitle: string;
}

const ServiceKeywordsGenerator: React.FC<ServiceKeywordsGeneratorProps> = ({ serviceTitle }) => {
  // Generate keywords for the service
  const keywords = `${serviceTitle.toLowerCase()}, ${serviceTitle.toLowerCase()} Chicago, professional ${serviceTitle.toLowerCase()}, ${serviceTitle.toLowerCase()} cost, ${serviceTitle.toLowerCase()} installation, premium ${serviceTitle.toLowerCase()}, ${serviceTitle.toLowerCase()} services, Chicago ${serviceTitle.toLowerCase()}, best ${serviceTitle.toLowerCase()} company, vehicle enhancements Midwest`;
  
  return keywords;
};

export default ServiceKeywordsGenerator;
