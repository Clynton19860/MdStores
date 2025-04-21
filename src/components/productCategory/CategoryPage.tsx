"use client";

import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import CategoryHeader from "./CategoryHeader";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import RelatedProducts from "./RelatedProducts";
import { getProductsByCategory, getRelatedProducts } from "@/data/products";
import { ProductBase } from "@/data/products";
import { CartContext } from "@/app/contexts/CartContext";

// Define proper type for filter configurations
interface FilterOption {
  id: string;
  label: string;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

// Filter configuration by category
const filterConfigurations: Record<string, FilterCategory[]> = {
  rings: [
    {
      name: "Material",
      options: [
        { id: "gold", label: "Gold" },
        { id: "white-gold", label: "White Gold" },
        { id: "rose-gold", label: "Rose Gold" },
        { id: "platinum", label: "Platinum" },
        { id: "silver", label: "Silver" },
      ],
    },
    {
      name: "Style",
      options: [
        { id: "engagement", label: "Engagement" },
        { id: "wedding", label: "Wedding" },
        { id: "eternity", label: "Eternity" },
        { id: "cocktail", label: "Cocktail" },
        { id: "vintage", label: "Vintage" },
      ],
    },
    {
      name: "Stone",
      options: [
        { id: "diamond", label: "Diamond" },
        { id: "sapphire", label: "Sapphire" },
        { id: "emerald", label: "Emerald" },
        { id: "ruby", label: "Ruby" },
        { id: "pearl", label: "Pearl" },
      ],
    },
  ],
  necklaces: [
    {
      name: "Material",
      options: [
        { id: "gold", label: "Gold" },
        { id: "white-gold", label: "White Gold" },
        { id: "rose-gold", label: "Rose Gold" },
        { id: "platinum", label: "Platinum" },
        { id: "silver", label: "Silver" },
      ],
    },
    {
      name: "Style",
      options: [
        { id: "pendant", label: "Pendant" },
        { id: "chain", label: "Chain" },
        { id: "choker", label: "Choker" },
        { id: "lariat", label: "Lariat" },
        { id: "statement", label: "Statement" },
      ],
    },
    {
      name: "Length",
      options: [
        { id: "16-inch", label: "16 inch" },
        { id: "18-inch", label: "18 inch" },
        { id: "20-inch", label: "20 inch" },
        { id: "24-inch", label: "24 inch" },
        { id: "30-inch", label: "30+ inch" },
      ],
    },
  ],
  bracelets: [
    {
      name: "Material",
      options: [
        { id: "gold", label: "Gold" },
        { id: "white-gold", label: "White Gold" },
        { id: "rose-gold", label: "Rose Gold" },
        { id: "platinum", label: "Platinum" },
        { id: "silver", label: "Silver" },
      ],
    },
    {
      name: "Style",
      options: [
        { id: "tennis", label: "Tennis" },
        { id: "bangle", label: "Bangle" },
        { id: "cuff", label: "Cuff" },
        { id: "charm", label: "Charm" },
        { id: "chain", label: "Chain" },
      ],
    },
    {
      name: "Feature",
      options: [
        { id: "diamond", label: "Diamond" },
        { id: "gemstone", label: "Gemstone" },
        { id: "pearl", label: "Pearl" },
        { id: "engraved", label: "Engraved" },
        { id: "adjustable", label: "Adjustable" },
      ],
    },
  ],
  earrings: [
    {
      name: "Material",
      options: [
        { id: "gold", label: "Gold" },
        { id: "white-gold", label: "White Gold" },
        { id: "rose-gold", label: "Rose Gold" },
        { id: "platinum", label: "Platinum" },
        { id: "silver", label: "Silver" },
      ],
    },
    {
      name: "Style",
      options: [
        { id: "stud", label: "Stud" },
        { id: "drop", label: "Drop" },
        { id: "hoop", label: "Hoop" },
        { id: "chandelier", label: "Chandelier" },
        { id: "huggie", label: "Huggie" },
      ],
    },
    {
      name: "Feature",
      options: [
        { id: "diamond", label: "Diamond" },
        { id: "gemstone", label: "Gemstone" },
        { id: "pearl", label: "Pearl" },
        { id: "statement", label: "Statement" },
        { id: "everyday", label: "Everyday" },
      ],
    },
  ],
  // Default filters for any other category
  default: [
    {
      name: "Material",
      options: [
        { id: "gold", label: "Gold" },
        { id: "silver", label: "Silver" },
        { id: "platinum", label: "Platinum" },
      ],
    },
    {
      name: "Style",
      options: [
        { id: "classic", label: "Classic" },
        { id: "modern", label: "Modern" },
        { id: "vintage", label: "Vintage" },
      ],
    },
    {
      name: "Collection",
      options: [
        { id: "wedding", label: "Wedding" },
        { id: "everyday", label: "Everyday" },
        { id: "special-occasion", label: "Special Occasion" },
      ],
    },
  ]
};

interface CategoryPageProps {
  categorySlug: string;
  categoryTitle: string;
  categoryDescription?: string;
}

export default function CategoryPage({ 
  categorySlug, 
  categoryTitle, 
  categoryDescription 
}: CategoryPageProps) {
  // Get products for this category from our data file
  const categoryProducts = getProductsByCategory(categorySlug);
  
  const [products, setProducts] = useState<ProductBase[]>(categoryProducts);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("newest");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [priceRange, setPriceRange] = useState<{min: number | null, max: number | null}>({min: null, max: null});
  
  const productsPerPage = 12;
  
  // Get the appropriate filters for this category
  const filterCategories = filterConfigurations[categorySlug] || filterConfigurations.default;
  
  const { addItem } = useContext(CartContext);
  
  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...categoryProducts];
    
