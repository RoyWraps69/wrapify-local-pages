
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCartProvider } from '@/components/print-ship/shopping-cart/ShoppingCart';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import ShoppingContent from '@/components/print-ship/shopping/ShoppingContent';
import { shopItems } from '@/components/print-ship/data/installers';

const ShoppingProduct = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const params = useParams();
  const productId = params.productId;
  
  // Get the product if it exists
  const product = productId ? shopItems.find(item => item.id === productId) : null;
  
  // Dynamic meta title and description based on whether we're viewing a product
  const pageTitle = product 
    ? `${product.name} | Wrapping The World Shop`
    : 'Wrapping The World | Shop Wrap Materials, Merchandise & Services';
    
  const pageDescription = product
    ? `${product.description} - Shop quality vinyl wrap materials and vehicle wrapping accessories at Wrapping The World.`
    : 'Shop professional-grade vehicle wrap materials, merchandise, design services, and premium installation services. Everything you need for a high-quality vehicle wrap transformation.';
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={product ? `https://wrappingtheworld.com/shopping/${productId}` : "https://wrappingtheworld.com/shopping"} />
        <meta name="keywords" content="vehicle wraps, car wraps, fleet wraps, ceramic coating, paint protection film, wrap materials, premium installation, wrap design services, tshirts, merchandise" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={product ? `https://wrappingtheworld.com/shopping/${productId}` : "https://wrappingtheworld.com/shopping"}
      />
      
      <Navbar />
      
      <ShoppingCartProvider>
        <ShoppingContent 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
      </ShoppingCartProvider>
      
      <Footer />
    </>
  );
};

export default ShoppingProduct;
