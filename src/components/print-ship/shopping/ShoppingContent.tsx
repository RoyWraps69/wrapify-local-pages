
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
  
  const selectedProduct = productId 
    ? shopItems.find(item => item.id === productId) 
    : null;
  
  const handleBackToShop = () => {
    navigate('/shopping');
  };
  
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
            <ShopHeader />
            
            <CategoryNavigation 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
            
            <CategorySectionRenderer activeCategory={activeCategory} />
            
            <ShopFooter />
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingContent;
