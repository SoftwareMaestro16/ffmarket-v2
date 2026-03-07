import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, ShoppingBag, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="relative bg-black text-white border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
                <ShoppingBag className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                FFMarket
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-yellow-500">
              <Sparkles size={16} />
              <span className="text-xs font-semibold">Trusted by 10,000+ gamers</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-400 transition text-sm flex items-center gap-2 group">
                  <Zap size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-red-400 transition text-sm flex items-center gap-2 group">
                  <Zap size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  Products
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-400 transition text-sm flex items-center gap-2 group">
                  <Zap size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
              CATEGORIES
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-red-400 transition cursor-pointer text-sm flex items-center gap-2 group">
                <span className="text-lg">💎</span>
                {t('products.diamonds')}
              </li>
              <li className="text-gray-400 hover:text-red-400 transition cursor-pointer text-sm flex items-center gap-2 group">
                <span className="text-lg">🎫</span>
                Booyah Pass
              </li>
              <li className="text-gray-400 hover:text-red-400 transition cursor-pointer text-sm flex items-center gap-2 group">
                <span className="text-lg">⭐</span>
                Evo Subscription
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
              CONTACT
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-2 font-semibold">Email</p>
                <a
                  href="mailto:support@ffmarket.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition text-sm group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600/20 transition">
                    <Mail size={16} />
                  </div>
                  <span>support@ffmarket.com</span>
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2 font-semibold">WhatsApp</p>
                <a
                  href="https://wa.me/21692455024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition text-sm group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-green-600/20 transition">
                    <MessageCircle size={16} />
                  </div>
                  <span>Chat with us</span>
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2 font-semibold">Hours</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-gray-400 text-sm font-semibold">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 FFMarket. All rights reserved
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-red-400 transition">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-red-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
