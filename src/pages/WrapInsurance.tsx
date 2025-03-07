
import React, { useState } from 'react';
import InsurancePageLayout from '@/components/insurance/InsurancePageLayout';
import InsurancePageHeader from '@/components/insurance/InsurancePageHeader';
import InsurancePlansSection from '@/components/insurance/InsurancePlansSection';
import InsuranceFAQSection, { FAQ } from '@/components/insurance/InsuranceFAQSection';
import InsuranceCTASection from '@/components/insurance/InsuranceCTASection';
import PageSEO from '@/components/seo/PageSEO';
import { generateInsuranceSchemas, generateFAQSchema } from '@/utils/seo/schemaGenerator';

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

  // Generate schema objects for SEO using our new utility
  const { insuranceSchema, orgSchema, webPageSchema } = generateInsuranceSchemas();
  const faqSchema = generateFAQSchema(faqs);
  
  // Keywords for better SEO
  const keywords = "vehicle wrap insurance, wrap protection plan, wrap damage coverage, wrap removal guarantee, car wrap insurance, vehicle wrap protection, auto wrap warranty, vehicle graphics insurance, wrap maintenance plan, Chicago wrap insurance";

  return (
    <>
      <PageSEO
        title="Vehicle Wrap Insurance Plans | Wrapping The World"
        description="Protect your vehicle wrap investment with our Silver, Gold, and Platinum insurance plans. Coverage for damage, removal guarantees, and priority service."
        canonicalUrl="/wrap-insurance"
        ogImage="https://wrappingtheworld.com/images/wrap-insurance-plans.jpg"
        keywords={keywords}
        structuredData={[insuranceSchema, orgSchema, webPageSchema, faqSchema]}
        location="Chicago"
        publishedTime="2023-01-15T08:00:00+08:00"
        modifiedTime={new Date().toISOString()}
      />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <InsurancePageHeader />
          
          <InsurancePlansSection 
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan} 
          />
          
          <InsuranceFAQSection faqs={faqs} />
          
          <InsuranceCTASection />
        </section>
      </main>
    </>
  );
};

export default WrapInsurance;
