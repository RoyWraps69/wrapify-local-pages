
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  generateOrganizationSchema, 
  generateWebsiteSchema,
  generateLocalBusinessSchema
} from '@/utils/seo/schemas/rootSchemas';

interface SchemaMarkupProps {
  canonicalUrl?: string;
}

/**
 * Component for schema.org structured data
 */
const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ canonicalUrl }) => {
  const siteUrl = canonicalUrl || 'https://wrappingtheworld.com';
  
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  
  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
