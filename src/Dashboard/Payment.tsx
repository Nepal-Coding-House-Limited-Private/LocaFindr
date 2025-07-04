import React from 'react';

const Payment: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Payment Center</h2>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow p-6 mb-8 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Transactions</h3>
          <ul className="divide-y divide-gray-200">
            <li className="py-2 flex justify-between items-center">
              <span className="text-gray-600">Invoice #12345</span>
              <span className="text-green-600 font-bold">Paid</span>
              <span className="text-gray-500 text-sm">₹2,500</span>
            </li>
            <li className="py-2 flex justify-between items-center">
              <span className="text-gray-600">Invoice #12344</span>
              <span className="text-yellow-600 font-bold">Pending</span>
              <span className="text-gray-500 text-sm">₹1,200</span>
            </li>
            <li className="py-2 flex justify-between items-center">
              <span className="text-gray-600">Invoice #12343</span>
              <span className="text-red-600 font-bold">Failed</span>
              <span className="text-gray-500 text-sm">₹800</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition w-full">Manage Payments</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition w-full">View All Transactions</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <h4 className="text-lg font-semibold mb-2 text-gray-700">Payment Methods</h4>
        <ul className="flex gap-4">
          <li className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Visa</li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Mastercard</li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Esewa</li>
          <li className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Khalti</li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
