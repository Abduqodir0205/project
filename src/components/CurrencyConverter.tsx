import { useState } from 'react';
import { Currency } from '../types';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { convertCurrency } from '../utils/currency';
import { ArrowRightLeft } from 'lucide-react';
import CurrencySelect from './currency/CurrencySelect';
import { motion } from 'framer-motion';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD');
  const [toCurrency, setToCurrency] = useState<Currency>('UZS');
  const { rates, loading, error } = useExchangeRates('USD');

  const handleConvert = () => {
    if (!amount) return '';
    const baseAmount = parseFloat(amount);
    const converted = convertCurrency(baseAmount, fromCurrency, toCurrency, rates);
    return converted.toFixed(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
      {error && (
        <div className="mb-4 p-2 bg-yellow-50 border border-yellow-200 rounded text-yellow-700 text-sm">
          {error}
        </div>
      )}
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <CurrencySelect
            value={fromCurrency}
            onChange={setFromCurrency}
            label="From"
          />
        </div>
        <div className="flex justify-center">
          <ArrowRightLeft className="text-gray-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CurrencySelect
            value={toCurrency}
            onChange={setToCurrency}
            label="To"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700">Result</label>
            <div className="mt-1 block w-full p-2 bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              {loading ? 'Loading...' : `${handleConvert()} ${toCurrency}`}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}