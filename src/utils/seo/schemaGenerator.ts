// src/utils/seo/schemaGenerator.ts

type SchemaData = {
  [key: string]: any;
};

// Base schema generation functions
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

// Service-related schemas
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

// Local business schema
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

// FAQ schema
export interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQItem[]) => {
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

// Contact page schema
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

// Region schema for state pages
export const generateRegionSchema = (region: any) => {
  // Handle both string inputs and object inputs
  const regionName = typeof region === 'string' ? region : region.regionName;
  const mainCity = typeof region === 'string' ? '' : region.mainCity;
  
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `${regionName} Vehicle Wrap Services`,
    "description": typeof region === 'string' 
      ? `Professional vehicle wrapping services in ${regionName}` 
      : region.description || `Professional vehicle wrapping services in ${regionName}`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": regionName,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.8781",
      "longitude": "-87.6298"
    },
    "url": `https://wrappingtheworld.com/regions/${regionName.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+13125971286",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://wrappingtheworld.com/regions/${regionName.toLowerCase().replace(/\s+/g, '-')}`
    }
  };
};

// Insurance-related schemas
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

// Training-related schemas already existing
export const generateTrainingClassesSchemas = (): { 
  courseSchema: SchemaData; 
  orgSchema: SchemaData; 
  webPageSchema: SchemaData; 
} => {
  const baseUrl = "https://wrappingtheworld.com";
  
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Professional Vinyl Wrap Installation Training",
    "description": "Master the art of vinyl wrap installation with our professional training courses. Learn from industry experts with decades of experience.",
    "provider": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "sameAs": baseUrl
    },
    "offers": {
      "@type": "Offer",
      "category": "Premium",
      "price": "1499",
      "priceCurrency": "USD"
    }
  };
  
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wrapping The World",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+13125971286",
      "contactType": "customer service",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.facebook.com/WrappingTheWorld",
      "https://www.instagram.com/wrappingtheworld",
      "https://twitter.com/WrappingWorld"
    ]
  };
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${baseUrl}/training-classes`,
    "name": "Professional Vinyl Wrap Installation Training Classes",
    "description": "Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts.",
    "isPartOf": {
      "@type": "WebSite",
      "url": baseUrl,
      "name": "Wrapping The World"
    }
  };
  
  return {
    courseSchema,
    orgSchema,
    webPageSchema
  };
};

export const generateVinylWrapTrainingSchemas = (): {
  courseSchema: SchemaData;
  faqSchema: SchemaData;
  reviewSchema: SchemaData;
} => {
  const baseUrl = "https://wrappingtheworld.com";
  
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Vinyl Wrap Installation Training",
    "description": "Comprehensive hands-on training for professional vinyl wrap installation techniques.",
    "provider": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "sameAs": baseUrl
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Beginner Workshop",
        "courseMode": "OnSite",
        "location": {
          "@type": "Place",
          "name": "Wrapping The World Training Center",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "addressCountry": "US"
          }
        },
        "startDate": "2023-06-15",
        "endDate": "2023-06-15",
        "offers": {
          "@type": "Offer",
          "price": "599",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "CourseInstance",
        "name": "Comprehensive Course",
        "courseMode": "OnSite",
        "location": {
          "@type": "Place",
          "name": "Wrapping The World Training Center",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "addressCountry": "US"
          }
        },
        "startDate": "2023-06-20",
        "endDate": "2023-06-22",
        "offers": {
          "@type": "Offer",
          "price": "1499",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "CourseInstance",
        "name": "Professional Certification",
        "courseMode": "OnSite",
        "location": {
          "@type": "Place",
          "name": "Wrapping The World Training Center",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "addressCountry": "US"
          }
        },
        "startDate": "2023-07-10",
        "endDate": "2023-07-14",
        "offers": {
          "@type": "Offer",
          "price": "2499",
          "priceCurrency": "USD"
        }
      }
    ]
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need any prior experience to take your vinyl wrap training courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No prior experience is necessary for our Beginner Workshop. For the Comprehensive Course, basic familiarity with vinyl materials is helpful but not required. Our Professional Certification program is designed for individuals with some experience in applying vinyl who want to take their skills to a master level."
        }
      },
      {
        "@type": "Question",
        "name": "What materials and tools will I need to bring to the training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All materials and tools needed for the training are provided and included in the course fee. We use professional-grade vinyl materials and industry-standard tools during the training."
        }
      },
      {
        "@type": "Question",
        "name": "How many students are in each class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We strictly limit our class sizes to a maximum of 6 students per instructor. This ensures that each student receives personalized attention and ample hands-on practice time."
        }
      }
    ]
  };
  
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Course",
      "name": "Professional Certification Vinyl Wrap Course",
      "provider": {
        "@type": "Organization",
        "name": "Wrapping The World"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Michael Rodriguez"
    },
    "reviewBody": "Taking the Professional Certification course was the best investment I've made for my business. I was able to streamline my installation process and dramatically increase my output quality. The hands-on training with actual vehicles was invaluable."
  };
  
  return {
    courseSchema,
    faqSchema,
    reviewSchema
  };
};
