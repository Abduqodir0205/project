import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import CurrencyConverter from './CurrencyConverter';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import TransactionFilters from './TransactionFilters';
import ExchangeRateDisplay from './ExchangeRateDisplay';
import { Transaction } from '../types';
import { loadTransactions, saveTransactions } from '../utils/storage';

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    category: '',
  });

  useEffect(() => {
    const savedTransactions = loadTransactions();
    setTransactions(savedTransactions);
  }, []);

  // ... остальные функции из старого App.tsx ...

  const filteredTransactions = transactions.filter(transaction => {
    const date = new Date(transaction.date);
    const startDate = filters.startDate ? new Date(filters.startDate) : null;
    const endDate = filters.endDate ? new Date(filters.endDate) : null;

    const matchesDateRange = 
      (!startDate || date >= startDate) &&
      (!endDate || date <= endDate);

    const matchesCategory = 
      !filters.category || transaction.category === filters.category;

    return matchesDateRange && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ... остальной JSX из старого App.tsx ... */}
      <Dashboard 
        transactions={filteredTransactions}
        allTransactions={transactions}
      />
    </div>
  );
} 