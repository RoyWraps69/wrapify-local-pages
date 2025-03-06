
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ShopInfoFieldsProps {
  formData: {
    specialties: string;
    experience: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ShopInfoFields: React.FC<ShopInfoFieldsProps> = ({ formData, handleChange }) => {
  return (
    <>
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
    </>
  );
};

export default ShopInfoFields;
