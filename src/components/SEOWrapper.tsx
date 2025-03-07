
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component to provide Helmet context for all pages
 * This allows us to manage SEO across the site in a consistent way
 * while enabling page-specific optimizations
 */
const SEOWrapper: React.FC<SEOWrapperProps> = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default SEOWrapper;
