import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CartButton from '@/components/print-ship/shopping-cart/CartButton';
import MiniCart from '@/components/print-ship/shopping-cart/MiniCart';
import ShopHeader from './ShopHeader';
import CategoryNavigation from './CategoryNavigation';
import CategorySectionRenderer from './CategorySectionRenderer';
import ShopFooter from './ShopFooter';
import { shopItems } from '@/components/print-ship/data/installers';
import ProductDetails from './ProductDetails';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import MaterialSelectionPanel from './MaterialSelectionPanel';

interface ShoppingContentProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ShoppingContent: React.FC<ShoppingContentProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const productId = params.productId;
  const { addItem } = useShoppingCart();
  
  const selectedProduct = productId 
    ? shopItems.find(item => item.id === productId) 
    : null;
  
  const handleBackToShop = () => {
    navigate('/shopping');
  };
  
  // Filter items by category
  const merchandiseItems = shopItems.filter(item => item.category === 'merchandise');
  const wrapMaterialItems = shopItems.filter(item => item.category === 'wrap_material');
  const protectionItems = shopItems.filter(item => item.category === 'protection');
  const designItems = shopItems.filter(item => item.category === 'design');
  
  return (
    <div className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif text-wrap-blue">
            {selectedProduct ? selectedProduct.name : 'Shop Wrapping Materials & Merchandise'}
          </h1>
          <CartButton />
        </div>
        
        <MiniCart />
        
        {selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            onBackToShop={handleBackToShop}
          />
        ) : (
          <>
            <ShopHeader setActiveCategory={setActiveCategory} />
            
            <CategoryNavigation 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
            
            {/* Render each category section */}
            <CategorySectionRenderer 
              activeCategory={activeCategory}
              categoryKey="merchandise"
              items={merchandiseItems}
              title="Wrapping The World Merchandise"
              description="Show your support with our official brand merchandise."
            />
            
            <CategorySectionRenderer 
              activeCategory={activeCategory}
              categoryKey="wrap_material"
              items={wrapMaterialItems}
              title="Premium Wrap Materials"
              description="High-quality vinyl wrap materials for professional results."
            >
              <section>
                <h2>Wrap Materials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MaterialSelectionPanel />
                  {/* Other product cards */}
                </div>
              </section>
            </CategorySectionRenderer>
            
            <CategorySectionRenderer 
              activeCategory={activeCategory}
              categoryKey="protection"
              items={protectionItems}
              title="Protection Products"
              description="Keep your wraps looking fresh with these protection solutions."
            />
            
            <CategorySectionRenderer 
              activeCategory={activeCategory}
              categoryKey="design"
              items={designItems}
              title="Design Services"
              description="Professional design services for your vehicle wrap project."
            />
            
            <ShopFooter setActiveCategory={setActiveCategory} />
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingContent;
