
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  generatePrintShipServiceSchema,
  generatePrintShipProductSchema,
  generatePrintShipFAQSchema
} from '@/utils/seo/printShipSchemas';

const PrintShipSEO: React.FC = () => {
  // Define key SEO variables
  const pageTitle = "Print & Ship Vehicle Wraps Nationwide | Wrapping The World";
  const pageDescription = "Premium vehicle wraps designed and printed in Chicago, shipped nationwide. Perfect for DIY installers, fleet managers, and wrap shops looking for high-quality wrap materials.";
  const canonicalUrl = "https://wrappingtheworld.com/print-ship";
  
  // Generate structured data schemas
  const serviceSchema = generatePrintShipServiceSchema();
  const productSchema = generatePrintShipProductSchema();
  const faqSchema = generatePrintShipFAQSchema();

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Enhanced meta tags */}
      <meta name="keywords" content="vehicle wrap printing, nationwide vehicle wraps, print and ship car wraps, DIY vehicle wraps, fleet wrap printing, commercial truck wraps, car wrap materials, premium vehicle wraps, 3M vehicle wraps, Avery Dennison wraps, vehicle graphics shipping, wrap installation support" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://wrappingtheworld.com/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png" />
      <meta property="og:site_name" content="Wrapping The World" />
      <meta property="og:locale" content="en-US" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://wrappingtheworld.com/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png" />
      
      {/* Technical SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Wrapping The World" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="content-language" content="en-us" />
      
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
