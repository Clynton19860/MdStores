"use client";

import React, { useState, useRef, useEffect } from "react";
import ProductCard from "@/components/productCategory/ProductCard";
import Link from "next/link";

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

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
  onAddToCart,
  onAddToWishlist,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Determine how many products to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Calculate if we can navigate forward/backward
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex + visibleCount < products.length;
  
  // Navigate to previous slide
  const goToPrevious = () => {
    if (canGoBack) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  // Navigate to next slide
  const goToNext = () => {
    if (canGoForward) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  // Calculate visible products
  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Recommended For You
              </span>
              <h2 className="text-2xl font-heading font-semibold text-gray-900">
                {title}
              </h2>
              {subtitle && <p className="text-gray-700 mt-1">{subtitle}</p>}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={goToPrevious}
                disabled={!canGoBack}
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 
                  ${canGoBack ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-400 cursor-not-allowed'}`}
                aria-label="Previous products"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                disabled={!canGoForward}
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 
                  ${canGoForward ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-400 cursor-not-allowed'}`}
                aria-label="Next products"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="relative" ref={carouselRef}>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              style={{
                transform: `translateX(0)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {visibleProducts.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard
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
                </div>
              ))}
            </div>
            
            {/* Pagination Dots (for mobile) */}
            <div className="flex justify-center mt-6 md:hidden">
              {[...Array(Math.ceil(products.length / visibleCount))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * visibleCount)}
                  className={`w-2.5 h-2.5 mx-1 rounded-full ${
                    i === Math.floor(currentIndex / visibleCount) ? 'bg-[#FFC0CB]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-block mt-8 border-2 border-[#FFC0CB] text-[#FFC0CB] hover:bg-[#FFC0CB] hover:text-white font-medium py-2 px-6 rounded-sm transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 