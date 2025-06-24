import React from 'react';

const Web: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Web</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <p>Optimize your website performance and analytics.</p>
      <ul className="list-disc pl-5">
        <li>Track website traffic and sources</li>
        <li>Monitor SEO performance</li>
        <li>Integrate with Google Analytics</li>
      </ul>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Web Analytics
      </button>
    </div>
  </div>
);

export default Web;
