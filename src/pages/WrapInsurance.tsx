
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';
import { Shield, ShieldCheck, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InsurancePlan {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  color: string;
  timeframe: string;
  removalGuarantee: string;
  features: string[];
}

const WrapInsurance = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('gold');

  const insurancePlans: InsurancePlan[] = [
    {
      id: 'silver',
      name: 'Silver',
      icon: <Shield className="w-8 h-8 mb-2" />,
      price: '$14.99',
      color: 'bg-gray-200 text-gray-700',
      timeframe: '7-10 Days',
      removalGuarantee: 'Up to $1,500 removal cost covered',
      features: [
        'Basic wrap damage coverage',
        'Up to $500 in damage repair',
        'Standard removal guarantee',
        'Email support',
        '7-10 day response time'
      ]
    },
    {
      id: 'gold',
      name: 'Gold',
      icon: <ShieldCheck className="w-8 h-8 mb-2" />,
      price: '$29.99',
      color: 'bg-yellow-400 text-yellow-800',
      timeframe: '72 Hours',
      removalGuarantee: 'Up to $750 removal cost covered',
      features: [
        'Enhanced wrap damage coverage',
        'Up to $1,000 in damage repair',
        'Premium removal guarantee',
        'Email and phone support',
        '72-hour response time',
        'One free touch-up per year'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum',
      icon: <ShieldPlus className="w-8 h-8 mb-2" />,
      price: '$49.99',
      color: 'bg-gray-800 text-white',
      timeframe: '24 Hours',
      removalGuarantee: 'Free wrap removal included',
      features: [
        'Comprehensive wrap damage coverage',
        'Unlimited damage repair',
        'Priority removal guarantee',
        'VIP support with dedicated agent',
        '24-hour response time',
        'Two free touch-ups per year',
        'Coverage for extreme weather damage',
        'Pro-rated refund for early removal'
      ]
    }
  ];

  // FAQs for schema markup
  const faqs = [
    {
      question: "What does wrap insurance cover?",
      answer: "Our wrap insurance covers damage to your vehicle wrap including tears, scratches, fading, and peeling. It also guarantees professional removal without damage to your vehicle's paint."
    },
    {
      question: "How do the removal guarantees differ?",
      answer: "Silver Plan covers up to $1,500 in removal costs, Gold Plan covers up to $750 in removal costs, and Platinum Plan includes completely free wrap removal. All guarantees ensure that removal is done professionally without damage to your vehicle's paint."
    },
    {
      question: "How do I file a claim?",
      answer: "To file a claim, simply contact our customer service team through your preferred method (based on your plan), and provide photos of the damage along with your insurance details. Our team will respond within your plan's timeframe."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. The new coverage will start immediately, and your billing will be adjusted accordingly."
    },
    {
      question: "Is there a deductible for claims?",
      answer: "Silver and Gold plans have a $50 deductible per claim. The Platinum plan has no deductible for any claims."
    }
  ];

  // Generate insurance schema
  const insuranceSchema = {
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

  // Generate FAQ schema
  const faqSchema = {
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

  return (
    <>
      <Helmet>
        <title>Wrap Insurance Plans | Wrapping The World</title>
        <meta name="description" content="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service." />
        <link rel="canonical" href="https://wrappingtheworld.com/wrap-insurance" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wrappingtheworld.com/wrap-insurance" />
        <meta property="og:title" content="Vehicle Wrap Insurance Plans | Wrapping The World" />
        <meta property="og:description" content="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service." />
        <meta property="og:image" content="https://wrappingtheworld.com/images/wrap-insurance-plans.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wrappingtheworld.com/wrap-insurance" />
        <meta name="twitter:title" content="Vehicle Wrap Insurance Plans | Wrapping The World" />
        <meta name="twitter:description" content="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service." />
        <meta name="twitter:image" content="https://wrappingtheworld.com/images/wrap-insurance-plans.jpg" />
        
        <meta name="keywords" content="vehicle wrap insurance, wrap protection plan, wrap damage coverage, wrap removal guarantee, car wrap insurance, vehicle wrap protection, auto wrap warranty, vehicle graphics insurance, wrap maintenance plan, Chicago wrap insurance" />
        
        <script type="application/ld+json">
          {JSON.stringify(insuranceSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Vehicle Wrap Insurance Plans | Wrapping The World"
        pageDescription="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service."
        pageUrl="https://wrappingtheworld.com/wrap-insurance"
      />
      
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
              Wrap Protection Plans
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-wrap-blue mb-4">
              Protect Your Vehicle Wrap Investment
            </h1>
            <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
              Our insurance plans safeguard your vehicle wrap against damage while providing guaranteed removal services and priority support when you need it most.
            </p>
            <p className="text-wrap-red font-medium mt-4">
              All plans are billed monthly, per vehicle wrapped
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {insurancePlans.map((plan) => (
              <div 
                key={plan.id}
                className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  selectedPlan === plan.id ? 'border-wrap-red ring-2 ring-wrap-red ring-opacity-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className={`${plan.color} p-6 text-center`}>
                  <div className="flex justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{plan.name} Plan</h3>
                  <div className="text-3xl font-bold mb-1">{plan.price}</div>
                  <p className="opacity-75 text-sm">per month, per vehicle</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col items-center justify-center gap-2 mb-4 border-b pb-4">
                    <div className="flex items-center justify-center gap-2 font-medium">
                      <span className="text-wrap-blue">Response Time:</span>
                      <span className="text-wrap-red">{plan.timeframe}</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-wrap-blue font-medium">Removal Guarantee:</span>
                      <p className="text-sm text-wrap-red">{plan.removalGuarantee}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-wrap-red flex-shrink-0 mt-1">✓</span>
                        <span className="text-wrap-grey text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-2 rounded-md font-medium transition-colors ${
                      selectedPlan === plan.id 
                        ? 'bg-wrap-red text-white hover:bg-red-600' 
                        : 'bg-gray-100 text-wrap-blue hover:bg-gray-200'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-wrap-blue/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-wrap-blue mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-wrap-blue text-lg mb-2">What does wrap insurance cover?</h3>
                <p className="text-wrap-grey">Our wrap insurance covers damage to your vehicle wrap including tears, scratches, fading, and peeling. It also guarantees professional removal without damage to your vehicle's paint.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-wrap-blue text-lg mb-2">How do the removal guarantees differ?</h3>
                <p className="text-wrap-grey">Silver Plan covers up to $1,500 in removal costs, Gold Plan covers up to $750 in removal costs, and Platinum Plan includes completely free wrap removal. All guarantees ensure that removal is done professionally without damage to your vehicle's paint.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-wrap-blue text-lg mb-2">How do I file a claim?</h3>
                <p className="text-wrap-grey">To file a claim, simply contact our customer service team through your preferred method (based on your plan), and provide photos of the damage along with your insurance details. Our team will respond within your plan's timeframe.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-wrap-blue text-lg mb-2">Can I upgrade my plan later?</h3>
                <p className="text-wrap-grey">Yes, you can upgrade your plan at any time. The new coverage will start immediately, and your billing will be adjusted accordingly.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-wrap-blue text-lg mb-2">Is there a deductible for claims?</h3>
                <p className="text-wrap-grey">Silver and Gold plans have a $50 deductible per claim. The Platinum plan has no deductible for any claims.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Ready to Protect Your Investment?</h3>
            <p className="text-wrap-grey mb-6 max-w-2xl mx-auto">
              Add an insurance plan to your vehicle wrap order or purchase coverage for your existing wrap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/print-ship" 
                className="px-6 py-3 bg-wrap-red text-white font-medium rounded-md hover:bg-red-600 transition-colors"
              >
                Add to New Wrap Order
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-gray-100 text-wrap-blue font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                Purchase for Existing Wrap
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WrapInsurance;
