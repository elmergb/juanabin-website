import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const tax = Math.round(subtotal * 0.12 * 100) / 100;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      <div className="container-max py-8">
        {/* Header */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-eco-600 hover:text-eco-700 mb-8">
          <ArrowLeft size={20} />
          Continue Shopping
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-warm-900"
        >
          Shopping Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          // Empty State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-12 text-center max-w-md mx-auto"
          >
            <ShoppingBag size={48} className="text-warm-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-warm-900">Your cart is empty</h2>
            <p className="text-warm-600 mb-8">Explore our products and add something special to your cart.</p>
            <Link to="/shop" className="btn btn-primary">
              Explore Products
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-4"
            >
              {cartItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="card p-6 flex gap-6"
                >
                  {/* Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-warm-200 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-semibold text-lg text-warm-900 hover:text-eco-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-warm-600 mt-1">{item.category}</p>

                    {/* Quantity & Price */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-warm-200 rounded hover:bg-warm-100"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-warm-200 rounded hover:bg-warm-100"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-warm-600">Unit: ₱{item.price}</p>
                        <p className="font-bold text-lg text-eco-600">₱{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-6 text-warm-900">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-warm-600">
                    <span>Subtotal</span>
                    <span>₱{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-warm-600">
                    <span>Tax (12%)</span>
                    <span>₱{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-warm-200 pt-4 flex justify-between font-bold text-lg">
                    <span className="text-warm-900">Total</span>
                    <span className="text-eco-600">₱{total.toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full btn btn-primary mb-3"
                  whileTap={{ scale: 0.95 }}
                >
                  Proceed to Checkout
                </motion.button>

                <motion.button
                  onClick={clearCart}
                  className="w-full btn btn-secondary text-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Cart
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
