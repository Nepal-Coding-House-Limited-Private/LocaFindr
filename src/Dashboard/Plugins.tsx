import React from 'react';

const Plugins: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Plugins</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <p>Extend functionality with Locafindr plugins.</p>
      <ul className="list-disc pl-5">
        <li>Integrate third-party tools</li>
        <li>Access analytics plugins like MonsterInsights</li>
        <li>Customizable plugin settings</li>
      </ul>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Browse Plugins
      </button>
    </div>
  </div>
);

export default Plugins;
