"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Star icon component
const StarIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="currentColor" 
    strokeWidth="1" 
    className={className}
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

// Testimonial type
interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

// Sample testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Reynolds",
    title: "Fashion Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The craftsmanship of my diamond ring is exceptional. I receive compliments every time I wear it. MDStores has exceeded my expectations in every way.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Wilson",
    title: "Executive",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "I purchased a necklace for my wife&apos;s anniversary and she absolutely loves it. The attention to detail and quality is truly outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "MDStores offers impeccable service and the most exquisite jewelry I&apos;ve ever owned. Their pieces are timeless investments that I cherish.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            ref={sliderRef}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-6"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full object-cover"
                        fill
                      />
                    </div>
                    <blockquote className="text-gray-800 italic mb-4">&quot;{testimonial.quote}&quot;</blockquote>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 