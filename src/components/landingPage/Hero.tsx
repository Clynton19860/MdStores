"use client";

import { useEffect, useState, useRef } from "react";
import ImageWithFallback from "./ImageWithFallback";

// Sparkle component
const Sparkle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute inline-block w-3 h-3 rounded-full bg-white animate-sparkle"
    style={style}
  >
    <div className="absolute inset-0 rotate-45">
      <div className="absolute w-full h-0.5 bg-yellow-300 top-1/2 left-0 -translate-y-1/2"></div>
      <div className="absolute h-full w-0.5 bg-yellow-300 left-1/2 top-0 -translate-x-1/2"></div>
    </div>
  </div>
);

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [sparkles, setSparkles] = useState<React.CSSProperties[]>([]);
  const sloganRef = useRef<HTMLDivElement>(null);

  // Fade in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate random sparkles
  useEffect(() => {
    if (visible && sloganRef.current) {
      const width = sloganRef.current.offsetWidth;
      const height = sloganRef.current.offsetHeight;
      
      // Create 8 sparkles with random positions
      const newSparkles = Array.from({ length: 8 }, () => ({
        top: `${Math.random() * height}px`,
        left: `${Math.random() * width}px`,
        opacity: Math.random() * 0.7 + 0.3,
        animationDelay: `${Math.random() * 2}s`,
        transform: `scale(${Math.random() * 0.5 + 0.5})`,
        animationDuration: `${Math.random() * 2 + 1}s`,
      }));
      
      setSparkles(newSparkles);
    }
  }, [visible]);

  return (
    <section className="relative bg-gray-400">
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-block relative">
                <span className="inline-block text-sm md:text-base uppercase tracking-widest font-medium text-black">
                  Timeless Elegance
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC0CB]"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-black">
              Exquisite Jewelry <br />
              <span className="text-[#FFC0CB]">Luxury Collection</span>
            </h1>
            
            <div ref={sloganRef} className={`relative transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} mb-6`}>
              {sparkles.map((style, index) => (
                <Sparkle key={index} style={style} />
              ))}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold italic bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text">
                Sparkle with confidence
              </h2>
            </div>
            
            <p className="text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 text-gray-700">
              Discover our handcrafted luxury jewelry collection that combines timeless elegance with contemporary design. Each piece is meticulously crafted with the finest materials.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#featured" 
                className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors"
              >
                Explore Collection
              </a>
              <a 
                href="/about" 
                className="inline-block px-8 py-4 bg-white border border-gray-300 hover:border-[#FFC0CB] hover:text-[#FFC0CB] text-gray-800 font-medium rounded-md transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-4 md:p-8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl">
                {/* Diamond sparkle animations */}
                <div className="absolute top-1/4 right-1/4 w-6 h-6 z-10">
                  <div className="w-full h-full animate-pulse">
                    <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/3 w-4 h-4 z-10">
                  <div className="w-full h-full animate-pulse animate-delay-500">
                    <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-5 h-5 z-10">
                  <div className="w-full h-full animate-pulse animate-delay-1000">
                    <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
                  </div>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=800&q=90"
                  alt="Luxury jewelry collection"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Floating badge - replace with a simplified version that doesn't use missing images */}
            <div className="absolute -bottom-5 -left-5 md:bottom-6 md:left-0 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                  <span className="text-sm font-bold">2k+</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Trusted by</p>
                  <p className="text-sm font-medium text-gray-900">2,000+ customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 