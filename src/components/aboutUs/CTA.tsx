import Link from "next/link";

const CTA = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm text-center">
      <h3 className="text-2xl font-heading font-semibold mb-6 text-gray-900">
        Experience the MDStores Difference
      </h3>
      
      <p className="text-gray-700 text-lg italic mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text font-semibold">
        &quot;Visit our showroom to explore our exclusive collections and receive personalized service from our expert consultants.&quot;
      </p>
      
      <div className="mt-8">
        <Link 
          href="/contact" 
          className="inline-block px-8 py-3 bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium rounded-sm transition-colors"
        >
          Contact Us
        </Link>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFC0CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700">Free Shipping</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFC0CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700">Lifetime Warranty</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFC0CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700">Expert Advice</span>
        </div>
      </div>
      
      <p className="mt-4 text-xs text-gray-600">
        Private appointments are available Monday through Saturday.
      </p>
    </div>
  );
};

export default CTA; 