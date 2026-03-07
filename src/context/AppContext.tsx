import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Currency = 'USD' | 'EUR' | 'RUB';
export type Language = 'en' | 'ru' | 'fr' | 'ar';

interface AppContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [language, setLanguage] = useState<Language>('en');

  return (
    <AppContext.Provider value={{ currency, setCurrency, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
