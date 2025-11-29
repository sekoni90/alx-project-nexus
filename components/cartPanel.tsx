// components/CartPanel.tsx
import React from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/Cartcontext'

export default function CartPanel() {
  const { items, addToCart, updateQuantity, total } = useCart();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold text-gray-800">Cart Summary</h3>
      {items.length === 0 ? (
        <p className="text-sm text-gray-500 mt-2">No items in cart</p>
      ) : (
        <div className="mt-2 space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">{item.name || item.title}</div>
                <div className="text-xs text-gray-500">{item.quantity} x ${item.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                  className="px-2 py-1 rounded border text-sm hover:bg-gray-100"
                >
                  -
                </button>
                <button 
                  onClick={() => addToCart(item, 1)} 
                  className="px-2 py-1 rounded border text-sm hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-800">Total</div>
              <div className="text-sm font-semibold text-gray-900">${total.toFixed(2)}</div>
            </div>
            <Link 
              href="/checkout" 
              className="mt-3 w-full bg-blue-600 text-white rounded py-2 block text-center hover:bg-blue-700 transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
