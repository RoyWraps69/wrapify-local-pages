
import React from 'react';
import { Button } from '@/components/ui/button';
import MiniCart from '@/components/print-ship/shopping-cart/MiniCart';

interface ShopHeaderProps {
  setActiveCategory: (category: string) => void;
}

const ShopHeader = ({ setActiveCategory }: ShopHeaderProps) => (
  <section className="py-12 bg-gradient-to-br from-wrap-blue to-wrap-blue/90 text-white">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Premium Wrap Materials & Services
          </h1>
          <p className="text-white/90 text-lg mb-6 max-w-xl">
            Everything you need for professional vehicle transformations. From high-quality wrap materials to expert design services and installer support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => setActiveCategory('wrap_material')} 
              variant="secondary"
            >
              Explore Materials
            </Button>
            <Button 
              onClick={() => setActiveCategory('merchandise')} 
              variant="default"
              className="bg-wrap-red hover:bg-wrap-red/90"
            >
              View Merchandise
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl">
            <MiniCart />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShopHeader;
