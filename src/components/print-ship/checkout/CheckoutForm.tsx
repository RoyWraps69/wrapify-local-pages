
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '@/components/print-ship/types/installer';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  Shield, 
  Lock, 
  ChevronRight,
  Truck,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  AlertCircle
} from 'lucide-react';
import OrderSummary from './OrderSummary';
import { useToast } from '@/components/ui/use-toast';
import { toast } from 'sonner';

declare global {
  interface Window {
    Square: any;
  }
}

interface CheckoutFormProps {
  items: CartItem[];
  total: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ items, total }) => {
  const navigate = useNavigate();
  const { clearCart } = useShoppingCart();
  const { toast: uiToast } = useToast();
  
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentForm, setPaymentForm] = useState<any>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Initialize Square payment form
  useEffect(() => {
    // Check if we already have the Square script loaded
    if (!document.getElementById('square-web-sdk')) {
      // Create and load the Square Web Payments SDK
      const script = document.createElement('script');
      script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
      script.id = 'square-web-sdk';
      script.onload = initializeSquare;
      document.body.appendChild(script);
    } else {
      // Square SDK already loaded
      initializeSquare();
    }
    
    return () => {
      // Clean up payment form on unmount
      if (paymentForm) {
        paymentForm.destroy();
      }
    };
  }, []);
  
  // Initialize Square payment form
  const initializeSquare = async () => {
    if (!window.Square) {
      console.error('Square SDK not loaded');
      return;
    }
    
    try {
      const payments = window.Square.payments('sandbox-sq0idb-YOUR_SANDBOX_APP_ID', 'LOCATION_ID');
      
      const card = await payments.card();
      await card.attach('#card-container');
      
      setPaymentForm(card);
    } catch (error) {
      console.error('Failed to initialize Square payments:', error);
      toast.error('Payment system unavailable', {
        description: 'We are experiencing issues with our payment system. Please try again later.'
      });
    }
  };
  
  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!customerInfo.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!customerInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!customerInfo.email.trim()) newErrors.email = 'Email is required';
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!customerInfo.address.trim()) newErrors.address = 'Address is required';
    if (!customerInfo.city.trim()) newErrors.city = 'City is required';
    if (!customerInfo.state.trim()) newErrors.state = 'State is required';
    if (!customerInfo.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Handle payment submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!paymentForm) {
      toast.error('Payment system not ready', {
        description: 'Please refresh the page and try again.'
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // In a real implementation, you would:
      // 1. Get a payment token from Square
      // const tokenResult = await paymentForm.tokenize();
      // 2. Send the token to your server to process the payment
      // 3. Process the order on your server
      
      // For demo purposes, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Success
      uiToast({
        title: "Payment successful!",
        description: "Your order has been placed and will be processed shortly."
      });
      
      // Clear the cart
      clearCart();
      
      // Redirect to a thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error('Payment failed', {
        description: 'There was an error processing your payment. Please try again.'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left column - Checkout form */}
      <div className="md:col-span-2">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="firstName"
                    name="firstName"
                    value={customerInfo.firstName}
                    onChange={handleChange}
                    className={`pl-10 ${errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="John"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="lastName"
                    name="lastName"
                    value={customerInfo.lastName}
                    onChange={handleChange}
                    className={`pl-10 ${errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Doe"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleChange}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john.doe@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={handleChange}
                    className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="(123) 456-7890"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            
            {/* Shipping Information */}
            <h3 className="text-lg font-medium mb-3">Shipping Address</h3>
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-gray-700">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleChange}
                    className={`pl-10 ${errors.address ? 'border-red-500' : ''}`}
                    placeholder="123 Main St"
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700">
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="city"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleChange}
                      className={`pl-10 ${errors.city ? 'border-red-500' : ''}`}
                      placeholder="Chicago"
                    />
                  </div>
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium text-gray-700">
                    State <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="state"
                      name="state"
                      value={customerInfo.state}
                      onChange={handleChange}
                      className={`pl-10 ${errors.state ? 'border-red-500' : ''}`}
                      placeholder="IL"
                    />
                  </div>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="zipCode" className="text-sm font-medium text-gray-700">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleChange}
                      className={`pl-10 ${errors.zipCode ? 'border-red-500' : ''}`}
                      placeholder="60601"
                    />
                  </div>
                  {errors.zipCode && (
                    <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="country"
                      name="country"
                      value={customerInfo.country}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="US"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <h3 className="text-lg font-medium mb-3">Payment Information</h3>
            <div className="mb-6 space-y-4">
              <div className="p-4 border rounded-md">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-5 w-5 text-wrap-blue mr-2" />
                  <h4 className="font-medium">Card Details</h4>
                </div>
                
                <div id="card-container" className="min-h-[100px] border rounded-md p-3 bg-gray-50"></div>
                
                <div className="flex items-center text-xs text-gray-500 mt-3">
                  <Lock className="h-3 w-3 mr-1" />
                  <span>Your payment information is encrypted and secure</span>
                </div>
              </div>
              
              <div className="p-4 border rounded-md bg-yellow-50">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                  <p className="text-sm text-yellow-700">
                    <span className="font-medium">Test Mode:</span> No actual payment will be processed
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-wrap-blue hover:bg-wrap-blue/90 py-6"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  Place Order <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
      
      {/* Right column - Order summary */}
      <div className="md:col-span-1">
        <OrderSummary items={items} total={total} />
        
        <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
          <h3 className="font-medium mb-3">Secure Checkout</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start">
              <Shield className="h-4 w-4 text-wrap-blue mr-2 mt-0.5" />
              <p>All transactions are secure and encrypted</p>
            </div>
            <div className="flex items-start">
              <Truck className="h-4 w-4 text-wrap-blue mr-2 mt-0.5" />
              <p>Shipping details will be provided after purchase</p>
            </div>
            <div className="flex items-start">
              <Lock className="h-4 w-4 text-wrap-blue mr-2 mt-0.5" />
              <p>We never store your card information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
