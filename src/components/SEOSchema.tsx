
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createBusinessSchema } from '@/utils/seo/businessSchema';
import { createServiceSchema } from '@/utils/seo/serviceSchema';
import { createFAQSchema } from '@/utils/seo/faqSchema';
import { createLocalBusinessSchema } from '@/utils/seo/localBusinessSchema';
import { generateTownKeywords } from '@/utils/seo/keywords';

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
  // Extract town slug for URLs
  const townSlug = townName.toLowerCase().replace(/\s+/g, '-');
  
  // Generate keywords for this town
  const townKeywords = generateTownKeywords(townName);

  // Generate structured data objects using our utility functions
  const businessSchema = createBusinessSchema({ townName });
  const serviceSchema = createServiceSchema({ townName });
  const faqSchema = createFAQSchema({ townName });
  const localBusinessSchema = createLocalBusinessSchema({ 
    townName, 
    townSlug 
  });

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      
      <meta name="keywords" content={townKeywords} />
      <meta name="author" content="Wrapping The World" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="content-language" content="en-us" />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://wrappingtheworld.com/og-image.jpg" />
      <meta property="og:site_name" content="Wrapping The World" />
      <meta property="og:locale" content="en_US" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content="https://wrappingtheworld.com/twitter-image.jpg" />
      
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
