
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h4 className="text-xl font-semibold text-green-800 mb-2">Application Submitted!</h4>
      <p className="text-green-700 mb-4">
        Thank you for your interest in joining our installer network. Our team will review your information and contact you within 3-5 business days.
      </p>
      <Button 
        variant="outline" 
        onClick={onReset}
        className="mt-4"
      >
        Submit Another Application
      </Button>
    </div>
  );
};

export default SuccessMessage;
