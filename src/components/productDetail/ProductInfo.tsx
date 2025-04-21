"use client";

import React, { useState } from "react";
import { StarIcon } from "./Icons";

interface Option {
  id: string;
  name: string;
  values: {
    id: string;
    label: string;
    available: boolean;
  }[];
}

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
  sku: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  options?: Option[];
  onOptionChange?: (optionId: string, valueId: string) => void;
}

export default function ProductInfo({
  name,
  price,
  originalPrice,
  sku,
  rating,
  reviewCount,
  inStock,
  options = [],
  onOptionChange,
}: ProductInfoProps) {
  // Track selected options
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    options.reduce((acc, option) => {
      const firstAvailableValue = option.values.find(v => v.available);
      return {
        ...acc,
        [option.id]: firstAvailableValue ? firstAvailableValue.id : ''
      };
    }, {})
  );

  // Handle option change
  const handleOptionChange = (optionId: string, valueId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionId]: valueId
    }));
    
    if (onOptionChange) {
      onOptionChange(optionId, valueId);
    }
  };

  // Format prices with currency
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(originalPrice)
    : null;

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900">
        {name}
      </h1>

      {/* Price */}
      <div className="mt-4 flex items-center">
        <span className="text-xl md:text-2xl font-medium text-gray-900">
          {formattedPrice}
        </span>
        {formattedOriginalPrice && (
          <span className="ml-3 text-base text-gray-500 line-through">
            {formattedOriginalPrice}
          </span>
        )}
      </div>

      {/* Ratings */}
      <div className="mt-4 flex items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon 
              key={i} 
              filled={i < Math.floor(rating)} 
              halfFilled={i === Math.floor(rating) && !Number.isInteger(rating)}
              className="w-5 h-5 text-amber-400"
            />
          ))}
        </div>
        <a href="#reviews" className="ml-2 text-sm text-gray-600 hover:text-[#FFC0CB]">
          {reviewCount} reviews
        </a>
      </div>

      {/* SKU & Availability */}
      <div className="mt-4 flex flex-wrap items-center text-sm text-gray-700">
        <span className="mr-4 mb-2">
          SKU: <span className="font-medium">{sku}</span>
        </span>
        <span className={`mb-2 px-2 py-0.5 rounded-sm ${inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      {/* Options */}
      <div className="mt-6 space-y-6">
        {options.map((option) => (
          <div key={option.id}>
            <h3 className="text-sm font-medium text-gray-900">{option.name}</h3>
            
            <div className="mt-2">
              {option.name.toLowerCase() === 'color' ? (
                // Color swatches
                <div className="flex items-center space-x-2">
                  {option.values.map((value) => (
                    <button
                      key={value.id}
                      onClick={() => handleOptionChange(option.id, value.id)}
                      disabled={!value.available}
                      className={`
                        relative w-8 h-8 rounded-full p-0.5 
                        ${selectedOptions[option.id] === value.id ? 'ring-2 ring-[#FFC0CB]' : ''} 
                        ${!value.available ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                      title={value.label}
                    >
                      <span 
                        className="block w-full h-full rounded-full border border-gray-300"
                        style={{ backgroundColor: value.label.toLowerCase() }}
                      ></span>
                    </button>
                  ))}
                </div>
              ) : (
                // Other option types (size, material, etc.)
                <div className="flex flex-wrap items-center gap-2">
                  {option.values.map((value) => (
                    <button
                      key={value.id}
                      onClick={() => handleOptionChange(option.id, value.id)}
                      disabled={!value.available}
                      className={`
                        px-3 py-1 text-sm border rounded-sm 
                        ${selectedOptions[option.id] === value.id 
                          ? 'bg-[#FFC0CB] text-white border-[#FFC0CB]' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'} 
                        ${!value.available ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
                      `}
                    >
                      {value.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 