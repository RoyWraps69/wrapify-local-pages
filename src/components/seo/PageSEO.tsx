
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface PageSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  keywords?: string;
  children?: React.ReactNode;
  noindex?: boolean;
  structuredData?: any[];
  location?: string;
  modifiedTime?: string;
  publishedTime?: string;
}

/**
 * Core SEO component that handles all basic SEO needs for every page
 * following Google's best practices
 */
const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://wrappingtheworld.com/og-image.jpg',
  keywords,
  children,
  noindex = false,
  structuredData = [],
  location,
  modifiedTime,
  publishedTime
}) => {
  const baseUrl = 'https://wrappingtheworld.com';
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots Control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Wrapping The World" />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Geo Location Tags */}
      {location === 'Chicago' && (
        <>
          <meta name="geo.region" content="US-IL" />
          <meta name="geo.placename" content="Chicago" />
          <meta name="geo.position" content="41.8781;-87.6298" />
          <meta name="ICBM" content="41.8781, -87.6298" />
        </>
      )}
      
      {/* Add all structured data schemas */}
      {structuredData.map((schema, index) => (
        <script key={`structured-data-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Additional child elements for page-specific SEO needs */}
      {children}
    </Helmet>
  );
};

export default PageSEO;
