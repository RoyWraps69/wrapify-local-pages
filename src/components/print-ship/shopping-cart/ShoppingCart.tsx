
import React, { useState, useEffect, createContext, useContext } from 'react';
import { CartItem, ShopItem } from '../types/installer';
import { useToast } from '@/components/ui/use-toast';

interface ShoppingCartContextProps {
  items: CartItem[];
  addItem: (item: ShopItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse saved cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('shopping_cart', JSON.stringify(items));
    
    // Calculate totals
    const newSubtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(newSubtotal);
    
    // Apply any discounts or taxes here
    setTotal(newSubtotal); // For now, total is same as subtotal
    
    // Update item count
    setItemCount(items.reduce((count, item) => count + item.quantity, 0));
  }, [items]);

  const addItem = (item: ShopItem) => {
    setItems(currentItems => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, increment quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Item doesn't exist, add it with quantity 1
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Item added to cart",
      description: `${item.name} has been added to your cart.`
    });
    
    // Open the cart when adding items
    setIsCartOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart."
    });
  };

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    total,
    itemCount,
    isCartOpen,
    setIsCartOpen
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
