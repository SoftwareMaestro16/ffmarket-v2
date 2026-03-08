import { useTranslation } from 'react-i18next';
import { Hero } from '../../../components/Hero';
import { ProductCard } from '../../../features/product';
import { ProductsSectionBackground } from '../../../components/ProductsSectionBackground';
import { HowItWorksSection } from '../../../components/HowItWorksSection';
import { products } from '../../../entities/product/model/products';

export const Home = () => {
  const { t } = useTranslation();

  const diamondProducts = products.filter(p => p.category === 'diamonds');
  const booyahProducts = products.filter(p => p.category === 'booyahPass');
  const evoProducts = products.filter(p => p.category === 'evoSubscription');

  return (
    <div className="bg-black">
      <Hero />
      
      <section className="py-12 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <ProductsSectionBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 relative">
              <span className="bg-gradient-to-r from-white via-red-400 to-orange-400 bg-clip-text text-transparent">
                {t('products.title')}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 blur-3xl -z-10"></span>
            </h2>
            <p className="text-gray-400 text-base md:text-xl">Choose your perfect package and start playing</p>
          </div>

          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="text-3xl md:text-5xl">💎</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{t('products.diamonds')}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {diamondProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} isHot={idx === 1 || idx === 4} />
              ))}
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="text-3xl md:text-5xl">🎫</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Booyah Pass</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {booyahProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} isHot={idx === 0} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <div className="text-3xl md:text-5xl">⭐</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Evo Subscription</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {evoProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} isHot={idx === 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
    </div>
  );
};
