import { Transaction } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  transactions: Transaction[];
  allTransactions: Transaction[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function Dashboard({ transactions, allTransactions }: Props) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalAllExpenses = allTransactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netBalance = totalIncome - totalExpense;

  const allExpensesByCategory = allTransactions
    .filter((t) => t.type === 'expense')
    .reduce((acc: { [key: string]: number }, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const currentExpensesByCategory = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc: { [key: string]: number }, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const pieData = Object.entries(allExpensesByCategory).map(([name, totalValue]) => ({
    name,
    value: totalValue,
    displayValue: currentExpensesByCategory[name] || 0,
    percent: ((currentExpensesByCategory[name] || 0) / totalAllExpenses) * 100
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-md col-span-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-green-600">Total Income</p>
                <p className="text-2xl font-semibold text-green-900">${totalIncome.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center">
              <TrendingDown className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-red-600">Total Expenses</p>
                <p className="text-2xl font-semibold text-red-900">${totalExpense.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-600">Net Balance</p>
                <p className="text-2xl font-semibold text-blue-900">${netBalance.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md col-span-2 md:col-span-1"
      >
        <h2 className="text-xl font-bold mb-4">Expenses by Category</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => 
                  percent > 0 ? `${name} (${percent.toFixed(0)}%)` : ''
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    opacity={pieData[index].displayValue > 0 ? 1 : 0.3}
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(_, name, entry) => [
                  entry.payload.displayValue.toFixed(2),
                  name
                ]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}