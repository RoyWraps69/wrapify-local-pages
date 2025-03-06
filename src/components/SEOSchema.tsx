
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wrap Street",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60601",
      "addressCountry": "US"
    },
    "description": `Professional vehicle wrapping services in ${townName} and surrounding areas. Specializing in commercial fleet wraps, color change wraps, and custom vehicle graphics.`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "url": pageUrl,
    "telephone": "+13125555555",
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
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "sameAs": [
      "https://www.facebook.com/chicagofleetwraps",
      "https://www.instagram.com/chicagofleetwraps",
      "https://twitter.com/chifleetwraps",
      "https://www.linkedin.com/company/chicago-fleet-wraps"
    ]
  };
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Vehicle Wrapping Services in ${townName}`,
    "serviceType": "Vehicle Wraps",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chicago Fleet Wraps"
    },
    "areaServed": {
      "@type": "City",
      "name": townName
    },
    "description": `Professional vehicle wrapping services for businesses and individuals in ${townName}. Commercial fleet wraps, color change wraps, and custom graphics.`,
    "offers": {
      "@type": "Offer",
      "price": "1000.00",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1000.00",
        "priceCurrency": "USD",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": "1",
          "unitText": "VEHICLE"
        }
      }
    }
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Where can I get a car wrap in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Chicago Fleet Wraps provides premium vehicle wrapping services in ${townName} and surrounding areas. Our shop is conveniently located for all ${townName} residents and businesses.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does it cost to wrap a vehicle in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The cost of wrapping a vehicle in ${townName} varies depending on several factors including vehicle size, complexity of the surface area, type of wrap, quality of vinyl used, and design complexity. Contact us for a free, personalized quote specific to your vehicle and requirements.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does a vehicle wrap last in ${townName}'s climate?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A professional vehicle wrap installed by Chicago Fleet Wraps typically lasts 5-7 years in ${townName}'s climate. We use premium vinyl materials specifically designed to withstand local weather conditions, including hot summers and cold winters.`
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

export default SEOSchema;
