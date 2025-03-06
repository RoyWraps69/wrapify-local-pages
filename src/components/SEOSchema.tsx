import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOSchemaProps {
  townName: string;
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
}

const SEOSchema: React.FC<SEOSchemaProps> = ({
  townName,
  pageTitle,
  pageDescription,
  pageUrl,
}) => {
  const townKeywords = `vehicle wraps ${townName}, car wrapping ${townName}, fleet wraps ${townName}, commercial vehicle branding ${townName}, ceramic coating ${townName}, paint protection film ${townName}, auto wraps ${townName}, business fleet branding ${townName}, commercial vehicle graphics ${townName}, color change wraps ${townName}, custom vehicle graphics ${townName}, car protection ${townName}, mobile advertising ${townName}, vehicle branding ${townName}`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chicago Fleet Wraps",
    "image": "https://chicagofleetwraps.com/logo.png",
    "logo": "https://chicagofleetwraps.com/logo.png",
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
    "url": "https://chicagofleetwraps.com",
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
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
      "https://www.facebook.com/chicagofleetwraps",
      "https://www.instagram.com/chicagofleetwraps",
      "https://twitter.com/chifleetwraps",
      "https://www.linkedin.com/company/chicago-fleet-wraps"
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
        "reviewBody": `Chicago Fleet Wraps did an amazing job wrapping our entire delivery fleet. The attention to detail was impressive and the wraps have held up perfectly even with daily use throughout ${townName} and Chicago.`,
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
        "reviewBody": `I had my personal car wrapped with a color change and ceramic coated by Chicago Fleet Wraps. The transformation is incredible and the protection has been excellent through Chicago's weather.`,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Vehicle Wrapping & Protection Services in ${townName}`,
    "serviceType": "Vehicle Wraps and Ceramic Coatings",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chicago Fleet Wraps"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Where can I get a professional car wrap in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Chicago Fleet Wraps provides premium vehicle wrapping services in ${townName} and surrounding areas. Our shop is conveniently located for all ${townName} residents and businesses, offering complete fleet branding, color change wraps, ceramic coatings, paint protection film, and custom vehicle graphics.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does it cost to wrap a vehicle in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The cost of wrapping a vehicle in ${townName} varies depending on several factors including vehicle size, complexity of the surface area, type of wrap (commercial, color change, partial), quality of vinyl used, and design complexity. Commercial fleet wraps typically range from $2,500-$5,000 per vehicle, while premium color change wraps range from $3,000-$6,000 depending on vehicle size. Contact us for a free, personalized quote specific to your vehicle and requirements.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does a professional vehicle wrap last in ${townName}'s climate?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A professional vehicle wrap installed by Chicago Fleet Wraps typically lasts 5-7 years in ${townName}'s climate. We use premium 3M and Avery Dennison vinyl materials specifically designed to withstand local weather conditions, including hot summers and cold winters. With proper maintenance and care, commercial fleet wraps and color change wraps can maintain their appearance and effectiveness throughout this period.`
        }
      },
      {
        "@type": "Question",
        "name": `Will a vehicle wrap damage my car's paint?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No, a professionally installed vehicle wrap from Chicago Fleet Wraps will not damage your car's paint. In fact, wraps provide protection for your vehicle's original paint from UV rays, minor scratches, and small debris. When removed correctly by our ${townName} experts, your original paint will remain in the same condition as when it was wrapped, often in better condition than exposed painted surfaces.`
        }
      },
      {
        "@type": "Question",
        "name": `What types of businesses benefit most from fleet wraps in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Many types of businesses in ${townName} benefit from professional fleet wraps, including: service businesses (plumbing, electrical, HVAC), delivery services, construction companies, real estate agencies, food and catering businesses, retail stores with delivery vehicles, and any business with vehicles that travel throughout ${townName}. Fleet wraps transform ordinary vehicles into powerful mobile advertising that generates thousands of impressions daily.`
        }
      },
      {
        "@type": "Question",
        "name": `What is ceramic coating and how does it protect my vehicle in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Ceramic coating is a liquid polymer applied to your vehicle's exterior that creates a permanent bond with the factory paint, providing superior protection. In ${townName}'s varied climate, ceramic coating offers exceptional protection against UV damage, oxidation, road salt, chemical stains, and environmental contaminants. It creates a hydrophobic surface that repels water, making your vehicle easier to clean while enhancing gloss and preserving color depth for years.`
        }
      },
      {
        "@type": "Question",
        "name": `What's the difference between ceramic coating and paint protection film (PPF) for my ${townName} vehicle?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While both protect your vehicle, they serve different purposes for ${townName} drivers. Ceramic coating provides excellent chemical resistance, enhanced gloss, and makes cleaning easier, but offers minimal physical protection. Paint Protection Film (PPF or clear bra) is a thicker, self-healing film that provides superior protection against rock chips, scratches, and physical damage. Many ${townName} clients choose to combine both: PPF on high-impact areas and ceramic coating over the entire vehicle for comprehensive protection.`
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Chicago Fleet Wraps - ${townName} Vehicle Wrapping Services`,
    "description": `Professional vehicle wrapping and ceramic coating services in ${townName}, Illinois. We specialize in commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom graphics using premium 3M and Avery Dennison materials.`,
    "image": "https://chicagofleetwraps.com/logo.png",
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
    "url": `https://chicagofleetwraps.com/locations/${townName.toLowerCase().replace(/\s+/g, '-')}`,
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

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      
      <meta name="keywords" content={townKeywords} />
      <meta name="author" content="Chicago Fleet Wraps" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="content-language" content="en-us" />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://chicagofleetwraps.com/og-image.jpg" />
      <meta property="og:site_name" content="Chicago Fleet Wraps" />
      <meta property="og:locale" content="en_US" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content="https://chicagofleetwraps.com/twitter-image.jpg" />
      
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export const SEOWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default SEOSchema;
