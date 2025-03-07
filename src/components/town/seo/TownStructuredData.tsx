
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface TownStructuredDataProps {
  townData: any;
  townSlug: string;
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  canonicalUrl: string;
}

const TownStructuredData: React.FC<TownStructuredDataProps> = ({
  townData,
  townSlug,
  pageTitle,
  pageDescription,
  pageUrl,
  canonicalUrl
}) => {
  if (!townData) return null;
  
  const { name, latitude, longitude } = townData;
  
  // Create structured data for the town page - optimized for better performance
  const townStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${name} Vehicle Wraps & Ceramic Coatings`,
    "description": `Professional vehicle wrapping and ceramic coating services in ${name}.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL"
      },
      "telephone": "312-597-1286",
      "url": "https://wrappingtheworld.com"
    },
    "areaServed": {
      "@type": "City",
      "name": name
    },
    "serviceType": "Vehicle Wraps & Protection"
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={name} />
      <meta name="geo.position" content={`${latitude};${longitude}`} />
      <meta name="ICBM" content={`${latitude}, ${longitude}`} />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      
      <script type="application/ld+json">
        {JSON.stringify(townStructuredData)}
      </script>
    </Helmet>
  );
};

export default TownStructuredData;
