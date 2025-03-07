
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';

const ThankYou = () => {
  const navigate = useNavigate();
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Order Confirmed | Wrapping The World</title>
        <meta name="description" content="Thank you for your order! Your purchase has been confirmed." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Order Confirmed | Wrapping The World"
        pageDescription="Thank you for your order! Your purchase has been confirmed."
        pageUrl="https://wrappingtheworld.com/thank-you"
      />
      
      <Navbar />
      
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-serif text-wrap-blue mb-4">
              Thank You for Your Order!
            </h1>
            
            <p className="text-wrap-grey mb-6 text-lg">
              Your order has been confirmed and is being processed.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block">
              <p className="text-gray-500 mb-1">Order Number:</p>
              <p className="text-wrap-blue font-medium text-xl">{orderNumber}</p>
            </div>
            
            <p className="mb-8 text-gray-600">
              We've sent a confirmation email with your order details and tracking information.
              If you have any questions, please contact our customer support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center justify-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
              </Button>
              
              <Button 
                onClick={() => navigate('/shopping')}
                className="bg-wrap-blue hover:bg-wrap-blue/90 flex items-center justify-center"
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ThankYou;
