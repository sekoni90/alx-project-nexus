import type { NextPage } from 'next';
import { useCart } from '@/contexts/Cartcontext';
import { formatCurrency } from '@/utils/helpers';
import Link from 'next/link';

/**
 * Cart page component that displays the cart contents and summary.
 * @returns The Cart page component.
 */
const Cart: NextPage = () => {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Your cart ({itemCount} items)</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <div className="w-24 h-24 bg-gray-100 flex items-center justify-center rounded">
                <img
                  src={item.image || '/images/product1.jpg'}
                  alt={item.title || item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.title || item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="font-bold mt-2 text-gray-900">{formatCurrency(item.price)}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded hover:bg-gray-300 text-gray-900"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded hover:bg-gray-300 text-gray-900"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside>
        <div className="p-6 bg-white border rounded shadow-sm sticky top-24">
          <h3 className="font-semibold text-lg mb-4 text-blue-600">Order Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-900">Subtotal</span>
              <span className="font-semibold text-gray-900">{formatCurrency(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-900">Shipping</span>
              <span className="font-semibold text-gray-900">Free</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-lg">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-gray-900">{formatCurrency(total)}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="block text-center px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
