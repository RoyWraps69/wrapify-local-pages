
import React from 'react';
import { Button } from '@/components/ui/button';
import { Package, Shield, Palette, Shirt } from 'lucide-react';

interface CategoryNavigationProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryNavigation = ({ activeCategory, setActiveCategory }: CategoryNavigationProps) => (
  <div className="bg-gray-50 py-4 sticky top-0 z-10 shadow-sm">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-2 justify-center">
        <Button 
          variant={activeCategory === 'all' ? "default" : "outline"}
          onClick={() => setActiveCategory('all')}
        >
          All Products
        </Button>
        <Button 
          variant={activeCategory === 'merchandise' ? "default" : "outline"}
          onClick={() => setActiveCategory('merchandise')}
        >
          <Shirt className="mr-2 h-4 w-4" /> Merchandise
        </Button>
        <Button 
          variant={activeCategory === 'wrap_material' ? "default" : "outline"}
          onClick={() => setActiveCategory('wrap_material')}
        >
          <Package className="mr-2 h-4 w-4" /> Wrap Materials
        </Button>
        <Button 
          variant={activeCategory === 'protection' ? "default" : "outline"}
          onClick={() => setActiveCategory('protection')}
        >
          <Shield className="mr-2 h-4 w-4" /> Protection
        </Button>
        <Button 
          variant={activeCategory === 'design' ? "default" : "outline"}
          onClick={() => setActiveCategory('design')}
        >
          <Palette className="mr-2 h-4 w-4" /> Design Services
        </Button>
      </div>
    </div>
  </div>
);

export default CategoryNavigation;
