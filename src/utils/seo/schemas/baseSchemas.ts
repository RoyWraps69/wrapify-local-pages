
// Base schema utility functions

export const generateWebPageSchema = ({
  pageTitle,
  pageDescription,
  pageUrl,
  imageUrl,
  datePublished,
  dateModified
}: {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl.startsWith('http') ? pageUrl : `https://wrappingtheworld.com${pageUrl}`,
    "image": imageUrl.startsWith('http') ? imageUrl : `https://wrappingtheworld.com${imageUrl}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wrappingtheworld.com/logo.png"
      }
    }
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wrapping The World",
    "url": "https://wrappingtheworld.com",
    "logo": "https://wrappingtheworld.com/logo.png",
    "description": "Premium vehicle wrapping, ceramic coating, and paint protection film services throughout Illinois, Indiana, Michigan, and Wisconsin.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wrapping Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60607",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+13125971286",
      "contactType": "customer service",
      "areaServed": "Midwest United States",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/wrappingtheworld",
      "https://instagram.com/wrappingtheworld",
      "https://linkedin.com/company/wrappingtheworld",
      "https://youtube.com/wrappingtheworld"
    ]
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
};
