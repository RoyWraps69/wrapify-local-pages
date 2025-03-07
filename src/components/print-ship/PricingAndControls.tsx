
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import PriceCalculator from './PriceCalculator';
import PriceSummary from './price-summary/PriceSummary';
import { VehicleSize, WrapMaterial, DesignOption, ShippingOption } from '@/utils/vehiclePricingData';

interface PricingAndControlsProps {
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
  price: {
    subtotal: number;
    designFee: number;
    shippingFee: number;
    addOnsFee: number;
    total: number;
    pricePerSqFt: number;
    totalSqFt: number;
  };
  selectedAddOns: string[];
  handleAddToCart: () => void;
  resetAllSelections: () => void;
}

const PricingAndControls: React.FC<PricingAndControlsProps> = ({
  selectedVehicle,
  setSelectedVehicle,
  selectedMaterial,
  setSelectedMaterial,
  selectedDesign,
  setSelectedDesign,
  selectedShipping,
  setSelectedShipping,
  coverage,
  setCoverage,
  price,
  selectedAddOns,
  handleAddToCart,
  resetAllSelections
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left column - Pricing Calculator */}
      <PriceCalculator 
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
        selectedMaterial={selectedMaterial}
        setSelectedMaterial={setSelectedMaterial}
        selectedDesign={selectedDesign}
        setSelectedDesign={setSelectedDesign}
        selectedShipping={selectedShipping}
        setSelectedShipping={setSelectedShipping}
        coverage={coverage}
        setCoverage={setCoverage}
        resetAllSelections={resetAllSelections}
      />
      
      {/* Right column - Price Summary and CTA */}
      <div>
        <PriceSummary price={price} selectedAddOns={selectedAddOns} />
        
        {/* Checkout button */}
        <Button 
          onClick={handleAddToCart}
          className="mt-4 w-full bg-wrap-red hover:bg-wrap-red/90 text-white flex items-center justify-center gap-2 py-6"
          size="lg"
        >
          <ShoppingCart className="w-5 h-5" />
          Add All Items to Cart
        </Button>
      </div>
    </div>
  );
};

export default PricingAndControls;
