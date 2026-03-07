export type Currency = 'USD' | 'EUR' | 'RUB';

export type Language = 'en' | 'ru' | 'fr' | 'ar';

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
