import { Link } from 'react-router-dom';
import { useCart } from '../context/cartcontext';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-slate-300" />
        <h1 className="text-3xl mb-4">Your Cart is Empty</h1>
        <p className="text-slate-600 mb-8">
          Browse our products and services to get started with your solar journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/products">Shop Products</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="mb-1">{item.name}</h3>
                        <span className="text-xs text-slate-500 uppercase">
                          {item.type}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <div className="text-xl">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          ${item.price.toLocaleString()} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            <Button variant="outline" onClick={clearCart} className="w-full">
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-20">
              <h2 className="text-2xl mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Tax</span>
                  <span>${(totalPrice * 0.08).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl">
                    <span>Total</span>
                    <span>${(totalPrice * 1.08).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mb-3" size="lg">
                Proceed to Checkout
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/products">Continue Shopping</Link>
              </Button>
              <div className="mt-6 p-4 bg-amber-50 rounded border border-amber-200">
                <p className="text-xs text-slate-700">
                  <strong>Need help?</strong> Contact our sales team for bulk orders or custom quotes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
