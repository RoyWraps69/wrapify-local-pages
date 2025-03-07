
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { designOptions, DesignOption } from '@/utils/vehiclePricingData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DesignSelectorProps {
  selectedDesign: DesignOption;
  setSelectedDesign: (design: DesignOption) => void;
}

const DesignSelector: React.FC<DesignSelectorProps> = ({
  selectedDesign,
  setSelectedDesign,
}) => {
  return (
    <div>
      <label className="block text-wrap-blue font-medium mb-2 flex items-center">
        Design Package
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-56 text-sm">Choose the design complexity. Standard includes basic layout, while Premium offers fully custom design with unlimited revisions.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </label>
      <select 
        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-wrap-blue focus:border-wrap-blue"
        value={selectedDesign.id}
        onChange={(e) => {
          const selected = designOptions.find(d => d.id === e.target.value);
          if (selected) setSelectedDesign(selected);
        }}
      >
        {designOptions.map((design) => (
          <option key={design.id} value={design.id}>
            {design.name} {design.priceAdjustment > 0 ? `(+$${design.priceAdjustment})` : '(Included)'}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-600 mt-2">{selectedDesign.description}</p>
    </div>
  );
};

export default DesignSelector;
