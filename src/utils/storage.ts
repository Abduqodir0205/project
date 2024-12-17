import { Transaction } from '../types';

export const loadTransactions = (userId: string): Transaction[] => {
  const transactions = localStorage.getItem(`transactions_${userId}`);
  return transactions ? JSON.parse(transactions) : [];
};

export const saveTransactions = (userId: string, transactions: Transaction[]) => {
  localStorage.setItem(`transactions_${userId}`, JSON.stringify(transactions));
};