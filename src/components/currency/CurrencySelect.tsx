import React from 'react';
import { Currency } from '../../types';
import { SUPPORTED_CURRENCIES } from '../../config/constants';

interface Props {
  value: Currency;
  onChange: (value: Currency) => void;
  label: string;
  className?: string;
}

export default function CurrencySelect({ value, onChange, label, className = '' }: Props) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Currency)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {SUPPORTED_CURRENCIES.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}