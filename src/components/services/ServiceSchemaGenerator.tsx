
import React from 'react';
import { 
  generateServiceSchema, 
  generateWebPageSchema, 
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema
} from '@/utils/seo/schemaGenerator';
import { FAQ } from '@/data/services/types';

interface ServiceSchemaGeneratorProps {
  serviceTitle: string;
  serviceDescription: string;
  pageUrl: string;
  heroImage: string;
  faqs: FAQ[];
}

const ServiceSchemaGenerator: React.FC<ServiceSchemaGeneratorProps> = ({
  serviceTitle,
  serviceDescription,
  pageUrl,
  heroImage,
  faqs
}) => {
  // Generate structured data for the service page
  const serviceSchema = generateServiceSchema({
    pageTitle: serviceTitle,
    pageDescription: serviceDescription,
    pageUrl: pageUrl,
    townName: "Chicago"
  });
  
  const webPageSchema = generateWebPageSchema({
    pageTitle: `${serviceTitle} | Professional Vehicle Enhancement Services`,
    pageDescription: serviceDescription,
    pageUrl: pageUrl,
    imageUrl: heroImage,
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString()
  });
  
  const orgSchema = generateOrganizationSchema();
  
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Services", url: "https://wrappingtheworld.com/services" },
    { name: serviceTitle, url: pageUrl }
  ]);
  
  // Convert service FAQs to the format needed for schema
  const serviceFAQs = faqs ? faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })) : [];
  
  const faqSchema = generateFAQSchema(serviceFAQs);

  return [serviceSchema, webPageSchema, orgSchema, breadcrumbSchema, faqSchema];
};

export default ServiceSchemaGenerator;
