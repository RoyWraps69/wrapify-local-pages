
import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { wrapMaterials, WrapMaterial } from '@/utils/vehiclePricingData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MaterialSelectorProps {
  selectedMaterial: WrapMaterial;
  setSelectedMaterial: (material: WrapMaterial) => void;
  className?: string;
}

const MaterialSelector: React.FC<MaterialSelectorProps> = ({
  selectedMaterial,
  setSelectedMaterial,
  className = "",
}) => {
  return (
    <div className={className}>
      <label className="block text-wrap-blue font-medium mb-3 flex items-center">
        Wrap Material
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-56 text-sm">Choose the quality of material for your wrap. Higher quality materials last longer and offer better appearance.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </label>
      <div className="grid grid-cols-1 gap-3">
        {wrapMaterials.map((material) => (
          <div 
            key={material.id}
            className={`border ${selectedMaterial.id === material.id 
              ? 'border-wrap-red bg-wrap-red/5 shadow-md transform scale-[1.02]' 
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'} 
              rounded-md p-4 cursor-pointer transition-all duration-200`}
            onClick={() => setSelectedMaterial(material)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {selectedMaterial.id === material.id && (
                  <div className="mr-2 bg-wrap-red rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
                <span className="font-medium">{material.name}</span>
              </div>
              <span className="font-medium text-wrap-blue">${material.pricePerSqFt.toFixed(2)}/sq ft</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{material.description}</p>
            <p className="text-xs text-gray-500 mt-1">Durability: {material.durabilityYears} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialSelector;
