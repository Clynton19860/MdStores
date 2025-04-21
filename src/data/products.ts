// Product interfaces
export interface ProductBase {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  features?: string[];
}

export interface ProductDetails extends ProductBase {
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
  specifications: {
    name: string;
    value: string;
  }[];
  details: string;
  variations?: {
    name: string;
    options: string[];
  }[];
  relatedProducts: string[];
}

// Mock products data by category
export const products: Record<string, ProductBase[]> = {
  rings: [
    {
      id: "diamond-eternity-ring",
      slug: "diamond-eternity-ring",
      name: "Diamond Eternity Ring",
      price: 1299,
      originalPrice: 1499,
      imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      category: "rings",
      rating: 4.8,
      reviewCount: 24,
      isNew: true,
      isSale: true,
      description: "Elegant diamond eternity ring featuring 1.5 carats of brilliant round diamonds set in 18K white gold."
    },
    {
      id: "gold-engagement-ring",
      slug: "gold-engagement-ring",
      name: "Gold Engagement Ring",
      price: 2199,
      imageUrl: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=500&h=500&fit=crop",
      category: "rings",
      rating: 4.9,
      reviewCount: 37,
      description: "Classic 18K yellow gold engagement ring with a 1 carat center diamond and pavé setting."
    },
    {
      id: "pearl-cocktail-ring",
      slug: "pearl-cocktail-ring",
      name: "Pearl Cocktail Ring",
      price: 899,
      imageUrl: "https://images.unsplash.com/photo-1589207212797-cfd578ff60be?w=500&h=500&fit=crop",
      category: "rings",
      rating: 4.5,
      reviewCount: 12,
      isNew: true,
      description: "Statement pearl cocktail ring with diamond accents in a modern design."
    },
    {
      id: "sapphire-halo-ring",
      slug: "sapphire-halo-ring",
      name: "Sapphire Halo Ring",
      price: 1599,
      imageUrl: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&h=500&fit=crop",
      category: "rings",
      rating: 4.7,
      reviewCount: 19,
      description: "Stunning sapphire center stone surrounded by a halo of diamonds, set in platinum."
    },
    {
      id: "vintage-emerald-ring",
      slug: "vintage-emerald-ring",
      name: "Vintage Emerald Ring",
      price: 1799,
      originalPrice: 1999,
      imageUrl: "https://images.unsplash.com/photo-1584811644165-33078f55ac9e?w=500&h=500&fit=crop",
      category: "rings",
      rating: 4.6,
      reviewCount: 15,
      isSale: true,
      description: "Vintage-inspired emerald ring with intricate side details and diamond accents."
    },
    {
      id: "mens-wedding-band",
      slug: "mens-wedding-band",
      name: "Men's Wedding Band",
      price: 799,
      imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      category: "rings",
      rating: 4.7,
      reviewCount: 31,
      description: "Sleek men's wedding band crafted from durable titanium with a brushed finish."
    }
  ],
  necklaces: [
    {
      id: "pearl-pendant-necklace",
      slug: "pearl-pendant-necklace",
      name: "Pearl Pendant Necklace",
      price: 899,
      imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      category: "necklaces",
      rating: 4.7,
      reviewCount: 18,
      description: "Elegant freshwater pearl pendant on a delicate 18K gold chain, perfect for everyday wear."
    },
    {
      id: "diamond-solitaire-necklace",
      slug: "diamond-solitaire-necklace",
      name: "Diamond Solitaire Necklace",
      price: 1299,
      imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop",
      category: "necklaces",
      rating: 4.9,
      reviewCount: 27,
      isNew: true,
      description: "Minimalist diamond solitaire pendant on an 18K white gold chain, featuring a 0.5 carat round brilliant diamond."
    },
    {
      id: "gold-chain-necklace",
      slug: "gold-chain-necklace",
      name: "Gold Chain Necklace",
      price: 699,
      originalPrice: 899,
      imageUrl: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=500&h=500&fit=crop",
      category: "necklaces",
      rating: 4.5,
      reviewCount: 14,
      isSale: true,
      description: "Classic 18K gold chain with an elegant link design, available in multiple lengths."
    },
    {
      id: "sapphire-pendant-necklace",
      slug: "sapphire-pendant-necklace",
      name: "Sapphire Pendant Necklace",
      price: 999,
      imageUrl: "https://images.unsplash.com/photo-1599459182681-c938b7f65344?w=500&h=500&fit=crop",
      category: "necklaces",
      rating: 4.6,
      reviewCount: 11,
      description: "Beautiful sapphire pendant surrounded by diamonds on a white gold chain."
    },
    {
      id: "multi-strand-pearl-necklace",
      slug: "multi-strand-pearl-necklace",
      name: "Multi-Strand Pearl Necklace",
      price: 1499,
      imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop",
      category: "necklaces",
      rating: 4.8,
      reviewCount: 19,
      isNew: true,
      description: "Luxurious three-strand pearl necklace with a decorative diamond clasp, perfect for special occasions."
    }
  ],
  earrings: [
    {
      id: "sapphire-drop-earrings",
      slug: "sapphire-drop-earrings",
      name: "Sapphire Drop Earrings",
      price: 749,
      imageUrl: "https://images.unsplash.com/photo-1635767798638-3665a353756c?w=500&h=500&fit=crop",
      category: "earrings",
      rating: 4.8,
      reviewCount: 16,
      isNew: true,
      description: "Elegant sapphire drop earrings with diamond accents in 18K white gold, perfect for special occasions."
    },
    {
      id: "diamond-stud-earrings",
      slug: "diamond-stud-earrings",
      name: "Diamond Stud Earrings",
      price: 999,
      imageUrl: "https://images.unsplash.com/photo-1625179915926-68feb6fba7c2?w=500&h=500&fit=crop",
      category: "earrings",
      rating: 4.9,
      reviewCount: 42,
      description: "Classic diamond stud earrings featuring 1 carat total weight of round brilliant diamonds in a four-prong setting."
    },
    {
      id: "gold-hoop-earrings",
      slug: "gold-hoop-earrings",
      name: "Gold Hoop Earrings",
      price: 499,
      originalPrice: 599,
      imageUrl: "https://images.unsplash.com/photo-1616740540792-3daec604777d?w=500&h=500&fit=crop",
      category: "earrings",
      rating: 4.6,
      reviewCount: 28,
      isSale: true,
      description: "Versatile 14K gold hoop earrings with a sleek, modern design, perfect for everyday wear."
    },
    {
      id: "pearl-stud-earrings",
      slug: "pearl-stud-earrings",
      name: "Pearl Stud Earrings",
      price: 299,
      imageUrl: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop",
      category: "earrings",
      rating: 4.7,
      reviewCount: 35,
      description: "Timeless freshwater pearl stud earrings with 14K gold posts, suitable for all occasions."
    },
    {
      id: "chandelier-earrings",
      slug: "chandelier-earrings",
      name: "Chandelier Earrings",
      price: 1199,
      imageUrl: "https://images.unsplash.com/photo-1630019852942-7a3592372a2e?w=500&h=500&fit=crop",
      category: "earrings",
      rating: 4.8,
      reviewCount: 13,
      isNew: true,
      description: "Stunning chandelier earrings featuring multiple diamond tiers, creating a dramatic and elegant look."
    }
  ],
  bracelets: [
    {
      id: "gold-tennis-bracelet",
      slug: "gold-tennis-bracelet",
      name: "Gold Tennis Bracelet",
      price: 1599,
      imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      category: "bracelets",
      rating: 4.9,
      reviewCount: 23,
      description: "Classic diamond tennis bracelet featuring 3 carats of brilliant round diamonds set in 18K gold."
    },
    {
      id: "charm-bracelet",
      slug: "charm-bracelet",
      name: "Charm Bracelet",
      price: 699,
      originalPrice: 799,
      imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop",
      category: "bracelets",
      rating: 4.6,
      reviewCount: 18,
      isSale: true,
      description: "Customizable 14K gold charm bracelet with a variety of charms available to create a personalized piece."
    },
    {
      id: "pearl-bracelet",
      slug: "pearl-bracelet",
      name: "Pearl Bracelet",
      price: 499,
      imageUrl: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=500&h=500&fit=crop",
      category: "bracelets",
      rating: 4.7,
      reviewCount: 14,
      description: "Elegant freshwater pearl bracelet with a secure 14K gold clasp, perfect for both casual and formal occasions."
    },
    {
      id: "diamond-bangle",
      slug: "diamond-bangle",
      name: "Diamond Bangle",
      price: 1799,
      imageUrl: "https://images.unsplash.com/photo-1589207212797-cfd578ff60be?w=500&h=500&fit=crop",
      category: "bracelets",
      rating: 4.8,
      reviewCount: 9,
      isNew: true,
      description: "Modern diamond bangle featuring a row of pavé-set diamonds in a sleek 18K white gold setting."
    },
    {
      id: "silver-cuff-bracelet",
      slug: "silver-cuff-bracelet",
      name: "Silver Cuff Bracelet",
      price: 399,
      imageUrl: "https://images.unsplash.com/photo-1535632066274-ee73ca3f9cdc?w=500&h=500&fit=crop",
      category: "bracelets",
      rating: 4.5,
      reviewCount: 21,
      description: "Bold sterling silver cuff bracelet with intricate engraved detailing, creating a statement piece."
    }
  ]
};

