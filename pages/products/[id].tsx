// pages/products/[id].tsx
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { SAMPLE_PRODUCTS } from '@/data/product'
import { useCart } from '@/contexts/Cartcontext'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import type { Product } from '@/types/product'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    // First, try to find in SAMPLE_PRODUCTS
    const sampleProduct = SAMPLE_PRODUCTS.find((p) => p.id === id)
    
    if (sampleProduct) {
      setProduct(sampleProduct)
      setLoading(false)
    } else {
      // If not found, try to fetch from API
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // Map API response to our Product type
          const mappedProduct: Product = {
            id: String(data.id),
            name: data.title || data.name,
            title: data.title || data.name,
            category: data.category || 'uncategorized',
            price: Number(data.price) || 0,
            image: data.image || '',
            rating: data.rating?.rate,
            description: data.description,
          }
          setProduct(mappedProduct)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching product:', error)
          setLoading(false)
        })
    }
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
      alert(`${product.name || product.title} added to cart!`)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
        <p className="text-gray-600 mt-4">Loading product...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product not found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/shop" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Browse Shop
            </Link>
            <Link href="/" className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <Link href="/shop" className="text-blue-600 hover:underline inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to shop
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow-lg">
        <div className="bg-gray-100 rounded flex items-center justify-center p-8">
          <img 
            src={product.image} 
            alt={product.name || product.title || ''} 
            className="max-w-full max-h-96 object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder.jpg'
            }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name || product.title}</h1>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-wide">{product.category}</p>
          {product.rating && (
            <div className="flex items-center mt-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'fill-gray-300'}`} 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">({product.rating.toFixed(1)} / 5)</span>
            </div>
          )}
          <div className="mt-4 flex items-baseline gap-2">
            <p className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <span className="text-sm text-gray-500">incl. VAT</span>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description || 'No description available.'}</p>
          </div>

          <div className="mt-8 space-y-3">
            <button 
              onClick={handleAddToCart}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
            <Link 
              href="/cart"
              className="w-full px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              View Cart
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free shipping on orders over €50
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              14-day return policy
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Secure payment
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
