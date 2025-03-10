
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageSEO from '@/components/seo/PageSEO';
import { Shield, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateBreadcrumbSchema } from '@/utils/seo/schemaGenerator';

const WrapInsurance = () => {
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Wrap Insurance", url: "https://wrappingtheworld.com/wrap-insurance" }
  ]);

  return (
    <>
      <PageSEO 
        title="Vehicle Wrap Insurance | Protect Your Investment"
        description="Protect your vehicle wrap investment with comprehensive insurance coverage. Learn about our insurance options for commercial and personal vehicle wraps."
        canonicalUrl="/wrap-insurance"
        keywords="vehicle wrap insurance, car wrap protection, fleet graphics insurance, vinyl wrap damage coverage, commercial vehicle wrap insurance, vinyl protection plan"
        location="Chicago"
        structuredData={[breadcrumbSchema]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-wrap-blue mb-4">Vehicle Wrap Insurance</h1>
          <p className="text-lg text-wrap-grey mb-12 max-w-3xl">
            Protect your vehicle wrap investment with comprehensive insurance coverage designed specifically for wrapped vehicles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-wrap-blue">
              <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-wrap-blue" />
              </div>
              <h3 className="text-xl font-semibold text-wrap-blue mb-3">Basic Protection</h3>
              <p className="text-wrap-grey mb-6">Coverage for minor damage repair and touch-ups for your vehicle wrap.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Minor scratches and abrasions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Small tear repairs</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Edge lifting fixes</span>
                </li>
              </ul>
              <p className="font-semibold text-lg mb-4">$199/year</p>
              <Link 
                to="/contact?subject=Basic%20Wrap%20Insurance" 
                className="w-full block text-center py-2 px-4 bg-wrap-blue text-white rounded-md hover:bg-wrap-blue/90 transition-colors"
              >
                Inquire Now
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-wrap-red transform scale-105 relative">
              <div className="absolute -top-3 right-6 bg-wrap-red text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-wrap-red" />
              </div>
              <h3 className="text-xl font-semibold text-wrap-blue mb-3">Premium Protection</h3>
              <p className="text-wrap-grey mb-6">Comprehensive coverage for major repairs and partial rewraps.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>All Basic Protection benefits</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Partial panel rewraps</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>UV damage restoration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Graphic touch-ups</span>
                </li>
              </ul>
              <p className="font-semibold text-lg mb-4">$399/year</p>
              <Link 
                to="/contact?subject=Premium%20Wrap%20Insurance" 
                className="w-full block text-center py-2 px-4 bg-wrap-red text-white rounded-md hover:bg-wrap-red/90 transition-colors"
              >
                Inquire Now
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-wrap-blue">
              <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-wrap-blue" />
              </div>
              <h3 className="text-xl font-semibold text-wrap-blue mb-3">Fleet Protection</h3>
              <p className="text-wrap-grey mb-6">Specialized coverage for commercial fleet vehicles and branding.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>All Premium Protection benefits</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Multi-vehicle discounts</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Brand consistency protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Priority service scheduling</span>
                </li>
              </ul>
              <p className="font-semibold text-lg mb-4">Custom Pricing</p>
              <Link 
                to="/contact?subject=Fleet%20Wrap%20Insurance" 
                className="w-full block text-center py-2 px-4 bg-wrap-blue text-white rounded-md hover:bg-wrap-blue/90 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">Why Insure Your Vehicle Wrap?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Check className="text-green-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-wrap-blue mb-1">Protect Your Investment</h3>
                  <p className="text-wrap-grey">Vehicle wraps are a significant investment. Insurance ensures your branding stays looking professional.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Check className="text-green-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-wrap-blue mb-1">Maintain Brand Image</h3>
                  <p className="text-wrap-grey">Quickly repair damage to maintain your professional brand image on the road.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Check className="text-green-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-wrap-blue mb-1">Extend Wrap Lifespan</h3>
                  <p className="text-wrap-grey">Regular maintenance covered by insurance helps extend the life of your vehicle wrap.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Check className="text-green-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-wrap-blue mb-1">Peace of Mind</h3>
                  <p className="text-wrap-grey">Drive with confidence knowing your wrap is protected against damage.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-wrap-blue/5 p-8 rounded-lg border border-wrap-blue/10">
            <div className="flex items-start">
              <div className="mr-4">
                <AlertCircle className="text-wrap-blue" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-wrap-blue mb-2">Important Information</h3>
                <p className="text-wrap-grey mb-4">
                  Our wrap insurance plans are specifically designed to cover vinyl wraps, graphics, and finishes. 
                  They do not replace your regular automotive insurance and are meant as supplemental coverage for your vehicle's wrap.
                </p>
                <p className="text-wrap-grey">
                  Contact us today to discuss how we can customize a protection plan for your specific needs.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
                  >
                    Contact Us For Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
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

export default WrapInsurance;
