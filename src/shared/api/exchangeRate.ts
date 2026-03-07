import axios from 'axios';
import { EXCHANGE_RATE_API } from '../config/constants';
import type { ExchangeRates } from '../types';

export interface ExchangeRateResponse {
  base: string;
  date: string;
  rates: ExchangeRates;
}

export const fetchExchangeRates = async (): Promise<ExchangeRateResponse> => {
  const { data } = await axios.get<ExchangeRateResponse>(EXCHANGE_RATE_API);
  return data;
};
