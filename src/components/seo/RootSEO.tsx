
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface RootSEOProps {
  canonicalUrl?: string;
}

/**
 * Root SEO component with global settings for all pages
 * This provides the base SEO elements following Google's best practices
 */
const RootSEO: React.FC<RootSEOProps> = ({ canonicalUrl }) => {
  const siteUrl = canonicalUrl || 'https://wrappingtheworld.com';
  const currentYear = new Date().getFullYear();
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={siteUrl} />
      
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
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Wrapping The World",
          "url": "https://wrappingtheworld.com",
          "logo": "https://wrappingtheworld.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/wrappingtheworld",
            "https://www.instagram.com/wrappingtheworld",
            "https://twitter.com/wrappingworld",
            "https://www.linkedin.com/company/wrapping-the-world",
            "https://www.youtube.com/c/wrappingtheworld"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-312-597-1286",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4711 N. Lamon Ave",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60630",
            "addressCountry": "US"
          }
        })}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wrapping The World",
          "url": "https://wrappingtheworld.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://wrappingtheworld.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "description": "Professional vehicle wrapping, ceramic coating, and paint protection services for commercial and personal vehicles. Serving Chicago and the Midwest with premium vehicle transformation solutions.",
          "publisher": {
            "@type": "Organization",
            "name": "Wrapping The World",
            "logo": {
              "@type": "ImageObject",
              "url": "https://wrappingtheworld.com/logo.png"
            }
          },
          "inLanguage": "en-US",
          "copyrightYear": currentYear,
          "dateModified": `${currentYear}-${new Date().toISOString().slice(5, 10)}`
        })}
      </script>
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Wrapping The World",
          "image": "https://wrappingtheworld.com/logo.png",
          "logo": "https://wrappingtheworld.com/logo.png",
          "@id": "https://wrappingtheworld.com/#localbusiness",
          "url": "https://wrappingtheworld.com",
          "telephone": "+13125971286",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4711 N. Lamon Ave",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60630",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.8781,
            "longitude": -87.6298
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "15:00"
            }
          ],
          "areaServed": [
            {
              "@type": "State",
              "name": "Illinois"
            },
            {
              "@type": "State",
              "name": "Indiana"
            },
            {
              "@type": "State",
              "name": "Michigan"
            },
            {
              "@type": "State",
              "name": "Wisconsin"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vehicle Wrapping Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Fleet Wraps"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ceramic Coatings"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Paint Protection Film"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Print & Ship Vehicle Wraps"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default RootSEO;
