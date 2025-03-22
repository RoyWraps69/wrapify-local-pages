
// Service schema utility functions

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
      "@type": "Organization",
      "name": "Wrapping The World",
      "url": "https://wrappingtheworld.com"
    },
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "url": pageUrl,
    "serviceType": "Vehicle Enhancement Services"
  };
};

export const generateLocalBusinessSchema = ({ townName }: { townName: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Wrapping The World - ${townName}`,
    "image": "https://wrappingtheworld.com/logo.png",
    "description": `Professional vehicle wrapping and automotive enhancement services in ${townName}. Specializing in commercial fleet wraps, ceramic coatings, and paint protection film.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": townName,
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "telephone": "+13125971286",
    "priceRange": "$$-$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  };
};

export const generateContactPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Wrapping The World",
    "description": "Get in touch with our vehicle wrap and protection specialists for quotes, questions, and consultations.",
    "url": "https://wrappingtheworld.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "telephone": "+13125971286",
      "email": "info@wrappingtheworld.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Wrapping Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60607",
        "addressCountry": "US"
      }
    }
  };
};

export const generateRegionSchema = (regionName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": regionName,
    "description": `Vehicle wrapping and protection services throughout ${regionName}. Premium wraps, ceramic coatings, and paint protection film for businesses and individuals.`,
    "url": `https://wrappingtheworld.com/regions/${regionName.toLowerCase()}`,
    "hasMap": `https://maps.google.com/maps?q=${regionName}`,
    "geo": {
      "@type": "GeoCoordinates",
      "name": regionName
    }
  };
};

export const generateInsuranceSchemas = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Wrap Insurance",
    "description": "Comprehensive insurance solutions for vehicle wraps and graphics, protecting your branding investment.",
    "provider": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "url": "https://wrappingtheworld.com"
    },
    "serviceType": "Insurance Service",
    "offers": {
      "@type": "Offer",
      "description": "Protection plans for commercial vehicle wraps and graphics"
    }
  };
};
