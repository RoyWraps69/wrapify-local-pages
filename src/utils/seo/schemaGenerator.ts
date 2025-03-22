
// src/utils/seo/schemaGenerator.ts

type SchemaData = {
  [key: string]: any;
};

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
