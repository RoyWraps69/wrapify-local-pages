
import { generateWebPageSchema, generateOrganizationSchema } from './baseSchemas';
import { CaseStudy } from '@/data/caseStudies';

/**
 * Generates Schema.org structured data for a case study detail page
 */
export const generateCaseStudySchema = (caseStudy: CaseStudy) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": caseStudy.image,
    "datePublished": new Date(caseStudy.completionDate).toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "url": "https://wrappingtheworld.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wrappingtheworld.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://wrappingtheworld.com/case-studies/${caseStudy.slug}`
    },
    "about": {
      "@type": "Service",
      "name": "Vehicle Wrapping Services",
      "description": `Professional vehicle wrapping services for the ${caseStudy.industry} industry`
    },
    "keywords": `vehicle wrap case study, ${caseStudy.industry} vehicle branding, fleet graphics, ${caseStudy.location} vehicle wraps, commercial wrap success`
  };
};

/**
 * Generates all schemas needed for a case study detail page
 */
export const generateCaseStudyPageSchemas = (caseStudy: CaseStudy) => {
  // Generate the main case study schema
  const caseStudySchema = generateCaseStudySchema(caseStudy);
  
  // Generate web page schema
  const webPageSchema = generateWebPageSchema({
    pageTitle: `${caseStudy.title} | Wrapping The World Case Study`,
    pageDescription: caseStudy.description,
    pageUrl: `https://wrappingtheworld.com/case-studies/${caseStudy.slug}`,
    imageUrl: caseStudy.image,
    datePublished: new Date(caseStudy.completionDate).toISOString(),
    dateModified: new Date().toISOString()
  });
  
  // Generate organization schema
  const orgSchema = generateOrganizationSchema();
  
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wrappingtheworld.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://wrappingtheworld.com/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": caseStudy.title,
        "item": `https://wrappingtheworld.com/case-studies/${caseStudy.slug}`
      }
    ]
  };
  
  return [caseStudySchema, webPageSchema, orgSchema, breadcrumbSchema];
};

/**
 * Generates schema for the case studies listing page
 */
export const generateCaseStudiesListingSchema = (caseStudies: CaseStudy[]) => {
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wrappingtheworld.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://wrappingtheworld.com/case-studies"
      }
    ]
  };
  
  // Generate collection page schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vehicle Wrap Case Studies | Wrapping The World",
    "description": "Explore our vehicle wrapping and ceramic coating case studies showcasing successful transformations across multiple industries and applications.",
    "url": "https://wrappingtheworld.com/case-studies",
    "hasPart": caseStudies.map(study => ({
      "@type": "Article",
      "headline": study.title,
      "description": study.description,
      "url": `https://wrappingtheworld.com/case-studies/${study.slug}`,
      "image": study.image,
      "datePublished": new Date(study.completionDate).toISOString()
    }))
  };
  
  return [breadcrumbSchema, collectionPageSchema, generateOrganizationSchema()];
};
