
// Service schema utility functions
import { generateOrganizationSchema, generateWebPageSchema } from './baseSchemas';

export const generateServiceSchema = ({ 
  pageTitle, 
  pageDescription, 
  pageUrl, 
  townName 
}: { 
  pageTitle: string; 
  pageDescription: string; 
  pageUrl: string; 
  townName: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageTitle,
    "description": pageDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": `Wrapping The World - ${townName} Vehicle Wrapping Services`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": townName,
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "serviceType": "Vehicle Wrapping Services",
    "offers": {
      "@type": "Offer",
      "price": "500",
      "priceCurrency": "USD",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    }
  };
};

export const generateLocalBusinessSchema = ({ 
  townName, 
  stateCode = "IL",
  latitude,
  longitude 
}: { 
  townName: string; 
  stateCode?: string;
  latitude?: number;
  longitude?: number;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Wrapping The World - ${townName} Vehicle Wrapping Services`,
    "description": `Professional vehicle wrapping and ceramic coating services in ${townName}, ${stateCode}. We specialize in commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom graphics using premium 3M and Avery Dennison materials.`,
    "image": "https://wrappingtheworld.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": townName,
      "addressRegion": stateCode,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "url": `https://wrappingtheworld.com/locations/${townName.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+13125971286",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": latitude || 41.8781,
        "longitude": longitude || -87.6298
      },
      "geoRadius": "50"
    }
  };
};
