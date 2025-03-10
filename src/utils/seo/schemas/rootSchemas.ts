
/**
 * Root schema generators for the application
 * These are used for the global schema markup across the site
 */

/**
 * Generates the Organization schema 
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
      "https://www.linkedin.com/company/wrapping-the-world",
      "https://www.youtube.com/c/wrappingtheworld"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-312-597-1286",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    }
  };
};

/**
 * Generates the Website schema
 */
export const generateWebsiteSchema = () => {
  const currentYear = new Date().getFullYear();
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wrapping The World",
    "url": "https://wrappingtheworld.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://wrappingtheworld.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Professional vehicle wrapping, ceramic coating, and paint protection services for commercial and personal vehicles. Serving Chicago and the Midwest with premium vehicle transformation solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wrappingtheworld.com/logo.png"
      }
    },
    "inLanguage": "en-US",
    "copyrightYear": currentYear,
    "dateModified": `${currentYear}-${new Date().toISOString().slice(5, 10)}`
  };
};

/**
 * Generates the Local Business schema
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping The World",
    "image": "https://wrappingtheworld.com/logo.png",
    "logo": "https://wrappingtheworld.com/logo.png",
    "@id": "https://wrappingtheworld.com/#localbusiness",
    "url": "https://wrappingtheworld.com",
    "telephone": "+13125971286",
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
    "areaServed": [
      {
        "@type": "State",
        "name": "Illinois"
      },
      {
        "@type": "State",
        "name": "Indiana"
      },
      {
        "@type": "State",
        "name": "Michigan"
      },
      {
        "@type": "State",
        "name": "Wisconsin"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrapping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Fleet Wraps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coatings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Protection Film"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Print & Ship Vehicle Wraps"
          }
        }
      ]
    }
  };
};
