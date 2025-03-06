
import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface SubmissionFormData {
  businessName: string;
  contactName: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  specialties: string;
  experience: string;
  message: string;
}

const InstallerSubmissionForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<SubmissionFormData>({
    businessName: '',
    contactName: '',
    city: '',
    state: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    specialties: '',
    experience: '',
    message: ''
  });

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

  if (isSubmitted) {
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
          onClick={() => setIsSubmitted(false)}
          className="mt-4"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h4 className="text-xl font-semibold text-wrap-blue mb-4">Apply to Join Our Installer Network</h4>
      <p className="text-wrap-grey mb-6">
        Complete the form below to apply to be listed in our nationwide installer directory. 
        Approved shops receive wrap referrals in their area and discounted materials.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium mb-1">Business Name *</label>
            <Input
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              placeholder="Your Shop Name"
            />
          </div>
          
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium mb-1">Contact Person *</label>
            <Input
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              placeholder="Full Name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">City *</label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="City"
            />
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-medium mb-1">State *</label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="State (e.g., IL)"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">Full Address *</label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Full Street Address"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(555) 555-5555"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="info@yourshop.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="website" className="block text-sm font-medium mb-1">Website</label>
          <Input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="yourshop.com (without http://)"
          />
        </div>
        
        <div>
          <label htmlFor="specialties" className="block text-sm font-medium mb-1">Specialties *</label>
          <Input
            id="specialties"
            name="specialties"
            value={formData.specialties}
            onChange={handleChange}
            required
            placeholder="e.g., Commercial Fleet, Color Change, PPF, Ceramic Coating"
          />
          <p className="text-xs text-gray-500 mt-1">Separate specialties with commas</p>
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium mb-1">Years in Business *</label>
          <Input
            id="experience"
            name="experience"
            type="number"
            min="1"
            value={formData.experience}
            onChange={handleChange}
            required
            placeholder="Years of experience"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us more about your shop, certifications, installation capacity, etc."
          />
        </div>
        
        <div className="pt-2">
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Submit Application
          </Button>
        </div>
        
        <p className="text-xs text-wrap-grey text-center mt-4">
          By submitting this form, you agree to our terms of service and privacy policy.
          We'll review your application and contact you within 3-5 business days.
        </p>
      </form>
    </div>
  );
};

export default InstallerSubmissionForm;
