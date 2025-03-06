
import React from 'react';
import { Button } from '@/components/ui/button';

interface ShopFooterProps {
  setActiveCategory: (category: string) => void;
}

const ShopFooter = ({ setActiveCategory }: ShopFooterProps) => (
  <section className="py-12 bg-wrap-blue text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Ready to Transform Your Vehicle?</h2>
      <p className="text-white/90 max-w-2xl mx-auto mb-8">
        Browse our premium materials and professional services to get started with your vehicle transformation project today.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          className="bg-wrap-red hover:bg-wrap-red/90 text-white"
          onClick={() => setActiveCategory('merchandise')}
        >
          Shop Merchandise
        </Button>
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white/10"
          onClick={() => setActiveCategory('all')}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  </section>
);

export default ShopFooter;
