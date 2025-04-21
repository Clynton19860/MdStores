import Image from "next/image";

const Story = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-4 md:p-8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl">
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>
                
                {/* Diamond sparkle animations */}
                <div className="absolute top-1/4 right-1/4 w-6 h-6 z-20">
                  <div className="w-full h-full animate-pulse">
                    <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/3 w-4 h-4 z-20">
                  <div className="w-full h-full animate-pulse animate-delay-500">
                    <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-5 h-5 z-20">
                  <div className="w-full h-full animate-pulse animate-delay-1000">
                    <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
                  </div>
                </div>
                
                <Image
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=90"
                  alt="Our jewelry craftsmanship"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-primary/20 rounded-lg -z-10"></div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 md:bottom-6 md:left-0 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                  <span className="text-sm font-bold">15+</span>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Years of</p>
                  <p className="text-sm font-medium text-gray-900">Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-black">
              Our <span className="text-accent-secondary">Journey</span>
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Founded by two passionate jewelry enthusiasts, DM Stores began as a small boutique in the heart of the Gold Coast. Our founders, David and Mia, combined their initials and expertise to create a brand that stands for quality, elegance, and timeless design.
              </p>
              
              <p>
                What started as a shared dream quickly blossomed into one of Australia&apos;s most respected luxury jewelry retailers. Our commitment to exceptional craftsmanship and personalized service has earned us the trust of thousands of customers seeking to celebrate life&apos;s most precious moments.
              </p>
              
              <p>
                Today, DM Stores continues to grow, bringing our curated collections to discerning clients worldwide. Each piece in our collection tells a story of dedication, artistry, and the pursuit of perfection.
              </p>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=100&h=100&fit=crop&q=90"
                  alt="David & Mia"
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-accent-secondary"
                />
                <div>
                  <p className="font-medium text-black">David & Mia</p>
                  <p className="text-sm text-gray-600">Founders, DM Stores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story; 