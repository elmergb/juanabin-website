import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { products, categories, filters as filterOptions, sortOptions } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Shop({ onAddToCart, onQuickView }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any[]>>({});
  const [sortBy, setSortBy] = useState('recommended');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Category filter
    if (selectedCategory !== 'All Products') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.type?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply selected filters
    Object.entries(selectedFilters).forEach(([filterKey, values]) => {
      if (values.length > 0) {
        result = result.filter(p => {
          if (filterKey === 'price') {
            return p.price >= values[0] && p.price <= values[1];
          }
          return values.includes(p[filterKey]);
        });
      }
    });

    return result;
  }, [selectedCategory, searchQuery, selectedFilters]);

  // Sort logic
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case 'price_asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price_desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name_asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name_desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const handleFilterChange = (filterId, value, isRange = false) => {
    if (isRange) {
      setSelectedFilters(prev => ({
        ...prev,
        [filterId]: value
      }));
    } else {
      setSelectedFilters(prev => {
        const current = prev[filterId] || [];
        if (current.includes(value)) {
          return {
            ...prev,
            [filterId]: current.filter(v => v !== value)
          };
        }
        return {
          ...prev,
          [filterId]: [...current, value]
        };
      });
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setSelectedCategory('All Products');
    setSearchQuery('');
    setSortBy('recommended');
  };

  const hasActiveFilters = Object.values(selectedFilters).some(v => v.length > 0) ||
    selectedCategory !== 'All Products' || searchQuery;

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      <div className="container-max py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-warm-900">Shop</h1>
          <p className="text-lg text-warm-600">Sustainable products from Filipino artisans</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-warm-400" size={20} />
            <input
              type="text"
              placeholder="Search products, category, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-500"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex gap-2 overflow-x-auto pb-2"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-eco-600 text-white'
                  : 'bg-white text-warm-700 hover:bg-warm-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block w-64 flex-shrink-0"
          >
            <div className="card p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg text-warm-900">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-eco-600 hover:text-eco-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {filterOptions.map(filter => (
                  <div key={filter.id}>
                    <h4 className="font-semibold text-sm text-warm-900 mb-3">{filter.name}</h4>
                    {filter.range ? (
                      <div className="space-y-2">
                        <label className="block text-sm text-warm-600">
                          ₱{selectedFilters.price?.[0] || 0} - ₱{selectedFilters.price?.[1] || 1000}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1000"
                          className="w-full"
                        />
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {filter.options.map(option => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={(selectedFilters[filter.id] || []).includes(option)}
                              onChange={() => handleFilterChange(filter.id, option)}
                              className="w-4 h-4 text-eco-600 rounded cursor-pointer"
                            />
                            <span className="text-sm text-warm-600">{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button & Sorting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex-1 btn btn-secondary flex items-center justify-center gap-2"
              >
                <Filter size={20} />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 sm:flex-none input"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Product Count */}
            <p className="text-sm text-warm-600 mb-6">
              Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
            </p>

            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="wait">
                  {sortedProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: idx * 0.05 }}
                      layout
                    >
                      <ProductCard
                        product={product}
                        onAddToCart={onAddToCart}
                        onQuickView={onQuickView}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-lg text-warm-600 mb-4">No products found</p>
                <button
                  onClick={clearAllFilters}
                  className="btn btn-primary"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-warm-100 rounded-lg"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  {filterOptions.map(filter => (
                    <div key={filter.id}>
                      <h4 className="font-semibold text-sm text-warm-900 mb-3">{filter.name}</h4>
                      <div className="space-y-2">
                        {filter.options.map(option => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={(selectedFilters[filter.id] || []).includes(option)}
                              onChange={() => handleFilterChange(filter.id, option)}
                              className="w-4 h-4 text-eco-600 rounded"
                            />
                            <span className="text-sm text-warm-600">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full btn btn-primary mt-8"
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Filters
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
