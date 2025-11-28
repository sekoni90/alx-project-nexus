// components/CartPanel.tsx
import React from 'react'
import type { Product } from '@/types/product'

type CartItem = Product & { qty: number }

type Props = {
  items: CartItem[]
  onAdd: (id: string) => void
  onRemove: (id: string) => void
}

export default function CartPanel({ items, onAdd, onRemove }: Props) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0)
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Cart summary</h3>
      {items.length === 0 ? (
        <p className="text-sm text-gray-500">No items in cart</p>
      ) : (
        <div className="mt-2 space-y-2">
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{it.name}</div>
                <div className="text-xs text-gray-500">{it.qty} x ${it.price}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onRemove(it.id)} className="px-2 py-1 rounded border text-sm">-</button>
                <button onClick={() => onAdd(it.id)} className="px-2 py-1 rounded border text-sm">+</button>
              </div>
            </div>
          ))}
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Total</div>
              <div className="text-sm font-semibold">${total.toFixed(2)}</div>
            </div>
            <button className="mt-3 w-full bg-blue-600 text-white rounded py-2">Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}