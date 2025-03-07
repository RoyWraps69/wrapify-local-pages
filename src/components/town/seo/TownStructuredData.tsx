
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
  
  const { name, latitude, longitude, state, population, businessCount, description } = townData;
  
  // Format state name fully
  const stateFullName = 
    state === 'IL' ? 'Illinois' : 
    state === 'MI' ? 'Michigan' : 
    state === 'IN' ? 'Indiana' : 
    state === 'WI' ? 'Wisconsin' : state;
  
  // Create structured data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping The World",
    "description": `Professional vehicle wrapping, ceramic coating, and paint protection services in ${name}, ${stateFullName}.`,
    "url": `https://wrappingtheworld.com/locations/${townSlug}`,
    "logo": "https://wrappingtheworld.com/logo.png",
    "image": "https://wrappingtheworld.com/logo.png",
    "telephone": "312-597-1286",
    "email": "info@wrappingtheworld.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "streetAddress": "4711 N. Lamon Ave"
    },
    "areaServed": {
      "@type": "City",
      "name": name,
      "containedInPlace": {
        "@type": "State",
        "name": stateFullName
      }
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ]
  };

  // Create structured data for the specific service in this town
  const townServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${name} Vehicle Wraps & Ceramic Coatings`,
    "description": `Professional vehicle wrapping and ceramic coating services in ${name}, ${stateFullName}. Serving businesses and individuals with premium vehicle enhancement solutions.`,
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
      "name": name,
      "containedInPlace": {
        "@type": "State",
        "name": stateFullName
      }
    },
    "serviceType": "Vehicle Wraps & Protection",
    "offers": {
      "@type": "Offer",
      "description": `Vehicle wrap and protection services in ${name}, ${stateFullName}.`,
      "areaServed": {
        "@type": "City",
        "name": name
      }
    }
  };

  // Create City/Place schema for better local SEO
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "City",
    "name": name,
    "url": pageUrl,
    "containedInPlace": {
      "@type": "State",
      "name": stateFullName
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "description": description || `${name} is a city in ${stateFullName} with a population of ${population.toLocaleString()} and approximately ${businessCount.toLocaleString()} local businesses.`
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="geo.region" content={`US-${state}`} />
      <meta name="geo.placename" content={name} />
      <meta name="geo.position" content={`${latitude};${longitude}`} />
      <meta name="ICBM" content={`${latitude}, ${longitude}`} />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(townServiceSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(placeSchema)}
      </script>
    </Helmet>
  );
};

export default TownStructuredData;
