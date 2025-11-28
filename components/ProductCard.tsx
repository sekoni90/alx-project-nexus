
// components/ProductCard.tsx
import React from 'react';
import type { Product } from '@/types/product';
import Link from 'next/link';

type Props = {
  product: Product;
  onAdd: (id: string) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <article className="bg-blue-600 rounded shadow overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="mt-2 text-sm text-gray-700">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xl font-bold">${product.price}</div>
          <div className="flex items-center gap-2">
            <button onClick={() => onAdd(product.id)} className="px-3 py-1 bg-gray-400 border rounded hover:bg-gray-600">
              Add
            </button>
            <Link href={`/products/${product.id}`} className="px-3 py-1 bg-indigo-400 hover:bg-indigo-600 text-white rounded">
              View
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
