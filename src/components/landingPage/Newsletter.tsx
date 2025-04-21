"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Reset error if previously set
    setError("");
    
    // Simulate submission success
    // In a real application, you would call an API here
    setSubmitted(true);
    
    // Clear form after successful submission
    setEmail("");
  };

  return (
    <section className="py-16 bg-gray-100 relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="w-1/3 h-full bg-[#FFC0CB]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-4">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Stay updated with our latest collections, exclusive offers, and jewelry care tips.
          </p>

          {submitted ? (
            <div className="bg-green-50 p-6 rounded-sm border border-green-200">
              <p className="text-green-800 font-medium">
                Thank you for subscribing! We've sent a confirmation to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 border ${
                    error ? "border-red-300 bg-red-50" : "border-gray-300"
                  } rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB] transition-colors`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>
              <button
                type="submit"
                className="bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium px-6 py-3 rounded-sm transition-colors md:min-w-[140px]"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-gray-600">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 