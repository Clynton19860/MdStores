import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import { getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Jewelry Collections | MDStores",
  description: "Explore our complete collection of fine jewelry, including rings, necklaces, bracelets, earrings and watches.",
};

// Category data with enhanced descriptions and statistics
const categories = [
  {
    id: "rings",
    name: "Rings",
    description: "Elegant diamond rings, wedding bands, and statement pieces for every occasion",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop",
    count: 42,
    featuredProducts: ["Diamond Eternity Ring", "Gold Engagement Ring"]
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Beautiful pendants, chains, and statement necklaces crafted with precision",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop",
    count: 36,
    featuredProducts: ["Pearl Pendant Necklace", "Diamond Solitaire Necklace"]
  },
  {
    id: "bracelets",
    name: "Bracelets",
    description: "Tennis bracelets, bangles, and charm bracelets featuring the finest materials",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop",
    count: 28,
    featuredProducts: ["Gold Tennis Bracelet", "Pearl Bracelet"]
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Studs, hoops, drops, and statement earrings to complement any style",
    image: "https://images.unsplash.com/photo-1635767798638-3665a257f62d?w=800&h=600&fit=crop",
    count: 32,
    featuredProducts: ["Sapphire Drop Earrings", "Diamond Stud Earrings"]
  }
];

// Special collections
const collections = [
  {
    id: "wedding",
    title: "Wedding Collection", 
    description: "Elegant rings and jewelry for your special day, crafted to last a lifetime",
    image: "https://images.unsplash.com/photo-1515626553181-0f218cb03f14?w=800&h=1000&fit=crop",
    link: "/products/rings",
    featured: "Engagement rings, wedding bands, and gifts for the bridal party"
  },
  {
    id: "diamond",
    title: "Diamond Essentials", 
    description: "Timeless diamond pieces for every occasion, from casual to formal",
    image: "https://images.unsplash.com/photo-1586878341476-8faf6e582bf3?w=800&h=1000&fit=crop",
    link: "/products", 
    featured: "Classic studs, tennis bracelets, and pendants with exceptional brilliance"
  },
  {
    id: "gold",
    title: "Gold Statement", 
    description: "Bold and elegant gold jewelry pieces that make a lasting impression",
    image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=800&h=1000&fit=crop",
    link: "/products", 
    featured: "18K gold chains, cuffs, and sculptural pieces designed for the confident"
  }
];

export default function ProductsPage() {
  // Get featured products from our data file
  const featuredProducts = getFeaturedProducts(8);
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Our Collections
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
                Fine Jewelry Collections
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                We&apos;ve curated our finest pieces for you to browse and enjoy
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
              Browse by Category
            </span>
            <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-2">
              Jewelry Categories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Discover your perfect piece from our carefully curated collections
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Trending Now
              </span>
              <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-2">
                Popular This Season
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                Our customers&apos; favorites and latest arrivals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 8).map((product) => (
                <FeaturedProductCard 
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.imageUrl}
                  category={product.category}
                  isNew={product.isNew}
                  isSale={product.isSale}
                  slug={product.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Collections Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Special Collections
              </span>
              <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-2">
                Featured Collections
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <FeatureCard 
                  key={collection.id}
                  title={collection.title} 
                  image={collection.image}
                  description={collection.description}
                  link={collection.link}
                  featured={collection.featured}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Support Banner */}
      <section className="py-12 bg-[#FFC0CB]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-4">
                  Need Help Finding the Perfect Piece?
                </h2>
                <p className="text-gray-700 mb-6">
                  Our jewelry experts are ready to assist you with personalized recommendations,
                  sizing help, and guidance on custom designs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium px-6 py-3 rounded-sm transition-colors"
                  >
                    Contact Us
                  </Link>
                  <a 
                    href="tel:+6141234578" 
                    className="border-2 border-gray-300 hover:border-[#FFC0CB] text-gray-900 font-medium px-6 py-3 rounded-sm transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square relative">
                    <Image
                      src="https://images.unsplash.com/photo-1611106201568-eb46cf1a3b21?w=300&h=300&fit=crop"
                      alt="Jewelry expert"
                      width={100}
                      height={100}
                      className="object-cover rounded-sm shadow-md"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="https://images.unsplash.com/photo-1583309219338-c384d5ad1317?w=300&h=300&fit=crop"
                      alt="Jewelry craftsmanship"
                      width={100}
                      height={100}
                      className="object-cover rounded-sm shadow-md"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=300&h=300&fit=crop"
                      alt="Customer service"
                      width={100}
                      height={100}
                      className="object-cover rounded-sm shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

// Category Card Component
function CategoryCard({ category }: { category: typeof categories[0] }) {
  return (
    <div className="relative group overflow-hidden bg-white rounded-sm shadow-sm h-full">
      <Link href={`/products/${category.id}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="p-6 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 max-w-xs">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {category.featuredProducts.map((product, idx) => (
                      <span key={idx} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm ml-2 whitespace-nowrap">
                  {category.count} items
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Featured Product Card
function FeaturedProductCard({ 
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
  slug,
}: { 
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  slug: string;
}) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const formattedOriginalPrice = originalPrice 
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(originalPrice)
    : null;

  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4 bg-white rounded-lg shadow-sm">
        <div className="aspect-square relative">
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
          />
          {isNew && (
            <div className="absolute top-4 right-4 z-20 bg-[#FFC0CB] text-white text-xs font-bold px-2 py-1 rounded-sm">
              NEW
            </div>
          )}
          {isSale && !isNew && (
            <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
              SALE
            </div>
          )}
          <div className="absolute inset-0 z-20 animate-diamond-sparkle pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
          <Link
            href={`/products/${category}/${slug}`}
            className="bg-white text-gray-900 py-2 px-4 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2 capitalize">{category}</p>
        <div className="font-heading">
          {originalPrice ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl text-primary">{formattedPrice}</span>
              <span className="text-sm text-gray-500 line-through">{formattedOriginalPrice}</span>
            </div>
          ) : (
            <p className="text-xl text-primary">{formattedPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ 
  title, 
  image, 
  description, 
  link,
  featured
}: { 
  title: string; 
  image: string; 
  description: string; 
  link: string; 
  featured: string;
}) {
  return (
    <div className="relative group overflow-hidden bg-white rounded-sm shadow-sm h-full">
      <Link href={link} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end">
            <div className="p-6 text-center">
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-white/80 text-sm mb-4">
                {description}
              </p>
              <div className="bg-white/10 backdrop-blur-sm text-white text-xs p-2 rounded-sm mb-4">
                {featured}
              </div>
              <span className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-sm transition-colors">
                Explore Collection
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 