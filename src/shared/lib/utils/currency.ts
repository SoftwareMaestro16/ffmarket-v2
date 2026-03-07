import type { Currency, ExchangeRates } from '../../types';

export const convertPrice = (
  priceUSD: number,
  targetCurrency: Currency,
  rates: ExchangeRates | undefined
): number => {
  if (!rates || targetCurrency === 'USD') {
    return priceUSD;
  }

  const rate = rates[targetCurrency];
  if (!rate) {
    return priceUSD;
  }

  return Number((priceUSD * rate).toFixed(2));
};

export const getCurrencySymbol = (currency: Currency): string => {
  const symbols: Record<Currency, string> = {
    USD: '$',
    EUR: '€',
    RUB: '₽',
    TND: 'د.ت',
    IRR: '﷼',
    IQD: 'ع.د',
    SYP: '£S',
    CUP: '$',
    VES: 'Bs.',
  };
  return symbols[currency] || '$';
};
