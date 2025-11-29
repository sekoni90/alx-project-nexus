// pages/index.tsx
import React, { useMemo, useState } from 'react';
import { SAMPLE_PRODUCTS } from '@/data/product';
import type { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import Sidebar from '@/components/sidebar';
import CartPanel from '@/components/cartPanel';
import { useCart } from '@/contexts/Cartcontext';

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'All' | Product['category']>('All');
  const [sort, setSort] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');
  const { addToCart } = useCart();

  const categories = useMemo(() => {
    const set = new Set<string>(SAMPLE_PRODUCTS.map((p) => p.category));
    return ['All', ...Array.from(set)] as (Product['category'] | 'All')[];
  }, []);

  const filtered = useMemo(() => {
    let items = SAMPLE_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        (p.description || '').toLowerCase().includes(query.toLowerCase())
    );

    if (category !== 'All') items = items.filter((p) => p.category === category);
    if (sort === 'price-asc') items = items.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') items = items.sort((a, b) => b.price - a.price);
    if (sort === 'popular') items = items.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return items;
  }, [query, category, sort]);

  const handleAddToCart = (productId: string) => {
    const product = SAMPLE_PRODUCTS.find((p) => p.id === productId);
    
    if (product) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Sidebar
            query={query}
            setQuery={setQuery}
            category={category}
            setCategory={setCategory}
            categories={categories}
            sort={sort}
            setSort={setSort}
          />
          <CartPanel />
        </div>
        <section className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
