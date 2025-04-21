import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  // Get featured products from our data file
  const featuredProducts = getFeaturedProducts(4);
  
  return (
    <section className="py-16 bg-gray-50" id="featured">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
            Featured Collection
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Discover our most coveted pieces, meticulously crafted to elevate your style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden mb-4 bg-white rounded-lg shadow-sm">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 right-4 z-20 bg-[#FFC0CB] text-white text-xs font-bold px-2 py-1 rounded-sm">
                      NEW
                    </div>
                  )}
                  {product.isSale && !product.isNew && (
                    <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
                      SALE
                    </div>
                  )}
                  <div className="absolute inset-0 z-20 animate-diamond-sparkle pointer-events-none"></div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="bg-white text-gray-900 py-2 px-4 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2 capitalize">{product.category}</p>
                <div className="font-heading">
                  {product.originalPrice ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl text-primary">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                  ) : (
                    <p className="text-xl text-primary">${product.price}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 transition-colors rounded-sm"
          >
            View All Collections
          </Link>
          <div className="mt-6 border-t border-primary/10 pt-6 flex justify-center">
            <span className="inline-block px-4 py-2 bg-[#FFC0CB]/10 text-[#FFC0CB] rounded-sm font-medium">
              Free shipping on orders over $150
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 