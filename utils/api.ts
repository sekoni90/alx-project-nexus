import type { Product } from '@/types/product';

const API_BASE = 'https://fakestoreapi.com';

export async function getProducts({ page = 1, limit = 100, category }: { page?: number; limit?: number; category?: string } = {}): Promise<Product[]> {
  const url = category ? `${API_BASE}/products/category/${encodeURIComponent(category)}` : `${API_BASE}/products`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();

  // Map to our Product type
  const products: Product[] = data.map((p: any) => ({
    id: String(p.id),
    name: p.title || p.name,
    title: p.title || p.name,
    category: p.category || 'uncategorized',
    price: Number(p.price) || 0,
    image: p.image || '',
    rating: p.rating?.rate,
    description: p.description,
  }));

  // Simple pagination by slicing the full result (fakestoreapi doesn't support pagination)
  const start = (page - 1) * limit;
  return products.slice(start, start + limit);
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/products/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}
