import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Eye } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-eco-50 pt-16 pb-12"
      >
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-warm-900">
              Stories for a Circular Future
            </h1>
            <p className="text-lg text-warm-600">
              Explore insights on sustainability, waste management, and artisan empowerment
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="container-max py-12">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-warm-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', ...blogCategories].map(cat => (
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
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <Link to={`/article/${featuredPost.id}`}>
              <motion.div
                className="card overflow-hidden grid md:grid-cols-2 gap-6"
                whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                {/* Image */}
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge">Featured</span>
                      <span className="text-xs text-warm-500">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-warm-900 hover:text-eco-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-warm-600 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-warm-200">
                    <div className="text-sm text-warm-500">
                      By {featuredPost.author} • {featuredPost.readingTime} min read
                    </div>
                    <span className="text-eco-600 font-semibold hover:text-eco-700">Read →</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.section>
        )}

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx + 1) * 0.05 }}
                layout
              >
                <Link to={`/article/${post.id}`}>
                  <motion.div
                    className="card overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    {/* Image */}
                    <div className="h-40 overflow-hidden bg-warm-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="badge text-xs">{post.category}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-warm-900 line-clamp-2 hover:text-eco-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-warm-600 text-sm mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="border-t border-warm-200 pt-4">
                        <div className="flex items-center justify-between text-xs text-warm-500 mb-2">
                          <span>By {post.author}</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>{post.readingTime} min read</span>
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-warm-600">No articles found</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
