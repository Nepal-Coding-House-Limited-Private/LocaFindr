import React from 'react';

const Overview: React.FC = () => {
  // Sample data (replace with real data or props as needed)
  const userData = {
    totalUsers: 1250,
    activeUsers: 320,
    newUsers: 45,
    sessionDuration: '6m 32s',
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-700">{userData.totalUsers}</span>
          <span className="text-gray-600 mt-2">Total Users</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center">
          <span className="text-3xl font-bold text-green-700">{userData.activeUsers}</span>
          <span className="text-gray-600 mt-2">Active Users</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-700">{userData.newUsers}</span>
          <span className="text-gray-600 mt-2">New Users (24h)</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center">
          <span className="text-3xl font-bold text-pink-700">{userData.sessionDuration}</span>
          <span className="text-gray-600 mt-2">Avg. Session Duration</span>
        </div>
      </div>
      {/* You can add more summary or charts here if needed */}
    </div>
  );
};

export default Overview;
