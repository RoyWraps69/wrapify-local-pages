
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FormFooter: React.FC = () => {
  return (
    <>
      <div className="pt-2">
        <Button type="submit" className="w-full">
          <Send className="mr-2 h-4 w-4" /> Submit Application
        </Button>
      </div>
      
      <p className="text-xs text-wrap-grey text-center mt-4">
        By submitting this form, you agree to our terms of service and privacy policy.
        We'll review your application and contact you within 3-5 business days.
      </p>
    </>
  );
};

export default FormFooter;
