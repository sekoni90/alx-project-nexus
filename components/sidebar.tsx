// components/Sidebar.tsx
import React from 'react';
import type { Category } from '@/types/product';

type Props = {
  query: string;
  setQuery: (v: string) => void;
  category: Category | 'All';
  setCategory: (v: Category | 'All') => void;
  categories: (Category | 'All')[];
  sort: 'popular' | 'price-asc' | 'price-desc';
  setSort: (v: 'popular' | 'price-asc' | 'price-desc') => void;
};

export default function Sidebar({
  query,
  setQuery,
  category,
  setCategory,
  categories,
  sort,
  setSort,
}: Props) {
  return (
    <aside className="bg-blue-600 p-4 rounded shadow">
      <div>
        <label htmlFor="search-input" className="block text-sm font-medium">
          Search
        </label>
        <input
          id="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2"
          placeholder="Search products..."
        />
      </div>
      <div className="mt-4">
        <label htmlFor="category-filter" className="block text-sm font-medium">
          Category
        </label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value as Category | 'All')}
          className="mt-1 w-full border rounded px-3 py-2"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="sort-order" className="block text-sm font-medium">
          Sort
        </label>
        <select
          id="sort-order"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as 'popular' | 'price-asc' | 'price-desc')
          }
          className="mt-1 w-full border rounded px-3 py-2"
        >
          <option value="popular">Popular</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </aside>
  );
}