import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Zap, Clock, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface Product {
  id: string;
  category: 'diamonds' | 'booyahPass' | 'evoSubscription';
  name: string;
  description: string;
  prices: {
    USD: number;
    EUR: number;
    RUB: number;
  };
  image: string;
}

interface ProductCardProps {
  product: Product;
  isHot?: boolean;
}

export const ProductCard = ({ product, isHot = false }: ProductCardProps) => {
  const { t } = useTranslation();
  const { currency } = useApp();

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border border-gray-800 hover:border-red-600/50 shadow-xl hover:shadow-2xl hover:shadow-red-900/40">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-orange-600/0 to-yellow-600/0 group-hover:from-red-600/10 group-hover:via-orange-600/10 group-hover:to-yellow-600/10 transition-all duration-500"></div>
        
        {/* HOT Badge */}
        {isHot && (
          <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-2xl shadow-orange-600/50 animate-pulse">
            <Zap size={14} fill="currentColor" />
            HOT
            <Sparkles size={14} />
          </div>
        )}
        
        {/* Product Image Area */}
        <div className="relative h-56 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
          
          {/* Product Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-9xl group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
              {product.image}
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-2xl font-black mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
            {product.name}
          </h3>
          
          <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Features */}
          <div className="flex items-center gap-3 mb-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-green-500" />
              <span>Instant</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-yellow-500" />
              <span>Secure</span>
            </div>
          </div>
          
          {/* Price & Action */}
          <div className="flex gap-3">
            <div className="flex-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-[2px] rounded-xl group-hover:shadow-lg group-hover:shadow-orange-600/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black px-5 py-3 rounded-xl font-black text-center">
                {currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₽'}{product.prices[currency]}
              </div>
            </div>
            
            <button className="flex-1 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-600/50 text-red-400 px-5 py-3 rounded-xl font-bold hover:bg-gradient-to-r hover:from-red-600/30 hover:to-orange-600/30 hover:border-red-500 transition-all duration-300">
              {t('products.details')}
            </button>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
    </Link>
  );
};
