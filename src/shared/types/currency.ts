export type Currency = 
  | 'USD' 
  | 'EUR' 
  | 'RUB' 
  | 'TND' // Tunisian Dinar
  | 'IRR' // Iranian Rial
  | 'IQD' // Iraqi Dinar
  | 'SYP' // Syrian Pound
  | 'CUP' // Cuban Peso
  | 'VES'; // Venezuelan Bolívar

export type Language = 
  | 'en' 
  | 'ru' 
  | 'fr' 
  | 'ar' // Fusha Arabic
  | 'ar-TN' // Tunisian Arabic
  | 'fa' // Persian (Iran)
  | 'ar-IQ' // Iraqi Arabic
  | 'ar-SY'; // Syrian Arabic

export interface ExchangeRates {
  [key: string]: number;
}
