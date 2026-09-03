import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-900 text-warm-50">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-eco-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">JB</span>
              </div>
              <div>
                <div className="font-bold text-lg">JuanaBin PH</div>
                <div className="text-sm text-eco-300">Smart Waste, Artisanal Future</div>
              </div>
            </div>
            <p className="text-warm-300 mt-6 leading-relaxed max-w-sm">
              We empower marginalized Filipino artisans through AI-driven waste management and circular economy initiatives, transforming recycled materials into high-quality, sustainable products for a circular future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Navigate</h3>
            <ul className="space-y-2 text-warm-300">
              <li><Link to="/" className="hover:text-eco-400 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-eco-400 transition-colors">Shop</Link></li>
              <li><Link to="/blog" className="hover:text-eco-400 transition-colors">Blog</Link></li>
              <li><Link to="/donate" className="hover:text-eco-400 transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Connect</h3>
            <ul className="space-y-3 text-warm-300">
              <li><a href="mailto:info@juanabin.ph" className="hover:text-eco-400 transition-colors">info@juanabin.ph</a></li>
              <li className="flex gap-4 pt-4">
                <a href="#" className="hover:text-eco-400 transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-eco-400 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-eco-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-400">
            <div>© {currentYear} JuanaBin PH. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-eco-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-eco-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
