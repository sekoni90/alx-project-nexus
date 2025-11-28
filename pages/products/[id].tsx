// pages/products/[id].tsx
import { useRouter } from 'next/router'
import React from 'react'
import { SAMPLE_PRODUCTS } from '@/data/product'
import Header from '@/components/Header'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = SAMPLE_PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto p-6">
          <p>Product not found.</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded shadow" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.category}</p>
          <p className="text-3xl font-semibold mt-4">${product.price}</p>
          <p className="mt-4 text-sm text-gray-700">{product.description}</p>
          <div className="mt-6">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">Add to cart</button>
          </div>
        </div>
      </main>
    </>
  )
}