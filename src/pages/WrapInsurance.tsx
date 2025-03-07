
import React, { useState } from 'react';
import InsurancePageLayout from '@/components/insurance/InsurancePageLayout';
import InsurancePageHeader from '@/components/insurance/InsurancePageHeader';
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
    <InsurancePageLayout
      insuranceSchema={insuranceSchema}
      faqSchema={faqSchema}
    >
      <InsurancePageHeader />
      
      <InsurancePlansSection 
        selectedPlan={selectedPlan} 
        setSelectedPlan={setSelectedPlan} 
      />
      
      <InsuranceFAQSection faqs={faqs} />
      
      <InsuranceCTASection />
    </InsurancePageLayout>
  );
};

export default WrapInsurance;
