
import React from 'react';
import { Input } from '@/components/ui/input';

interface ContactInfoFieldsProps {
  formData: {
    phone: string;
    email: string;
    website: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactInfoFields: React.FC<ContactInfoFieldsProps> = ({ formData, handleChange }) => {
  return (
    <>
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
    </>
  );
};

export default ContactInfoFields;
