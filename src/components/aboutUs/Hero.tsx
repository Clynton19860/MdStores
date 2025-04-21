"use client";

import { useEffect, useState, useRef } from "react";

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
    <section className="relative bg-gray-500 py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block relative">
              <span className="inline-block text-sm md:text-base uppercase tracking-widest font-medium text-white">
                Our Story
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-secondary"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
            Who We Are
          </h1>
          
          <div ref={sloganRef} className={`relative transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} mb-8`}>
            {sparkles.map((style, index) => (
              <Sparkle key={index} style={style} />
            ))}
            <p className="text-xl md:text-2xl font-heading italic bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text">
              Established in 2025, DM Stores is your one-stop shop for all things glamorous and glimmering, from elegant jewelry pieces to stunning accessories.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-primary"></div>
          </div>

          {/* Diamond sparkle animations */}
          <div className="absolute top-1/4 right-1/4 w-6 h-6 z-10 hidden md:block">
            <div className="w-full h-full animate-pulse">
              <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/3 w-4 h-4 z-10 hidden md:block">
            <div className="w-full h-full animate-pulse animate-delay-500">
              <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-5 h-5 z-10 hidden md:block">
            <div className="w-full h-full animate-pulse animate-delay-1000">
              <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 