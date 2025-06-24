import React from 'react';

const Store: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Store</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <p>Browse and manage your store products.</p>
      <ul className="list-disc pl-5">
        <li>Add and edit products</li>
        <li>Track sales and inventory</li>
        <li>Analyze product performance</li>
      </ul>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Manage Store
      </button>
    </div>
  </div>
);

export default Store;
