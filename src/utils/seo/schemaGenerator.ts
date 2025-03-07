
import { generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema } from './schemas/baseSchemas';

export { generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema };

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
