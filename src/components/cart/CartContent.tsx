'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';

export default function CartContent() {
  const { cartItems, removeItem, updateItemQuantity, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
            <Link 
              href="/products" 
              className="inline-block bg-pink-100 border border-pink-200 text-pink-800 py-3 px-6 rounded-md hover:bg-pink-200 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                        {item.options && (
                          <p className="mt-1 text-sm text-gray-500">
                            {Object.entries(item.options).map(([key, value]) => (
                              `${key}: ${value}`
                            )).join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
                          >
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M20 12H4"></path>
                            </svg>
                          </button>
                          <span className="mx-2 text-gray-700">{item.quantity}</span>
                          <button 
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
                          >
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M12 4v16m8-8H4"></path>
                            </svg>
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="font-medium text-pink-600 hover:text-pink-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  onClick={clearCart}
                  className="text-sm font-medium text-pink-600 hover:text-pink-500"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-sm font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-600">Shipping</p>
                    <p className="text-sm font-medium text-gray-900">Calculated at checkout</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-600">Tax</p>
                    <p className="text-sm font-medium text-gray-900">Calculated at checkout</p>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-pink-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-4">
                  <Link
                    href="/products" 
                    className="w-full flex justify-center items-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 