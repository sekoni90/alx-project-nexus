import { Product } from '@/components/ProductCard';

const API_BASE = 'https://fakestoreapi.com';

export async function getProducts({ page = 1, limit = 100, category }: { page?: number; limit?: number; category?: string } = {}): Promise<Product[]> {
  const url = category ? `${API_BASE}/products/category/${encodeURIComponent(category)}` : `${API_BASE}/products`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = (await res.json()) as Product[];

  // Simple pagination by slicing the full result (fakestoreapi doesn't support pagination)
  const start = (page - 1) * limit;
  return data.slice(start, start + limit);
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/products/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}
