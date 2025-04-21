"use client";

import React from "react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  baseUrl,
  onPageChange 
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    // Always show first page
    pages.push(
      <PaginationItem 
        key={1} 
        page={1} 
        isActive={currentPage === 1} 
        baseUrl={baseUrl}
        onClick={() => handlePageChange(1)}
      />
    );
    
    // Determine range of pages to show around current page
    const startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3);
    
    // Adjust if we're near the beginning
    if (startPage > 2) {
      pages.push(<span key="ellipsis-start" className="px-3 py-2">...</span>);
    }
    
    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem 
          key={i} 
          page={i} 
          isActive={currentPage === i} 
          baseUrl={baseUrl}
          onClick={() => handlePageChange(i)}
        />
      );
    }
    
    // Add ellipsis if needed
    if (endPage < totalPages - 1) {
      pages.push(<span key="ellipsis-end" className="px-3 py-2">...</span>);
    }
    
    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pages.push(
        <PaginationItem 
          key={totalPages} 
          page={totalPages} 
          isActive={currentPage === totalPages} 
          baseUrl={baseUrl}
          onClick={() => handlePageChange(totalPages)}
        />
      );
    }
    
    return pages;
  };

  // Don't render pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-8">
      {/* Previous Page Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          flex items-center justify-center px-3 py-2 mx-1 rounded-sm
          ${currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:bg-[#FFC0CB]/10 hover:text-[#FFC0CB]'}
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Page Numbers */}
      <div className="flex items-center">
        {renderPageNumbers()}
      </div>
      
      {/* Next Page Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          flex items-center justify-center px-3 py-2 mx-1 rounded-sm
          ${currentPage === totalPages 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:bg-[#FFC0CB]/10 hover:text-[#FFC0CB]'}
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

interface PaginationItemProps {
  page: number;
  isActive: boolean;
  baseUrl: string;
  onClick: () => void;
}

function PaginationItem({ page, isActive, baseUrl, onClick }: PaginationItemProps) {
  const className = `
    w-10 h-10 flex items-center justify-center rounded-sm mx-1 text-sm font-medium
    ${isActive 
      ? 'bg-[#FFC0CB] text-white' 
      : 'text-gray-700 hover:bg-[#FFC0CB]/10 hover:text-[#FFC0CB]'}
  `;
  
  return (
    <Link 
      href={`${baseUrl}?page=${page}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={className}
    >
      {page}
    </Link>
  );
} 