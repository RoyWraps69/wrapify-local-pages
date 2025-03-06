
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/membership/LoginForm';
import { Shield, CheckCircle2, Crown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';

const Register = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://wrappingtheworld.com/register" />
        <meta name="keywords" content="vehicle wrap membership, car wrap sign up, premium wrap membership, vehicle wrap community" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Wrapping The World | Create Membership Account"
        pageDescription="Join the Wrapping The World community and create your membership account to access exclusive benefits, premium content, and special discounts."
        pageUrl="https://wrappingtheworld.com/register"
      />
      
      <Navbar />
      
      <main className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
                Create Your Membership
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Join the Wrapping The World community today and enjoy exclusive member benefits including discounts, free merchandise, and more.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <LoginForm isRegister={true} />
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-medium text-lg mb-3 text-wrap-blue flex items-center">
                    <Crown className="h-5 w-5 mr-2 text-wrap-blue" />
                    Premium Membership
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Upgrade to premium for just $9.99/month and enjoy these benefits:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>Free t-shirt with your membership</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>10% discount on all shop items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>Free shipping on all orders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-blue mr-2">•</span>
                      <span>Access to exclusive training videos</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-wrap-blue to-blue-600 p-5 rounded-xl shadow-md text-white">
                  <h3 className="font-medium text-lg mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    Free T-Shirt
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Sign up for a premium membership today and receive a free Wrapping The World t-shirt in your choice of color and size!
                  </p>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 rounded-full bg-black border-2 border-white"></div>
                    <div className="h-8 w-8 rounded-full bg-gray-400 border-2 border-white"></div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-medium text-lg mb-3 text-wrap-blue flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-wrap-blue" />
                    Member Protection
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your membership can be canceled at any time. We respect your privacy and will never share your information with third parties.
                  </p>
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

export default Register;
