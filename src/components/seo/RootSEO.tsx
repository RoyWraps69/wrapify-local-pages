
import React from 'react';
import GlobalMetaTags from './GlobalMetaTags';
import SchemaMarkup from './SchemaMarkup';

interface RootSEOProps {
  canonicalUrl?: string;
}

/**
 * Root SEO component with global settings for all pages
 * This provides the base SEO elements following Google's best practices
 */
const RootSEO: React.FC<RootSEOProps> = ({ canonicalUrl }) => {
  return (
    <>
      <GlobalMetaTags />
      <SchemaMarkup canonicalUrl={canonicalUrl} />
    </>
  );
};

export default RootSEO;
