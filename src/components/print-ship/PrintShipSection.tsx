
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
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import PrintShipHeader from './PrintShipHeader';
import PriceCalculator from './PriceCalculator';
import PriceSummary from './PriceSummary';
import WrapAddOns from './WrapAddOns';
import BottomCTA from './BottomCTA';
import UploadArtwork from './UploadArtwork';
import InstallerDirectory from './InstallerDirectory';
import ColorPicker from './ColorPicker';
import { ShoppingCartProvider, useShoppingCart } from './shopping-cart/ShoppingCart';
import { ShopItem } from './types/installer';
import { shopItems } from './data/installers';

const PrintShipContent: React.FC = () => {
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
  
  const { addItem } = useShoppingCart();

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
    if (selectedAddOns.includes('ceramic')) addOnsFee += 399.99;
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

  const handleAddToCart = () => {
    // Add material
    const material = shopItems.find(item => 
      item.category === 'wrap_material' && 
      item.name.toLowerCase().includes(selectedMaterial.name.toLowerCase())
    );

    if (material) {
      const customMaterial: ShopItem = {
        ...material,
        price: price.subtotal, // Use the calculated price
        description: `${selectedMaterial.name} for ${selectedVehicle.name} (${Math.round(coverage * 100)}% coverage)`
      };
      addItem(customMaterial);
    }

    // Add design service if selected
    if (selectedDesign.price > 0) {
      const design = shopItems.find(item => 
        item.category === 'design' && 
        item.name.toLowerCase().includes(selectedDesign.name.toLowerCase())
      );
      
      if (design) {
        addItem(design);
      }
    }

    // Add shipping
    const shipping = shopItems.find(item => 
      item.category === 'shipping' && 
      item.name.toLowerCase().includes(selectedShipping.name.toLowerCase())
    );
    
    if (shipping) {
      addItem(shipping);
    }

    // Add selected add-ons
    if (selectedAddOns.includes('ceramic')) {
      const ceramic = shopItems.find(item => item.id === 'ceramic_coating');
      if (ceramic) addItem(ceramic);
    }
    
    if (selectedAddOns.includes('ppf')) {
      const ppf = shopItems.find(item => item.id === 'ppf');
      if (ppf) addItem(ppf);
    }
    
    if (selectedAddOns.includes('insurance')) {
      const insurance = shopItems.find(item => item.id === 'insurance');
      if (insurance) addItem(insurance);
    }
  };

  return (
    <>
      <PrintShipHeader />

      {/* Installation Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-center">
        <p className="text-amber-800 font-medium">
          <span className="underline font-bold">Important:</span> Pricing below is for wrap materials and shipping only. Professional installation is not included.
          <a href="#installer-network" className="text-wrap-red hover:underline ml-1">
            Find a certified installer in your area below.
          </a>
        </p>
      </div>

      {/* Upload Artwork Link */}
      <UploadArtwork />
      
      {/* Avery Color Chart */}
      <ColorPicker />

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
      
      {/* Add-ons Section */}
      <WrapAddOns 
        selectedAddOns={selectedAddOns}
        setSelectedAddOns={setSelectedAddOns}
      />
      
      {/* Local Installers Directory */}
      <div id="installer-network" className="mt-16 border-t border-gray-200 pt-12">
        <h2 className="text-3xl font-serif font-semibold text-wrap-blue text-center mb-4">
          Professional Installation Network
        </h2>
        <p className="text-center text-wrap-grey mb-10 max-w-3xl mx-auto">
          Wrap shops across the USA charge different installation rates based on vehicle type, complexity, and local market conditions. 
          Connect with one of our trusted installation partners in major cities nationwide.
        </p>
        
        <InstallerDirectory />
      </div>
      
      {/* Bottom CTA */}
      <BottomCTA />
    </>
  );
};

const PrintShipSection: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <section className="py-16 bg-white" id="print-ship">
        <div className="container mx-auto px-4">
          <PrintShipContent />
        </div>
      </section>
    </ShoppingCartProvider>
  );
};

export default PrintShipSection;
