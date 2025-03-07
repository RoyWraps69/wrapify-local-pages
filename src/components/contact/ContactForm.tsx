
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertCircle } from 'lucide-react';

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
  
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allow empty phone (it's optional) but validate if provided
    if (!phone) return true;
    
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // US phone numbers should have 10 digits
    return digitsOnly.length >= 10;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (name === 'email' || name === 'phone') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', phone: '' };
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
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
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <div className="mt-2 text-red-500 text-sm flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.email}
            </div>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <Input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number" 
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <div className="mt-2 text-red-500 text-sm flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.phone}
            </div>
          )}
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
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Sending...
            </>
          ) : (
            'Submit Quote Request'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
