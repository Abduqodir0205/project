import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Personal Finance Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
              <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Take Control of Your Finances
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Track expenses, monitor income, and achieve your financial goals with our easy-to-use platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Expense Tracking</h3>
              <p className="text-gray-600">Monitor your spending across multiple categories</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Multi-Currency Support</h3>
              <p className="text-gray-600">Handle transactions in different currencies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Visual Analytics</h3>
              <p className="text-gray-600">Understand your finances with intuitive charts</p>
            </div>
          </div>
          <Link 
            to="/register" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Get Started Now
          </Link>
        </div>
      </main>
    </div>
  );
} 