
import React from 'react';

interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that provides children without additional context
 * since HelmetProvider is now at the App level
 */
const SEOWrapper: React.FC<SEOWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default SEOWrapper;
