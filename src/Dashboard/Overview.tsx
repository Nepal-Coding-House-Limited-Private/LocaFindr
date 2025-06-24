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
    <div>
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-2xl">{userData.totalUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Active Users</h3>
          <p className="text-2xl">{userData.activeUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">New Users (24h)</h3>
          <p className="text-2xl">{userData.newUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Avg. Session Duration</h3>
          <p className="text-2xl">{userData.sessionDuration}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
