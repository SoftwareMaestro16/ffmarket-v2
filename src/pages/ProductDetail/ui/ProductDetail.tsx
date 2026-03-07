import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, ArrowLeft, Shield, Zap, CheckCircle } from 'lucide-react';
import { products } from '../../../entities/product/model/products';
import { useAppStore } from '../../../shared/store/useAppStore';
import { useExchangeRates } from '../../../shared/lib/hooks/useExchangeRates';
import { convertPrice, getCurrencySymbol } from '../../../shared/lib/utils/currency';
import { generateWhatsAppLink, generateEmailLink } from '../../../shared/lib/utils/contact';
import { ProductDetailBackground } from '../../../components/ProductDetailBackground';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { currency, language } = useAppStore();
  const { data: exchangeData } = useExchangeRates();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Product not found</h1>
          <Link to="/products" className="text-red-500 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const convertedPrice = convertPrice(product.priceUSD, currency, exchangeData?.rates);
  const currencySymbol = getCurrencySymbol(currency);
  
  const whatsappLink = generateWhatsAppLink(product, convertedPrice, currency, language);
  const emailLink = generateEmailLink(product, convertedPrice, currency, language);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ProductDetailBackground />
      
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-400 mb-6 md:mb-8 transition group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </Link>

        <div className="bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-0">
              {/* Animated background for product image */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-40 h-40 bg-red-600/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
              </div>

              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 shadow-2xl shadow-red-600/50">
                <Zap size={14} fill="currentColor" />
                {product.category === 'diamonds' ? 'Diamonds' : product.category === 'booyahPass' ? 'Booyah Pass' : 'Evo Subscription'}
              </div>
              
              <div className="relative text-7xl md:text-9xl drop-shadow-2xl">
                {product.image}
              </div>
              
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex items-center gap-2 text-white text-sm backdrop-blur-sm bg-black/30 px-3 py-2 rounded-lg">
                <Shield size={16} className="text-green-500" />
                <span className="text-xs md:text-sm font-semibold">Secure</span>
              </div>
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex items-center gap-2 text-white text-sm backdrop-blur-sm bg-black/30 px-3 py-2 rounded-lg">
                <Zap size={16} className="text-yellow-500" />
                <span className="text-xs md:text-sm font-semibold">Instant</span>
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white">{product.name}</h1>
              
              <div className="mb-6 md:mb-8">
                <p className="text-xs md:text-sm text-gray-500 mb-2">Price</p>
                <div className="relative bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-600/30 rounded-xl md:rounded-2xl p-4 md:p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 animate-pulse"></div>
                  <span className="relative text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    {currencySymbol}{convertedPrice}
                  </span>
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{product.description}</p>
              </div>

              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span>Account delivery after payment</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span>Instant delivery</span>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg shadow-green-900/30 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

                <a
                  href={emailLink}
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-red-900/30 transform hover:scale-105"
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
