
import React from 'react';
import { ShopItem } from '@/components/print-ship/types/installer';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { shopItems } from '@/components/print-ship/data/installers';

import ShopHeader from './ShopHeader';
import CategoryNavigation from './CategoryNavigation';
import ShopFooter from './ShopFooter';
import CategorySectionRenderer from './CategorySectionRenderer';

// Filter items by category - fixed type for category parameter
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
      <CategorySectionRenderer
        activeCategory={activeCategory}
        categoryKey="merchandise"
        items={merchandiseItems}
        title="Wrapping The World Merchandise"
        description="Show your love for vehicle wraps with our premium quality t-shirts featuring the Wrapping The World logo."
        onAddToCart={handleAddToCart}
      />

      {/* Wrap Materials Section */}
      <CategorySectionRenderer
        activeCategory={activeCategory}
        categoryKey="wrap_material"
        items={wrapMaterials}
        title="Premium Wrap Materials"
        description="Professional-grade vinyl materials for every vehicle wrap project. Available for direct purchase or print-and-ship service."
        onAddToCart={handleAddToCart}
      />

      {/* Protection Products Section */}
      <CategorySectionRenderer
        activeCategory={activeCategory}
        categoryKey="protection"
        items={protectionItems}
        title="Protection Products"
        description="Keep your vehicle wrap looking fresh and protected with these premium protection options."
        onAddToCart={handleAddToCart}
      />

      {/* Design Services Section */}
      <CategorySectionRenderer
        activeCategory={activeCategory}
        categoryKey="design"
        items={designServices}
        title="Professional Design Services"
        description="Expert design services to ensure your vehicle wrap project turns out perfectly."
        onAddToCart={handleAddToCart}
      />

      <ShopFooter setActiveCategory={setActiveCategory} />
    </main>
  );
};

export default ShoppingContent;
