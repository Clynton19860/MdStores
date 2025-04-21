import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-black">
            Experience the DM Stores <span className="text-accent-secondary">Difference</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Visit our showroom to explore our exclusive collections and receive personalized service from our expert consultants. We look forward to helping you find the perfect piece to celebrate life&apos;s special moments.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/shop" 
              className="inline-block px-8 py-4 bg-accent-secondary hover:bg-accent-secondary/90 text-white font-medium rounded-md transition-colors"
            >
              Explore Our Collections
            </Link>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white border border-gray-300 hover:border-accent-secondary hover:text-accent-secondary text-gray-800 font-medium rounded-md transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Lifetime Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Expert Advice</span>
            </div>
          </div>
          
          {/* Diamond sparkle animation */}
          <div className="relative mt-16">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 z-10">
              <div className="w-full h-full animate-twinkle">
                <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 