
interface BusinessSchemaProps {
  townName: string;
}

export const createBusinessSchema = ({ townName }: BusinessSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping The World",
    "image": "https://wrappingtheworld.com/logo.png",
    "logo": "https://wrappingtheworld.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "description": `Professional vehicle wrapping and ceramic coating services in ${townName} and surrounding areas. Specializing in commercial fleet wraps, color change wraps, custom vehicle graphics, and business vehicle branding with premium 3M and Avery Dennison materials for maximum visibility and protection.`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "url": "https://wrappingtheworld.com",
    "telephone": "+13125971286",
    "email": "info@wrappingtheworld.com",
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
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": townName
      },
      {
        "@type": "City",
        "name": "Chicago"
      },
      {
        "@type": "State",
        "name": "Illinois"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/wrappingtheworld",
      "https://www.instagram.com/wrappingtheworld",
      "https://twitter.com/wrappingworld",
      "https://www.linkedin.com/company/wrapping-the-world"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Commercial Fleet Wraps",
          "description": `Complete branding solutions for business vehicle fleets in ${townName}`
        },
        {
          "@type": "OfferCatalog",
          "name": "Color Change Wraps",
          "description": `Full vehicle color transformation with premium vinyl in ${townName}`
        },
        {
          "@type": "OfferCatalog",
          "name": "Custom Vehicle Graphics",
          "description": `Partial wraps and custom vinyl graphics for vehicles in ${townName}`
        },
        {
          "@type": "OfferCatalog",
          "name": "Ceramic Coating Protection",
          "description": `Premium nano-ceramic protection for vehicle paint in ${townName}`
        },
        {
          "@type": "OfferCatalog",
          "name": "Paint Protection Film",
          "description": `Self-healing clear bra and paint protection solutions for ${townName} vehicles`
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Johnson"
        },
        "datePublished": "2023-05-15",
        "reviewBody": `Wrapping The World did an amazing job wrapping our entire delivery fleet. The attention to detail was impressive and the wraps have held up perfectly even with daily use throughout ${townName} and Chicago.`,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Williams"
        },
        "datePublished": "2023-08-22",
        "reviewBody": `I had my personal car wrapped with a color change and ceramic coated by Wrapping The World. The transformation is incredible and the protection has been excellent through Chicago's weather.`,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };
};
