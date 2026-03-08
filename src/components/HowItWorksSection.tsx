import { useTranslation } from 'react-i18next';
import { ShoppingCart, CreditCard, Zap, Globe, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    titleEn: 'Choose Product',
    titleRu: 'Выберите товар',
    descEn: 'Browse our catalog and select the diamonds, Booyah Pass, or Evo Subscription package you need',
    descRu: 'Просмотрите каталог и выберите нужный пакет алмазов, Booyah Pass или подписку Evo',
    color: 'from-red-500 to-orange-500',
    bgGlow: 'from-red-600/20 to-orange-600/20',
  },
  {
    icon: CreditCard,
    titleEn: 'Pay in Your Currency',
    titleRu: 'Оплатите в своей валюте',
    descEn: 'We support 9 currencies including USD, EUR, RUB, TND, IRR, IQD, SYP, CUP, VES with real-time exchange rates',
    descRu: 'Поддерживаем 9 валют включая USD, EUR, RUB, TND, IRR, IQD, SYP, CUP, VES с актуальными курсами',
    color: 'from-orange-500 to-yellow-500',
    bgGlow: 'from-orange-600/20 to-yellow-600/20',
  },
  {
    icon: Zap,
    titleEn: 'Get Your Product',
    titleRu: 'Получите товар',
    descEn: 'Receive your purchase via WhatsApp or Email. Simple and secure delivery',
    descRu: 'Получите покупку через WhatsApp или Email. Простая и безопасная доставка',
    color: 'from-yellow-500 to-red-500',
    bgGlow: 'from-yellow-600/20 to-red-600/20',
  },
];

export const HowItWorksSection = () => {
  const { i18n } = useTranslation();
  const isRussian = i18n.language === 'ru';

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/30 rounded-full filter blur-[150px] animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-600/30 rounded-full filter blur-[150px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-600/30 rounded-full filter blur-[150px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Radial lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#f97316' : '#eab308'
            }, transparent)`,
            boxShadow: `0 0 ${Math.random() * 20 + 10}px ${
              i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#f97316' : '#eab308'
            }`,
            animation: `float ${Math.random() * 20 + 15}s linear infinite`,
            animationDelay: Math.random() * 5 + 's',
            opacity: 0.6,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-xl shadow-2xl">
            <Sparkles className="text-red-400 animate-pulse" size={24} />
            <span className="text-sm md:text-base font-bold text-red-200">
              {isRussian ? 'Простой процесс' : 'Simple Process'}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 relative">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              {isRussian ? 'Как это работает?' : 'How It Works?'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 blur-3xl -z-10"></div>
          </h2>
          
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto">
            {isRussian 
              ? 'Три простых шага для пополнения Free Fire из любой точки мира'
              : 'Three simple steps to top-up Free Fire from anywhere in the world'}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-red-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30 overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGlow} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  
                  {/* Step number */}
                  <div className="absolute top-6 right-6 text-7xl font-black text-white/5 group-hover:text-white/10 transition-all duration-500">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${step.color} rounded-2xl mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="text-white" size={32} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                      {isRussian ? step.titleRu : step.titleEn}
                    </h3>
                    
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {isRussian ? step.descRu : step.descEn}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom info card */}
        <div className="relative bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-12 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-600/10 to-yellow-600/10"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse animation-delay-2000"></div>
          </div>

          <div className="relative flex flex-col items-center text-center md:text-left md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-2xl shadow-red-900/50 flex-shrink-0">
                <Globe className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-black text-white mb-2">
                  {isRussian ? '🌍 Работаем по всему миру' : '🌍 Serving Worldwide'}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {isRussian 
                    ? 'Специализируемся на регионах с ограниченным доступом к Free Fire'
                    : 'Specializing in regions with restricted Free Fire access'}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/21692455024"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-red-900/30 transform hover:scale-105 w-full md:w-auto"
            >
              <span>{isRussian ? 'Начать покупку' : 'Start Shopping'}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
