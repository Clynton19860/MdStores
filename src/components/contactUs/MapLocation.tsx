"use client";

import { useState } from "react";

const MapLocation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h3 className="text-2xl font-heading font-semibold mb-6 text-gray-900">
        Find Us
      </h3>
      
      <div className="relative aspect-video overflow-hidden rounded-sm shadow-sm bg-gray-200">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
            <div className="animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
          </div>
        )}
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0684433815563!2d-122.42371318439698!3d37.78282291964813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808eb524b19f%3A0xa67f9c893c1ecb6c!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1652376635417!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, minHeight: "300px" }}
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          onLoad={() => setIsLoaded(true)}
        ></iframe>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC0CB]/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFC0CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-gray-700">
            123 Luxury Lane, Prestige City, Gold Coast, Australia
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-700">
            5 minutes from Gold Coast Central Station
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC0CB]/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFC0CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-gray-700">
            Free parking available for customers
          </p>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <a 
          href="https://goo.gl/maps/1JfQN5EzFDD9CKWL7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium rounded-sm transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default MapLocation; 