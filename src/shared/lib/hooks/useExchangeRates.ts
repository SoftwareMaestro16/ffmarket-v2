import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates } from '../../api/exchangeRate';

export const useExchangeRates = () => {
  return useQuery({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchInterval: 1000 * 60 * 60, // Refetch every hour
  });
};
