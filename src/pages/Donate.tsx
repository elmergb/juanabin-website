import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Zap } from 'lucide-react';

export function Donate() {
  const [donationAmount, setDonationAmount] = useState(500);

  const impacts = [
    {
      icon: Leaf,
      title: 'Environmental',
      description: 'Support sustainable waste management and circular economy initiatives'
    },
    {
      icon: Users,
      title: 'Artisan Empowerment',
      description: 'Provide opportunities and fair income for marginalized Filipino craftspeople'
    },
    {
      icon: Zap,
      title: 'Technology',
      description: 'Fund AI-driven waste segregation systems for communities'
    }
  ];

  const donationTiers = [
    { amount: 100, label: 'Supporter', description: 'Support one day of waste collection' },
    { amount: 500, label: 'Champion', description: 'Enable one artisan project' },
    { amount: 1000, label: 'Visionary', description: 'Fund community awareness campaign' },
    { amount: 5000, label: 'Founder', description: 'Install one JuanaBin system' },
  ];

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-b from-eco-600 to-eco-700 text-white pt-20 pb-32"
      >
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-white/20 px-4 py-2 rounded-full">
              <Heart size={18} className="text-red-400" />
              <span className="text-sm font-medium">Make a difference</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support Sustainable Waste Management
            </h1>
            <p className="text-xl text-eco-100 mb-8 leading-relaxed">
              Your donation directly supports AI-driven waste segregation systems and empowers Filipino artisans to transform recycled materials into beautiful, sustainable products.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="container-max py-16">
        {/* Impact Areas */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-warm-900 text-center">
            How Your Support Drives Change
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, idx) => (
              <motion.div
                key={idx}
                className="card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-eco-100 rounded-lg flex items-center justify-center mb-4">
                  <impact.icon className="text-eco-600" size={24} />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-warm-900">{impact.title}</h3>
                <p className="text-warm-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Donation Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="card p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-warm-900">Choose Your Impact Level</h2>

            {/* Donation Tiers */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {donationTiers.map(tier => (
                <button
                  key={tier.amount}
                  onClick={() => setDonationAmount(tier.amount)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    donationAmount === tier.amount
                      ? 'border-eco-600 bg-eco-50'
                      : 'border-warm-200 hover:border-eco-400'
                  }`}
                >
                  <div className="font-semibold text-lg text-warm-900">₱{tier.amount}</div>
                  <div className="text-eco-600 font-medium mb-2">{tier.label}</div>
                  <div className="text-sm text-warm-600">{tier.description}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-warm-900 mb-2">
                Or enter a custom amount
              </label>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-eco-600">₱</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Math.max(1, parseInt(e.target.value) || 0))}
                  className="input text-lg"
                />
              </div>
            </div>

            {/* Donation Summary */}
            <div className="bg-eco-50 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-warm-600">Donation Amount</span>
                <span className="font-bold text-2xl text-eco-600">₱{donationAmount}</span>
              </div>
              <p className="text-sm text-warm-600 mt-3">
                ✓ 100% of your donation goes directly to our programs
              </p>
            </div>

            {/* Donate Button */}
            <motion.button
              className="w-full btn btn-primary text-lg py-4"
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>

            <p className="text-center text-sm text-warm-600 mt-4">
              Secure payment. All donations are tax-deductible.
            </p>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-warm-900">
            Your Donation Makes a Real Difference
          </h2>
          <p className="text-warm-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            JuanaBin PH is committed to transparency. Every donation is tracked and reported.
            We work directly with artisan communities and use AI technology to maximize the
            environmental and social impact of each contribution.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-eco-600 mb-2">95%</div>
              <p className="text-warm-600">Program Efficiency</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-600 mb-2">500+</div>
              <p className="text-warm-600">Artisans Supported</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-600 mb-2">2.5M kg</div>
              <p className="text-warm-600">Waste Diverted</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
