"use client";

import { useState } from "react";
import Link from "next/link";
import CartIcon from "@/components/cart/CartIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  // Define jewelry categories
  const categories = [
    { name: "Rings", path: "/products/rings" },
    { name: "Necklaces", path: "/products/necklaces" },
    { name: "Earrings", path: "/products/earrings" },
    { name: "Bracelets", path: "/products/bracelets" },
    { name: "All Products", path: "/products" },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-semibold font-heading text-accent">
            MD
          </span>
          <span className="text-2xl font-light font-heading text-black">
            Stores
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-black hover:text-primary transition-colors font-body">
            Home
          </Link>
          
          {/* Shop Dropdown */}
          <div className="relative group">
            <button 
              className="text-black hover:text-primary transition-colors font-body flex items-center"
              onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
              onMouseEnter={() => setIsShopMenuOpen(true)}
              onMouseLeave={() => setIsShopMenuOpen(false)}
            >
              Shop
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${isShopMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              onMouseEnter={() => setIsShopMenuOpen(true)}
              onMouseLeave={() => setIsShopMenuOpen(false)}
            >
              <div className="py-1">
                {categories.map((category, index) => (
                  <Link 
                    key={index} 
                    href={category.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-black hover:text-primary transition-colors font-body">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-primary transition-colors font-body">
            Contact
          </Link>
        </div>

        {/* Shopping Cart */}
        <div className="flex items-center">
          <CartIcon />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-4 text-black hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-6 space-y-4 bg-white">
          <Link href="/" className="block text-black hover:text-primary transition-colors font-body">
            Home
          </Link>
          
          {/* Mobile Shop Categories */}
          <div>
            <button 
              onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
              className="flex items-center justify-between w-full text-black hover:text-primary transition-colors font-body"
            >
              Shop
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isShopMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isShopMenuOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {categories.map((category, index) => (
                  <Link 
                    key={index} 
                    href={category.path}
                    className="block text-gray-700 hover:text-primary transition-colors font-body"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/about" className="block text-black hover:text-primary transition-colors font-body">
            About
          </Link>
          <Link href="/contact" className="block text-black hover:text-primary transition-colors font-body">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 