import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Eye } from 'lucide-react';
import { blogPosts, blogCategories } from '../../data/blogPosts';

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
    <div className="min-h-screen pt-20 bg-warm-50">
      

      <div className="py-12 container-max">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute transform -translate-y-1/2 left-4 top-1/2 text-warm-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 border rounded-lg border-warm-200 focus:outline-none focus:ring-2 focus:ring-eco-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 pb-2 overflow-x-auto">
            {['All', ...blogCategories].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-t from-emerald-600 to-[#39FF14] text-white'
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
                className="grid gap-6 overflow-hidden card md:grid-cols-2"
                whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                {/* Image */}
                <div className="h-64 overflow-hidden md:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="bg-gradient-to-t from-emerald-600 to-[#39FF14] flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge">Featured</span>
                      <span className="text-xs text-warm-500">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold transition-colors text-neutral-900 hover:text-eco-600">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-neutral-50">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-warm-200">
                    <div className="text-sm text-neutral-50">
                      By {featuredPost.author} • {featuredPost.readingTime} min read
                    </div>
                    <span className="font-semibold text-eco-600 hover:text-eco-700">Read →</span>
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
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
                    className="card  bg-gradient-to-t from-emerald-600 to-[#39FF14] overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    {/* Image */}
                    <div className="h-40 overflow-hidden bg-warm-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs badge">{post.category}</span>
                      </div>
                      <h3 className="mb-3 text-lg font-bold transition-colors text-warm-900 line-clamp-2 hover:text-eco-600">
                        {post.title}
                      </h3>
                      <p className="flex-1 mb-4 text-sm text-neutral-50 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="pt-4 border-t border-warm-200">
                        <div className="flex items-center justify-between mb-2 text-xs text-neutral-50">
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
            className="py-16 text-center"
          >
            <p className="text-lg text-warm-600">No articles found</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
