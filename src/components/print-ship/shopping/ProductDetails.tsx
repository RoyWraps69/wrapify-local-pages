
import React from 'react';
import { ShopItem } from '@/components/print-ship/types/installer';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { ChevronLeft, ShoppingCart, Star, Package, Shield, Palette, Shirt } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProductDetailsProps {
  product: ShopItem;
  onBackToShop: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBackToShop }) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
  
  // Get icon based on category
  let icon;
  switch (product.category) {
    case 'wrap_material':
      icon = <Package size={24} className="text-wrap-blue" />;
      break;
    case 'design':
      icon = <Palette size={24} className="text-amber-500" />;
      break;
    case 'protection':
      icon = <Shield size={24} className="text-slate-700" />;
      break;
    case 'merchandise':
      icon = <Shirt size={24} className="text-wrap-blue" />;
      break;
    default:
      icon = <Package size={24} className="text-wrap-blue" />;
  }
  
  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button 
        onClick={onBackToShop}
        className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors p-4"
      >
        <ChevronLeft size={20} className="mr-1" /> Back to Shopping
      </button>
      
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Product Image */}
        <div className={`rounded-lg overflow-hidden flex items-center justify-center h-[400px]
          ${!product.image && !product.color ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}
        `} style={product.color ? { backgroundColor: product.color } : {}}>
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-white text-center p-8">
              {React.cloneElement(icon, { size: 128 })}
              <p className="mt-4 text-xl font-medium">Product Visualization</p>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            {icon}
            <span className="text-sm font-medium text-gray-500 ml-2 uppercase">
              {product.category.replace('_', ' ')}
            </span>
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-wrap-blue mb-3">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={16} 
                  className="text-amber-400 fill-amber-400 mr-1" 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">12 reviews</span>
          </div>
          
          <p className="text-wrap-grey mb-6">{product.description}</p>
          
          {product.features && (
            <div className="mb-6">
              <h3 className="font-medium text-wrap-blue mb-2">Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-wrap-grey">{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center mb-8">
            <span className="text-3xl font-bold text-wrap-blue">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-3 text-lg text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.bestValue && (
              <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                BEST VALUE
              </span>
            )}
          </div>
          
          <div className="mt-auto">
            <Button 
              className="w-full bg-wrap-red hover:bg-wrap-red/90 text-white py-6"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
