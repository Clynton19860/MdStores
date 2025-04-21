"use client";

import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define types for cart items and context
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  options?: Record<string, string>;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}

// Create context with default values
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  updateItemQuantity: () => {},
  clearCart: () => {},
  itemCount: 0,
  totalPrice: 0,
});

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Calculate totals
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const price = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    setItemCount(count);
    setTotalPrice(price);
  }, [cartItems]);

  // Add item to cart
  const addItem = (item: CartItem) => {
    setCartItems(prev => {
      // Check if item already exists in cart
      const existingItem = prev.find(i => 
        i.id === item.id && 
        JSON.stringify(i.options) === JSON.stringify(item.options)
      );

      if (existingItem) {
        // Update quantity if item exists
        return prev.map(i => 
          i.id === item.id && JSON.stringify(i.options) === JSON.stringify(item.options)
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        // Add new item if it doesn't exist
        return [...prev, item];
      }
    });
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateItemQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        itemCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}; 