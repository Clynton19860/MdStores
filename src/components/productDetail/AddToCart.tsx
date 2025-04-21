"use client";

import React, { useState } from "react";
import { CartIcon, HeartIcon, ShareIcon, CheckIcon, ShippingIcon, ReturnIcon, SecurityIcon } from "./Icons";

interface AddToCartProps {
  productId: string;
  inStock: boolean;
  onAddToCart: (productId: string, quantity: number) => void;
  onAddToWishlist?: (productId: string) => void;
  onShare?: () => void;
}

export default function AddToCart({
  productId,
  inStock,
  onAddToCart,
  onAddToWishlist,
  onShare,
}: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = async () => {
    if (!inStock) return;
    
    setIsAdding(true);
    
    try {
      await onAddToCart(productId, quantity);
      setShowAddedMessage(true);
      
      // Hide the message after 3 seconds
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 3000);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-2">
        <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
          Quantity:
        </label>
        <div className="flex items-center border border-gray-300 rounded-sm">
          <button
            type="button"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="px-3 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 py-2 text-center border-x border-gray-300 focus:outline-none focus:ring-0"
            aria-label="Quantity"
          />
          <button
            type="button"
            onClick={incrementQuantity}
            className="px-3 py-2 text-gray-600 hover:text-gray-900"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAddToCart}
          disabled={!inStock || isAdding}
          className={`
            flex-1 px-6 py-3 rounded-sm font-medium flex items-center justify-center gap-2
            ${
              inStock 
                ? 'bg-[#FFC0CB] hover:bg-[#ffaabb] text-white' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isAdding ? (
            <span className="animate-pulse">Adding...</span>
          ) : (
            <>
              <CartIcon className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>

        <button
          onClick={() => onAddToWishlist?.(productId)}
          className="flex-shrink-0 border border-gray-300 rounded-sm px-4 py-3 flex items-center justify-center hover:bg-gray-50"
          aria-label="Add to wishlist"
        >
          <HeartIcon className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={onShare}
          className="flex-shrink-0 border border-gray-300 rounded-sm px-4 py-3 flex items-center justify-center hover:bg-gray-50"
          aria-label="Share product"
        >
          <ShareIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Added to Cart Message */}
      {showAddedMessage && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-sm flex items-center text-green-800">
          <CheckIcon className="w-5 h-5 mr-2" />
          <span>Added to cart!</span>
        </div>
      )}

      {/* Product Shipping & Returns Info */}
      <div className="pt-6 border-t border-gray-200 space-y-4">
        <div className="flex items-center gap-3">
          <ShippingIcon className="w-5 h-5 text-gray-700" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Free Shipping</h4>
            <p className="text-xs text-gray-600">For orders over $100</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <ReturnIcon className="w-5 h-5 text-gray-700" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Easy Returns</h4>
            <p className="text-xs text-gray-600">30-day return policy</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <SecurityIcon className="w-5 h-5 text-gray-700" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Secure Checkout</h4>
            <p className="text-xs text-gray-600">Encrypted and secure payments</p>
          </div>
        </div>
      </div>
    </div>
  );
} 