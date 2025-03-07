
// Schema generator utility functions

export const generateWebPageSchema = ({
  pageTitle,
  pageDescription,
  pageUrl,
  imageUrl,
  datePublished,
  dateModified
}: {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl.startsWith('http') ? pageUrl : `https://wrappingtheworld.com${pageUrl}`,
    "image": imageUrl.startsWith('http') ? imageUrl : `https://wrappingtheworld.com${imageUrl}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wrappingtheworld.com/logo.png"
      }
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

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
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

// Add the missing schema generator functions

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wrapping The World",
    "url": "https://wrappingtheworld.com",
    "logo": "https://wrappingtheworld.com/logo.png",
    "description": "Premium vehicle wrapping, ceramic coating, and paint protection film services throughout Illinois, Indiana, Michigan, and Wisconsin.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wrapping Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60607",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+13125971286",
      "contactType": "customer service",
      "areaServed": "Midwest United States",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/wrappingtheworld",
      "https://instagram.com/wrappingtheworld",
      "https://linkedin.com/company/wrappingtheworld",
      "https://youtube.com/wrappingtheworld"
    ]
  };
};

export const generateInsuranceSchemas = () => {
  const insuranceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Wrap Insurance Plans",
    "description": "Protect your vehicle wrap investment with our comprehensive insurance plans covering damage repair, warranty extension, and professional removal guarantees.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    },
    "serviceType": "Vehicle Wrap Insurance",
    "offers": [{
      "@type": "Offer",
      "name": "Silver Plan",
      "price": "299.99",
      "priceCurrency": "USD",
      "description": "Basic wrap protection with removal guarantee up to $1,500"
    }, {
      "@type": "Offer",
      "name": "Gold Plan",
      "price": "499.99",
      "priceCurrency": "USD",
      "description": "Enhanced wrap protection with removal guarantee up to $750"
    }, {
      "@type": "Offer",
      "name": "Platinum Plan",
      "price": "799.99",
      "priceCurrency": "USD",
      "description": "Premium wrap protection with free removal guarantee"
    }]
  };

  const orgSchema = generateOrganizationSchema();
  
  const webPageSchema = generateWebPageSchema({
    pageTitle: "Vehicle Wrap Insurance Plans | Wrapping The World",
    pageDescription: "Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service.",
    pageUrl: "https://wrappingtheworld.com/wrap-insurance",
    imageUrl: "https://wrappingtheworld.com/images/wrap-insurance-plans.jpg",
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString()
  });

  return { insuranceSchema, orgSchema, webPageSchema };
};

export const generateWarrantySchemas = () => {
  const warrantySchema = {
    "@context": "https://schema.org",
    "@type": "WarrantyPromise",
    "durationOfWarranty": "P5Y",
    "warrantyScope": "Vehicle wraps, ceramic coatings, and paint protection film installations",
    "description": "Our comprehensive 5-year warranty covers all professional vehicle wraps, ceramic coatings, and paint protection film installations performed by certified Wrapping The World technicians."
  };

  const orgSchema = generateOrganizationSchema();
  
  const webPageSchema = generateWebPageSchema({
    pageTitle: "Warranty Information | Wrapping The World",
    pageDescription: "Our comprehensive 5-year warranty covers all professional vehicle wraps, ceramic coatings, and paint protection film installations performed by certified Wrapping The World technicians.",
    pageUrl: "https://wrappingtheworld.com/warranty-information",
    imageUrl: "https://wrappingtheworld.com/images/warranty-coverage.jpg",
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString()
  });

  return { warrantySchema, orgSchema, webPageSchema };
};

export const generateTrainingClassesSchemas = () => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Professional Vinyl Wrap Installation Training",
    "description": "Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts with 30+ years of experience.",
    "provider": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "sameAs": "https://wrappingtheworld.com"
    },
    "offers": [{
      "@type": "Offer",
      "name": "1-Day Basics Course",
      "price": "499.99",
      "priceCurrency": "USD"
    }, {
      "@type": "Offer",
      "name": "3-Day Intermediate Course",
      "price": "1299.99",
      "priceCurrency": "USD"
    }, {
      "@type": "Offer",
      "name": "5-Day Master Class",
      "price": "1999.99",
      "priceCurrency": "USD"
    }]
  };

  const orgSchema = generateOrganizationSchema();
  
  const webPageSchema = generateWebPageSchema({
    pageTitle: "Professional Vinyl Wrap Installation Training | 30 Years Experience",
    pageDescription: "Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts with 30+ years of experience.",
    pageUrl: "https://wrappingtheworld.com/training-classes",
    imageUrl: "https://wrappingtheworld.com/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png",
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString()
  });

  return { courseSchema, orgSchema, webPageSchema };
};
