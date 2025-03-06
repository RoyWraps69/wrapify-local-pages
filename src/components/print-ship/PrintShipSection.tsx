
import React, { useState, useEffect } from 'react';
import { 
  vehicleSizes, 
  wrapMaterials, 
  designOptions, 
  shippingOptions, 
  calculateWrapPrice,
  VehicleSize,
  WrapMaterial,
  DesignOption,
  ShippingOption
} from '@/utils/vehiclePricingData';
import PrintShipHeader from './PrintShipHeader';
import PriceCalculator from './PriceCalculator';
import PriceSummary from './PriceSummary';
import BottomCTA from './BottomCTA';

const PrintShipSection: React.FC = () => {
  // State for selected options
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSize>(vehicleSizes[1]);
  const [selectedMaterial, setSelectedMaterial] = useState<WrapMaterial>(wrapMaterials[0]);
  const [selectedDesign, setSelectedDesign] = useState<DesignOption>(designOptions[0]);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption>(shippingOptions[0]);
  const [coverage, setCoverage] = useState(1); // 100% coverage by default
  const [price, setPrice] = useState({ 
    subtotal: 0, 
    designFee: 0, 
    shippingFee: 0, 
    total: 0,
    pricePerSqFt: 0,
    totalSqFt: 0
  });

  // Calculate price when options change
  useEffect(() => {
    const newPrice = calculateWrapPrice(
      selectedVehicle,
      selectedMaterial,
      selectedDesign,
      selectedShipping,
      coverage
    );
    setPrice(newPrice);
  }, [selectedVehicle, selectedMaterial, selectedDesign, selectedShipping, coverage]);

  return (
    <section className="py-16 bg-white" id="print-ship">
      <div className="container mx-auto px-4">
        <PrintShipHeader />

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
          />
          
          {/* Right column - Price Summary and CTA */}
          <PriceSummary price={price} />
        </div>
        
        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </section>
  );
};

export default PrintShipSection;
