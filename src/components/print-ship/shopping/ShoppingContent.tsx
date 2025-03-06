
import React from 'react';
import { ShopItem } from '@/components/print-ship/types/installer';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { shopItems } from '@/components/print-ship/data/installers';

import ShopHeader from './ShopHeader';
import CategoryNavigation from './CategoryNavigation';
import CategorySection from './CategorySection';
import ProductCard from './ProductCard';
import ShopFooter from './ShopFooter';

// Filter items by category
const filterItemsByCategory = (items: ShopItem[], category: 'premium_listing' | 'wrap_material' | 'design' | 'protection' | 'shipping' | 'merchandise') => {
  return items.filter(item => item.category === category);
};

interface ShoppingContentProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ShoppingContent = ({ activeCategory, setActiveCategory }: ShoppingContentProps) => {
  const { addItem } = useShoppingCart();
  
  const handleAddToCart = (item: ShopItem) => {
    addItem(item);
  };
  
  const wrapMaterials = filterItemsByCategory(shopItems, 'wrap_material');
  const protectionItems = filterItemsByCategory(shopItems, 'protection');
  const designServices = filterItemsByCategory(shopItems, 'design');
  const merchandiseItems = filterItemsByCategory(shopItems, 'merchandise');
  
  return (
    <main className="pt-20 md:pt-24 overflow-x-hidden">
      <ShopHeader setActiveCategory={setActiveCategory} />
      <CategoryNavigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      {/* Merchandise Section */}
      {(activeCategory === 'all' || activeCategory === 'merchandise') && (
        <CategorySection 
          title="Wrapping The World Merchandise" 
          description="Show your love for vehicle wraps with our premium quality t-shirts featuring the Wrapping The World logo."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {merchandiseItems.map(item => (
              <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </CategorySection>
      )}

      {/* Wrap Materials Section */}
      {(activeCategory === 'all' || activeCategory === 'wrap_material') && (
        <CategorySection 
          title="Premium Wrap Materials" 
          description="Professional-grade vinyl materials for every vehicle wrap project. Available for direct purchase or print-and-ship service."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wrapMaterials.map(item => (
              <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </CategorySection>
      )}

      {/* Protection Products Section */}
      {(activeCategory === 'all' || activeCategory === 'protection') && (
        <CategorySection 
          title="Protection Products" 
          description="Keep your vehicle wrap looking fresh and protected with these premium protection options."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protectionItems.map(item => (
              <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </CategorySection>
      )}

      {/* Design Services Section */}
      {(activeCategory === 'all' || activeCategory === 'design') && (
        <CategorySection 
          title="Professional Design Services" 
          description="Expert design services to ensure your vehicle wrap project turns out perfectly."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map(item => (
              <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </CategorySection>
      )}

      <ShopFooter setActiveCategory={setActiveCategory} />
    </main>
  );
};

export default ShoppingContent;
