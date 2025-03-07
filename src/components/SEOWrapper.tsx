
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component to provide Helmet context for all pages
 */
const SEOWrapper: React.FC<SEOWrapperProps> = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default SEOWrapper;
