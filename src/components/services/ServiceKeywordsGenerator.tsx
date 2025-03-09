import React from 'react';

interface ServiceKeywordsGeneratorProps {
  serviceTitle: string;
}

// Convert to a function that returns a string instead of a React component
export const generateServiceKeywords = ({ 
  serviceTitle 
}: ServiceKeywordsGeneratorProps): string => {
  // Generate keywords for the service
  const keywords = `${serviceTitle.toLowerCase()}, ${serviceTitle.toLowerCase()} Chicago, professional ${serviceTitle.toLowerCase()}, ${serviceTitle.toLowerCase()} cost, ${serviceTitle.toLowerCase()} installation, premium ${serviceTitle.toLowerCase()}, ${serviceTitle.toLowerCase()} services, Chicago ${serviceTitle.toLowerCase()}, best ${serviceTitle.toLowerCase()} company, vehicle enhancements Midwest`;
  
  return keywords;
};

// Keep the component for backward compatibility, but make it return null
const ServiceKeywordsGenerator: React.FC<ServiceKeywordsGeneratorProps> = () => {
  return null;
};

export default ServiceKeywordsGenerator;
