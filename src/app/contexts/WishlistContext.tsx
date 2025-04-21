"use client";

import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define types for wishlist items and context
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
  itemCount: number;
}

// Create context with default values
export const WishlistContext = createContext<WishlistContextType>({
  wishlistItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearWishlist: () => {},
  isInWishlist: () => false,
  itemCount: 0,
});

// Provider component
export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      try {
        const parsedWishlist = JSON.parse(storedWishlist);
        setWishlistItems(parsedWishlist);
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage:', error);
      }
    }
  }, []);

  // Update localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    
    // Update item count
    setItemCount(wishlistItems.length);
  }, [wishlistItems]);

  // Add item to wishlist
  const addItem = (item: WishlistItem) => {
    setWishlistItems(prev => {
      // Check if item already exists in wishlist
      const existingItem = prev.find(i => i.id === item.id);

      if (existingItem) {
        // Item already exists, return unchanged wishlist
        return prev;
      } else {
        // Add new item if it doesn't exist
        return [...prev, item];
      }
    });
  };

  // Remove item from wishlist
  const removeItem = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  // Check if item is in wishlist
  const isInWishlist = (id: string) => {
    return wishlistItems.some(item => item.id === id);
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addItem,
        removeItem,
        clearWishlist,
        isInWishlist,
        itemCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}; 