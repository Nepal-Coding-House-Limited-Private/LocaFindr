import React from 'react';

const Insights: React.FC = () => {
  const insightsData = {
    topLocation: 'New York',
    pageViews: 15432,
    bounceRate: '28%',
    conversionRate: '3.2%',
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Top Location</h3>
          <p className="text-2xl">{insightsData.topLocation}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Page Views</h3>
          <p className="text-2xl">{insightsData.pageViews}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Bounce Rate</h3>
          <p className="text-2xl">{insightsData.bounceRate}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Conversion Rate</h3>
          <p className="text-2xl">{insightsData.conversionRate}</p>
        </div>
      </div>
      {/* Simple Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Page Views Bar Graph */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <h4 className="font-semibold mb-4">Page Views (Last 7 Days)</h4>
          <div className="w-full h-40 flex items-end gap-2">
            {[1200, 1800, 1500, 2000, 1700, 2200, 2100].map((val, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className="bg-blue-400 rounded-t-lg"
                  style={{ height: `${val / 25}px`, width: '24px' }}
                ></div>
                <span className="text-xs mt-1 text-gray-500">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Conversion Rate Line Graph (simulated) */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <h4 className="font-semibold mb-4">Conversion Rate (%)</h4>
          <svg viewBox="0 0 200 80" className="w-full h-40">
            <polyline
              fill="none"
              stroke="#a855f7"
              strokeWidth="4"
              points="0,60 30,50 60,55 90,40 120,30 150,35 180,20"
            />
            {/* Dots */}
            {[60, 50, 55, 40, 30, 35, 20].map((y, i) => (
              <circle key={i} cx={i * 30} cy={y} r="4" fill="#a855f7" />
            ))}
          </svg>
          <div className="flex justify-between w-full text-xs text-gray-500 mt-2">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
