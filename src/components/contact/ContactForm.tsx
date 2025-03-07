
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      // Log the email recipients for debugging
      console.log('Email sent to multiple recipients:');
      console.log('- info@wrappingtheworld.com');
      console.log('- roy@chicagofleetwraps.com');
      console.log('- patti@chicagofleetwraps.com');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        message: ''
      });
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-serif font-semibold mb-6">Request a Free Vehicle Wrap Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <Input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <Input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <Input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Vehicle Type</label>
          <Input 
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            placeholder="Car, Van, Truck, Fleet, etc." 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Project Details</label>
          <Textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your vehicle wrap project needs" 
            className="min-h-[120px]"
            required 
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
