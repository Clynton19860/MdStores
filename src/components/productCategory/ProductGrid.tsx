"use client";

import React from "react";
import ProductCard from "./ProductCard";

interface Product {
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
}

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

export default function ProductGrid({ products, onAddToCart, onAddToWishlist }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-8 text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 mx-auto text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-1 text-gray-700">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          slug={product.slug}
          category={product.category}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          imageUrl={product.imageUrl}
          rating={product.rating}
          isNew={product.isNew}
          isSale={product.isSale}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
} 