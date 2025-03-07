
import React, { useState } from 'react';
import { ShopItem } from '@/components/print-ship/types/installer';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { ChevronLeft, ShoppingCart, Star, Package, Shield, Palette, Shirt, Image } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProductDetailsProps {
  product: ShopItem;
  onBackToShop: () => void;
}

// Updated sample images for products that are more product-oriented
const sampleImages = [
  "/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png", // White Bentley (for premium wraps)
  "/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png", // Silver Mercedes (for luxury options)
  "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png", // Blue car (for color change wraps)
  "/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png"  // Pink Dodge (for vibrant options)
];

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBackToShop }) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
  const [activeImage, setActiveImage] = useState(product.image || sampleImages[0]);
  
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
  
  // Generate product images - use sample images if product doesn't have its own
  const productImages = product.images || 
    (product.image ? [product.image, ...sampleImages.slice(0, 3)] : sampleImages);
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button 
        onClick={onBackToShop}
        className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors p-4"
      >
        <ChevronLeft size={20} className="mr-1" /> Back to Shopping
      </button>
      
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Product Image Gallery */}
        <div className="space-y-4">
          <div className={`rounded-lg overflow-hidden flex items-center justify-center h-[400px]
            ${!activeImage && !product.color ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}
          `} style={!activeImage && product.color ? { backgroundColor: product.color } : {}}>
            {activeImage ? (
              <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="text-white text-center p-8">
                {React.cloneElement(icon, { size: 128 })}
                <p className="mt-4 text-xl font-medium">Product Visualization</p>
              </div>
            )}
          </div>
          
          {/* Thumbnail gallery */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {productImages.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                  activeImage === img ? 'border-wrap-red' : 'border-gray-200'
                }`}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
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
          
          {product.features && product.features.length > 0 && (
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
      
      {/* Product example gallery */}
      <div className="p-6 border-t border-gray-100">
        <h2 className="text-xl font-medium text-wrap-blue mb-4">Example Applications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden h-32 shadow-sm">
            <img src="/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png" alt="Example 1" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-32 shadow-sm">
            <img src="/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png" alt="Example 2" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-32 shadow-sm">
            <img src="/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png" alt="Example 3" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-32 shadow-sm">
            <img src="/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png" alt="Example 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
