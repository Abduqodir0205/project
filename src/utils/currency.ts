import { Currency, ExchangeRates } from '../types';
import { EXCHANGE_RATE_API_KEY, DEFAULT_EXCHANGE_RATES } from '../config/constants';

export const fetchExchangeRates = async (baseCurrency: string): Promise<ExchangeRates> => {
  if (!EXCHANGE_RATE_API_KEY) {
    console.warn('No API key provided for exchange rates. Using fallback rates.');
    return DEFAULT_EXCHANGE_RATES;
  }

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/latest/${baseCurrency}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.conversion_rates) {
      throw new Error('Invalid API response format');
    }

    return {
      USD: data.conversion_rates.USD,
      EUR: data.conversion_rates.EUR,
      UZS: data.conversion_rates.UZS,
    };
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return DEFAULT_EXCHANGE_RATES;
  }
};

export const convertCurrency = (
  amount: number,
  fromCurrency: Currency,
  toCurrency: Currency,
  rates: ExchangeRates
): number => {
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];
  return (amount * toRate) / fromRate;
};