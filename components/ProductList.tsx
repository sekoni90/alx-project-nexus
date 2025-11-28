import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts, setFilter, setSort } from "@/store/productsSlice";
import ProductCard from "./ProductCard";
import FiltersBar from "./FiltersBar";
import Pagination from "./Pagination";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, filter, sort } = useSelector((state: any) => state.products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = (productId: string) => {
    // implement your add to cart logic here
    console.log(`Add product ${productId} to cart`);
  };

  const removeFromCart = (productId: string) => {
    // implement your remove from cart logic here
    console.log(`Remove product ${productId} from cart`);
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        dispatch(setProducts(data));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [dispatch]);

  const handleFilter = (category: string) => {
    dispatch(setFilter(category));
  };

  const handleSort = (order: string) => {
    dispatch(setSort(order));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <FiltersBar handleFilter={handleFilter} handleSort={handleSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductList;
