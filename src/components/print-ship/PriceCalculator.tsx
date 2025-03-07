import React from 'react';
import { Calculator, Info, Check, HelpCircle, Palette } from 'lucide-react';
import { 
  vehicleSizes, 
  wrapMaterials, 
  designOptions, 
  shippingOptions,
  VehicleSize,
  WrapMaterial,
  DesignOption,
  ShippingOption
} from '@/utils/vehiclePricingData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from 'framer-motion';

interface PriceCalculatorProps {
  selectedVehicle: VehicleSize;
  setSelectedVehicle: (vehicle: VehicleSize) => void;
  selectedMaterial: WrapMaterial;
  setSelectedMaterial: (material: WrapMaterial) => void;
  selectedDesign: DesignOption;
  setSelectedDesign: (design: DesignOption) => void;
  selectedShipping: ShippingOption;
  setSelectedShipping: (shipping: ShippingOption) => void;
  coverage: number;
  setCoverage: (coverage: number) => void;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  selectedVehicle,
  setSelectedVehicle,
  selectedMaterial,
  setSelectedMaterial,
  selectedDesign,
  setSelectedDesign,
  selectedShipping,
  setSelectedShipping,
  coverage,
  setCoverage
}) => {
  // Animation variants for staggered children
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg"
      variants={itemVariants}
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="bg-wrap-blue p-2 rounded-full">
          <Calculator className="text-white w-5 h-5" />
        </div>
        <h3 className="text-2xl font-semibold text-wrap-blue">Build Your Wrap Package</h3>
      </div>
      
      {/* Installation notice */}
      <div className="mb-6 bg-blue-50 border-l-4 border-wrap-blue p-3 text-sm rounded-r">
        <div className="flex items-start">
          <Info className="w-4 h-4 text-wrap-blue mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-wrap-blue">
            <span className="font-medium">Pro Tip:</span> Our pricing includes premium materials, design, and shipping. 
            For professional installation, we can connect you with certified installers nationwide.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Vehicle Size Selection */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <label className="block text-wrap-blue font-medium mb-2 flex items-center">
            Vehicle Size
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-56 text-sm">Select your vehicle type to calculate the amount of material needed.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <select 
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-wrap-blue focus:border-wrap-blue"
            value={selectedVehicle.category}
            onChange={(e) => {
              const selected = vehicleSizes.find(v => v.category === e.target.value);
              if (selected) setSelectedVehicle(selected);
            }}
          >
            {vehicleSizes.map((vehicle) => (
              <option key={vehicle.category} value={vehicle.category}>
                {vehicle.category} - {vehicle.examples}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-600 mt-2">{selectedVehicle.description} (~{selectedVehicle.squareFeet} sq ft)</p>
        </div>
        
        {/* Material Selection */}
        <div>
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
              </div>
            ))}
          </div>
        </div>
        
        {/* Coverage Slider */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <label className="block text-wrap-blue font-medium mb-3 flex items-center">
            Coverage: {Math.round(coverage * 100)}%
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-56 text-sm">Adjust how much of your vehicle you want wrapped, from partial to full coverage.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <input 
            type="range" 
            min="0.25" 
            max="1" 
            step="0.05" 
            value={coverage}
            onChange={(e) => setCoverage(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-wrap-red"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Partial (25%)</span>
            <span>Half (50%)</span>
            <span>Full (100%)</span>
          </div>
          
          {/* Visual representation of coverage */}
          <div className="mt-3 h-8 bg-gray-100 rounded-lg overflow-hidden relative">
            <div 
              className="h-full bg-gradient-to-r from-wrap-blue to-wrap-red transition-all duration-300"
              style={{ width: `${coverage * 100}%` }}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <span className="text-xs font-medium text-white drop-shadow-md">
                {coverage < 0.4 ? 'Partial Wrap' : coverage < 0.75 ? 'Half Wrap' : 'Full Wrap'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Design Options */}
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
        
        {/* Shipping Options */}
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
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="bg-gray-50 p-3 rounded-lg flex items-start">
          <Info className="text-wrap-blue w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-sm text-wrap-blue">
            <strong>Need professional installation?</strong> We can connect you with our nationwide network of certified installers. Installation costs vary based on vehicle size and complexity.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCalculator;
