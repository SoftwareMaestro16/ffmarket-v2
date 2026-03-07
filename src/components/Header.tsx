import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, DollarSign, ShoppingCart, Menu, X } from 'lucide-react';
import { useApp, type Currency, type Language } from '../context/AppContext';
import { useState } from 'react';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { currency, setCurrency, language, setLanguage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setMobileMenuOpen(false);
  };

  const handleCurrencyChange = (curr: Currency) => {
    setCurrency(curr);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-black/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-black">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              FFMarket
            </span>
            <ShoppingCart size={20} className="text-red-500" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-red-400 transition font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/products" className="hover:text-red-400 transition font-medium">
              {t('nav.products')}
            </Link>
            <a href="#contact" className="hover:text-red-400 transition font-medium">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition border border-gray-700">
                <Globe size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <button onClick={() => handleLanguageChange('en')} className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium">
                  English
                </button>
                <button onClick={() => handleLanguageChange('ru')} className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium">
                  Русский
                </button>
                <button onClick={() => handleLanguageChange('fr')} className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium">
                  Français
                </button>
                <button onClick={() => handleLanguageChange('ar')} className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium">
                  العربية
                </button>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition border border-gray-700">
                <DollarSign size={18} />
                <span className="text-sm font-medium">{currency}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <button onClick={() => handleCurrencyChange('USD')} className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium">
                  USD
                </button>
                <button onClick={() => handleCurrencyChange('EUR')} className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium">
                  EUR
                </button>
                <button onClick={() => handleCurrencyChange('RUB')} className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium">
                  RUB
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 transition font-medium"
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 transition font-medium"
              >
                {t('nav.products')}
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 transition font-medium"
              >
                {t('nav.contact')}
              </a>
            </nav>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-2 font-semibold">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => handleLanguageChange('en')} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition">
                    English
                  </button>
                  <button onClick={() => handleLanguageChange('ru')} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition">
                    Русский
                  </button>
                  <button onClick={() => handleLanguageChange('fr')} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition">
                    Français
                  </button>
                  <button onClick={() => handleLanguageChange('ar')} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition">
                    العربية
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2 font-semibold">Currency</p>
                <div className="grid grid-cols-3 gap-2">
                  <button onClick={() => handleCurrencyChange('USD')} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition">
                    USD
                  </button>
                  <button onClick={() => handleCurrencyChange('EUR')} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition">
                    EUR
                  </button>
                  <button onClick={() => handleCurrencyChange('RUB')} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition">
                    RUB
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
