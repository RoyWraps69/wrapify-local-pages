
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MaterialSelector from '../calculator/MaterialSelector';
import { wrapMaterials, WrapMaterial, vehicleSizes, VehicleSize } from '@/utils/vehiclePricingData';
import { useShoppingCart } from '../shopping-cart/ShoppingCart';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { shopItems } from '../data/installers';

const MaterialSelectionPanel: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<WrapMaterial>(wrapMaterials[0]);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSize>(vehicleSizes[1]); // Default to mid-size
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    // Find the corresponding shop item
    const material = shopItems.find(item => 
      item.category === 'wrap_material' && 
      item.name.toLowerCase().includes(selectedMaterial.name.toLowerCase())
    );

    if (material) {
      // Calculate the price based on vehicle size and material
      const totalSqFt = selectedVehicle.squareFeet;
      const price = totalSqFt * selectedMaterial.pricePerSqFt;
      
      const customMaterial = {
        ...material,
        price: price,
        description: `${selectedMaterial.name} for ${selectedVehicle.category} vehicle`
      };
      
      addItem(customMaterial);
      
      toast({
        title: "Added to cart!",
        description: `${selectedMaterial.name} has been added to your cart.`,
      });
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-wrap-blue">Select Wrap Material</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Size</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md"
            value={selectedVehicle.category}
            onChange={(e) => {
              const selected = vehicleSizes.find(v => v.category === e.target.value);
              if (selected) setSelectedVehicle(selected);
            }}
          >
            {vehicleSizes.map((vehicle) => (
              <option key={vehicle.category} value={vehicle.category}>
                {vehicle.category} - {vehicle.examples}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Approximate area: {selectedVehicle.squareFeet} sq ft
          </p>
        </div>
        
        <MaterialSelector 
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          className="mb-4"
        />
        
        <div className="bg-gray-100 p-3 rounded-lg mb-4">
          <div className="flex justify-between font-medium">
            <span>Estimated Price:</span>
            <span className="text-wrap-blue">
              ${(selectedVehicle.squareFeet * selectedMaterial.pricePerSqFt).toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Based on {selectedVehicle.squareFeet} sq ft at ${selectedMaterial.pricePerSqFt.toFixed(2)}/sq ft
          </p>
        </div>
        
        <Button 
          className="w-full bg-wrap-red hover:bg-wrap-red/90"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MaterialSelectionPanel;
