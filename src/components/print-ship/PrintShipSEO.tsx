
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrintShipSEO: React.FC = () => {
  // Define key SEO variables
  const pageTitle = "Print & Ship Vehicle Wraps Nationwide | Wrapping The World";
  const pageDescription = "Premium vehicle wraps designed and printed in Chicago, shipped nationwide. Perfect for DIY installers, fleet managers, and wrap shops looking for high-quality wrap materials.";
  const canonicalUrl = "https://wrappingtheworld.com/print-ship";
  
  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Print & Ship Vehicle Wraps",
    "description": "Professional vehicle wrap printing services with nationwide shipping. High-quality vinyl wraps from premium 3M and Avery Dennison materials shipped directly to you or your preferred installer.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      },
      "telephone": "+13125971286",
      "image": "https://wrappingtheworld.com/logo.png",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Call for pricing",
      "availability": "https://schema.org/InStock"
    }
  };

  // Product schema for the wraps
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Vehicle Wrap Print & Ship",
    "description": "Premium quality vinyl wraps designed and printed in Chicago, shipped nationwide for installation by you or your preferred installer.",
    "brand": {
      "@type": "Brand",
      "name": "Wrapping The World"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "500",
      "highPrice": "5000",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "image": "https://wrappingtheworld.com/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png"
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the Print & Ship service work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design and print your vehicle wrap using premium materials in our Chicago facility, then ship the completed graphics directly to you or your preferred installer anywhere in the United States. Each shipment includes detailed installation instructions and support."
        }
      },
      {
        "@type": "Question",
        "name": "What types of vehicles can you print wraps for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can print wraps for virtually any vehicle type including cars, trucks, vans, SUVs, trailers, boats, and specialty vehicles. Each wrap is custom-designed to fit your specific vehicle make and model."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need professional installation for my shipped wrap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While professional installation is recommended for the best results, our Print & Ship service is designed to be installer-friendly. We can connect you with our nationwide network of certified installers, or you can choose a local shop for installation."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to print and ship a vehicle wrap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing varies based on vehicle size, wrap coverage, material quality, design complexity, and shipping distance. We offer options for every budget with complete pricing transparency. Contact us for a detailed quote tailored to your specific requirements."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional meta tags */}
      <meta name="keywords" content="vehicle wrap printing, nationwide vehicle wraps, print and ship car wraps, DIY vehicle wraps, fleet wrap printing, commercial truck wraps, car wrap materials, premium vehicle wraps, 3M vehicle wraps, Avery Dennison wraps" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://wrappingtheworld.com/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://wrappingtheworld.com/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default PrintShipSEO;
