import { useExchangeRates } from '../hooks/useExchangeRates';
import { SUPPORTED_CURRENCIES } from '../config/constants';

export default function ExchangeRateDisplay() {
  const { rates, loading, error } = useExchangeRates('USD');

  if (loading) {
    return <div className="text-gray-600">Загрузка курсов валют...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Current Exchange Rates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SUPPORTED_CURRENCIES.map((currency) => (
          <div key={currency} className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">1 USD =</div>
            <div className="text-2xl font-bold text-blue-600">
              {rates[currency]?.toFixed(2)} {currency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 