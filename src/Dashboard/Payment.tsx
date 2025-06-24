import React from 'react';

const Payment: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Payment</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <p>Manage your payment activities and view transaction history.</p>
      <ul className="list-disc pl-5">
        <li>Track payments and invoices</li>
        <li>View revenue trends</li>
        <li>Secure payment processing</li>
      </ul>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Transactions
      </button>
    </div>
  </div>
);

export default Payment;
