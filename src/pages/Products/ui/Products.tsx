import { useTranslation } from 'react-i18next';
import { ProductCard } from '../../../features/product';
import { ProductsBackground } from '../../../components/ProductsBackground';
import { products } from '../../../entities/product/model/products';
import { Sparkles, TrendingUp, Award } from 'lucide-react';

export const Products = () => {
  const { t } = useTranslation();

  const diamondProducts = products.filter(p => p.category === 'diamonds');
  const booyahProducts = products.filter(p => p.category === 'booyahPass');
  const evoProducts = products.filter(p => p.category === 'evoSubscription');

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ProductsBackground />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-xl">
            <Sparkles size={18} className="text-yellow-400" />
            <span className="text-sm font-semibold text-red-200">Premium Gaming Products</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-red-400 to-orange-400 bg-clip-text text-transparent">
              {t('products.title')}
            </span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-8">
            Browse all available packages and choose the perfect one for your gaming needs
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-gray-400">
              <TrendingUp size={20} className="text-green-500" />
              <span className="text-sm font-semibold">Best Prices</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Award size={20} className="text-yellow-500" />
              <span className="text-sm font-semibold">Verified Seller</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles size={20} className="text-blue-500" />
              <span className="text-sm font-semibold">Instant Delivery</span>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-32">
          <div className="relative mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl md:text-5xl drop-shadow-2xl">💎</div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  {t('products.diamonds')}
                </h2>
                <p className="text-gray-500 text-sm md:text-base mt-1">In-game currency for all your needs</p>
              </div>
            </div>
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-orange-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {diamondProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard product={product} isHot={idx === 1 || idx === 4} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 md:mb-32">
          <div className="relative mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl md:text-5xl drop-shadow-2xl">🎫</div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  Booyah Pass
                </h2>
                <p className="text-gray-500 text-sm md:text-base mt-1">Exclusive rewards and premium content</p>
              </div>
            </div>
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 via-yellow-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {booyahProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard product={product} isHot={idx === 0} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="relative mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl md:text-5xl drop-shadow-2xl">⭐</div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  Evo Subscription
                </h2>
                <p className="text-gray-500 text-sm md:text-base mt-1">VIP access to exclusive weapons and perks</p>
              </div>
            </div>
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 via-red-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {evoProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard product={product} isHot={idx === 1} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-xl">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Contact our support team for personalized recommendations
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles size={20} />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
