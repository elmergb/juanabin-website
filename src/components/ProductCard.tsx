import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProductCard({ product, onAddToCart, onQuickView }) {
  return (
    <motion.div
      className="card overflow-hidden group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 bg-warm-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="badge text-xs">{product.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-semibold text-lg text-warm-900 mb-2 line-clamp-2 group-hover:text-eco-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-warm-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <span className="text-2xl font-bold text-eco-600">₱{product.price}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => onAddToCart(product)}
            className="flex-1 btn btn-primary text-sm md:text-base"
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Add</span>
          </motion.button>
          <motion.button
            onClick={() => onQuickView(product)}
            className="btn btn-secondary text-sm md:text-base flex-shrink-0"
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
