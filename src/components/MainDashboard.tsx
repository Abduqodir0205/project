import { useState, useEffect } from 'react';
import { Wallet, LogOut } from 'lucide-react';
import Dashboard from './Dashboard';
import CurrencyConverter from './CurrencyConverter';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import TransactionFilters from './TransactionFilters';
import ExchangeRateDisplay from './ExchangeRateDisplay';
import { Transaction } from '../types';
import { loadTransactions, saveTransactions } from '../utils/storage';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function MainDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    category: '',
  });

  // Get current user data
  const userData = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = userData.id;

  useEffect(() => {
    const savedTransactions = loadTransactions(userId);
    setTransactions(savedTransactions);
  }, [userId]);

  const handleAddTransaction = (transaction: Transaction) => {
    const newTransaction = {
      ...transaction,
      userId // Add user ID to transaction
    };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    saveTransactions(userId, updatedTransactions);
  };

  const handleDeleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
    saveTransactions(userId, updatedTransactions);
  };

  const categories = Array.from(new Set(transactions.map(t => t.category)));

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

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">Personal Finance Manager</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-900"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <ExchangeRateDisplay />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyConverter />
            <TransactionForm onAddTransaction={handleAddTransaction} />
          </div>
          
          <Dashboard 
            transactions={filteredTransactions}
            allTransactions={transactions}
          />
          
          <TransactionFilters 
            onFilterChange={setFilters}
            categories={categories}
          />
          
          <TransactionList
            transactions={filteredTransactions}
            onDeleteTransaction={handleDeleteTransaction}
          />
        </div>
      </main>
    </div>
  );
} 