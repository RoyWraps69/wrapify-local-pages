
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
  language?: string;
  author?: string;
  breadcrumbs?: Array<{name: string, url: string}>;
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
  publishedTime,
  language = 'en_US',
  author = 'Wrapping The World',
  breadcrumbs
}) => {
  const baseUrl = 'https://wrappingtheworld.com';
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  // Generate breadcrumb schema if breadcrumbs are provided
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`
      }))
    };
  }
  
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
      <meta property="og:locale" content={language} />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Author */}
      <meta name="author" content={author} />
      
      {/* Geo Location Tags */}
      {location === 'Chicago' && (
        <>
          <meta name="geo.region" content="US-IL" />
          <meta name="geo.placename" content="Chicago" />
          <meta name="geo.position" content="41.8781;-87.6298" />
          <meta name="ICBM" content="41.8781, -87.6298" />
        </>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
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
