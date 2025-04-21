"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link href="/shop" className="text-black hover:text-primary transition-colors font-body">
            Shop
          </Link>
          <Link href="/categories" className="text-black hover:text-primary transition-colors font-body">
            Categories
          </Link>
          <Link href="/about" className="text-black hover:text-primary transition-colors font-body">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-primary transition-colors font-body">
            Contact
          </Link>
        </div>

        {/* Shopping Cart Icon */}
        <div className="flex items-center">
          <button className="relative p-2 text-black hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>

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
          <Link href="/shop" className="block text-black hover:text-primary transition-colors font-body">
            Shop
          </Link>
          <Link href="/categories" className="block text-black hover:text-primary transition-colors font-body">
            Categories
          </Link>
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