// Function to get products by category
export const getProductsByCategory = (category: string): ProductBase[] => {
  return products[category] || [];
};

// Function to get a single product by slug and category
export const getProductBySlug = (category: string, slug: string): ProductBase | undefined => {
  return products[category]?.find(product => product.slug === slug);
};

// Function to get all products
export const getAllProducts = (): ProductBase[] => {
  return Object.values(products).flat();
};

// Function to get featured products
export const getFeaturedProducts = (count: number = 4): ProductBase[] => {
  // Get a mix of products from different categories
  const allProducts = getAllProducts();
  // Prioritize new and sale items
  const featuredItems = allProducts.filter(product => product.isNew || product.isSale);
  // If we don't have enough featured items, add some regular products
  if (featuredItems.length < count) {
    const regularProducts = allProducts.filter(product => !product.isNew && !product.isSale);
    return [...featuredItems, ...regularProducts].slice(0, count);
  }
  return featuredItems.slice(0, count);
};

// Function to get related products for a given product
export const getRelatedProducts = (category: string, currentProductId: string, count: number = 4): ProductBase[] => {
  // Get products from the same category excluding the current product
  const categoryProducts = products[category]?.filter(product => product.id !== currentProductId) || [];
  
  // If we don't have enough products in the same category, get some from other categories
  if (categoryProducts.length < count) {
    const otherProducts = Object.values(products)
      .flat()
      .filter(product => product.category !== category && product.id !== currentProductId);
    
    return [...categoryProducts, ...otherProducts].slice(0, count);
  }
  
  return categoryProducts.slice(0, count);
}; 