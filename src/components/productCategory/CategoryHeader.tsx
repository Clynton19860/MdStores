import React from "react";

interface CategoryHeaderProps {
  title: string;
  description?: string;
}

export default function CategoryHeader({ title, description }: CategoryHeaderProps) {
  return (
    <div className="relative bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
              Collection
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            {description && (
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 