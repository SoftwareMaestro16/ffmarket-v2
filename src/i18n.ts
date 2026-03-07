import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', products: 'Products', contact: 'Contact' },
      hero: {
        title: 'FFMarket - Free Fire Top-Up',
        subtitle: 'Donate to Free Fire from restricted regions',
        description: 'FFMarket allows players to top-up diamonds securely even if in-game payments are unavailable in their country.',
        cta: 'Browse Products',
      },
      products: {
        title: 'Our Products',
        diamonds: 'Diamonds',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'Evo Subscription',
        price: 'Price',
        details: 'Details',
      },
      productDetail: {
        buyNow: 'Buy Now',
        contactUs: 'Contact Us',
        description: 'Product Description',
      },
      contact: { title: 'Contact Us', whatsapp: 'WhatsApp', email: 'Email' },
      footer: {
        rights: 'All rights reserved',
        description: 'Secure Free Fire top-up service for restricted regions',
      },
    },
  },
  ru: {
    translation: {
      nav: { home: 'Главная', products: 'Продукты', contact: 'Контакты' },
      hero: {
        title: 'FFMarket - Пополнение Free Fire',
        subtitle: 'Пожертвования в Free Fire из ограниченных регионов',
        description: 'FFMarket позволяет игрокам безопасно пополнять алмазы, даже если внутриигровые платежи недоступны в их стране.',
        cta: 'Просмотр продуктов',
      },
      products: {
        title: 'Наши продукты',
        diamonds: 'Алмазы',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'Подписка Evo',
        price: 'Цена',
        details: 'Подробнее',
      },
      productDetail: {
        buyNow: 'Купить сейчас',
        contactUs: 'Связаться с нами',
        description: 'Описание продукта',
      },
      contact: { title: 'Связаться с нами', whatsapp: 'WhatsApp', email: 'Электронная почта' },
      footer: {
        rights: 'Все права защищены',
        description: 'Безопасный сервис пополнения Free Fire для ограниченных регионов',
      },
    },
  },
  fr: {
    translation: {
      nav: { home: 'Accueil', products: 'Produits', contact: 'Contact' },
      hero: {
        title: 'FFMarket - Recharge Free Fire',
        subtitle: 'Faire un don à Free Fire depuis des régions restreintes',
        description: 'FFMarket permet aux joueurs de recharger des diamants en toute sécurité même si les paiements en jeu ne sont pas disponibles dans leur pays.',
        cta: 'Parcourir les produits',
      },
      products: {
        title: 'Nos produits',
        diamonds: 'Diamants',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'Abonnement Evo',
        price: 'Prix',
        details: 'Détails',
      },
      productDetail: {
        buyNow: 'Acheter maintenant',
        contactUs: 'Nous contacter',
        description: 'Description du produit',
      },
      contact: { title: 'Nous contacter', whatsapp: 'WhatsApp', email: 'E-mail' },
      footer: {
        rights: 'Tous droits réservés',
        description: 'Service de recharge Free Fire sécurisé pour les régions restreintes',
      },
    },
  },
  ar: {
    translation: {
      nav: { home: 'الرئيسية', products: 'المنتجات', contact: 'اتصل بنا' },
      hero: {
        title: 'FFMarket - شحن فري فاير',
        subtitle: 'التبرع لـ Free Fire من المناطق المحظورة',
        description: 'يتيح FFMarket للاعبين شحن الماس بشكل آمن حتى لو كانت المدفوعات داخل اللعبة غير متاحة في بلدهم.',
        cta: 'تصفح المنتجات',
      },
      products: {
        title: 'منتجاتنا',
        diamonds: 'الماس',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'اشتراك Evo',
        price: 'السعر',
        details: 'التفاصيل',
      },
      productDetail: {
        buyNow: 'اشتر الآن',
        contactUs: 'اتصل بنا',
        description: 'وصف المنتج',
      },
      contact: { title: 'اتصل بنا', whatsapp: 'واتساب', email: 'البريد الإلكتروني' },
      footer: {
        rights: 'جميع الحقوق محفوظة',
        description: 'خدمة شحن Free Fire آمنة للمناطق المحظورة',
      },
    },
  },
  'ar-TN': {
    translation: {
      nav: { home: 'الرئيسية', products: 'المنتجات', contact: 'اتصل بنا' },
      hero: {
        title: 'FFMarket - شحن فري فاير',
        subtitle: 'تبرع لـ Free Fire من المناطق المحظورة',
        description: 'FFMarket يسمح للاعبين بشحن الماس بأمان حتى لو كانت المدفوعات داخل اللعبة غير متاحة في بلدهم.',
        cta: 'تصفح المنتجات',
      },
      products: {
        title: 'منتجاتنا',
        diamonds: 'الماس',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'اشتراك Evo',
        price: 'السعر',
        details: 'التفاصيل',
      },
      productDetail: {
        buyNow: 'اشري توا',
        contactUs: 'اتصل بينا',
        description: 'وصف المنتج',
      },
      contact: { title: 'اتصل بينا', whatsapp: 'واتساب', email: 'البريد الإلكتروني' },
      footer: {
        rights: 'جميع الحقوق محفوظة',
        description: 'خدمة شحن Free Fire آمنة',
      },
    },
  },
  fa: {
    translation: {
      nav: { home: 'خانه', products: 'محصولات', contact: 'تماس' },
      hero: {
        title: 'FFMarket - شارژ Free Fire',
        subtitle: 'اهدا به Free Fire از مناطق محدود',
        description: 'FFMarket به بازیکنان اجازه می‌دهد الماس را به صورت ایمن شارژ کنند حتی اگر پرداخت‌های درون بازی در کشورشان در دسترس نباشد.',
        cta: 'مشاهده محصولات',
      },
      products: {
        title: 'محصولات ما',
        diamonds: 'الماس',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'اشتراک Evo',
        price: 'قیمت',
        details: 'جزئیات',
      },
      productDetail: {
        buyNow: 'خرید',
        contactUs: 'تماس با ما',
        description: 'توضیحات محصول',
      },
      contact: { title: 'تماس با ما', whatsapp: 'واتساپ', email: 'ایمیل' },
      footer: {
        rights: 'تمامی حقوق محفوظ است',
        description: 'سرویس شارژ امن Free Fire برای مناطق محدود',
      },
    },
  },
  'ar-IQ': {
    translation: {
      nav: { home: 'الرئيسية', products: 'المنتجات', contact: 'اتصل بنا' },
      hero: {
        title: 'FFMarket - شحن فري فاير',
        subtitle: 'تبرع لـ Free Fire من المناطق المحظورة',
        description: 'FFMarket يسمح للاعبين بشحن الماس بأمان حتى لو كانت المدفوعات داخل اللعبة غير متاحة في بلدهم.',
        cta: 'تصفح المنتجات',
      },
      products: {
        title: 'منتجاتنا',
        diamonds: 'الماس',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'اشتراك Evo',
        price: 'السعر',
        details: 'التفاصيل',
      },
      productDetail: {
        buyNow: 'اشتري هسه',
        contactUs: 'اتصل بينا',
        description: 'وصف المنتج',
      },
      contact: { title: 'اتصل بينا', whatsapp: 'واتساب', email: 'البريد الإلكتروني' },
      footer: {
        rights: 'جميع الحقوق محفوظة',
        description: 'خدمة شحن Free Fire آمنة',
      },
    },
  },
  'ar-SY': {
    translation: {
      nav: { home: 'الرئيسية', products: 'المنتجات', contact: 'اتصل فينا' },
      hero: {
        title: 'FFMarket - شحن فري فاير',
        subtitle: 'تبرع لـ Free Fire من المناطق المحظورة',
        description: 'FFMarket بيسمح للاعبين يشحنوا الماس بأمان حتى لو كانت المدفوعات داخل اللعبة مش متاحة ببلدهم.',
        cta: 'تصفح المنتجات',
      },
      products: {
        title: 'منتجاتنا',
        diamonds: 'الماس',
        booyahPass: 'Booyah Pass',
        evoSubscription: 'اشتراك Evo',
        price: 'السعر',
        details: 'التفاصيل',
      },
      productDetail: {
        buyNow: 'اشتري هلق',
        contactUs: 'اتصل فينا',
        description: 'وصف المنتج',
      },
      contact: { title: 'اتصل فينا', whatsapp: 'واتساب', email: 'البريد الإلكتروني' },
      footer: {
        rights: 'جميع الحقوق محفوظة',
        description: 'خدمة شحن Free Fire آمنة',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
