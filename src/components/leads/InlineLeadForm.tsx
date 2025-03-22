import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

interface InlineLeadFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  service?: string;
  location?: string;
}

const InlineLeadForm: React.FC<InlineLeadFormProps> = ({
  title = "Get a Custom Quote",
  subtitle = "Interested in a similar project? Let us help!",
  buttonText = "Send Request",
  service = "Vehicle Wrap",
  location = "Chicago"
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('service', service);
      formData.append('location', location);
      formData.append('_subject', `Lead Form: ${service} in ${location}`);
      
      // Submit to FormSubmit
      const response = await fetch('https://formsubmit.co/roy@chicagofleetwraps.com', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }
      
      // Track conversion for retargeting
      if (window.fbq) {
        window.fbq('track', 'Lead', { 
          content_name: 'inline_lead_form',
          content_category: service
        });
      }
      
      if (window.gtag) {
        window.gtag('event', 'conversion', { 
          'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
          'value': 1.0,
          'currency': 'USD'
        });
      }
      
      setIsSubmitted(true);
      toast.success("Thanks for your interest!", {
        description: "We'll be in touch shortly about your project."
      });
      
      // Store lead in localStorage for retargeting
      localStorage.setItem('lead_captured', 'true');
      localStorage.setItem('lead_email', email);
      localStorage.setItem('lead_service_interest', service);
      
    } catch (error) {
      console.error('Error submitting lead form:', error);
      toast.error("Submission failed", {
        description: "Please try again or contact us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-wrap-blue/10 to-wrap-red/10 p-6 rounded-lg border border-gray-200 shadow-sm my-8">
      {!isSubmitted ? (
        <>
          <h3 className="text-xl font-bold text-wrap-blue mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{subtitle}</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
            
            <Button 
              type="submit" 
              className="bg-wrap-red hover:bg-wrap-red/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : buttonText} <ArrowRight className="ml-2 h-4 w-4" />
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
          <h3 className="text-xl font-bold text-wrap-blue mb-2">Request Received!</h3>
          <p className="text-gray-600">We'll be in touch shortly about your {service} project in {location}.</p>
        </div>
      )}
    </div>
  );
};

export default InlineLeadForm;
