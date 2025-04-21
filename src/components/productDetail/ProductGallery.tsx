"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  // Handle clicking on a thumbnail
  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-sm mb-4 bg-white shadow-sm">
        <Image
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority
        />
        
        {/* Previous/Next buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto py-2">
          {images.map((image, index) => (
            <button 
              key={image.id} 
              onClick={() => handleThumbnailClick(index)}
              className={`relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 border-2 transition-colors ${
                activeImage === index ? "border-[#FFC0CB]" : "border-transparent hover:border-gray-300"
              }`}
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 