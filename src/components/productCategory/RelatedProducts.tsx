"use client";

import React from "react";
import ProductCard from "./ProductCard";
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

interface RelatedProductsProps {
  products: Product[];
  title?: string;
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

export default function RelatedProducts({ 
  products, 
  title = "You May Also Like", 
  onAddToCart,
  onAddToWishlist
}: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
              More Options
            </span>
            <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-2">
              {title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
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
          
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 transition duration-200 rounded-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 