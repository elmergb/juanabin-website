import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CartProvider, useCart } from '../context/CartContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

import { Home } from '../feature/pages/Home';
import { Shop } from '../feature/pages/Shop';
import { Cart } from '../feature/pages/Cart';
import { Blog } from '../feature/pages/Blog';
import { Article } from '../feature/pages/Article';
import { Donate } from '../feature/pages/Donate';
import { Subscriptions } from '../feature/pages/Subscriptions';


export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

function ProductQuickView({ product, isOpen, onClose, onAddToCart }) {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                {/* Image */}
                <div className="h-64 overflow-hidden rounded-lg bg-warm-200 md:h-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className="mb-3 badge w-fit">{product.category}</span>
                  <h2 className="mb-2 text-3xl font-bold text-warm-900">{product.name}</h2>
                  <p className="mb-4 text-2xl font-bold text-eco-600">₱{product.price}</p>
                  <p className="mb-6 text-warm-600">{product.description}</p>

                  {product.sustainability_impact && (
                    <div className="p-4 mb-6 rounded-lg bg-eco-50">
                      <h3 className="mb-2 text-sm font-semibold text-warm-900">
                        Sustainability Impact
                      </h3>
                      <p className="text-sm text-warm-600">{product.sustainability_impact}</p>
                    </div>
                  )}

                  <div className="mt-auto space-y-3">
                    <motion.button
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                      className="w-full btn btn-primary"
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                    <button
                      onClick={onClose}
                      className="w-full btn btn-secondary"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function AppContent() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart, getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartCount} />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Home
                      onAddToCart={addToCart}
                      onQuickView={setQuickViewProduct}
                    />
                  </motion.div>
                }
              />
              <Route
                path="/shop"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Shop
                      onAddToCart={addToCart}
                      onQuickView={setQuickViewProduct}
                    />
                  </motion.div>
                }
              />
              <Route
                path="/cart"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Cart />
                  </motion.div>
                }
              />
              <Route
                path="/blog"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Blog />
                  </motion.div>
                }
              />
              <Route
                path="/article/:id"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Article />
                  </motion.div>
                }
              />
              <Route
                path="/donate"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Donate />
                  </motion.div>
                }
              />
              <Route
                path="/subscriptions"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Subscriptions />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        <ProductQuickView
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={addToCart}
        />
      </div>
    </Router>
  );
}


