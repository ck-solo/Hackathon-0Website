export const products = [
  // Lipsticks
  {
    id: 'kylie-lip-kit-dolce-k',
    name: 'Lip Kit - Dolce K',
    price: 29,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ],
    description: 'The iconic lip kit that started it all. Includes matte liquid lipstick and precision lip liner for the perfect pout.',
    category: 'lipsticks',
    badge: 'BESTSELLER',
    tags: ['KYLIE\'S PICK', 'TRENDING', 'MATTE'],
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    shades: ['Dolce K', 'Candy K', 'Posie K', 'Koko K']
  },
  {
    id: 'peach-mango-lip-butter',
    name: 'Peach Mango Lip Butter',
    price: 24,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop'
    ],
    description: 'Ultra-nourishing lip treatment with tropical peach mango scent. Provides all-day moisture and subtle shine.',
    category: 'lipsticks',
    badge: 'NEW',
    tags: ['NOURISHING', 'GLOSSY'],
    rating: 4.9,
    reviews: 1256,
    inStock: true
  },
  {
    id: 'velvet-liquid-lipstick-rosie',
    name: 'Velvet Liquid Lipstick - Rosie',
    price: 26,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop',
    description: 'Velvety matte liquid lipstick that glides on smoothly and stays put all day without drying out your lips.',
    category: 'lipsticks',
    badge: 'FEATURED',
    tags: ['LONG-LASTING', 'MATTE'],
    rating: 4.7,
    reviews: 1834,
    inStock: true,
    shades: ['Rosie', 'Autumn', 'Charm', 'Wicked']
  },
  {
    id: 'glossy-drip-clear',
    name: 'Glossy Drip - Clear',
    price: 18,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    description: 'Crystal clear gloss that adds major shine and dimension to any lip look. Can be worn alone or over lipstick.',
    category: 'lipsticks',
    rating: 4.6,
    reviews: 987,
    inStock: true,
    shades: ['Clear', 'Pink Shimmer', 'Gold Fleck', 'Holographic']
  },

  // Skincare
  {
    id: 'glow-serum',
    name: 'Kylie Glow Serum',
    price: 42,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop'
    ],
    description: 'Lightweight, hydrating serum that gives your skin an instant glow. Packed with hyaluronic acid and vitamin C.',
    category: 'skincare',
    badge: 'NEW',
    tags: ['HYDRATING', 'VITAMIN C', 'GLOWING'],
    rating: 4.8,
    reviews: 1647,
    inStock: true
  },
  {
    id: 'foaming-face-wash',
    name: 'Foaming Face Wash',
    price: 28,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    description: 'Gentle yet effective foaming cleanser that removes makeup and impurities while maintaining skin\'s natural moisture.',
    category: 'skincare',
    badge: 'BESTSELLER',
    tags: ['CLEANSING', 'GENTLE'],
    rating: 4.7,
    reviews: 2156,
    inStock: true
  },
  {
    id: 'vanilla-milk-toner',
    name: 'Vanilla Milk Toner',
    price: 32,
    image: 'https://images.unsplash.com/photo-1570194113926-acb05046a6b4?w=500&h=500&fit=crop',
    description: 'Soothing toner with vanilla and milk proteins that balances pH and preps skin for the rest of your routine.',
    category: 'skincare',
    rating: 4.6,
    reviews: 892,
    inStock: true,
    tags: ['SOOTHING', 'BALANCING']
  },
  {
    id: 'lip-scrub-strawberry',
    name: 'Lip Scrub - Strawberry',
    price: 22,
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=500&h=500&fit=crop',
    description: 'Sugar-based lip scrub that gently exfoliates and nourishes lips, leaving them smooth and ready for lip color.',
    category: 'skincare',
    badge: 'LIMITED',
    tags: ['EXFOLIATING', 'SWEET'],
    rating: 4.9,
    reviews: 756,
    inStock: true,
    shades: ['Strawberry', 'Vanilla', 'Birthday Cake', 'Coconut']
  },

  // Accessories
  {
    id: 'makeup-brush-set',
    name: 'Essential Brush Set',
    price: 89,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop'
    ],
    description: 'Professional-quality brush set with 12 essential brushes for face and eye makeup application.',
    category: 'accessories',
    badge: 'BESTSELLER',
    tags: ['PROFESSIONAL', 'COMPLETE SET'],
    rating: 4.8,
    reviews: 1432,
    inStock: true
  },
  {
    id: 'pink-makeup-bag',
    name: 'Pink Quilted Makeup Bag',
    price: 35,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    description: 'Luxurious quilted makeup bag in signature Kylie pink. Perfect for organizing your beauty essentials.',
    category: 'accessories',
    badge: 'NEW',
    tags: ['TRAVEL', 'ORGANIZATION'],
    rating: 4.7,
    reviews: 643,
    inStock: true
  },
  {
    id: 'led-compact-mirror',
    name: 'LED Compact Mirror',
    price: 45,
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop',
    description: 'Compact mirror with LED lighting for perfect makeup application anywhere. Rechargeable with USB-C.',
    category: 'accessories',
    rating: 4.6,
    reviews: 534,
    inStock: true,
    tags: ['TECH', 'PORTABLE']
  },
  {
    id: 'velvet-headband',
    name: 'Velvet Beauty Headband',
    price: 18,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=500&h=500&fit=crop',
    description: 'Soft velvet headband to keep hair away from your face during skincare routines and makeup application.',
    category: 'accessories',
    badge: 'LIMITED',
    tags: ['COMFORT', 'SKINCARE'],
    rating: 4.5,
    reviews: 287,
    inStock: true,
    shades: ['Pink', 'Black', 'Cream', 'Rose Gold']
  }
];


export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.badge === 'FEATURED' || product.badge === 'BESTSELLER').slice(0, 6);
};
