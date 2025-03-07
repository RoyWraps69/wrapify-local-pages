
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

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={`https://wrappingtheworld.com/services/${serviceType}`} />
      
      {/* Additional SEO metadata */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://wrappingtheworld.com/services/${serviceType}`} />
      <meta property="og:image" content="https://wrappingtheworld.com/og-image.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
};

export default ServiceSEO;
