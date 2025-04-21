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
      
      // Create sparkles with random positions
      const newSparkles = Array.from({ length: 6 }, () => ({
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
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-block relative">
              <span className="inline-block text-sm md:text-base uppercase tracking-widest font-medium text-black">
                Get in Touch
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC0CB]"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-black">
            Contact <span className="text-[#FFC0CB]">Us</span>
          </h1>
          
          <div ref={sloganRef} className={`relative transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} mb-6 max-w-xl mx-auto`}>
            {sparkles.map((style, index) => (
              <Sparkle key={index} style={style} />
            ))}
            <h2 className="text-2xl md:text-3xl font-heading font-semibold italic bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text">
              We&apos;d love to hear from you
            </h2>
          </div>
          
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Whether you have questions about our products, custom designs, or need assistance with an order,
            our team is here to help you find the perfect piece for any occasion.
          </p>
          
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
              <div className="w-full h-full rotate-45 bg-[#FFC0CB] opacity-80 rounded-sm"></div>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-5 h-5 z-10 hidden md:block">
            <div className="w-full h-full animate-pulse animate-delay-1000">
              <div className="w-full h-full rotate-45 bg-primary opacity-80 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 