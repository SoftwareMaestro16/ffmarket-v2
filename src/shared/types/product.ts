export interface Product {
  id: string;
  category: 'diamonds' | 'booyahPass' | 'evoSubscription';
  name: string;
  description: string;
  priceUSD: number;
  image: string;
}

export type ProductCategory = Product['category'];
