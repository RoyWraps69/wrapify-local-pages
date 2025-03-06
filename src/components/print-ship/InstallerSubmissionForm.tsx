
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import FormHeader from './installer-submission/FormHeader';
import BusinessInfoFields from './installer-submission/BusinessInfoFields';
import ContactInfoFields from './installer-submission/ContactInfoFields';
import ShopInfoFields from './installer-submission/ShopInfoFields';
import FormFooter from './installer-submission/FormFooter';
import SuccessMessage from './installer-submission/SuccessMessage';
import { SubmissionFormData, initialFormData } from './installer-submission/types';

const InstallerSubmissionForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<SubmissionFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would send the data to your backend
    console.log('Submitting installer data:', formData);
    
    toast({
      title: "Submission Received",
      description: "Thank you for your interest! We'll review your information and get back to you shortly.",
    });
    
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
  };

  if (isSubmitted) {
    return <SuccessMessage onReset={handleReset} />;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <FormHeader />
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <BusinessInfoFields formData={formData} handleChange={handleChange} />
        <ContactInfoFields formData={formData} handleChange={handleChange} />
        <ShopInfoFields formData={formData} handleChange={handleChange} />
        <FormFooter />
      </form>
    </div>
  );
};

export default InstallerSubmissionForm;
