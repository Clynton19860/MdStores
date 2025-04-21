"use client";

import React, { useState, useContext } from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import AddToCart from "./AddToCart";
import ProductTabs, { DescriptionContent, SpecificationsContent, ShippingContent, ReturnPolicyContent } from "./ProductTabs";
import CustomerReviews from "./CustomerReviews";
import ProductCarousel from "./ProductCarousel";
import { CartContext } from "@/app/contexts/CartContext";
import { WishlistContext, WishlistItem } from "@/app/contexts/WishlistContext";
import Link from "next/link";

interface ProductDetails {
  id: string;
  slug: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  name: string;
  price: number;
  originalPrice?: number;
  sku: string;
  description: string;
  specifications: {
    name: string;
    value: string;
  }[];
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
  options?: {
    id: string;
    name: string;
    values: {
      id: string;
      label: string;
      available: boolean;
    }[];
  }[];
  rating: number;
  reviewCount: number;
  reviews: {
    id: string;
    author: string;
    date: string;
    rating: number;
    title: string;
    body: string;
    verified?: boolean;
    images?: string[];
  }[];
  inStock: boolean;
  relatedProducts: {
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
  }[];
}

interface ProductPageProps {
  product: ProductDetails;
}

// Define ReviewData type to replace 'any'
interface ReviewData {
  rating: number;
  title: string;
  name: string;
  email: string;
  body: string;
  images?: string[];
}

export default function ProductPage({ product }: ProductPageProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const { addItem } = useContext(CartContext);
  const { addItem: addToWishlist, isInWishlist } = useContext(WishlistContext);

  // Handle option changes
  const handleOptionChange = (optionId: string, valueId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionId]: valueId
    }));
  };

  // Handle add to cart
  const handleAddToCart = async (productId: string, quantity: number) => {
    console.log('Adding to cart:', { productId, quantity, selectedOptions });
    
    // Create cart item from product data
    const cartItem = {
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0]?.src || '',
      quantity: quantity,
      options: selectedOptions
    };
    
    // Add to cart
    addItem(cartItem);
    
    return Promise.resolve();
  };

  // Handle add to wishlist
  const handleAddToWishlist = (productId: string) => {
    console.log('Adding to wishlist:', productId);
    
    // Create wishlist item from product data
    const wishlistItem: WishlistItem = {
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0]?.src || '',
      category: product.category.id,
      slug: product.slug
    };
    
    // Add to wishlist
    addToWishlist(wishlistItem);
  };

  // Handle product share
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} on MDStores`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      console.log('Web Share API not supported');
      // Fallback - copy to clipboard or show share modal
    }
  };

  // Handle review submission
  const handleSubmitReview = async (reviewData: ReviewData) => {
    console.log('Submitting review:', reviewData);
    // Implement actual review submission logic here
    return new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-gray-600 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#FFC0CB]">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/products" className="hover:text-[#FFC0CB]">Products</Link>
              <span className="text-gray-400">/</span>
              <Link 
                href={`/products/${product.category.slug}`} 
                className="hover:text-[#FFC0CB]"
              >
                {product.category.name}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Column - Product Gallery */}
              <div>
                <ProductGallery images={product.images} />
              </div>

              {/* Right Column - Product Info & Add to Cart */}
              <div className="space-y-8">
                <ProductInfo 
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  sku={product.sku}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  inStock={product.inStock}
                  options={product.options}
                  onOptionChange={handleOptionChange}
                />

                <AddToCart 
                  productId={product.id}
                  inStock={product.inStock}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                  onShare={handleShare}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ProductTabs 
              tabs={[
                {
                  id: 'description',
                  label: 'Description',
                  content: <DescriptionContent description={product.description} />
                },
                {
                  id: 'specifications',
                  label: 'Specifications',
                  content: <SpecificationsContent specifications={product.specifications} />
                },
                {
                  id: 'shipping',
                  label: 'Shipping',
                  content: <ShippingContent />
                },
                {
                  id: 'returns',
                  label: 'Returns',
                  content: <ReturnPolicyContent />
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <CustomerReviews
              productId={product.id}
              averageRating={product.rating}
              reviewCount={product.reviewCount}
              reviews={product.reviews}
              onSubmitReview={handleSubmitReview}
            />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <ProductCarousel
        title="You May Also Like"
        subtitle="Customers also purchased these products"
        products={product.relatedProducts}
        onAddToCart={handleAddToWishlist}
        onAddToWishlist={handleAddToWishlist}
      />

      <Footer />
    </main>
  );
} 