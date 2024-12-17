// API Configuration
export const EXCHANGE_RATE_API_KEY = 'b873ea70a41cd90774862bf2'; // Replace with your actual API key

// Currency Configuration
export const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'UZS'] as const;

// Chart Colors
export const CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'] as const;

// Default Currency Values (fallback when API fails)
export const DEFAULT_EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  UZS: 12500,
} as const;