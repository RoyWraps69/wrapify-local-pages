
import React from 'react';
import { ShopItem } from '@/components/print-ship/types/installer';
import CategorySection from './CategorySection';
import ProductCard from './ProductCard';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';

interface CategorySectionRendererProps {
  activeCategory: string;
  categoryKey: 'merchandise' | 'wrap_material' | 'protection' | 'design' | 'shipping' | 'premium_listing';
  items: ShopItem[];
  title: string;
  description: string;
}

const CategorySectionRenderer = ({
  activeCategory,
  categoryKey,
  items,
  title,
  description
}: CategorySectionRendererProps) => {
  const { addItem } = useShoppingCart();
  
  if (activeCategory !== 'all' && activeCategory !== categoryKey) {
    return null;
  }

  const gridClasses = {
    merchandise: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    wrap_material: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    protection: "grid grid-cols-1 md:grid-cols-3 gap-8",
    design: "grid grid-cols-1 md:grid-cols-2 gap-8",
    shipping: "grid grid-cols-1 md:grid-cols-3 gap-8",
    premium_listing: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  };

  return (
    <CategorySection title={title} description={description}>
      <div className={gridClasses[categoryKey]}>
        {items.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </CategorySection>
  );
};

export default CategorySectionRenderer;
