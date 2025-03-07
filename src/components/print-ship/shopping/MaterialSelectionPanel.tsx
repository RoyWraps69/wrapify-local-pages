
import React, { useState } from 'react';
import { wrapMaterials, WrapMaterial } from '@/utils/vehiclePricingData';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { useToast } from '@/components/ui/use-toast';
import MaterialSelector from '@/components/print-ship/calculator/MaterialSelector';
import { Truck, Car, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define vehicle sizes
const vehicleSizes = [
  { id: 'small', name: 'Small Vehicle', sqFt: 150, icon: Car },
  { id: 'medium', name: 'Medium Vehicle', sqFt: 200, icon: Car },
  { id: 'large', name: 'Large Vehicle', sqFt: 250, icon: Car },
  { id: 'truck', name: 'Truck/Van', sqFt: 300, icon: Truck },
];

const MaterialSelectionPanel = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<WrapMaterial>(wrapMaterials[0]);
  const [selectedVehicleSize, setSelectedVehicleSize] = useState(vehicleSizes[0]);
  const [coverage, setCoverage] = useState(100); // Full coverage by default
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  // Calculate price based on material, vehicle size, and coverage
  const totalSqFt = (selectedVehicleSize.sqFt * coverage) / 100;
  const totalPrice = totalSqFt * selectedMaterial.pricePerSqFt;

  const handleAddToCart = () => {
    addItem({
      id: `wrap-material-${selectedMaterial.id}-${selectedVehicleSize.id}`,
      name: `${selectedMaterial.name} Wrap Material (${selectedVehicleSize.name})`,
      price: totalPrice,
      category: 'wrap_material',
      description: `${totalSqFt.toFixed(1)} sq ft of ${selectedMaterial.name} vinyl wrap material for ${selectedVehicleSize.name} with ${coverage}% coverage.`
    });

    toast({
      title: "Added to cart!",
      description: `${selectedMaterial.name} wrap material has been added to your cart.`,
    });
  };

  console.log('MaterialSelectionPanel rendering with material:', selectedMaterial);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-wrap-blue to-blue-600 p-4">
        <h3 className="text-xl font-bold text-white">Custom Wrap Material</h3>
        <p className="text-white/80 text-sm">Select your vehicle size and material</p>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Size</label>
          <Select
            value={selectedVehicleSize.id}
            onValueChange={(value) => {
              const size = vehicleSizes.find(s => s.id === value);
              if (size) setSelectedVehicleSize(size);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select vehicle size" />
            </SelectTrigger>
            <SelectContent>
              {vehicleSizes.map((size) => (
                <SelectItem key={size.id} value={size.id}>
                  <div className="flex items-center">
                    <size.icon className="mr-2 h-4 w-4" />
                    <span>{size.name} ({size.sqFt} sq ft)</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="mb-6">
          <MaterialSelector
            selectedMaterial={selectedMaterial}
            setSelectedMaterial={setSelectedMaterial}
            className="mb-4"
          />
        </div>
        
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-wrap-blue">Total Amount</h4>
            <p className="text-sm text-gray-600">{totalSqFt.toFixed(1)} sq ft @ ${selectedMaterial.pricePerSqFt.toFixed(2)}/sq ft</p>
          </div>
          <div className="text-xl font-bold text-wrap-blue">
            ${totalPrice.toFixed(2)}
          </div>
        </div>
        
        <Button 
          className="w-full bg-wrap-red hover:bg-wrap-red/90 text-white"
          onClick={handleAddToCart}
        >
          Add to Cart <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MaterialSelectionPanel;
