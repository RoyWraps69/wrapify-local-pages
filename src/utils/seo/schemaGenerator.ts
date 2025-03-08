import { generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema } from './schemas/baseSchemas';
import { 
  generateInsuranceSchemas as importedGenerateInsuranceSchemas,
  generateWarrantySchemas,
  generateTrainingClassesSchemas as importedGenerateTrainingClassesSchemas
} from './schemas/productSchemas';

export { generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema };
export { generateWarrantySchemas };

// Re-export the imported schemas generators
export const generateInsuranceSchemas = importedGenerateInsuranceSchemas;
export const generateTrainingClassesSchemas = importedGenerateTrainingClassesSchemas;

/**
 * Generates a Schema.org Service schema for a service page
 */
export const generateServiceSchema = ({
  pageTitle,
  pageDescription,
  pageUrl,
  townName = "Chicago"
}: {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  townName?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageTitle,
    "description": pageDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World",
      "image": "https://wrappingtheworld.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": townName,
        "addressRegion": "IL",
        "addressCountry": "US"
      },
      "telephone": "+13125971286"
    },
    "areaServed": {
      "@type": "Place",
      "name": townName
    },
    "url": pageUrl.startsWith('http') ? pageUrl : `https://wrappingtheworld.com${pageUrl}`,
    "serviceType": "Vehicle Wrapping & Protection Services"
  };
};

/**
 * Generates a FAQ schema for any page with FAQs
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generates contact page specific schema
 */
export const generateContactPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Wrapping The World",
    "description": "Request vehicle wrap quotes, inquire about ceramic coating services, or get in touch with our team of wrap experts.",
    "url": "https://wrappingtheworld.com/contact",
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ".contact-page-content"
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Request A Quote",
      "instrument": {
        "@type": "ContactForm",
        "url": "https://wrappingtheworld.com/contact#quote-form"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wrappingtheworld.com/logo.png"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+13125971286",
      "contactType": "customer service",
      "areaServed": "Chicago and nationwide",
      "availableLanguage": "English"
    }
  };
};

/**
 * Generates a local business schema for location pages
 */
export const generateLocalBusinessSchema = ({ 
  townName = "Chicago"
}: { 
  townName?: string 
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping The World",
    "description": `Professional vehicle wrapping and ceramic coating services in ${townName}. Expert installers providing commercial fleet wraps, color change wraps, and paint protection.`,
    "url": "https://wrappingtheworld.com",
    "logo": "https://wrappingtheworld.com/logo.png",
    "image": "https://wrappingtheworld.com/og-image.jpg",
    "telephone": "+13125971286",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": townName,
      "addressRegion": townName === "Chicago" ? "IL" : "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.8781",
      "longitude": "-87.6298"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/wrappingtheworld",
      "https://instagram.com/wrappingtheworld",
      "https://linkedin.com/company/wrappingtheworld"
    ]
  };
};
