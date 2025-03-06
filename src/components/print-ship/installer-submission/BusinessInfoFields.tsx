
import React from 'react';
import { Input } from '@/components/ui/input';

interface BusinessInfoFieldsProps {
  formData: {
    businessName: string;
    contactName: string;
    city: string;
    state: string;
    address: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const BusinessInfoFields: React.FC<BusinessInfoFieldsProps> = ({ formData, handleChange }) => {
  return (
    <>
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
    </>
  );
};

export default BusinessInfoFields;
