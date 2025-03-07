
import React from 'react';
import { ShoppingCartProvider } from './shopping-cart/ShoppingCart';
import MainContent from './sections/MainContent';
import { usePrintShipState } from './hooks/usePrintShipState';

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
  return (
    <ShoppingCartProvider>
      <section className="py-16 bg-white" id="print-ship">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll fade-up">
            <PrintShipContent />
          </div>
        </div>
      </section>
    </ShoppingCartProvider>
  );
};

export default PrintShipSection;
