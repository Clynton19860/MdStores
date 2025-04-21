import Link from "next/link";

// Category type
interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
  count: number;
}

// Sample categories
const categories: Category[] = [
  {
    id: 1,
    name: "Rings",
    image: "https://images.unsplash.com/photo-1603561584345-76c1be9ec6c5?w=500&h=500&fit=crop",
    slug: "rings",
    count: 24,
  },
  {
    id: 2,
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&h=500&fit=crop",
    slug: "necklaces",
    count: 18,
  },
  {
    id: 3,
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=500&h=500&fit=crop",
    slug: "earrings",
    count: 20,
  },
  {
    id: 4,
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&h=500&fit=crop",
    slug: "bracelets",
    count: 16,
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
            Shop By Category
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Explore our carefully curated collections of premium jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/products/${category.slug}`}>
              <div className="group relative overflow-hidden rounded-sm h-64 flex items-center justify-center">
                {/* Category image background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>
                
                {/* Category content */}
                <div className="relative text-center p-6 z-10">
                  <h3 className="text-2xl font-heading font-semibold text-white mb-1">{category.name}</h3>
                  <span className="inline-block text-sm text-white/80">
                    {category.count} Pieces
                  </span>
                  <div className="mt-4 w-12 h-0.5 bg-primary mx-auto transform scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 