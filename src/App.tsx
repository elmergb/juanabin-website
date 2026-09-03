import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { Blog } from './pages/Blog';
import { Article } from './pages/Article';
import { Donate } from './pages/Donate';
import { Subscriptions } from './pages/Subscriptions';

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
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Image */}
                <div className="bg-warm-200 rounded-lg overflow-hidden h-64 md:h-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className="badge mb-3 w-fit">{product.category}</span>
                  <h2 className="text-3xl font-bold mb-2 text-warm-900">{product.name}</h2>
                  <p className="text-2xl font-bold text-eco-600 mb-4">₱{product.price}</p>
                  <p className="text-warm-600 mb-6">{product.description}</p>

                  {product.sustainability_impact && (
                    <div className="bg-eco-50 rounded-lg p-4 mb-6">
                      <h3 className="font-semibold text-sm text-warm-900 mb-2">
                        Sustainability Impact
                      </h3>
                      <p className="text-sm text-warm-600">{product.sustainability_impact}</p>
                    </div>
                  )}

                  <div className="space-y-3 mt-auto">
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

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
