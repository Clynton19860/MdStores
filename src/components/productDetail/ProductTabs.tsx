"use client";

import React, { useState } from "react";

interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ProductTabsProps {
  tabs: TabData[];
  defaultTab?: string;
}

export default function ProductTabs({ tabs, defaultTab = tabs[0]?.id }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? 'border-[#FFC0CB] text-[#FFC0CB]'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'block' : 'hidden'}
            aria-labelledby={`tab-${tab.id}`}
            role="tabpanel"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

// Pre-designed tab content components for common use cases
export function DescriptionContent({ description }: { description: string }) {
  return (
    <div className="prose prose-sm max-w-none text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export function SpecificationsContent({ specifications }: { specifications: { name: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
      {specifications.map((spec, index) => (
        <div key={index} className="flex">
          <span className="font-medium text-gray-900 w-1/3 sm:w-2/5">{spec.name}:</span>
          <span className="text-gray-700 w-2/3 sm:w-3/5">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}

export function ShippingContent() {
  return (
    <div className="space-y-4 text-gray-700">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Standard Shipping</h3>
        <p className="text-sm">
          Orders typically ship within 1-2 business days. Once shipped, delivery typically takes 3-7 business days, depending on your location.
        </p>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Express Shipping</h3>
        <p className="text-sm">
          Need it faster? Select Express Shipping at checkout for delivery within 1-3 business days.
        </p>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">International Shipping</h3>
        <p className="text-sm">
          We ship to select international locations. International orders may be subject to import duties and taxes, which are the responsibility of the customer.
        </p>
      </div>
    </div>
  );
}

export function ReturnPolicyContent() {
  return (
    <div className="space-y-4 text-gray-700">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">30-Day Returns</h3>
        <p className="text-sm">
          We want you to be completely satisfied with your purchase. If you&apos;re not completely satisfied with your purchase, we accept returns within 30 days of delivery.
        </p>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Return Conditions</h3>
        <p className="text-sm">
          Items must be returned in their original condition and packaging, unworn and with all tags attached.
        </p>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Exclusions</h3>
        <p className="text-sm">
          Custom pieces, personalized items, and special orders cannot be returned unless the item is damaged or defective.
        </p>
      </div>
    </div>
  );
} 