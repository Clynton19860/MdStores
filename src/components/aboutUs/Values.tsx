const Values = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Our Values & <span className="text-accent-secondary">Mission</span>
          </h2>
          <p className="text-lg text-gray-200">
            At DM Stores, we are guided by our commitment to excellence, integrity, and creating unforgettable experiences for our customers. Every piece of jewelry we offer is a testament to these core values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-accent-secondary/10 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-center text-black">Quality & Craftsmanship</h3>
            <p className="text-gray-700 text-center">
              We source only the finest materials and work with skilled artisans to create jewelry that meets our exacting standards. Every piece is designed to be treasured for generations.
            </p>
          </div>
          
          {/* Value Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-center text-black">Innovation & Design</h3>
            <p className="text-gray-700 text-center">
              We blend timeless elegance with contemporary design, creating jewelry that is both on-trend and enduring. Our designers constantly push boundaries to bring fresh ideas to life.
            </p>
          </div>
          
          {/* Value Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-accent-secondary/10 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-center text-black">Customer Experience</h3>
            <p className="text-gray-700 text-center">
              We prioritize creating a personalized, memorable experience for every customer. Our jewelry experts provide guidance and support to help you find the perfect piece.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-accent-secondary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-secondary/30 via-accent-secondary to-accent-secondary/30"></div>
            
            <h3 className="text-2xl font-heading font-semibold mb-6 text-center text-black">Our Mission</h3>
            
            <p className="text-gray-700 text-center text-lg italic mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text font-semibold">
              &quot;To create extraordinary pieces that celebrate life&apos;s most precious moments, while providing an exceptional shopping experience built on trust, expertise, and personalized service.&quot;
            </p>
            
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-primary/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values; 