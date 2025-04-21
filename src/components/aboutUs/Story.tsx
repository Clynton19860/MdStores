import Image from "next/image";

const Story = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="relative">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=90"
              alt="Our jewelry craftsmanship"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Diamond sparkle animations */}
            <div className="absolute top-1/4 right-1/4 w-6 h-6 z-20">
              <div className="w-full h-full animate-pulse">
                <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
              </div>
            </div>
            
            {/* Floating badge similar to landing page */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-sm shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFC0CB] text-white">
                  <span className="text-sm font-bold">15+</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Years of</p>
                  <p className="text-sm font-medium text-gray-900">Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-gray-900">
          Our Journey
        </h2>
        
        <div className="space-y-4 text-gray-700">
          <p>
            Founded by two passionate jewelry enthusiasts, MDStores began as a small boutique in the heart of the Gold Coast. Our founders combined their expertise to create a brand that stands for quality, elegance, and timeless design.
          </p>
          
          <p>
            What started as a shared dream quickly blossomed into one of Australia&apos;s most respected luxury jewelry retailers. Our commitment to exceptional craftsmanship and personalized service has earned us the trust of thousands of customers seeking to celebrate life&apos;s most precious moments.
          </p>
          
          <p>
            Today, MDStores continues to grow, bringing our curated collections to discerning clients worldwide. Each piece in our collection tells a story of dedication, artistry, and the pursuit of perfection.
          </p>
        </div>
        
        <div className="mt-6">
          <a 
            href="/contact" 
            className="inline-block px-6 py-2 bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium rounded-sm transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Story; 