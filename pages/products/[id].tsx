// pages/products/[id].tsx
import { useRouter } from 'next/router'
import React from 'react'
import { SAMPLE_PRODUCTS } from '@/data/product'
import { useCart } from '@/contexts/Cartcontext'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const { addToCart } = useCart()
  const { user } = useAuth()
  const product = SAMPLE_PRODUCTS.find((p) => p.id === id)

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Link href="/shop" className="text-blue-600 hover:underline">
          Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <Link href="/shop" className="text-blue-600 hover:underline">
          ← Back to shop
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
        <div className="bg-gray-100 rounded flex items-center justify-center p-4">
          <img src={product.image} alt={product.name} className="max-w-full max-h-96 object-contain" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-500 mt-2 text-sm uppercase">{product.category}</p>
          {product.rating && (
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-gray-600">{product.rating} / 5</span>
            </div>
          )}
          <p className="text-4xl font-bold text-gray-900 mt-4">${product.price.toFixed(2)}</p>
          <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
          <div className="mt-8 flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold"
            >
              Add to Cart
            </button>
            <Link 
              href="/cart"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors font-semibold"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
