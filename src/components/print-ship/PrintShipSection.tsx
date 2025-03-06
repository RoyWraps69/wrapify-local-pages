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
import WrapAddOns from './WrapAddOns';
import BottomCTA from './BottomCTA';
import UploadArtwork from './UploadArtwork';

const PrintShipSection: React.FC = () => {
  // State for selected options
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSize>(vehicleSizes[1]);
  const [selectedMaterial, setSelectedMaterial] = useState<WrapMaterial>(wrapMaterials[0]);
  const [selectedDesign, setSelectedDesign] = useState<DesignOption>(designOptions[0]);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption>(shippingOptions[0]);
  const [coverage, setCoverage] = useState(1); // 100% coverage by default
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [price, setPrice] = useState({ 
    subtotal: 0, 
    designFee: 0, 
    shippingFee: 0, 
    addOnsFee: 0,
    total: 0,
    pricePerSqFt: 0,
    totalSqFt: 0
  });

  // Calculate price when options change
  useEffect(() => {
    const basePrice = calculateWrapPrice(
      selectedVehicle,
      selectedMaterial,
      selectedDesign,
      selectedShipping,
      coverage
    );
    
    // Calculate add-ons pricing
    let addOnsFee = 0;
    if (selectedAddOns.includes('ceramic')) addOnsFee += 299;
    if (selectedAddOns.includes('ppf')) addOnsFee += 349;
    if (selectedAddOns.includes('insurance')) addOnsFee += 49.99;
    
    // Update total price with add-ons
    const newTotal = basePrice.total + addOnsFee;
    
    setPrice({
      ...basePrice,
      addOnsFee,
      total: newTotal
    });
  }, [selectedVehicle, selectedMaterial, selectedDesign, selectedShipping, coverage, selectedAddOns]);

  return (
    <section className="py-16 bg-white" id="print-ship">
      <div className="container mx-auto px-4">
        <PrintShipHeader />

        {/* Installation Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-center">
          <p className="text-amber-800 font-medium">
            <span className="underline">Important:</span> Pricing below is for wrap materials and shipping only. Professional installation is not included.
            We can connect you with local installers in your area upon request.
          </p>
        </div>

        {/* Upload Artwork Link - New Addition */}
        <UploadArtwork />

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
          <PriceSummary price={price} selectedAddOns={selectedAddOns} />
        </div>
        
        {/* Add-ons Section */}
        <WrapAddOns 
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
        />
        
        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </section>
  );
};

export default PrintShipSection;
