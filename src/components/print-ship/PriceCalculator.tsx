
import React from 'react';
import { motion } from 'framer-motion';
import { 
  VehicleSize,
  WrapMaterial,
  DesignOption,
  ShippingOption
} from '@/utils/vehiclePricingData';

import CalculatorHeader from './calculator/CalculatorHeader';
import VehicleSelector from './calculator/VehicleSelector';
import MaterialSelector from './calculator/MaterialSelector';
import CoverageSlider from './calculator/CoverageSlider';
import DesignSelector from './calculator/DesignSelector';
import ShippingSelector from './calculator/ShippingSelector';
import InstallationNotice from './calculator/InstallationNotice';

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
  resetAllSelections?: () => void;
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
  setCoverage,
  resetAllSelections
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
      <CalculatorHeader />
      
      <div className="space-y-6">
        {/* Vehicle Size Selection */}
        <VehicleSelector 
          selectedVehicle={selectedVehicle} 
          setSelectedVehicle={setSelectedVehicle} 
        />
        
        {/* Material Selection */}
        <MaterialSelector 
          selectedMaterial={selectedMaterial} 
          setSelectedMaterial={setSelectedMaterial} 
        />
        
        {/* Coverage Slider */}
        <CoverageSlider 
          coverage={coverage} 
          setCoverage={setCoverage} 
        />
        
        {/* Design Options */}
        <DesignSelector 
          selectedDesign={selectedDesign} 
          setSelectedDesign={setSelectedDesign} 
        />
        
        {/* Shipping Options */}
        <ShippingSelector 
          selectedShipping={selectedShipping} 
          setSelectedShipping={setSelectedShipping} 
          onReset={resetAllSelections}
        />
      </div>

      <InstallationNotice />
    </motion.div>
  );
};

export default PriceCalculator;
