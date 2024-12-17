import { useState, useEffect } from 'react';
import { ExchangeRates } from '../types';
import { fetchExchangeRates } from '../utils/currency';
import { DEFAULT_EXCHANGE_RATES } from '../config/constants';

export function useExchangeRates(baseCurrency: string) {
  const [rates, setRates] = useState<ExchangeRates>(DEFAULT_EXCHANGE_RATES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadRates = async () => {
      try {
        const newRates = await fetchExchangeRates(baseCurrency);
        if (mounted) {
          setRates(newRates);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch exchange rates. Using fallback rates.');
          console.error('Error loading exchange rates:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadRates();

    return () => {
      mounted = false;
    };
  }, [baseCurrency]);

  return { rates, loading, error };
}