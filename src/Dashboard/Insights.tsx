import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Insights: React.FC = () => {
  const insightsData = {
    topLocation: 'Nepal',
    pageViews: 15432,
    bounceRate: '28%',
    conversionRate: '3.2%',
  };

  // Data for charts
  const pageViewsData = [1200, 1800, 1500, 2000, 1700, 2200, 2100];
  const conversionRateData = [2.1, 2.5, 2.3, 3.0, 3.2, 3.1, 3.4];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const barData = {
    labels,
    datasets: [
      {
        label: 'Page Views',
        data: pageViewsData,
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderRadius: 8,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#64748b' } },
      x: { ticks: { color: '#64748b' } },
    },
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Conversion Rate (%)',
        data: conversionRateData,
        borderColor: '#a855f7',
        backgroundColor: 'rgba(168, 85, 247, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#a855f7',
        pointRadius: 5,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: { callbacks: { label: (ctx: any) => `${ctx.parsed.y}%` } },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#a855f7' } },
      x: { ticks: { color: '#a855f7' } },
    },
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg ">
          <h3 className="text-lg font-medium">Top Location</h3>
          <p className="text-2xl">{insightsData.topLocation}</p>
        </div>
        <div className="bg-white p-4 rounded-lg ">
          <h3 className="text-lg font-medium">Page Views</h3>
          <p className="text-2xl">{insightsData.pageViews}</p>
        </div>
        <div className="bg-white p-4 rounded-lg ">
          <h3 className="text-lg font-medium">Bounce Rate</h3>
          <p className="text-2xl">{insightsData.bounceRate}</p>
        </div>
        <div className="bg-white p-4 rounded-lg ">
          <h3 className="text-lg font-medium">Conversion Rate</h3>
          <p className="text-2xl">{insightsData.conversionRate}</p>
        </div>
      </div>
      {/* Real Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Page Views Bar Graph */}
        <div className="bg-white p-6 flex flex-col items-center w-full">
          <h4 className="font-semibold mb-4">Page Views (Last 7 Days)</h4>
          <Bar data={barData} options={barOptions} className="w-full h-40" />
        </div>
        {/* Conversion Rate Line Graph */}
        <div className="bg-white p-6 flex flex-col items-center w-full">
          <h4 className="font-semibold mb-4">Conversion Rate (%)</h4>
          <Line data={lineData} options={lineOptions} className="w-full h-40" />
        </div>
      </div>
    </div>
  );
};

export default Insights;
