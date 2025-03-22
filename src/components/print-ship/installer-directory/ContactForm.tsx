
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Installer } from '../types/installer';

interface ContactFormProps {
  selectedInstaller: Installer;
  onBack: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedInstaller, onBack }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I would like to inquire about installation services for vehicle wraps from ${selectedInstaller.name}.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call our Netlify function to send the email
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `Installer Network Inquiry: ${selectedInstaller.name}`,
          vehicleType: `Installer: ${selectedInstaller.name}` // Reuse existing field
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      // Show success message
      toast({
        title: "Request Sent",
        description: `Your inquiry has been sent to ${selectedInstaller.name}. They will contact you shortly.`,
      });
      
      // Reset form and go back
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      onBack();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <div className="mb-6">
        <button 
          onClick={onBack} 
          className="text-wrap-blue hover:text-wrap-red text-sm flex items-center"
        >
          ← Back to installer list
        </button>
      </div>
      
      <h4 className="text-xl font-semibold text-wrap-blue mb-4">Contact {selectedInstaller.name}</h4>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <div className="space-y-2">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-wrap-red mt-1 flex-shrink-0 mr-2" />
            <span className="text-sm text-wrap-grey">{selectedInstaller.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
            <a href={`tel:${selectedInstaller.phone}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
              {selectedInstaller.phone}
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
            <a href={`mailto:${selectedInstaller.email}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
              {selectedInstaller.email}
            </a>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleFormChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            rows={4}
            required
          />
        </div>
        
        <div className="pt-2">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Inquiry'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
