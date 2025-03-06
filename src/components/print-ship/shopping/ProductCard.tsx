
import React from 'react';
import { Package, Shield, Palette, Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShopItem } from '@/components/print-ship/types/installer';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';

interface ProductCardProps {
  item: ShopItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const { addItem } = useShoppingCart();
  let icon;
  let gradientClass = "bg-gradient-to-r from-blue-500 to-purple-500";
  
  switch (item.category) {
    case 'wrap_material':
      icon = <Package size={64} className="text-white" />;
      break;
    case 'design':
      icon = <Palette size={64} className="text-white" />;
      gradientClass = "bg-gradient-to-r from-amber-400 to-orange-500";
      break;
    case 'protection':
      icon = <Shield size={64} className="text-white" />;
      gradientClass = "bg-gradient-to-r from-slate-500 to-zinc-600";
      break;
    case 'merchandise':
      icon = <Shirt size={64} className="text-white" />;
      gradientClass = "bg-gradient-to-r from-wrap-blue to-blue-600";
      break;
    default:
      icon = <Package size={64} className="text-white" />;
  }
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(item);
  };
  
  return (
    <Link 
      to={`/shopping/${item.id}`} 
      className="block bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-all hover:shadow-lg"
    >
      <div className={`h-48 ${item.color ? '' : gradientClass} flex items-center justify-center`} 
           style={item.color ? { backgroundColor: item.color } : {}}>
        {item.image ? (
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        ) : (
          icon
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">{item.name}</h3>
        <p className="text-wrap-grey mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-wrap-blue">${item.price.toFixed(2)}</span>
          <Button 
            variant="outline" 
            className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
