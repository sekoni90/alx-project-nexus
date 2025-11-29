import type { NextPage } from 'next';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/lib/api';
import { SAMPLE_PRODUCTS } from '@/data/product';

const fetcher = async () => {
  try {
    return await fetchProducts();
  } catch (error) {
    // Fallback to sample products if API fails
    return SAMPLE_PRODUCTS;
  }
};

/**
 * Shop page component that displays a list of products.
 * @returns The Shop page component.
 */
const Shop: NextPage = () => {
  const router = useRouter();
  const { search } = router.query;
  const { data: products, error } = useSWR('products', fetcher);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (!search || typeof search !== 'string') return products;

    const searchLower = search.toLowerCase();
    return products.filter(
      (product) =>
        (product.title || product.name)?.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.category?.toLowerCase().includes(searchLower)
    );
  }, [products, search]);

  if (error) {
    return <div className="text-center py-12 text-red-600">Failed to load products.</div>;
  }

  if (!products) {
    return <div className="text-center py-12">Loading products...</div>;
  }

  return (
    <div className="w-full">
      {search && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Search results for "{search}"
          </h2>
          <p className="text-gray-600 text-sm">
            Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 hidden md:block">
          <div className="p-4 bg-white border rounded shadow-sm sticky top-24">
            <h3 className="font-semibold mb-2 text-gray-800">Filters</h3>
            <p className="text-sm text-gray-500">(Coming soon)</p>
          </div>
        </aside>
        
        <section className="md:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded shadow-sm">
              <p className="text-gray-600 text-lg mb-2">No products found</p>
              <p className="text-gray-500 text-sm">Try adjusting your search terms</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Shop;
