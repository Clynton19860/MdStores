'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/landingPage/Navbar';
import Footer from '@/components/landingPage/Footer';

export default function OrderSuccessPage() {
  const [orderNumber, setOrderNumber] = useState('');
  
  useEffect(() => {
    // Generate a random order number when the component mounts
    const prefix = 'JW';
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const date = new Date();
    const timestamp = date.getFullYear().toString().substr(-2) + 
                     (date.getMonth() + 1).toString().padStart(2, '0') + 
                     date.getDate().toString().padStart(2, '0');
    
    setOrderNumber(`${prefix}${timestamp}-${randomNum}`);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-xl">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900">Thank you for your order!</h1>
            <p className="mt-2 text-base text-gray-500">
              We appreciate your business! Your order has been placed successfully and is being processed.
            </p>
            
            <dl className="mt-8 text-sm font-medium">
              <dt className="text-gray-900">Order number</dt>
              <dd className="text-pink-500 mt-2">{orderNumber}</dd>
            </dl>
            
            <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">
              <li className="flex py-6 space-x-6">
                <div>
                  <h3 className="text-gray-900">Order confirmation</h3>
                  <p>A confirmation email has been sent to your email address.</p>
                </div>
              </li>
              <li className="flex py-6 space-x-6">
                <div>
                  <h3 className="text-gray-900">Shipping details</h3>
                  <p>Your items will be shipped within 1-2 business days.</p>
                </div>
              </li>
              <li className="flex py-6 space-x-6">
                <div>
                  <h3 className="text-gray-900">Customer support</h3>
                  <p>If you have any questions, please contact our customer support.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 flex space-x-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-sm border border-transparent bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Continue Shopping
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 