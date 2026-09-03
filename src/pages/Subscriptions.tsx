import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

export function Subscriptions() {
  const [subscriptions] = useState([
    {
      id: 1,
      name: 'Monthly Impact Report',
      description: 'Get monthly updates on your environmental impact and artisan stories',
      frequency: 'Monthly',
      status: 'active',
      nextSend: 'Mar 15, 2026'
    },
    {
      id: 2,
      name: 'Weekly Blog Digest',
      description: 'Curated stories about sustainability and circular economy',
      frequency: 'Weekly',
      status: 'active',
      nextSend: 'Mar 10, 2026'
    }
  ]);

  const availableSubscriptions = [
    {
      id: 3,
      name: 'New Product Launches',
      description: 'Be the first to know about new products from our artisans',
      frequency: 'As they happen'
    },
    {
      id: 4,
      name: 'Community Events',
      description: 'Learn about workshops, talks, and community gatherings',
      frequency: 'Weekly'
    },
    {
      id: 5,
      name: 'Waste Management Tips',
      description: 'Quick tips for better waste segregation at home',
      frequency: 'Bi-weekly'
    }
  ];

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      <div className="container-max py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-warm-900">
            My Subscriptions
          </h1>
          <p className="text-lg text-warm-600">
            Manage your newsletter preferences and stay connected with JuanaBin PH
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Active Subscriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6 text-warm-900">Active Subscriptions</h2>
            <div className="space-y-4">
              {subscriptions.map((sub, idx) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <CheckCircle className="text-eco-600 flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-warm-900 mb-1">
                          {sub.name}
                        </h3>
                        <p className="text-warm-600 mb-3">{sub.description}</p>
                        <div className="flex items-center gap-4 text-sm text-warm-500">
                          <span>{sub.frequency}</span>
                          <span>•</span>
                          <span>Next: {sub.nextSend}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600">
                      <X size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notification Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4 text-warm-900">
                Notification Settings
              </h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-eco-600" />
                  <span className="text-sm text-warm-700">Email notifications</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-eco-600" />
                  <span className="text-sm text-warm-700">SMS alerts</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-eco-600" />
                  <span className="text-sm text-warm-700">Product updates</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-eco-600" />
                  <span className="text-sm text-warm-700">Community news</span>
                </label>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Available Subscriptions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-warm-900">
            Subscribe to More
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableSubscriptions.map((sub, idx) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-semibold text-lg mb-2 text-warm-900">
                  {sub.name}
                </h3>
                <p className="text-warm-600 mb-4 text-sm">{sub.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-warm-500 font-medium">{sub.frequency}</span>
                  <motion.button
                    className="btn btn-primary text-sm px-4 py-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
