
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/membership/LoginForm';
import { Shield, Lock, CreditCard } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';

const Login = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://wrappingtheworld.com/login" />
        <meta name="keywords" content="vehicle wrap membership, car wrap login, premium wrap membership, vehicle wrap community" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Wrapping The World | Member Login"
        pageDescription="Login to your Wrapping The World membership account to access exclusive benefits, premium content, and special discounts."
        pageUrl="https://wrappingtheworld.com/login"
      />
      
      <Navbar />
      
      <main className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
                Member Login
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Login to your Wrapping The World membership account to access exclusive benefits and premium content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <LoginForm />
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-medium text-lg mb-3 text-wrap-blue flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-wrap-blue" />
                    Membership Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>Exclusive discounts on all products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>Free t-shirt for new members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>Priority customer support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>Access to training videos</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-medium text-lg mb-3 text-wrap-blue flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-wrap-blue" />
                    Secure Login
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your information is securely encrypted and protected. We never store sensitive payment details.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-medium text-lg mb-3 text-wrap-blue flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-wrap-blue" />
                    Premium Access
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Upgrade to premium membership for additional benefits and exclusive content.
                  </p>
                  <a href="/register" className="text-wrap-blue hover:text-wrap-red text-sm font-medium">
                    Join Premium Membership →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Login;
