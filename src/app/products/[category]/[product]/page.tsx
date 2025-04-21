import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/components/productDetail/ProductPage";
import { getProductBySlug, getRelatedProducts } from "@/data/products";

// @ts-expect-error - Next.js 15.3.1 type compatibility issue
export async function generateMetadata(
  { params }: {
    params: { category: string; product: string }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { category, product } = params;
  
  // Get product data from our data file
  const productData = getProductBySlug(category, product);
  
  if (!productData) {
    return {
      title: "Product Not Found | MDStores Jewelry",
      description: "We couldn't find the product you're looking for.",
    };
  }
  
  return {
    title: `${productData.name} | MDStores Jewelry`,
    description: productData.description || `Shop our ${productData.name}. Exquisite jewelry crafted with premium materials.`,
  };
}

// @ts-expect-error - Next.js 15.3.1 type compatibility issue
export default function ProductDetailPage({ 
  params 
}: { 
  params: { category: string; product: string } 
}) {
  const { category, product } = params;
  
  // Get product data from our data file
  const productData = getProductBySlug(category, product);
  
  // If product not found, show 404
  if (!productData) {
    notFound();
  }
  
  // Get related products
  const relatedProducts = getRelatedProducts(category, productData.id, 4);
  
  // Create enhanced product object for the ProductPage component
  const enhancedProduct = {
    ...productData,
    category: {
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      slug: category
    },
    sku: `${category.substring(0, 2).toUpperCase()}-${productData.id.substring(0, 6)}`,
    description: productData.description || "",
    specifications: [
      { name: "Material", value: "18K Gold" },
      { name: "Weight", value: "10g" },
      { name: "Dimensions", value: "Adjustable" },
      { name: "Origin", value: "Made in Australia" },
      { name: "Certificate", value: "Includes authenticity certificate" }
    ],
    images: [
      {
        id: "img-1",
        src: productData.imageUrl,
        alt: `${productData.name} - Main View`
      },
      {
        id: "img-2",
        src: "https://images.unsplash.com/photo-1589207212797-cfd578ff60be?w=800&h=800&fit=crop",
        alt: `${productData.name} - Side View`
      },
      {
        id: "img-3",
        src: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=800&h=800&fit=crop",
        alt: `${productData.name} - Detail View`
      }
    ],
    options: [
      {
        id: "size",
        name: "Size",
        values: [
          { id: "small", label: "Small", available: true },
          { id: "medium", label: "Medium", available: true },
          { id: "large", label: "Large", available: true }
        ]
      },
      {
        id: "material",
        name: "Material",
        values: [
          { id: "gold", label: "Gold", available: true },
          { id: "white-gold", label: "White Gold", available: true },
          { id: "rose-gold", label: "Rose Gold", available: false }
        ]
      }
    ],
    reviewCount: productData.reviewCount || 0,
    reviews: [
      {
        id: "review-1",
        author: "Emma Johnson",
        date: "October 12, 2023",
        rating: 5,
        title: "Absolutely stunning!",
        body: "I received this as an anniversary gift and it's even more beautiful in person. The craftsmanship is exceptional. It's comfortable to wear and feels very secure.",
        verified: true
      },
      {
        id: "review-2",
        author: "Michael Smith",
        date: "September 3, 2023",
        rating: 4,
        title: "Lovely quality, slightly smaller than expected",
        body: "The piece is beautifully made with excellent attention to detail. I thought it would be slightly larger based on the photos, but it's still gorgeous and my partner loves it.",
        verified: true
      }
    ],
    inStock: true,
    relatedProducts: relatedProducts.map(related => ({
      id: related.id,
      slug: related.slug,
      category: related.category,
      name: related.name,
      price: related.price,
      originalPrice: related.originalPrice,
      imageUrl: related.imageUrl,
      rating: related.rating,
      isNew: related.isNew,
      isSale: related.isSale
    }))
  };

  return <ProductPage product={enhancedProduct} />;
} 