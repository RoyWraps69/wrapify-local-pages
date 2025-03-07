import { FAQ } from '@/components/insurance/InsuranceFAQSection';

interface SchemaGeneratorProps {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  townName?: string;
  faqs?: FAQ[];
  breadcrumbs?: {name: string, url: string}[];
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
}

/**
 * Generates WebPage schema following Google's best practices
 */
export const generateWebPageSchema = ({
  pageTitle,
  pageDescription,
  pageUrl,
  imageUrl,
  datePublished,
  dateModified,
}: SchemaGeneratorProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
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

/**
 * Generates Organization schema
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wrapping The World",
    "url": "https://wrappingtheworld.com",
    "logo": "https://wrappingtheworld.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/wrappingtheworld",
      "https://www.instagram.com/wrappingtheworld",
      "https://twitter.com/wrappingworld",
      "https://www.linkedin.com/company/wrapping-the-world"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+13125971286",
      "contactType": "customer service"
    }
  };
};

/**
 * Generates LocalBusiness schema
 */
export const generateLocalBusinessSchema = ({ townName = "Chicago" }: SchemaGeneratorProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Wrapping The World - ${townName} Vehicle Wrapping Services`,
    "description": `Professional vehicle wrapping and ceramic coating services in ${townName}, Illinois. We specialize in commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom graphics.`,
    "image": "https://wrappingtheworld.com/logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "url": "https://wrappingtheworld.com",
    "telephone": "+13125971286",
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
        "closes": "15:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": townName
    }
  };
};

/**
 * Generates Service schema
 */
export const generateServiceSchema = ({ 
  pageTitle, 
  pageDescription, 
  pageUrl, 
  townName = "Chicago" 
}: SchemaGeneratorProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "serviceType": "Vehicle Wraps & Protection"
  };
};

/**
 * Generates Article schema for blog posts
 */
export const generateArticleSchema = ({
  pageTitle,
  pageDescription,
  pageUrl,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  publisherName = "Wrapping The World",
  publisherLogo = "https://wrappingtheworld.com/logo.png"
}: SchemaGeneratorProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };
};

/**
 * Generates Insurance schema for insurance pages
 */
export const generateInsuranceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Vehicle Wrap Insurance Plans",
    "description": "Protective insurance plans for vehicle wraps including coverage for damage, tear, scratches, fading, and peeling, with professional removal guarantees.",
    "category": "Vehicle Protection",
    "provider": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "url": "https://wrappingtheworld.com"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Silver Plan",
        "description": "Basic wrap protection with email support and up to $1,500 in removal costs coverage",
        "priceCurrency": "USD",
        "price": "14.99",
        "duration": "P1M",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Gold Plan",
        "description": "Premium wrap protection with phone support and up to $750 in removal costs coverage",
        "priceCurrency": "USD",
        "price": "29.99",
        "duration": "P1M",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Platinum Plan",
        "description": "Ultimate wrap protection with priority support and completely free wrap removal",
        "priceCurrency": "USD",
        "price": "49.99",
        "duration": "P1M",
        "availability": "https://schema.org/InStock"
      }
    ]
  };
};

/**
 * Generates FAQ schema from FAQ items
 */
export const generateFAQSchema = (faqs: FAQ[] = []) => {
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
 * Generates BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (breadcrumbs: {name: string, url: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

/**
 * Generates Product schema for shop items
 */
export const generateProductSchema = ({
  pageTitle,
  pageDescription,
  pageUrl,
  imageUrl,
}: SchemaGeneratorProps & {
  sku?: string;
  price?: number;
  currency?: string;
  availability?: string;
  brand?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": pageTitle,
    "description": pageDescription,
    "image": imageUrl,
    "url": pageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Wrapping The World"
    },
    "offers": {
      "@type": "Offer",
      "url": pageUrl,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
};

/**
 * Generates all schemas needed for insurance pages
 */
export const generateInsuranceSchemas = () => {
  return {
    insuranceSchema: generateInsuranceSchema(),
    orgSchema: generateOrganizationSchema(),
    webPageSchema: generateWebPageSchema({
      pageTitle: "Vehicle Wrap Insurance Plans | Wrapping The World",
      pageDescription: "Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority support.",
      pageUrl: "https://wrappingtheworld.com/wrap-insurance",
      imageUrl: "https://wrappingtheworld.com/images/wrap-insurance-plans.jpg",
      datePublished: "2023-01-15T08:00:00+08:00",
      dateModified: new Date().toISOString()
    })
  };
};

/**
 * Generates warranty schema for warranty information
 */
export const generateWarrantySchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WarrantyPromise",
    "durationOfWarranty": "P5Y", // ISO 8601 duration format for 5 years
    "warrantyScope": "Vehicle wraps, ceramic coatings, and paint protection film installations",
    "description": "Comprehensive 5-year warranty on all professional vehicle wraps, ceramic coatings, and paint protection film installed by Wrapping The World certified technicians."
  };
};

/**
 * Generates all schemas needed for warranty pages
 */
export const generateWarrantySchemas = () => {
  return {
    warrantySchema: generateWarrantySchema(),
    orgSchema: generateOrganizationSchema(),
    webPageSchema: generateWebPageSchema({
      pageTitle: "Warranty Information | Wrapping The World",
      pageDescription: "Learn about our comprehensive 5-year warranty on all professional vehicle wraps, ceramic coatings, and paint protection film installations.",
      pageUrl: "https://wrappingtheworld.com/warranty-information",
      imageUrl: "https://wrappingtheworld.com/images/warranty-info.jpg",
      datePublished: "2023-01-15T08:00:00+08:00",
      dateModified: new Date().toISOString()
    })
  };
};

/**
 * Generates CourseSchema for training classes
 */
export const generateCourseSchema = ({
  courseName = "Professional Vinyl Wrap Installation Training",
  courseDescription = "Master the art of vinyl wrap installation with our professional training classes taught by industry experts with 30+ years of experience.",
  providerName = "Wrapping The World",
  courseURL = "https://wrappingtheworld.com/training-classes",
  courseOffers = [
    {
      name: "1-Day Intensive Training",
      price: "750.00",
      description: "Basic introduction to vinyl wrap installation techniques"
    },
    {
      name: "3-Day Comprehensive Training",
      price: "1200.00",
      description: "Intermediate vinyl wrap installation techniques for more complex applications"
    },
    {
      name: "5-Day Master Class",
      price: "1800.00",
      description: "Advanced vinyl wrap installation techniques for professional installers"
    }
  ]
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": courseDescription,
    "provider": {
      "@type": "Organization",
      "name": providerName,
      "sameAs": "https://wrappingtheworld.com"
    },
    "url": courseURL,
    "offers": courseOffers.map(offer => ({
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": "USD",
      "name": offer.name,
      "description": offer.description
    }))
  };
};

/**
 * Generates all schemas needed for training classes page
 */
export const generateTrainingClassesSchemas = () => {
  return {
    courseSchema: generateCourseSchema({}),
    orgSchema: generateOrganizationSchema(),
    webPageSchema: generateWebPageSchema({
      pageTitle: "Professional Vinyl Wrap Installation Training | 30 Years Experience",
      pageDescription: "Master the art of vinyl wrap installation with our professional training classes. Choose from 1, 3, or 5-day intensive courses taught by industry experts with 30+ years of experience.",
      pageUrl: "https://wrappingtheworld.com/training-classes",
      imageUrl: "https://wrappingtheworld.com/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png",
      datePublished: "2023-05-15T08:00:00+08:00",
      dateModified: new Date().toISOString()
    })
  };
};
