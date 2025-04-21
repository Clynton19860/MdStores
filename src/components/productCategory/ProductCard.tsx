"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  slug: string;
  category: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating?: number;
  isNew?: boolean;
  isSale?: boolean;
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

export default function ProductCard({
  id,
  slug,
  category,
  name,
  price,
  originalPrice,
  imageUrl,
  rating,
  isNew = false,
  isSale = false,
  onAddToCart,
  onAddToWishlist
}: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);

  const formattedOriginalPrice = originalPrice 
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(originalPrice)
    : null;

  return (
    <div className="group relative bg-white rounded-sm shadow-sm overflow-hidden transition-all hover:shadow-md">
      {/* Product badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-[#FFC0CB] text-white text-xs uppercase font-semibold px-2 py-1 rounded-sm">
            New
          </span>
        )}
        {isSale && (
          <span className="bg-red-500 text-white text-xs uppercase font-semibold px-2 py-1 rounded-sm">
            Sale
          </span>
        )}
      </div>
      
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${category}/${slug}`}>
          <div className="relative h-full w-full transition-transform group-hover:scale-105">
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </Link>
        
        {/* Quick actions */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex justify-center gap-2">
            <button 
              onClick={() => onAddToCart?.(id)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#FFC0CB] transition-colors"
              aria-label="Add to cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button 
              onClick={() => onAddToWishlist?.(id)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#FFC0CB] transition-colors"
              aria-label="Add to wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <Link href={`/products/${category}/${slug}`} className="block">
          <h3 className="text-sm font-medium text-gray-900 hover:text-[#FFC0CB] transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="mt-1 flex justify-between items-center">
          <div>
            {originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">{formattedPrice}</span>
                <span className="text-xs text-gray-500 line-through">{formattedOriginalPrice}</span>
              </div>
            ) : (
              <span className="text-sm font-medium text-gray-900">{formattedPrice}</span>
            )}
          </div>
          
          {rating && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium text-gray-700">{rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 