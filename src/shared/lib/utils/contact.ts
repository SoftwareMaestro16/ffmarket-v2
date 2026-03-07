import { WHATSAPP_NUMBER, SUPPORT_EMAIL } from '../../config/constants';
import type { Product, Currency, Language } from '../../types';
import { getCurrencySymbol } from './currency';

const messages = {
  en: (productName: string, price: number, currency: Currency) =>
    `Hello! I would like to buy ${productName} for ${getCurrencySymbol(currency)}${price}.`,
  ru: (productName: string, price: number, currency: Currency) =>
    `Здравствуйте! Я хотел бы купить ${productName} за ${getCurrencySymbol(currency)}${price}.`,
  fr: (productName: string, price: number, currency: Currency) =>
    `Bonjour! Je voudrais acheter ${productName} pour ${getCurrencySymbol(currency)}${price}.`,
  ar: (productName: string, price: number, currency: Currency) =>
    `مرحبا! أود شراء ${productName} مقابل ${getCurrencySymbol(currency)}${price}.`,
  'ar-TN': (productName: string, price: number, currency: Currency) =>
    `أهلا! نحب نشري ${productName} بـ ${getCurrencySymbol(currency)}${price}.`,
  fa: (productName: string, price: number, currency: Currency) =>
    `سلام! می‌خواهم ${productName} را به قیمت ${getCurrencySymbol(currency)}${price} بخرم.`,
  'ar-IQ': (productName: string, price: number, currency: Currency) =>
    `مرحبا! أريد أشتري ${productName} بسعر ${getCurrencySymbol(currency)}${price}.`,
  'ar-SY': (productName: string, price: number, currency: Currency) =>
    `مرحبا! بدي اشتري ${productName} بسعر ${getCurrencySymbol(currency)}${price}.`,
};

export const generateWhatsAppLink = (
  product: Product,
  price: number,
  currency: Currency,
  language: Language
): string => {
  const message = messages[language](product.name, price, currency);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
};

export const generateEmailLink = (
  product: Product,
  price: number,
  currency: Currency,
  language: Language
): string => {
  const message = messages[language](product.name, price, currency);
  const subject = encodeURIComponent(`Order: ${product.name}`);
  const body = encodeURIComponent(message);
  return `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
};
