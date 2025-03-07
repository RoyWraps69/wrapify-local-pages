
import React from 'react';
import { CartItem } from '@/components/print-ship/types/installer';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  // Calculate subtotal (without shipping, tax, etc.)
  const subtotal: number = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Shipping fee
  const shipping: number = 0; // Free shipping for now
  
  // Tax (calculate properly in production)
  const tax: number = subtotal * 0.0625; // Example tax rate of 6.25%
  
  // Calculate total (this ensures it's a number)
  const calculatedTotal: number = subtotal + shipping + tax;
  
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5 text-wrap-blue" />
          Order Summary
        </h2>
        <Link to="/shopping" className="text-sm text-wrap-blue hover:underline flex items-center">
          Edit Cart <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="divide-y">
        {/* Items list */}
        <div className="space-y-3 pb-4">
          {items.map(item => (
            <div key={item.id} className="flex justify-between">
              <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        
        {/* Price calculations */}
        <div className="py-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>
        
        {/* Total */}
        <div className="pt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${calculatedTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
