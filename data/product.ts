// data/products.ts
import type { Product } from '@/types/product'

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'watch-1',
    name: 'Classic Leather Watch',
    category: 'Watch',
    price: 129,
    rating: 4.5,
    image: '/images/watch-1.jpg',
    description: 'Elegant analog watch with genuine leather strap.',
  },
  {
    id: 'cloth-1',
    name: 'Slim Fit Shirt',
    category: 'Cloth',
    price: 39,
    rating: 4.2,
    image: '/images/tshirt-1.png',
    description: 'Breathable cotton shirt for everyday style.',
  },
  {
    id: 'shoe-1',
    name: 'Urban Runner Sneakers',
    category: 'Shoe',
    price: 79,
    rating: 4.6,
    image: '/images/shoe1.jpg',
    description: 'Lightweight sneakers built for comfort.',
  },
  {
    id: 'belt-1',
    name: 'Genuine Leather Belt',
    category: 'Belt',
    price: 29,
    rating: 4.1,
    image: '/images/leather-belt.jpg',
    description: 'Timeless belt that pairs with jeans and chinos.',
  },
  {
    id: 'watch-2',
    name: 'Sport Chronograph',
    category: 'Watch',
    price: 199,
    rating: 4.7,
    image: '/images/watch-2.jpg',
    description: 'Water-resistant chronograph for an active life.',
  },
  {
    id: 'shoe-2',
    name: 'Desert Boot',
    category: 'Shoe',
    price: 99,
    rating: 4.3,
    image: '/images/shoe2.jpg',
    description: 'Durable and stylish desertboots.',
  },
]