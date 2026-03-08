import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, DollarSign, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAppStore } from '../../../shared/store/useAppStore';
import type { Currency, Language } from '../../../shared/types';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'ar-TN', name: 'تونسي' },
  { code: 'fa', name: 'فارسی' },
  { code: 'ar-IQ', name: 'عراقي' },
  { code: 'ar-SY', name: 'سوري' },
];

const currencies: Currency[] = ['USD', 'EUR', 'RUB', 'TND', 'IRR', 'IQD', 'SYP', 'CUP', 'VES'];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { currency, language, setCurrency, setLanguage } = useAppStore();
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
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg text-white shadow-2xl z-50 border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-black">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              FFMarket
            </span>
            <ShoppingCart size={20} className="text-red-500" />
          </Link>

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

          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition border border-gray-700">
                <Globe size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 max-h-64 overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as Language)}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition border border-gray-700">
                <DollarSign size={18} />
                <span className="text-sm font-medium">{currency}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 max-h-64 overflow-y-auto">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => handleCurrencyChange(curr)}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-800 transition text-sm font-medium"
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition z-50 relative"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <div className="absolute left-0 right-0 top-full lg:hidden bg-black backdrop-blur-2xl border-t border-gray-800 shadow-2xl z-40 animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-4 mb-6">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-400 transition font-medium py-2">
                    {t('nav.home')}
                  </Link>
                  <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-400 transition font-medium py-2">
                    {t('nav.products')}
                  </Link>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-400 transition font-medium py-2">
                    {t('nav.contact')}
                  </a>
                </nav>

                <div className="space-y-6 border-t border-gray-800 pt-6">
                  <div>
                    <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">Language</p>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code as Language)}
                          className={`px-4 py-3 rounded-lg text-sm transition ${
                            language === lang.code 
                              ? 'bg-red-600 text-white font-semibold' 
                              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">Currency</p>
                    <div className="grid grid-cols-3 gap-2">
                      {currencies.map((curr) => (
                        <button
                          key={curr}
                          onClick={() => handleCurrencyChange(curr)}
                          className={`px-4 py-3 rounded-lg text-sm transition font-medium ${
                            currency === curr 
                              ? 'bg-orange-600 text-white font-bold' 
                              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
