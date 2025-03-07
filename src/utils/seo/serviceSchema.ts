
interface ServiceSchemaProps {
  townName: string;
}

export const createServiceSchema = ({ townName }: ServiceSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Vehicle Wrapping & Protection Services in ${townName}`,
    "serviceType": "Vehicle Wraps and Ceramic Coatings",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World"
    },
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "description": `Premium quality vehicle wrapping and ceramic coating services for businesses and individuals in ${townName}. Commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom graphics using 3M and Avery Dennison materials.`,
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Fleet Wrapping"
        },
        "description": `Professional fleet vehicle branding for ${townName} businesses - transform vehicles into mobile billboards`,
        "areaServed": townName
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Color Change Wraps"
        },
        "description": `Complete vehicle color transformation services in ${townName} with premium vinyl materials`,
        "areaServed": townName
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Coating Protection"
        },
        "description": `Long-lasting hydrophobic nano-ceramic protection for vehicles in ${townName}`,
        "areaServed": townName
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paint Protection Film"
        },
        "description": `Self-healing clear bra and stone chip protection for ${townName} vehicles`,
        "areaServed": townName
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Partial Vehicle Wraps"
        },
        "description": `Cost-effective partial wraps and custom graphics for vehicles in ${townName}`,
        "areaServed": townName
      }
    ]
  };
};
