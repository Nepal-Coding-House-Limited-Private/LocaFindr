import * as React from 'react';
import { useState, useEffect } from 'react';
import Overview from '../Dashboard/Overview';
import UserTracker from '../Dashboard/UserTracker';
import Insights from '../Dashboard/Insights';
import ProMode from '../Dashboard/ProMode';
import Payment from '../Dashboard/Payment';
import Store from '../Dashboard/Store';
import Web from '../Dashboard/Web';
import Plugins from '../Dashboard/Plugins';
import { Menu, X, DollarSign, Search } from 'lucide-react';

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [today, setToday] = useState(formatDate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(formatDate(new Date()));
    }, 60 * 1000); // every minute

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { key: 'overview', label: 'Overview', emoji: '🏠' },
    { key: 'userTracker', label: 'User Tracker', emoji: '🧭' },
    { key: 'insights', label: 'Insights', emoji: '📈' },
    { key: 'proMode', label: 'Pro Mode', emoji: '✨' },
    { key: 'payment', label: 'Payment', emoji: '💰' },
    { key: 'store', label: 'Store', emoji: '🛍️' },
    { key: 'web', label: 'Web', emoji: '🌍' },
    { key: 'plugins', label: 'Plugins', emoji: '🧩' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 font-sans flex flex-col md:flex-row relative">

      {/* Mobile Navbar */}
      <div className="p-4 flex items-center justify-between md:hidden">
        <h1 className="text-xl font-semibold text-blue-800">📊 Dashboard</h1>
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6 text-blue-800" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-5 z-40 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex md:flex-col border-r border-blue-100`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-xl font-bold text-blue-700">📊 Dashboard</h1>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 p-2 rounded-md text-base font-medium tracking-wide
                ${activeTab === tab.key ? 'text-blue-700 font-bold' : 'text-gray-600'}`}
            >
              <span className="text-xl">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 flex flex-col overflow-auto min-h-screen">
        {/* Greeting */}
        <section className="mb-8 max-w-full">
          <h2 className="text-2xl font-bold text-gray-800">
            Good Morning, Abhaya Bikram Shahi 👋
          </h2>
          <p className="text-sm text-gray-500">Here are your stats for today, {today}</p>
        </section>

        {/* Stats Box Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-full">
          <div className="bg-white p-5 rounded-2xl shadow border border-gray-100 flex items-center gap-4 min-h-[120px]">
            <div className="bg-blue-100 p-3 rounded-full">
              <DollarSign className="text-blue-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-600">Revenue</h4>
              <p className="text-xl font-bold text-gray-900">रू 0</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow border border-gray-100 flex items-center gap-4 min-h-[120px]">
            <div className="bg-pink-100 p-3 rounded-full">
              <Search className="text-pink-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-600">Searches</h4>
              <p className="text-xl font-bold text-gray-900">0%</p>
              <p className="text-xs text-gray-400">+0.00% from last Wednesday</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow border border-gray-100 flex items-center gap-4 min-h-[120px]">
            <div className="bg-purple-100 p-3 rounded-full">
              <Search className="text-purple-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-600">Avg. Search Value</h4>
              <p className="text-xl font-bold text-gray-900">0%</p>
              <p className="text-xs text-gray-400">+0.00% from last Wednesday</p>
            </div>
          </div>
        </section>

        {/* Dynamic Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex-grow min-h-[400px] overflow-auto max-w-full">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'userTracker' && <UserTracker />}
          {activeTab === 'insights' && <Insights />}
          {activeTab === 'proMode' && <ProMode />}
          {activeTab === 'payment' && <Payment />}
          {activeTab === 'store' && <Store />}
          {activeTab === 'web' && <Web />}
          {activeTab === 'plugins' && <Plugins />}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
