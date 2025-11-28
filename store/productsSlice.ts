import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';
import * as api from '@/utils/api';

type ProductsState = {
  products: Product[];
  filter: string | null;
  sort: string | null;
};

const initialState: ProductsState = {
  products: [],
  filter: null,
  sort: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state: ProductsState, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setFilter(state: ProductsState, action: PayloadAction<string | null>) {
      state.filter = action.payload;
    },
    setSort(state: ProductsState, action: PayloadAction<string | null>) {
      state.sort = action.payload;
    },
  },
});

export const { setProducts, setFilter, setSort } = productsSlice.actions;

// Helper used by components that previously called fetchProducts()
export async function fetchProducts(): Promise<Product[]> {
  return api.getProducts();
}

export default productsSlice.reducer;
