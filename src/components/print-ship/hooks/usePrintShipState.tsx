
import { useState, useEffect } from 'react';
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
import { useShoppingCart } from '../shopping-cart/ShoppingCart';
import { ShopItem } from '../types/installer';
import { shopItems } from '../data/installers';

export const usePrintShipState = () => {
  // State for selected options
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSize>(vehicleSizes[1]);
  const [selectedMaterial, setSelectedMaterial] = useState<WrapMaterial>(wrapMaterials[0]);
  const [selectedDesign, setSelectedDesign] = useState<DesignOption>(designOptions[0]);
  const [selectedShipping] = useState<ShippingOption>(shippingOptions[0]); // Default shipping, no longer controlled by UI
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

  // Reset all selections to defaults
  const resetAllSelections = () => {
    setSelectedVehicle(vehicleSizes[1]); // Mid-Size
    setSelectedMaterial(wrapMaterials[0]); // Standard Vinyl
    setSelectedDesign(designOptions[0]); // Basic Design
    setCoverage(1); // 100% coverage
    setSelectedAddOns([]); // No add-ons
  };

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
        description: `${selectedMaterial.name} for ${selectedVehicle.category} (${Math.round(coverage * 100)}% coverage)`
      };
      addItem(customMaterial);
    }

    // Add design service if selected
    if (selectedDesign.priceAdjustment > 0) {
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

  return {
    selectedVehicle,
    setSelectedVehicle,
    selectedMaterial,
    setSelectedMaterial,
    selectedDesign,
    setSelectedDesign,
    selectedShipping,
    coverage,
    setCoverage,
    selectedAddOns,
    setSelectedAddOns,
    price,
    handleAddToCart,
    resetAllSelections
  };
};
