"use client";

import React, { useState, useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import { ShoppingBag } from 'lucide-react';
import CartSidebar from './CartSidebar';

const CartDisplay = () => {
  const { itemCount } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleCart}
        className="flex items-center text-gray-700 hover:text-pink-500 transition-colors"
        aria-label="Shopping cart"
      >
        <div className="relative">
          <ShoppingBag className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount > 99 ? '99+' : itemCount}
            </span>
          )}
        </div>
      </button>

      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleCart}
          />
          <CartSidebar onClose={toggleCart} />
        </>
      )}
    </div>
  );
};

export default CartDisplay; 