"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do you offer custom jewelry design?",
      answer: "Yes, we offer custom jewelry design services. Our skilled artisans can work with you to create a unique piece that reflects your personal style and vision. Please contact us to schedule a consultation."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal, bank transfers, and financing options for qualified purchases."
    },
    {
      question: "Do you offer jewelry repair services?",
      answer: "Yes, we provide comprehensive jewelry repair services, including ring sizing, chain repair, stone replacement, prong retipping, clasp replacement, and jewelry cleaning. Please bring your piece to our store for a free evaluation."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in their original condition and packaging. Custom pieces are non-refundable. Please refer to our full return policy for more details or contact our customer service team."
    },
    {
      question: "Do you offer jewelry appraisals?",
      answer: "Yes, we offer professional jewelry appraisals for insurance, estate, or resale purposes. Our certified gemologists provide detailed documentation of your jewelry's value based on current market conditions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to our most commonly asked questions below.
        </p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
          >
            <button
              className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none group"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className={`text-base ${openIndex === index ? 'text-[#FFC0CB]' : ''}`}>{faq.question}</span>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <svg className="h-5 w-5 text-[#FFC0CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-[#FFC0CB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 pr-6">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <span className="inline-block px-4 py-2 bg-[#FFC0CB]/10 text-[#FFC0CB] rounded-sm font-medium">
          Have more questions? <a href="mailto:contact@mdstores.com" className="underline">Contact us</a>
        </span>
      </div>
    </div>
  );
} 