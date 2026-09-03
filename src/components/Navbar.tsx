import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Donate', href: '/donate' },
    { label: 'Subscriptions', href: '/subscriptions' },
    { label: 'Blog', href: '/blog' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-warm-50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-eco-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">JB</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-sm md:text-base text-warm-900">JuanaBin PH</div>
              <div className="text-xs text-eco-600 font-medium">Smart Waste</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-eco-600 bg-eco-50'
                    : 'text-warm-700 hover:text-eco-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 hover:bg-warm-200 rounded-lg transition-colors hidden md:block">
              <Bell size={20} className="text-warm-700" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-warm-200 rounded-lg transition-colors"
            >
              <ShoppingCart size={20} className="text-warm-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-eco-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-warm-200 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X size={24} className="text-warm-900" />
              ) : (
                <Menu size={24} className="text-warm-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-warm-200 bg-white"
            >
              <div className="py-4 space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-eco-50 text-eco-600'
                        : 'text-warm-700 hover:bg-warm-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="w-full text-left px-4 py-2 text-sm font-medium text-warm-700 hover:bg-warm-100 rounded-lg flex items-center gap-2">
                  <Bell size={18} />
                  Notifications
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
