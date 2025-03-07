
import React, { useEffect } from 'react';
import PrintShipHeader from '../PrintShipHeader';
import InstallationNotice from '../InstallationNotice';
import PricingAndControls from '../PricingAndControls';
import WrapAddOns from '../WrapAddOns';
import BottomCTA from '../BottomCTA';
import UploadArtwork from '../UploadArtwork';
import InstallerDirectory from '../InstallerDirectory';

interface MainContentProps {
  selectedVehicle: any;
  setSelectedVehicle: (vehicle: any) => void;
  selectedMaterial: any;
  setSelectedMaterial: (material: any) => void;
  selectedDesign: any;
  setSelectedDesign: (design: any) => void;
  selectedShipping: any;
  setSelectedShipping: (shipping: any) => void;
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
  setSelectedAddOns: (addOns: string[]) => void;
  handleAddToCart: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
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
  setSelectedAddOns,
  handleAddToCart
}) => {
  // Ensure installer section has a background image
  const installerSectionBackground = '/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png'; // White Chevy truck
  
  useEffect(() => {
    // Verify image loads
    const img = new Image();
    img.src = installerSectionBackground;
    img.onload = () => console.log("Installer section background loaded successfully:", installerSectionBackground);
    img.onerror = () => console.error("ERROR: Installer section background failed to load:", installerSectionBackground);
  }, []);
  
  return (
    <>
      <PrintShipHeader />
      <InstallationNotice />
      <UploadArtwork />
      
      <PricingAndControls 
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
        price={price}
        selectedAddOns={selectedAddOns}
        handleAddToCart={handleAddToCart}
      />
      
      {/* Add-ons Section */}
      <WrapAddOns 
        selectedAddOns={selectedAddOns}
        setSelectedAddOns={setSelectedAddOns}
      />
      
      {/* Local Installers Directory with background image */}
      <div 
        className="mt-12 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)), url('${installerSectionBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className="text-2xl font-serif font-semibold text-wrap-blue text-center mb-3">
          Professional Installation Network
        </h2>
        <p className="text-center text-wrap-grey mb-6 max-w-3xl mx-auto">
          Connect with our trusted installation partners in major cities nationwide for professional wrap installation.
        </p>
        
        <InstallerDirectory />
      </div>
      
      {/* Bottom CTA */}
      <BottomCTA />
    </>
  );
};

export default MainContent;
