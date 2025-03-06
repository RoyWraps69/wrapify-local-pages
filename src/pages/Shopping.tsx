
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCartProvider } from '@/components/print-ship/shopping-cart/ShoppingCart';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import ShoppingContent from '@/components/print-ship/shopping/ShoppingContent';

const ShoppingPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://wrappingtheworld.com/shopping" />
        <meta name="keywords" content="vehicle wraps, car wraps, fleet wraps, ceramic coating, paint protection film, wrap materials, premium installation, wrap design services, tshirts, merchandise" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Wrapping The World | Shop Wrap Materials, Merchandise & Services"
        pageDescription="Shop professional-grade vehicle wrap materials, merchandise, design services, and premium installation services. Everything you need for a high-quality vehicle wrap transformation."
        pageUrl="https://wrappingtheworld.com/shopping"
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

export default ShoppingPage;
