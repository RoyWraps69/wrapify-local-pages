
interface LocalBusinessSchemaProps {
  townName: string;
  townSlug: string;
}

export const createLocalBusinessSchema = ({ townName, townSlug }: LocalBusinessSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Wrapping The World - ${townName} Vehicle Wrapping Services`,
    "description": `Professional vehicle wrapping and ceramic coating services in ${townName}, Illinois. We specialize in commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom graphics using premium 3M and Avery Dennison materials.`,
    "image": "https://wrappingtheworld.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": townName,
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "url": `https://wrappingtheworld.com/locations/${townSlug}`,
    "telephone": "+13125971286",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "50"
    }
  };
};
