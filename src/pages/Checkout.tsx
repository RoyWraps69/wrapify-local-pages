
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { ShoppingCartProvider } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';
import CheckoutForm from '@/components/print-ship/checkout/CheckoutForm';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Force cart check on mount
  useEffect(() => {
    // Small delay to ensure cart state is loaded
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Checkout | Wrapping The World</title>
        <meta name="description" content="Secure checkout for your vehicle wrap materials and merchandise." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Checkout | Wrapping The World"
        pageDescription="Secure checkout for your vehicle wrap materials and merchandise."
        pageUrl="https://wrappingtheworld.com/checkout"
      />
      
      <Navbar />
      
      <ShoppingCartProvider>
        <div className="py-8 md:py-12 bg-gray-50 min-h-[calc(100vh-200px)]">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-serif text-wrap-blue mb-8">Secure Checkout</h1>
            
            {isLoaded && <CheckoutContent />}
          </div>
        </div>
      </ShoppingCartProvider>
      
      <Footer />
    </>
  );
};

// Separate component to ensure shopping cart context is available
const CheckoutContent = () => {
  const { items, total, itemCount } = useShoppingCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect if cart is empty
    if (itemCount === 0) {
      toast.error("Your cart is empty", {
        description: "Please add items to your cart before proceeding to checkout."
      });
      navigate('/shopping');
    }
  }, [itemCount, navigate]);
  
  if (itemCount === 0) {
    return <div className="text-center py-8">Redirecting to shop...</div>;
  }
  
  return <CheckoutForm items={items} total={total} />;
};

export default Checkout;
