
// components/ProductCard.tsx
import type { Product } from '@/types/product';
import Link from 'next/link';
import { useCart } from '@/contexts/Cartcontext';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

type Props = {
  product: Product;
  onAdd?: (id: string) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (onAdd) {
      onAdd(product.id);
    } else {
      // Allow adding to cart without authentication for testing
      // In production, you might want to require authentication
      addToCart(product);
      alert(`${product.name || product.title} added to cart!`);
    }
  };

  return (
    <article className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 w-full overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.name || product.title || ''} className="h-full w-full object-contain" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{product.name || product.title}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</div>
          <div className="flex items-center gap-2">
            <button 
              type="button"
              onClick={handleAddToCart} 
              className="px-3 py-1 bg-blue-600 text-white border rounded hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
            <Link href={`/products/${product.id}`} className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
              View
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
