
// Schema generator for Print & Ship page

export const generatePrintShipServiceSchema = () => {
  return {
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
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/wrappingtheworld",
        "https://www.instagram.com/wrappingtheworld",
        "https://twitter.com/wrappingworld",
        "https://www.linkedin.com/company/wrapping-the-world"
      ]
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
    },
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wrappingtheworld.com/print-ship",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Order",
        "orderStatus": "http://schema.org/OrderProcessing"
      }
    }
  };
};

export const generatePrintShipProductSchema = () => {
  return {
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
    "image": "https://wrappingtheworld.com/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John Smith"
      },
      "reviewBody": "Excellent quality wraps, detailed installation instructions, and fast nationwide shipping. My fleet looks amazing!"
    }
  };
};

export const generatePrintShipFAQSchema = () => {
  return {
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
      },
      {
        "@type": "Question",
        "name": "What materials do you use for your wraps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We exclusively use premium 3M and Avery Dennison vinyl wrap materials that offer superior durability, color retention, and ease of installation. These professional-grade materials are designed to withstand harsh weather conditions and provide long-lasting results."
        }
      },
      {
        "@type": "Question",
        "name": "How long does shipping take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard shipping typically takes 3-5 business days nationwide. Expedited shipping options are available for time-sensitive projects. Production time varies based on design complexity and current workload, but typically ranges from 5-10 business days after design approval."
        }
      }
    ]
  };
};
