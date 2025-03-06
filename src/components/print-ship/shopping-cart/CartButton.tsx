
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from './ShoppingCart';

const CartButton: React.FC = () => {
  const { itemCount, setIsCartOpen } = useShoppingCart();
  
  return (
    <Button
      variant="outline"
      className="relative"
      onClick={() => setIsCartOpen(true)}
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-wrap-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </div>
      )}
    </Button>
  );
};

export default CartButton;
