
import { FAQ } from '@/components/insurance/InsuranceFAQSection';

export const generateInsuranceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Wrap Insurance Plans",
    "description": "Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      },
      "telephone": "+13125971286",
      "image": "https://wrappingtheworld.com/og-image.jpg",
      "priceRange": "$$"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Silver Plan",
        "description": "Basic wrap damage coverage with up to $500 in damage repair",
        "price": "14.99",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "14.99",
          "priceCurrency": "USD",
          "unitText": "Monthly"
        }
      },
      {
        "@type": "Offer",
        "name": "Gold Plan",
        "description": "Enhanced wrap damage coverage with up to $1,000 in damage repair",
        "price": "29.99",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "29.99",
          "priceCurrency": "USD",
          "unitText": "Monthly"
        }
      },
      {
        "@type": "Offer",
        "name": "Platinum Plan",
        "description": "Comprehensive wrap damage coverage with unlimited damage repair",
        "price": "49.99",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "49.99",
          "priceCurrency": "USD",
          "unitText": "Monthly"
        }
      }
    ]
  };
};

export const generateFAQSchema = (faqs: FAQ[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
