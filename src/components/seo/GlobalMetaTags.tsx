
import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Component for standard meta tags used across the site
 */
const GlobalMetaTags: React.FC = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Open Graph Default Tags */}
      <meta property="og:site_name" content="Wrapping The World" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Default Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wrappingworld" />
      
      {/* Google Search Console Verification (placeholder) */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      
      {/* Default robots instructions */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Language and country */}
      <meta httpEquiv="content-language" content="en-us" />
      
      {/* Preconnect to essential third-party domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};

export default GlobalMetaTags;
