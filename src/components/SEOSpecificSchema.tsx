
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOSpecificSchemaProps {
  schemaType: 'Service' | 'FAQPage' | 'LocalBusiness' | 'Product' | 'BreadcrumbList';
  serviceData?: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    offers?: Array<{
      name: string;
      description: string;
      price?: string;
    }>;
  };
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
  localBusinessData?: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone: string;
    priceRange: string;
    geo: {
      latitude: number;
      longitude: number;
    };
  };
  productData?: {
    name: string;
    description: string;
    image: string;
    brand: string;
    offers: {
      price: number;
      priceCurrency: string;
      availability: string;
    };
  };
  breadcrumbData?: Array<{
    name: string;
    item: string;
  }>;
}

const SEOSpecificSchema: React.FC<SEOSpecificSchemaProps> = ({
  schemaType,
  serviceData,
  faqData,
  localBusinessData,
  productData,
  breadcrumbData
}) => {
  const generateServiceSchema = () => {
    if (!serviceData) return null;

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceData.name,
      "description": serviceData.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": serviceData.provider
      },
      "areaServed": {
        "@type": "City",
        "name": serviceData.areaServed
      }
    };

    if (serviceData.offers && serviceData.offers.length > 0) {
      const offersArray = serviceData.offers.map(offer => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name
        },
        "description": offer.description,
        ...(offer.price && { "price": offer.price }),
        "areaServed": serviceData.areaServed
      }));

      return {
        ...serviceSchema,
        "offers": offersArray
      };
    }

    return serviceSchema;
  };

  const generateFAQSchema = () => {
    if (!faqData || faqData.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  };

  const generateLocalBusinessSchema = () => {
    if (!localBusinessData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": localBusinessData.name,
      "address": {
        "@type": "PostalAddress",
        ...localBusinessData.address
      },
      "telephone": localBusinessData.telephone,
      "priceRange": localBusinessData.priceRange,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": localBusinessData.geo.latitude,
        "longitude": localBusinessData.geo.longitude
      }
    };
  };

  const generateProductSchema = () => {
    if (!productData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": productData.name,
      "description": productData.description,
      "image": productData.image,
      "brand": {
        "@type": "Brand",
        "name": productData.brand
      },
      "offers": {
        "@type": "Offer",
        "price": productData.offers.price,
        "priceCurrency": productData.offers.priceCurrency,
        "availability": productData.offers.availability
      }
    };
  };

  const generateBreadcrumbSchema = () => {
    if (!breadcrumbData || breadcrumbData.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbData.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.item
      }))
    };
  };

  const getSchemaMarkup = () => {
    switch (schemaType) {
      case 'Service':
        return generateServiceSchema();
      case 'FAQPage':
        return generateFAQSchema();
      case 'LocalBusiness':
        return generateLocalBusinessSchema();
      case 'Product':
        return generateProductSchema();
      case 'BreadcrumbList':
        return generateBreadcrumbSchema();
      default:
        return null;
    }
  };

  const schema = getSchemaMarkup();
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEOSpecificSchema;
