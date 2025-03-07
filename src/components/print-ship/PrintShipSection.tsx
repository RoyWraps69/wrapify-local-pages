
import React from 'react';
import { ShoppingCartProvider } from './shopping-cart/ShoppingCart';
import MainContent from './sections/MainContent';
import { usePrintShipState } from './hooks/usePrintShipState';
import { motion } from 'framer-motion';

const PrintShipContent: React.FC = () => {
  const {
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
    selectedAddOns,
    setSelectedAddOns,
    price,
    handleAddToCart
  } = usePrintShipState();

  return (
    <MainContent
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
      selectedAddOns={selectedAddOns}
      setSelectedAddOns={setSelectedAddOns}
      price={price}
      handleAddToCart={handleAddToCart}
    />
  );
};

const PrintShipSection: React.FC = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <ShoppingCartProvider>
      <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="print-ship">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <PrintShipContent />
        </motion.div>
      </section>
    </ShoppingCartProvider>
  );
};

export default PrintShipSection;
