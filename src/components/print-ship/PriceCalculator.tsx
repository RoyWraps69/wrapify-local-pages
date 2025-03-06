import React from 'react';
import { Calculator, Info } from 'lucide-react';
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
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <Calculator className="text-wrap-red w-6 h-6" />
        <h3 className="text-2xl font-semibold text-wrap-blue">Wrap Pricing Calculator</h3>
      </div>
      
      {/* Installation notice */}
      <div className="mb-6 bg-gray-100 border-l-4 border-wrap-blue p-3 text-sm">
        <div className="flex items-start">
          <Info className="w-4 h-4 text-wrap-blue mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-wrap-grey">
            <span className="font-medium">Note:</span> Pricing includes materials, design, and shipping only. 
            Professional installation is available separately and varies by location.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Vehicle Size Selection */}
        <div>
          <label className="block text-wrap-blue font-medium mb-2">Vehicle Size</label>
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
          <p className="text-sm text-gray-600 mt-1">{selectedVehicle.description} (~{selectedVehicle.squareFeet} sq ft)</p>
        </div>
        
        {/* Material Selection */}
        <div>
          <label className="block text-wrap-blue font-medium mb-2">Wrap Material</label>
          <div className="grid grid-cols-1 gap-3">
            {wrapMaterials.map((material) => (
              <div 
                key={material.id}
                className={`border ${selectedMaterial.id === material.id ? 'border-wrap-red bg-wrap-red/5' : 'border-gray-200'} rounded-md p-3 cursor-pointer transition-colors`}
                onClick={() => setSelectedMaterial(material)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{material.name}</span>
                  <span className="font-medium">${material.pricePerSqFt.toFixed(2)}/sq ft</span>
                </div>
                <p className="text-sm text-gray-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Coverage Slider */}
        <div>
          <label className="block text-wrap-blue font-medium mb-2">
            Coverage: {Math.round(coverage * 100)}%
          </label>
          <input 
            type="range" 
            min="0.25" 
            max="1" 
            step="0.05" 
            value={coverage}
            onChange={(e) => setCoverage(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Partial (25%)</span>
            <span>Half (50%)</span>
            <span>Full (100%)</span>
          </div>
        </div>
        
        {/* Design Options */}
        <div>
          <label className="block text-wrap-blue font-medium mb-2">Design Package</label>
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
          <p className="text-sm text-gray-600 mt-1">{selectedDesign.description}</p>
        </div>
        
        {/* Shipping Options */}
        <div>
          <label className="block text-wrap-blue font-medium mb-2">Shipping Method</label>
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
        <p className="text-sm text-wrap-grey">
          <strong>Looking for installation?</strong> We can connect you with our network of certified installers nationwide for professional application. Installation costs vary by location and vehicle type.
        </p>
      </div>
    </div>
  );
};

export default PriceCalculator;
