
import React from 'react';
import PageSEO from '@/components/seo/PageSEO';

interface HomePageSchemaProps {
  townName?: string;
  topTownNames: string;
}

const HomePageSchema: React.FC<HomePageSchemaProps> = ({ 
  townName = 'Chicago',
  topTownNames 
}) => {
  // Homepage schema for structured data
  const homePageSchema = [
    // Home page schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Professional Vehicle Wrapping & Ceramic Coating Services | Wrapping The World",
      "description": `Transform your vehicles with premium wraps and protection from Wrapping The World. Commercial fleet wraps, ceramic coatings, paint protection film, color change wraps, and custom graphics for businesses across ${townName} and surrounding towns.`,
      "url": "https://wrappingtheworld.com",
      "lastReviewed": new Date().toISOString().split('T')[0]
    },
    
    // Business schema
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Wrapping The World",
      "image": "https://wrappingtheworld.com/logo.png",
      "description": `Professional vehicle wrapping, ceramic coating, and paint protection services for commercial and personal vehicles throughout ${townName} and the Midwest.`,
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
      "telephone": "+13125971286",
      "priceRange": "$$",
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
          "@type": "City",
          "name": "Chicago"
        },
        {
          "@type": "State",
          "name": "Illinois"
        }
      ]
    }
  ];
  
  return (
    <PageSEO 
      title="Professional Vehicle Wrapping & Ceramic Coating Services | Wrapping The World"
      description={`Transform your vehicles with premium wraps and protection from Wrapping The World. Commercial fleet wraps, ceramic coatings, paint protection film, color change wraps, and custom graphics for businesses across ${townName} and surrounding towns.`}
      canonicalUrl="https://wrappingtheworld.com"
      keywords={`vehicle wraps ${townName}, car wraps ${townName}, fleet wraps ${townName}, ceramic coating ${townName}, paint protection film ${townName}, commercial vehicle wraps, mobile advertising, business vehicle branding, ${topTownNames} vehicle wraps`}
      location={townName}
      structuredData={homePageSchema}
    >
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={townName} />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      <meta name="revisit-after" content="3 days" />
    </PageSEO>
  );
};

export default HomePageSchema;
