
import React, { useState } from 'react';
import { ShopItem } from './types/installer';
import { shopItems } from './data/installers';
import { useShoppingCart } from './shopping-cart/ShoppingCart';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const { addItem } = useShoppingCart();
  
  // Filter items to only include wrap materials with colors
  const colorWraps = shopItems.filter(item => 
    item.category === 'wrap_material' && item.color
  );
  
  const handleColorSelect = (item: ShopItem) => {
    setSelectedColor(item.color || null);
    setSelectedItem(item);
  };
  
  const handleAddToCart = () => {
    if (selectedItem) {
      addItem(selectedItem);
    }
  };
  
  return (
    <div className="my-8 border border-gray-200 rounded-lg p-6 bg-gray-50">
      <h3 className="text-xl font-semibold text-wrap-blue mb-4">Avery Color Selection</h3>
      <p className="text-wrap-grey mb-4">Choose from our premium Avery vinyl wrap colors:</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        {colorWraps.map(item => (
          <div 
            key={item.id}
            onClick={() => handleColorSelect(item)}
            className={`
              h-16 w-full rounded-md cursor-pointer transition-all flex flex-col items-center justify-center
              ${selectedItem?.id === item.id ? 'ring-2 ring-wrap-red ring-offset-2' : 'hover:ring-1 hover:ring-gray-300'}
            `}
            style={{ backgroundColor: item.color }}
          >
            <span className="sr-only">{item.name}</span>
          </div>
        ))}
      </div>
      
      {selectedItem && (
        <div className="bg-white p-4 rounded-md border border-gray-200">
          <div className="flex items-center gap-3">
            <div 
              className="h-10 w-10 rounded-md" 
              style={{ backgroundColor: selectedItem.color || '#000000' }}
            ></div>
            <div className="flex-1">
              <h4 className="font-medium">{selectedItem.name}</h4>
              <p className="text-sm text-wrap-grey">${selectedItem.price.toFixed(2)} per sq ft</p>
            </div>
            <Button 
              onClick={handleAddToCart}
              className="bg-wrap-red hover:bg-wrap-red/90 text-white flex items-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
