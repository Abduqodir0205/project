import React, { useState } from 'react';
import { Transaction, Currency } from '../types';
import { PlusCircle } from 'lucide-react';
import { SUPPORTED_CURRENCIES } from '../config/constants';
import { motion } from 'framer-motion';

interface Props {
  onAddTransaction: (transaction: Transaction) => void;
}

export default function TransactionForm({ onAddTransaction }: Props) {
  const [formData, setFormData] = useState({
    amount: '',
    currency: 'USD' as Currency,
    category: '',
    type: 'expense' as 'income' | 'expense',
    note: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    
    const transaction: Transaction = {
      id: Date.now().toString(),
      userId: userData.id,
      amount: parseFloat(formData.amount),
      currency: formData.currency,
      category: formData.category,
      type: formData.type,
      date: new Date().toISOString(),
      note: formData.note,
    };
    onAddTransaction(transaction);
    setFormData({
      amount: '',
      currency: 'USD',
      category: '',
      type: 'expense',
      note: '',
    });
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            required
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Currency</label>
          <select
            value={formData.currency}
            onChange={(e) => setFormData({ ...formData, currency: e.target.value as Currency })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {SUPPORTED_CURRENCIES.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            required
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Food, Transport"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as 'income' | 'expense' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Note</label>
          <textarea
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={2}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Transaction
      </button>
    </motion.form>
  );
}