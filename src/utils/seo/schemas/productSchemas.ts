
// Product schema utility functions

export const generateWarrantySchemas = () => {
  const baseUrl = "https://wrappingtheworld.com";
  
  const warrantySchema = {
    "@context": "https://schema.org",
    "@type": "WarrantyPromise",
    "durationOfWarranty": {
      "@type": "QuantitativeValue",
      "value": "5",
      "unitCode": "ANN"
    },
    "description": "5-year manufacturer and workmanship warranty on all vehicle wraps, ceramic coatings, and paint protection film installations.",
    "warrantyScope": "Vehicle wraps, ceramic coatings, and paint protection film.",
    "url": `${baseUrl}/warranty-information`
  };
  
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wrapping The World",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`
  };
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${baseUrl}/warranty-information`,
    "name": "Warranty Information | Wrapping The World",
    "description": "Our comprehensive 5-year warranty covers all professional vehicle wraps, ceramic coatings, and paint protection film installations performed by certified Wrapping The World technicians.",
    "datePublished": "2023-03-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };
  
  return {
    warrantySchema,
    orgSchema,
    webPageSchema
  };
};

export const generateProductSchema = (product: {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image.startsWith('http') ? product.image : `https://wrappingtheworld.com${product.image}`,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "Wrapping The World"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price.toString(),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Wrapping The World"
      }
    }
  };
};

export const generatePrintShipProductSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Printed Vehicle Wraps",
    "description": "Premium quality custom-designed vehicle wraps printed on 3M and Avery Dennison vinyl materials and shipped nationwide.",
    "brand": {
      "@type": "Brand",
      "name": "Wrapping The World"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "499",
      "highPrice": "3499",
      "offerCount": "5",
      "seller": {
        "@type": "Organization",
        "name": "Wrapping The World",
        "url": "https://wrappingtheworld.com"
      }
    }
  };
};
