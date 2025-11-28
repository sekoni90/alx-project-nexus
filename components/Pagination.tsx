import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '@/store/productsSlice';
import { fetchProducts as fetchProductsHelper } from '@/store/productsSlice';

export default function Pagination() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const loadPage = async (p: number) => {
    const items = await fetchProductsHelper();
    // For simplicity we just dispatch the fetched items (helper currently ignores page param)
    dispatch(setProducts(items));
    setPage(p);
  };

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => loadPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Prev
      </button>

      <span className="text-sm">Page {page}</span>

      <button className="px-3 py-1 border rounded" onClick={() => loadPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
