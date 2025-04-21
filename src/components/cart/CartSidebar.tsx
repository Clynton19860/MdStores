"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import { X, ShoppingBag } from 'lucide-react';

interface CartSidebarProps {
  onClose: () => void;
}

const CartSidebar = ({ onClose }: CartSidebarProps) => {
  const { cartItems, removeItem, updateItemQuantity, clearCart, totalPrice } = useContext(CartContext);

  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl z-50 overflow-auto">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Your Cart</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="p-6 text-center">
          <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link 
            href="/products" 
            onClick={onClose}
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-sm transition-colors text-sm"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 flex gap-4">
                {/* Product Image */}
                <div className="w-20 h-20 relative bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <Link 
                      href={`/products/${item.id}`}
                      onClick={onClose}
                      className="text-sm font-medium text-gray-900 hover:text-pink-500"
                    >
                      {item.name}
                    </Link>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Remove item"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Show selected options if any */}
                  {item.options && Object.keys(item.options).length > 0 && (
                    <div className="text-xs text-gray-500 mb-2">
                      {Object.entries(item.options).map(([key, value]) => (
                        <div key={key}>
                          {key}: {value}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-gray-300 rounded-sm">
                      <button 
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cart Summary */}
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-medium text-gray-900">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-600">Shipping</span>
              <span className="text-sm font-medium text-gray-900">Calculated at checkout</span>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-900">Total</span>
                <span className="text-base font-medium text-gray-900">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Link 
                href="/checkout"
                onClick={onClose}
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-sm transition-colors text-center"
              >
                Checkout
              </Link>
              <button 
                onClick={clearCart}
                className="block w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-4 py-2 rounded-sm transition-colors text-center text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar; 