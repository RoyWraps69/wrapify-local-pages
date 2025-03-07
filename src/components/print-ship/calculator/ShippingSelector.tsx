
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { shippingOptions, ShippingOption } from '@/utils/vehiclePricingData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ShippingSelectorProps {
  selectedShipping: ShippingOption;
  setSelectedShipping: (shipping: ShippingOption) => void;
}

const ShippingSelector: React.FC<ShippingSelectorProps> = ({
  selectedShipping,
  setSelectedShipping,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
      <label className="block text-wrap-blue font-medium mb-2 flex items-center">
        Shipping Method
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-56 text-sm">Choose your preferred shipping speed. Expedited options available for urgent projects.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </label>
      <select 
        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-wrap-blue focus:border-wrap-blue"
        value={selectedShipping.id}
        onChange={(e) => {
          const selected = shippingOptions.find(s => s.id === e.target.value);
          if (selected) setSelectedShipping(selected);
        }}
      >
        {shippingOptions.map((shipping) => (
          <option key={shipping.id} value={shipping.id}>
            {shipping.name} - ${shipping.price} ({shipping.estimatedDays})
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShippingSelector;
