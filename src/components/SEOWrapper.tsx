
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component to provide Helmet context for all pages
 * This allows us to manage SEO across the site in a consistent way
 * while enabling page-specific optimizations
 * 
 * Note: This component is now redundant since we're using HelmetProvider at the App level,
 * but keeping it for backwards compatibility.
 */
const SEOWrapper: React.FC<SEOWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default SEOWrapper;
