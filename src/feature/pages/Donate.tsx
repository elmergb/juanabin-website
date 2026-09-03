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
    <div className="min-h-screen bg-warm-50">
      {/* Hero — trimmed vertical padding, hero and form share one visual block via negative margin pull-up */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-b from-eco-600 to-eco-700 text-white pt-16 pb-20 md:pt-20 md:pb-24"
      >
        <div className="container-max grid lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-white/20 px-4 py-1.5 rounded-full">
              <Heart size={16} className="text-red-400" />
              <span className="text-sm font-medium">Make a difference</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Support Sustainable Waste Management
            </h1>
            <p className="text-lg text-eco-100 leading-relaxed max-w-xl">
              Your donation directly supports AI-driven waste segregation systems and empowers Filipino artisans to transform recycled materials into beautiful, sustainable products.
            </p>
          </motion.div>

          {/* Impact stats moved into hero to fill the right column and cut a full section of empty space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 grid grid-cols-3 lg:flex lg:flex-col lg:justify-center lg:self-stretch gap-4 lg:gap-3"
          >
            {[
              { value: '95%', label: 'Program efficiency' },
              { value: '500+', label: 'Artisans supported' },
              { value: '2.5M kg', label: 'Waste diverted' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-lg px-5 py-4 text-center">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-eco-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <div className="container-max py-12 md:py-16">
        {/* Impact Areas — tighter card padding and gap, no oversized heading block */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-warm-900">
            How your support drives change
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {impacts.map((impact, idx) => (
              <div key={idx} className="card p-6">
                <div className="w-10 h-10 bg-eco-100 rounded-lg flex items-center justify-center mb-3">
                  <impact.icon className="text-eco-600" size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-warm-900">{impact.title}</h3>
                <p className="text-sm text-warm-600 leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Donation Form — widened to use available width, 4-up tier grid, denser padding */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-14"
        >
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-warm-900">Choose your impact level</h2>

            {/* Donation Tiers */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {donationTiers.map(tier => (
                <button
                  key={tier.amount}
                  onClick={() => setDonationAmount(tier.amount)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    donationAmount === tier.amount
                      ? 'border-eco-600 bg-eco-50'
                      : 'border-warm-200 hover:border-eco-400'
                  }`}
                >
                  <div className="font-semibold text-warm-900">₱{tier.amount}</div>
                  <div className="text-eco-600 text-sm font-medium mb-1">{tier.label}</div>
                  <div className="text-xs text-warm-600 leading-snug">{tier.description}</div>
                </button>
              ))}
            </div>

            {/* Custom amount + summary side by side on larger screens to use width */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-warm-900 mb-1.5">
                  Or enter a custom amount
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-eco-600">₱</span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Math.max(1, parseInt(e.target.value) || 0))}
                    className="input text-lg"
                  />
                </div>
              </div>

              <div className="bg-eco-50 rounded-lg p-4 flex flex-col justify-center">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-warm-600">Donation amount</span>
                  <span className="font-bold text-xl text-eco-600">₱{donationAmount}</span>
                </div>
                <p className="text-xs text-warm-600 mt-1.5">
                  ✓ 100% of your donation goes directly to our programs
                </p>
              </div>
            </div>

            <motion.button
              className="w-full btn btn-primary text-lg py-3.5"
              whileTap={{ scale: 0.97 }}
            >
              Donate now
            </motion.button>

            <p className="text-center text-sm text-warm-600 mt-3">
              Secure payment. All donations are tax-deductible.
            </p>
          </div>
        </motion.section>

        {/* Trust statement — kept short since stats now live in the hero, avoiding repeated empty blocks */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-6 md:p-8 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-xl font-bold mb-3 text-warm-900">
            Your donation makes a real difference
          </h2>
          <p className="text-warm-600 leading-relaxed">
            JuanaBin PH is committed to transparency. Every donation is tracked and reported.
            We work directly with artisan communities and use AI technology to maximize the
            environmental and social impact of each contribution.
          </p>
        </motion.section>
      </div>
    </div>
  );
}