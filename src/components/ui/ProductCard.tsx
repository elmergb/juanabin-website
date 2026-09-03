import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProductCard({ product, onAddToCart, onQuickView }) {
  return (
    <motion.div
      className="overflow-hidden card group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden md:h-56 bg-warm-200">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="text-xs badge">{product.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="mb-2 text-lg font-semibold transition-colors text-warm-900 line-clamp-2 group-hover:text-eco-600">
          {product.name}
        </h3>

        <p className="mb-4 text-sm text-warm-600 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <span className="text-2xl font-bold text-eco-600">₱{product.price}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => onAddToCart(product)}
            className="flex-1 text-sm btn btn-primary md:text-base"
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Add</span>
          </motion.button>
          <motion.button
            onClick={() => onQuickView(product)}
            className="flex-shrink-0 text-sm btn btn-secondary md:text-base"
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
