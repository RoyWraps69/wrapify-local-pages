
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceInfo } from '@/data/serviceData';

interface ServiceSEOProps {
  service: ServiceInfo;
  serviceType?: string;
}

const ServiceSEO: React.FC<ServiceSEOProps> = ({ service, serviceType }) => {
  const pageTitle = `${service.title} | Wrapping The World`;
  const pageDescription = service.description;
  const canonicalUrl = `https://wrappingtheworld.com/services/${serviceType}`;
  
  // Generate schema for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
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
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "150"
    },
    "image": service.hero || "https://wrappingtheworld.com/og-image.jpg",
    "serviceType": "Vehicle Enhancement Services",
    "offers": {
      "@type": "Offer",
      "price": "Call for pricing",
      "priceCurrency": "USD"
    }
  };

  // Generate FAQ schema for service FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does ${service.title.toLowerCase()} cost?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The cost of ${service.title.toLowerCase()} varies based on vehicle size, complexity, and specific requirements. Contact us for a personalized quote tailored to your needs.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does ${service.title.toLowerCase()} last?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `With proper care and maintenance, our professional ${service.title.toLowerCase()} typically lasts 5-7 years. We use premium materials and expert installation techniques to ensure maximum durability and longevity.`
        }
      },
      {
        "@type": "Question",
        "name": `What are the benefits of ${service.title.toLowerCase()}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${service.benefits.map(benefit => benefit.title).join(', ')}. Our ${service.title.toLowerCase()} services provide exceptional quality and long-lasting results for your vehicle.`
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO metadata */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={service.hero || "https://wrappingtheworld.com/og-image.jpg"} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      
      {/* Keywords based on service type */}
      <meta name="keywords" content={`${service.title}, vehicle wraps Chicago, ${service.title.toLowerCase()} Chicago, ${service.title.toLowerCase()} Midwest, professional ${service.title.toLowerCase()}, ${service.title.toLowerCase()} cost, ${service.title.toLowerCase()} installation, premium ${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, Chicago ${service.title.toLowerCase()}, best ${service.title.toLowerCase()} company`} />
      
      {/* Structured data for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default ServiceSEO;
