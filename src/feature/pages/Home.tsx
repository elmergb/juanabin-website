import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Recycle, Leaf, Package } from 'lucide-react';

export function Home({ onAddToCart, onQuickView }) {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const features = [
    {
      icon: Zap,
      title: 'AI-powered Recognition',
      description: 'Accurate waste sorting with computer vision technology'
    },
    {
      icon: TrendingUp,
      title: 'Gamified Feedback',
      description: 'Encourages community participation with real-time feedback'
    },
    {
      icon: Users,
      title: 'Data Tracking',
      description: 'Supports circular economy impact tracking'
    }
  ];

  const journey = [
    { step: 'Waste', color: 'bg-warm-300' },
    { step: 'AI Sorting', color: 'bg-eco-400' },
    { step: 'Recycled Materials', color: 'bg-eco-500' },
    { step: 'Filipino Artisans', color: 'bg-eco-600' },
    { step: 'Sustainable Products', color: 'bg-eco-700' },
  ];

  const artisanMaterials = [
    {
      title: 'Reclaimed Wood',
      description: 'Sourced from construction waste and fallen timber',
      image: 'https://images.unsplash.com/photo-1633505066033-338d520e7cb3?w=500&h=500&fit=crop',
      icon: Recycle
    },
    {
      title: 'Plastic Textiles',
      description: 'Woven from reclaimed plastic fibers and waste materials',
      image: 'https://images.unsplash.com/photo-1595429676514-55ff33e26e9b?w=500&h=500&fit=crop',
      icon: Package
    },
    {
      title: 'Recycled Glass',
      description: 'Transformed into beautiful art and functional pieces',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
      icon: Leaf
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ firstName: '', lastName: '', email: '', company: '', message: '' });
    alert('Thank you for your interest! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-eco-50 via-warm-50 to-warm-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-warm-900 leading-tight">
                Smart Waste, Artisanal Future
              </h1>
              <p className="text-lg md:text-xl text-warm-600 mb-8 leading-relaxed max-w-lg">
                We empower marginalized Filipino artisans through AI-driven waste management and circular economy initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="btn btn-primary"
                >
                  Explore Products
                  <ArrowRight size={20} />
                </Link>
                <button
                  onClick={() => {
                    const el = document.getElementById('mission');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-outline"
                >
                  Get Involved
                </button>
              </div>
            </motion.div>

            {/* Visual Journey */}
            <motion.div
              className="hidden md:flex flex-col gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {journey.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center text-white font-semibold text-center text-sm leading-tight`}>
                    {item.step}
                  </div>
                  {idx < journey.length - 1 && (
                    <div className="text-2xl text-eco-600">→</div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Intelligent Segregation */}
      <motion.section
        className="section bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-warm-900">Intelligent Segregation</h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              Our AI-powered platform makes waste sorting accurate, engaging, and measurable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-eco-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-eco-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-warm-900">{feature.title}</h3>
                <p className="text-warm-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        id="mission"
        className="section bg-eco-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm-900">Our Mission</h2>
              <p className="text-lg text-warm-600 leading-relaxed mb-8">
                We bridge the gap between waste and artisanal creation, empowering marginalized communities through a circular economy model.
              </p>
            </motion.div>

            {/* Three-Step Process */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {['Waste Collection', 'AI Sorting', 'Artisan Production'].map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                >
                  <div className="bg-white rounded-lg p-8 text-center">
                    <div className="w-12 h-12 bg-eco-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="font-semibold text-lg text-warm-900">{step}</h3>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-eco-600 transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Artisan Impact */}
      <motion.section
        className="section bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-warm-900">Artisan Impact</h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              Reclaimed materials transformed into beautiful, sustainable products by skilled Filipino artisans
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {artisanMaterials.map((material, idx) => (
              <motion.div
                key={idx}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ y: -4 }}
              >
                <div className="h-64 overflow-hidden bg-warm-200">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-eco-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <material.icon className="text-eco-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-warm-900">{material.title}</h3>
                  </div>
                  <p className="text-warm-600">{material.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="section bg-eco-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Join the Circular Revolution</h2>
              <p className="text-eco-100 text-lg">
                Partner with us to transform waste into opportunity
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleContactSubmit}
              className="bg-white rounded-lg p-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input"
                  value={contactForm.firstName}
                  onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input"
                  value={contactForm.lastName}
                  onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="input"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Company/Organization"
                className="input"
                value={contactForm.company}
                onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="input"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                required
              ></textarea>
              <motion.button
                type="submit"
                className="w-full btn btn-primary"
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
