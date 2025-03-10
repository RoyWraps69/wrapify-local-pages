
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface LeadCaptureFormProps {
  onClose: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  location?: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ 
  onClose,
  title = "Get Your Free Quote",
  subtitle = "Enter your details below and we'll send you a personalized vehicle wrap quote",
  buttonText = "Request My Quote",
  location = "Chicago"
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In production, this would send data to your CRM or email marketing system
      console.log('Lead captured:', { name, email, location });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Track conversion for retargeting
      if (window.fbq) {
        window.fbq('track', 'Lead', { content_name: 'lead_capture_popup' });
      }
      
      if (window.gtag) {
        window.gtag('event', 'conversion', { 'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL' });
      }
      
      setSubmitted(true);
      toast.success("Thanks for your interest!", {
        description: "We'll be in touch with your quote shortly."
      });
      
      // Store lead in localStorage for retargeting
      localStorage.setItem('lead_captured', 'true');
      localStorage.setItem('lead_email', email);
      
      // Close after delay
      setTimeout(() => {
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting lead form:', error);
      toast.error("Submission failed", {
        description: "Please try again or contact us directly."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
      <button 
        onClick={onClose} 
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      
      {!submitted ? (
        <>
          <h3 className="text-xl font-bold text-wrap-blue mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{subtitle}</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-wrap-red hover:bg-wrap-red/90"
              disabled={loading}
            >
              {loading ? 'Submitting...' : buttonText}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy and consent to receive marketing communications.
          </p>
        </>
      ) : (
        <div className="text-center py-4">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-wrap-blue mb-2">Thank You!</h3>
          <p className="text-gray-600">We've received your information and will be in touch shortly with your custom quote.</p>
        </div>
      )}
    </div>
  );
};

export default LeadCaptureForm;
