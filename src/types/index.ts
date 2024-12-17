import { SUPPORTED_CURRENCIES } from '../config/constants';

// Make Currency type from SUPPORTED_CURRENCIES array
export type Currency = typeof SUPPORTED_CURRENCIES[number];

export type Transaction = {
  id: string;
  userId: string;
  amount: number;
  currency: Currency;
  category: string;
  type: 'income' | 'expense';
  date: string;
  note: string;
};

export type ExchangeRates = Record<string, number>;