import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flame, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <AnimatedBackground />

      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-600/30 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-600/30 rounded-full filter blur-[120px] animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-0 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 backdrop-blur-xl shadow-2xl animate-fade-in">
            <Flame size={16} className="text-red-400 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-red-200">Trusted by 10,000+ gamers worldwide</span>
            <Sparkles size={14} className="text-yellow-400 hidden sm:block" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 tracking-tight animate-fade-in-up">
            <span className="inline-block bg-gradient-to-r from-white via-red-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
              FFMarket
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 font-bold bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent animate-fade-in-up animation-delay-200 px-4">
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed animate-fade-in-up animation-delay-400 px-4">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-20 animate-fade-in-up animation-delay-600 px-4">
            <Link
              to="/products"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                Explore Products
                <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </Link>

            <a
              href="#contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <Zap size={24} className="group-hover:rotate-12 transition-transform" />
              Watch Trailer
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-800 px-4">
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-1 md:mb-2">50+</div>
                <div className="text-xs md:text-sm text-gray-400 font-semibold">Products</div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-1 md:mb-2">24/7</div>
                <div className="text-xs md:text-sm text-gray-400 font-semibold">Support</div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/0 to-yellow-600/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex flex-col items-center">
                <Zap className="text-yellow-400 mb-1 md:mb-2 w-[37px] h-[37px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]" />
                <div className="text-xs md:text-sm text-gray-400 font-semibold text-center">Instant</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </section>
  );
};
