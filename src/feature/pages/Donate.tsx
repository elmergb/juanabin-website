import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export function Donate() {
  const [frequency, setFrequency] = useState('One time');
  const [donationAmount, setDonationAmount] = useState(50);

  const frequencies = ['One time', 'Monthly', 'Yearly'];

  const amounts = [50, 100, 200, 1000];

  return (
    <section className="min-h-screen bg-[#121617] pt-24 px-4 md:px-8 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[520px]">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[400px] lg:min-h-full overflow-hidden"
          >
            <img
              src="/images/donation-image.jpg"
              alt="Helping hands"
              className="object-cover w-full h-full"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>


          {/* RIGHT DONATION FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#121617] text-white px-5 py-10 md:px-10 lg:px-5 xl:px-10 flex items-center"
          >
            <div className="w-full max-w-[650px] mx-auto">

              {/* Heading */}
              <h1 className="text-[#39FF14] mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Make a difference
              </h1>

              <p className="text-base leading-relaxed text-gray-300 md:text-lg mb-7">
                Change starts with people like you. Your donation helps make a
                real impact, one action at a time. Together, we can do more.
              </p>


              {/* FREQUENCY */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-semibold">
                  Frequency
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {frequencies.map((item) => (
                    <button
                      key={item}
                      onClick={() => setFrequency(item)}
                      className={`
                        border px-3 py-4 text-sm md:text-base transition-all duration-200
                        ${
                          frequency === item
                            ? 'border-white bg-[#2a2f2e]'
                            : 'border-gray-600 hover:border-gray-300'
                        }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>


              {/* AMOUNT */}
              <div className="mb-7">
                <label className="block mb-2 text-sm font-semibold">
                  Amount
                </label>

                <div className="grid grid-cols-4 gap-2">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      className={`
                        border py-4 text-sm md:text-base transition-all duration-200
                        ${
                          donationAmount === amount
                            ? 'border-white bg-[#2a2f2e]'
                            : 'border-gray-600 hover:border-gray-300'
                        }
                      `}
                    >
                      ₱{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>


              {/* DONATE BUTTON */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 font-medium text-black transition-colors bg-[#39FF14]/80 hover:bg-[#39FF14]"
              >
                Donate ₱{donationAmount.toLocaleString()}
              </motion.button>


              {/* INFO MESSAGE */}
              <div className="mt-3 bg-[#202524] px-5 py-4 flex items-start gap-3">
                <Info
                  size={18}
                  className="text-gray-300 shrink-0 mt-[2px]"
                />

                <p className="text-sm text-gray-300">
                  This website can't accept donations right now. Contact the
                  site owner.
                </p>
              </div>


              {/* SOCIAL ICON PLACEHOLDERS */}
              <div className="flex gap-5 mt-4 text-sm text-gray-500">
                <span>●</span>
                <span>𝕏</span>
                <span>◉</span>
                <span>↗</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}