    // Apply category filters
    if (Object.keys(activeFilters).length > 0) {
      // Implement a simple OR within category, AND between categories
      filteredProducts = filteredProducts.filter(product => {
        for (const filterOptions of Object.values(activeFilters)) {
          if (filterOptions.length === 0) continue;
          
          // Check if the product matches any option in this filter category
          const matchesAnyOption = filterOptions.some(option => 
            product.name.toLowerCase().includes(option.toLowerCase()) || 
            (product.description && product.description.toLowerCase().includes(option.toLowerCase()))
          );
          
          // If it doesn't match any option in this category, filter it out
          if (!matchesAnyOption) return false;
        }
        
        // If it passed all filter categories, keep it
        return true;
      });
    }
    
    // Apply price range filter
    if (priceRange.min !== null || priceRange.max !== null) {
      filteredProducts = filteredProducts.filter(product => {
        const price = product.price;
        if (priceRange.min !== null && price < priceRange.min) return false;
        if (priceRange.max !== null && price > priceRange.max) return false;
        return true;
      });
    }
    
    // Apply sorting
    switch(sortOption) {
      case "price-low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "best-selling":
        // In a real app, you'd have sales data
        // For demo, we'll use review count as a proxy
        filteredProducts.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      case "newest":
      default:
        // Use isNew flag as a proxy for newest
        filteredProducts.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
    }
    
    setProducts(filteredProducts);
    // Reset to first page when filters or sort changes
    setCurrentPage(1);
  }, [activeFilters, sortOption, priceRange, categorySlug, categoryProducts]);
  
  // Calculate total pages and current page products
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Get related products (from other categories)
  const relatedProducts = categoryProducts.length > 0 
    ? getRelatedProducts(categorySlug, "", 4)
    : [];
  
  // Handle filter changes
  const handleFilterChange = (category: string, optionId: string, checked: boolean) => {
    setActiveFilters(prev => {
      const currentFilters = { ...prev };
      
      if (!currentFilters[category]) {
        currentFilters[category] = [];
      }
      
      if (checked) {
        // Option is being checked, add it to the filter
        currentFilters[category] = [...currentFilters[category], optionId];
      } else {
        // Option is being unchecked, remove it from the filter
        currentFilters[category] = currentFilters[category].filter(id => id !== optionId);
        
        // Remove the category if empty
        if (currentFilters[category].length === 0) {
          delete currentFilters[category];
        }
      }
      
      return currentFilters;
    });
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({});
    setPriceRange({min: null, max: null});
  };
  
  // Handle adding product to cart
  const handleAddToCart = (productId: string) => {
    console.log(`Adding product ${productId} to cart`);
    
    // Find the product in our filtered products
    const product = products.find(p => p.id === productId);
    
    if (product) {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
        quantity: 1
      };
      
      addItem(cartItem);
    }
  };
  
  // Handle adding product to wishlist
  const handleAddToWishlist = (productId: string) => {
    console.log(`Adding product ${productId} to wishlist`);
    // Implement actual add to wishlist logic here
  };
  
  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  // Handle price range change
  const handlePriceRangeChange = (min: number | null, max: number | null) => {
    setPriceRange({ min, max });
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <CategoryHeader 
        title={categoryTitle} 
        description={categoryDescription} 
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter and Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <button 
                  onClick={() => setIsFilterVisible(!isFilterVisible)}
                  className="flex items-center text-gray-900 font-medium mr-4 md:hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters
                </button>
                <div className="text-gray-700">
                  Showing {indexOfFirstProduct + 1}-
                  {indexOfLastProduct > products.length 
                    ? products.length 
                    : indexOfLastProduct} of {products.length} products
                </div>
              </div>
              
              <div className="flex items-center w-full md:w-auto">
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB]"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="best-selling">Best Selling</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar - Hidden on mobile by default */}
              <div className={`${isFilterVisible ? 'block' : 'hidden'} md:block md:col-span-1`}>
                <FilterSidebar 
                  filters={filterCategories}
                  activeFilters={activeFilters}
                  onFilterChange={handleFilterChange}
                  onClearAll={clearAllFilters}
                  onPriceRangeChange={handlePriceRangeChange}
                  priceRange={priceRange}
                />
              </div>
              
              {/* Product Grid */}
              <div className="md:col-span-3">
                {products.length > 0 ? (
                  <ProductGrid 
                    products={currentProducts}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                  />
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your filters or browse our other collections.</p>
                    <button 
                      onClick={clearAllFilters}
                      className="inline-block bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium px-6 py-3 rounded-sm transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
                
                {/* Pagination - Only show if we have products */}
                {products.length > 0 && (
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    baseUrl={`/products/${categorySlug}`}
                    onPageChange={setCurrentPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products Section - Only show if we have products to display */}
      {relatedProducts.length > 0 && (
        <RelatedProducts 
          products={relatedProducts}
          title="You May Also Like"
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      )}
      
      <Footer />
    </main>
  );
} 