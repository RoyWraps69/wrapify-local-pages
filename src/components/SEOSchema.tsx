
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
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chicago Fleet Wraps",
    "image": "https://chicagofleetwraps.com/logo.png",
    "logo": "https://chicagofleetwraps.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wrap Street",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60601",
      "addressCountry": "US"
    },
    "description": `Professional vehicle wrapping and ceramic coating services in ${townName} and surrounding areas. Specializing in commercial fleet wraps, color change wraps, custom vehicle graphics, and business vehicle branding with premium 3M and Avery Dennison materials for maximum visibility and protection.`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "url": "https://chicagofleetwraps.com",
    "telephone": "+13125555555",
    "email": "info@chicagofleetwraps.com",
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
          "description": "Complete branding solutions for business vehicle fleets"
        },
        {
          "@type": "OfferCatalog",
          "name": "Color Change Wraps",
          "description": "Full vehicle color transformation with premium vinyl"
        },
        {
          "@type": "OfferCatalog",
          "name": "Custom Vehicle Graphics",
          "description": "Partial wraps and custom vinyl graphics for vehicles"
        },
        {
          "@type": "OfferCatalog",
          "name": "Ceramic Coating Protection",
          "description": "Premium nano-ceramic protection for vehicle paint"
        },
        {
          "@type": "OfferCatalog",
          "name": "Paint Protection Film",
          "description": "Self-healing clear bra and paint protection solutions"
        }
      ]
    }
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

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://chicagofleetwraps.com/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content="https://chicagofleetwraps.com/twitter-image.jpg" />
      
      {/* Additional meta keywords */}
      <meta name="keywords" content="vehicle wraps, fleet wraps, car wraps, ceramic coating, paint protection film, commercial vehicle branding, vehicle graphics, color change wraps, partial wraps, fleet branding, mobile advertising, Chicago vehicle wraps, fleet branding solutions, custom graphics, hydrophobic paint protection, self-healing PPF, clear bra, stone chip protection, vehicle advertising ROI, mobile billboard" />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

// Create a wrapper component that includes the HelmetProvider
export const SEOWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default SEOSchema;
