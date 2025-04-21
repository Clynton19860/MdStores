"use client";

import React, { useState } from "react";

type FilterOption = {
  id: string;
  label: string;
};

type FilterCategory = {
  name: string;
  options: FilterOption[];
};

interface FilterSidebarProps {
  filters: FilterCategory[];
  onFilterChange: (category: string, optionId: string, checked: boolean) => void;
  activeFilters: Record<string, string[]>;
  onClearAll: () => void;
  onPriceRangeChange?: (min: number | null, max: number | null) => void;
  priceRange?: {min: number | null, max: number | null};
}

export default function FilterSidebar({ 
  filters, 
  onFilterChange, 
  activeFilters, 
  onClearAll,
  onPriceRangeChange,
  priceRange = {min: null, max: null}
}: FilterSidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    filters.reduce((acc, filter) => ({ ...acc, [filter.name]: true }), {})
  );
  const [minPrice, setMinPrice] = useState<string>(priceRange.min?.toString() || "");
  const [maxPrice, setMaxPrice] = useState<string>(priceRange.max?.toString() || "");
  const [isPriceExpanded, setIsPriceExpanded] = useState(true);

  const toggleExpand = (category: string) => {
    setExpanded(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const handleApplyPriceFilter = () => {
    if (!onPriceRangeChange) return;
    
    const min = minPrice === "" ? null : Number(minPrice);
    const max = maxPrice === "" ? null : Number(maxPrice);
    
    onPriceRangeChange(min, max);
  };

  const handleClearPriceFilter = () => {
    if (!onPriceRangeChange) return;
    
    setMinPrice("");
    setMaxPrice("");
    onPriceRangeChange(null, null);
  };

  const hasActiveFilters = Object.keys(activeFilters).length > 0 || 
    priceRange.min !== null || 
    priceRange.max !== null;

  return (
    <div className="bg-white rounded-sm shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button 
            onClick={onClearAll}
            className="text-sm text-[#FFC0CB] hover:text-[#ffaabb] font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category filters */}
      {filters.map((filter) => (
        <div key={filter.name} className="mb-6 border-b border-gray-100 pb-4">
          <button 
            className="flex justify-between items-center w-full text-left mb-3"
            onClick={() => toggleExpand(filter.name)}
          >
            <h4 className="font-medium text-gray-900">{filter.name}</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform transition-transform ${expanded[filter.name] ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {expanded[filter.name] && (
            <div className="mt-2 space-y-2">
              {filter.options.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${filter.name}-${option.id}`}
                    checked={activeFilters[filter.name]?.includes(option.id) || false}
                    onChange={(e) => onFilterChange(filter.name, option.id, e.target.checked)}
                    className="form-checkbox h-4 w-4 text-[#FFC0CB] rounded border-gray-300 focus:ring-[#FFC0CB]"
                  />
                  <label htmlFor={`${filter.name}-${option.id}`} className="ml-2 text-sm text-gray-700">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Price Range Filter */}
      {onPriceRangeChange && (
        <div className="mb-6">
          <button 
            className="flex justify-between items-center w-full text-left mb-3"
            onClick={() => setIsPriceExpanded(!isPriceExpanded)}
          >
            <h4 className="font-medium text-gray-900">Price Range</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform transition-transform ${isPriceExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isPriceExpanded && (
            <div className="mt-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="min-price" className="text-xs text-gray-600 mb-1 block">Min ($)</label>
                  <input
                    type="number"
                    id="min-price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="0"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB]"
                  />
                </div>
                <div>
                  <label htmlFor="max-price" className="text-xs text-gray-600 mb-1 block">Max ($)</label>
                  <input
                    type="number"
                    id="max-price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="5000"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB]"
                  />
                </div>
              </div>
              
              <div className="mt-3 flex space-x-2">
                <button 
                  onClick={handleApplyPriceFilter}
                  className="flex-1 bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium px-4 py-2 rounded-sm transition-colors text-sm"
                >
                  Apply
                </button>
                
                {(priceRange.min !== null || priceRange.max !== null) && (
                  <button 
                    onClick={handleClearPriceFilter}
                    className="px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50 text-sm"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              {priceRange.min !== null || priceRange.max !== null ? (
                <div className="mt-2 text-xs text-gray-500">
                  Active: 
                  {priceRange.min !== null && priceRange.max !== null 
                    ? ` $${priceRange.min} - $${priceRange.max}`
                    : priceRange.min !== null 
                      ? ` From $${priceRange.min}` 
                      : ` Up to $${priceRange.max}`
                  }
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
      
      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h4 className="font-medium text-gray-900 mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, options]) => 
              options.map(option => (
                <div 
                  key={`${category}-${option}`} 
                  className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs"
                >
                  <span className="mr-1">{option}</span>
                  <button 
                    onClick={() => onFilterChange(category, option, false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))
            )}
            
            {(priceRange.min !== null || priceRange.max !== null) && (
              <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs">
                <span className="mr-1">
                  {priceRange.min !== null && priceRange.max !== null 
                    ? `$${priceRange.min} - $${priceRange.max}`
                    : priceRange.min !== null 
                      ? `From $${priceRange.min}` 
                      : `Up to $${priceRange.max}`
                  }
                </span>
                <button 
                  onClick={handleClearPriceFilter}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 