import React, { useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = blogPosts.find(p => p.id === parseInt(id));

  const relatedPosts = useMemo(() => {
    if (!article) return [];
    return blogPosts
      .filter(p => p.id !== article.id && p.category === article.category)
      .slice(0, 3);
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-warm-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-warm-900">Article not found</h1>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white border-b border-warm-200"
      >
        <div className="container-max py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-eco-600 hover:text-eco-700 mb-6">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="badge">{article.category}</span>
              <span className="text-sm text-warm-500">{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-warm-900">{article.title}</h1>
            <div className="flex items-center gap-8 text-warm-600">
              <span>By {article.author}</span>
              <span>{article.readingTime} min read</span>
              <div className="flex items-center gap-2">
                <Eye size={18} />
                <span>{article.views} views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Article Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-96 overflow-hidden"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Article Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 max-w-2xl"
          >
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-warm-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Article Info Card */}
            <div className="card p-6 mb-8 sticky top-24">
              <h3 className="font-semibold text-warm-900 mb-4">Article Details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-warm-500 mb-1">Category</dt>
                  <dd className="text-warm-900 font-medium">{article.category}</dd>
                </div>
                <div>
                  <dt className="text-warm-500 mb-1">Published</dt>
                  <dd className="text-warm-900 font-medium">{new Date(article.date).toLocaleDateString()}</dd>
                </div>
                <div>
                  <dt className="text-warm-500 mb-1">Reading Time</dt>
                  <dd className="text-warm-900 font-medium">{article.readingTime} minutes</dd>
                </div>
              </dl>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-4 text-warm-900">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map(post => (
                    <Link
                      key={post.id}
                      to={`/article/${post.id}`}
                      className="card p-4 hover:shadow-md transition-shadow group"
                    >
                      <h4 className="font-medium text-warm-900 group-hover:text-eco-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-warm-500 mt-2">{post.readingTime} min read</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-eco-600 py-16"
      >
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to join the circular revolution?
          </h2>
          <p className="text-eco-100 mb-8 max-w-2xl mx-auto">
            Start making a difference today with sustainable products from our community of Filipino artisans.
          </p>
          <Link to="/shop" className="btn bg-white text-eco-600 hover:bg-eco-50">
            Explore Products
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
