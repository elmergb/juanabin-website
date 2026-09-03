import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationModal from '../ui/NotificationModal';

export function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <Link to="/" className="flex items-center flex-shrink-0 gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg md:w-10 md:h-10 bg-eco-600">
              <span className="text-sm font-bold text-white md:text-base">JB</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold md:text-base text-warm-900">JuanaBin PH</div>
              <div className="text-xs font-medium text-eco-600">Smart Waste</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden gap-1 md:flex">
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
          <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="p-2 rounded-full hover:bg-warm-100"
              >
                <Bell size={20} className="text-warm-700" />
              </button>

              <NotificationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            <Link
              to="/cart"
              className="relative p-2 transition-colors rounded-lg hover:bg-warm-200"
            >
              <ShoppingCart size={20} className="text-warm-700" />
              {cartCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -top-1 -right-1 bg-eco-600">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors rounded-lg md:hidden hover:bg-warm-200"
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
              className="bg-white border-t md:hidden border-warm-200"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
