'use client';

import { useState, useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import type { CartItem } from '@/app/contexts/CartContext';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  options?: Record<string, string>;
  className?: string;
}

export default function AddToCartButton({ product, options, className = '' }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    const item: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      options
    };
    
    addItem(item);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
          className="p-2 border border-gray-300 rounded-l-md"
          aria-label="Decrease quantity"
        >
          <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M20 12H4"></path>
          </svg>
        </button>
        <span className="px-4 py-2 border-t border-b border-gray-300 min-w-[40px] text-center">
          {quantity}
        </span>
        <button 
          onClick={() => setQuantity(prev => prev + 1)}
          className="p-2 border border-gray-300 rounded-r-md"
          aria-label="Increase quantity"
        >
          <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
      
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`relative bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition duration-300 ${className}`}
      >
        {isAdding ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Added to Cart
          </span>
        ) : (
          'Add to Cart'
        )}
      </button>
    </div>
  );
} 