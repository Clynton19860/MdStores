import React from "react";
import { Metadata } from "next";
import CategoryPage from "@/components/productCategory/CategoryPage";

// Define categories and their metadata
const categories = {
  "rings": {
    title: "Luxury Rings",
    description: "Discover our stunning collection of handcrafted rings, from elegant diamond engagement rings to statement cocktail pieces."
  },
  "necklaces": {
    title: "Elegant Necklaces",
    description: "Browse our curated selection of necklaces, featuring delicate chains, stunning pendants, and statement pieces."
  },
  "bracelets": {
    title: "Exquisite Bracelets",
    description: "Explore our collection of handcrafted bracelets, from classic tennis designs to modern statement cuffs."
  },
  "earrings": {
    title: "Beautiful Earrings",
    description: "Find the perfect pair of earrings, from timeless studs to elegant drop styles and statement hoops."
  },
  "watches": {
    title: "Luxury Watches",
    description: "Discover our collection of premium timepieces, combining exceptional craftsmanship with elegant design."
  }
};

type Props = {
  params: { category: string }
};

// Generate metadata for the page based on the category
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  const categoryInfo = categories[category as keyof typeof categories] || {
    title: "Jewelry Collection",
    description: "Browse our beautiful collection of fine jewelry"
  };
  
  return {
    title: `${categoryInfo.title} | MDStores Jewelry`,
    description: categoryInfo.description,
  };
}

// Generate static paths for known categories
export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export default function CategoryPageRoute({ params }: Props) {
  const { category } = params;
  const categoryInfo = categories[category as keyof typeof categories] || {
    title: "Jewelry Collection",
    description: "Browse our beautiful collection of fine jewelry"
  };
  
  return (
    <CategoryPage
      categorySlug={category}
      categoryTitle={categoryInfo.title}
      categoryDescription={categoryInfo.description}
    />
  );
} 