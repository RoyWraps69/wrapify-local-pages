
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';
import InsurancePlansSection from '@/components/insurance/InsurancePlansSection';
import InsuranceFAQSection, { FAQ } from '@/components/insurance/InsuranceFAQSection';
import InsuranceCTASection from '@/components/insurance/InsuranceCTASection';
import { generateInsuranceSchema, generateFAQSchema } from '@/utils/insurance/insuranceSchemas';

const WrapInsurance = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('gold');

  // FAQs for schema markup and display
  const faqs: FAQ[] = [
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

  // Generate schema objects for SEO
  const insuranceSchema = generateInsuranceSchema();
  const faqSchema = generateFAQSchema(faqs);

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
          
          <InsurancePlansSection 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan} 
          />
          
          <InsuranceFAQSection faqs={faqs} />
          
          <InsuranceCTASection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WrapInsurance;
