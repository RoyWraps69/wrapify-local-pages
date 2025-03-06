
import React from 'react';
import { 
  ShoppingCart, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard, 
  Lock, 
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from './ShoppingCart';
import { useToast } from '@/components/ui/use-toast';

const MiniCart: React.FC = () => {
  const { 
    items, 
    removeItem,
    updateQuantity,
    subtotal, 
    total, 
    itemCount, 
    isCartOpen, 
    setIsCartOpen,
    clearCart
  } = useShoppingCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    // Here we would normally redirect to checkout page
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to secure payment page..."
    });
    
    // For demo purposes, we'll just clear the cart after a delay
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      toast({
        title: "Order placed!",
        description: "Thank you for your purchase."
      });
    }, 2000);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="font-semibold text-lg flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" /> 
            Your Cart ({itemCount})
          </h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
              <Button 
                variant="outline" 
                onClick={() => setIsCartOpen(false)} 
                className="mt-4"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="border rounded-lg p-3">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{item.name}</h4>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-2 py-1 select-none">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      <span className="text-sm text-gray-500 block">${item.price.toFixed(2)} each</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <Button 
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <CreditCard className="mr-2 h-4 w-4" /> Checkout Securely
            </Button>
            
            <div className="flex justify-center text-xs text-gray-500 gap-4">
              <span className="flex items-center">
                <Lock className="h-3 w-3 mr-1" /> Secure Checkout
              </span>
              <span className="flex items-center">
                <ShieldCheck className="h-3 w-3 mr-1" /> Satisfaction Guaranteed
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
