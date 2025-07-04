import React from 'react';

const ViewReports: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">View Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-700">₹12,500</span>
          <span className="text-gray-600 mt-2">Total Sales</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-700">48</span>
          <span className="text-gray-600 mt-2">Products</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col items-center">
          <span className="text-3xl font-bold text-green-700">1,200</span>
          <span className="text-gray-600 mt-2">Users</span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-8 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Sales Overview</h2>
        {/* Placeholder for chart */}
        <div className="w-full h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          [Sales Chart Coming Soon]
        </div>
      </div>
    </div>
  );
};

export default ViewReports; 