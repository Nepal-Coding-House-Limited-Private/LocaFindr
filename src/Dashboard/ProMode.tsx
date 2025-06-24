import React from 'react';

const ProMode: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Pro Mode</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <p>Unlock advanced features with Pro Mode subscription.</p>
      <ul className="list-disc pl-5">
        <li>Advanced analytics and custom reports</li>
        <li>Priority support</li>
        <li>Exclusive access to premium plugins</li>
      </ul>
      <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Upgrade to Pro
      </button>
    </div>
  </div>
);

export default ProMode;
