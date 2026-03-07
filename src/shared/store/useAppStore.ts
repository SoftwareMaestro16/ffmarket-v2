import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Currency, Language } from '../types';

interface AppState {
  currency: Currency;
  language: Language;
  setCurrency: (currency: Currency) => void;
  setLanguage: (language: Language) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currency: 'USD',
      language: 'en',
      setCurrency: (currency) => set({ currency }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'ffmarket-storage',
    }
  )
);
