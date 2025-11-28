// pages/index.tsx
import React, { useMemo, useState, useEffect } from 'react';
import { SAMPLE_PRODUCTS } from '@/data/product';
import type { Product } from '@/types/product';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Sidebar from '@/components/sidebar';
import CartPanel from '@/components/cartPanel';
import HeaderAction from '@/components/HeaderAction';
import { useRouter } from 'next/router';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Sign } from 'crypto';

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'All' | Product['category']>('All');
  const [sort, setSort] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

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

  function addToCart(productId: string) {
    if (!user) {
      router.push('/auth/signin');
      return;
    }
    setCart((c) => ({ ...c, [productId]: (c[productId] || 0) + 1 }));
  }

  function removeFromCart(productId: string) {
    if (!user) {
      router.push('/auth/signin');
      return;
    }
    setCart((c) => {
      const next = { ...c };
      if (!next[productId]) return c;
      next[productId] = next[productId] - 1;
      if (next[productId] <= 0) delete next[productId];
      return next;
    });
  }

  const cartItems = useMemo(() => {
    return Object.entries(cart).map(([id, qty]) => {
      const product = SAMPLE_PRODUCTS.find((p) => p.id === id)!;
      return { ...product, qty } as Product & { qty: number };
    });
  }, [cart]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header user={user} /> 
      <HeaderAction />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
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
          <CartPanel items={cartItems} onAdd={addToCart} onRemove={removeFromCart} />
        </div>
        <section className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

