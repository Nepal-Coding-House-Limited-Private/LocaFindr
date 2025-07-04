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
import AddProduct from './AddProduct';
import ViewReports from './ViewReports';
import SearchResults from './Search';
import { Menu, DollarSign, Search } from 'lucide-react';
import UserAvatar from '../components/UserAvatar'; // Adjust the import path as necessary
import Logo from '../assets/Logo.png'; // Add your logo path
import { Bell, Settings, LogOut } from 'lucide-react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

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
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true); // Sidebar open by default
  const [today, setToday] = useState(formatDate(new Date()));
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showViewReports, setShowViewReports] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(formatDate(new Date()));
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { key: 'overview', label: 'Overview', emoji: '🏠', icon: <Menu className="w-5 h-5" /> },
    { key: 'userTracker', label: 'User Tracker', emoji: '🧭', icon: <Search className="w-5 h-5" /> },
    { key: 'insights', label: 'Insights', emoji: '📈', icon: <DollarSign className="w-5 h-5" /> },
    { key: 'proMode', label: 'Pro Mode', emoji: '✨', icon: <Menu className="w-5 h-5" /> },
    { key: 'payment', label: 'Payment', emoji: '💰', icon: <DollarSign className="w-5 h-5" /> },
    { key: 'store', label: 'Store', emoji: '🛍️', icon: <Menu className="w-5 h-5" /> },
    { key: 'web', label: 'Web', emoji: '🌍', icon: <Menu className="w-5 h-5" /> },
    { key: 'plugins', label: 'Plugins', emoji: '🧩', icon: <Menu className="w-5 h-5" /> },
  ];

  // Determine active tab from route
  const tabRoutes = [
    { key: 'overview', label: 'Overview', emoji: '🏠', path: 'overview', component: <Overview /> },
    { key: 'userTracker', label: 'User Tracker', emoji: '🧭', path: 'user-tracker', component: <UserTracker /> },
    { key: 'insights', label: 'Insights', emoji: '📈', path: 'insights', component: <Insights /> },
    { key: 'proMode', label: 'Pro Mode', emoji: '✨', path: 'pro-mode', component: <ProMode /> },
    { key: 'payment', label: 'Payment', emoji: '💰', path: 'payment', component: <Payment /> },
    { key: 'store', label: 'Store', emoji: '🛍️', path: 'store', component: <Store /> },
    { key: 'web', label: 'Web', emoji: '🌍', path: 'web', component: <Web /> },
    { key: 'plugins', label: 'Plugins', emoji: '🧩', path: 'plugins', component: <Plugins /> },
    { key: 'search', label: 'Search', emoji: '🔍', path: 'search', component: <SearchResults /> },
  ];

  // Get current tab from path
  const currentTab = tabRoutes.find(tab => location.pathname.endsWith(tab.path))?.key || 'overview';

  return (
    <div className="min-h-screen font-sans flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded hover:bg-blue-100 transition"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-blue-700" />
          </button>
          <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full shadow" />
          <span className="text-xl font-bold text-blue-800 tracking-tight hidden md:inline">Info Getter</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-blue-100 transition" aria-label="Notifications">
            <Bell className="w-5 h-5 text-blue-700" />
          </button>
          <button className="p-2 rounded-full hover:bg-blue-100 transition" aria-label="Settings">
            <Settings className="w-5 h-5 text-blue-700" />
          </button>
          <button className="p-2 rounded-full hover:bg-blue-100 transition" aria-label="Logout">
            <LogOut className="w-5 h-5 text-blue-700" />
          </button>
          <UserAvatar name="Abhaya Bikram Shahi" size={40} />
        </div>
      </header>

      <div className="flex flex-1 min-h-0 relative">
        {/* Sidebar */}
        <aside
          className={`transition-all duration-300 ease-in-out bg-white border-r border-blue-100 shadow-lg
            ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}
            fixed md:static z-40 h-full md:h-auto top-0 left-0 flex flex-col`}
          style={{ minWidth: sidebarOpen ? 256 : 0 }}
        >
          <div className="flex flex-col items-center gap-2 py-6 border-b border-blue-50 bg-gradient-to-b from-blue-50 to-white relative">
            {/* Logo image removed as requested */}
            <span className="font-bold text-blue-800 text-lg leading-tight">Info Getter</span>
            <span className="text-xs text-blue-500 font-medium">Pro User</span>
            <button
              className="absolute top-4 right-4 md:hidden p-2 rounded hover:bg-blue-100 transition"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <Menu className="w-5 h-5 text-blue-700 rotate-90" />
            </button>
            {/* Desktop close button */}
            <button
              className="hidden md:block absolute top-4 right-4 p-2 rounded hover:bg-blue-100 transition"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <Menu className="w-5 h-5 text-blue-700 rotate-90" />
            </button>
          </div>
          {/* Sidebar nav with routing */}
          <nav className="flex-1 flex flex-col gap-0.5 px-2 py-4">
            {tabRoutes.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  navigate(`/dashboard/${tab.path}`);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-base font-medium tracking-wide transition-colors
                  ${currentTab === tab.key ? 'bg-blue-100 text-blue-700 font-bold border-l-4 border-blue-600' : 'text-gray-600 hover:bg-blue-50'}`}
                aria-label={tab.label}
              >
                <span className="text-lg">{tab.emoji}</span>
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Floating open sidebar button */}
        {!sidebarOpen && (
          <button
            className="fixed left-2 top-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition md:left-4 md:top-8"
            style={{ transform: 'translateY(-50%)' }}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Main Content */}
        <main
          className={`transition-all duration-300 ease-in-out flex-1 min-h-screen p-4 md:p-10
            bg-gradient-to-br from-white to-blue-50`}
        >
          {/* Greeting & Quick Actions */}
          <section className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Good Morning, Abhaya Bikram Shahi 👋
              </h2>
              <p className="text-sm text-gray-500">Here are your stats for today, {today}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                onClick={() => setShowAddProduct(true)}
              >
                Add Product
              </button>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                onClick={() => setShowViewReports(true)}
              >
                View Reports
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition">Upgrade Plan</button>
            </div>
          </section>

          {/* Modals for Add Product and View Reports */}
          {showAddProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
              <div className="relative bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full mx-4 my-20 animate-modalIn">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
                  onClick={() => setShowAddProduct(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <AddProduct />
              </div>
            </div>
          )}
          {showViewReports && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
              <div className="relative bg-white rounded-xl shadow-2xl p-6 max-w-3xl w-full mx-4 my-20 animate-modalIn">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
                  onClick={() => setShowViewReports(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <ViewReports />
              </div>
            </div>
          )}

          {/* Stats Box Grid */}
          {/* Removed stat cards as requested */}

          {/* Dynamic Section with nested routes */}
          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex-grow min-h-[400px] overflow-auto max-w-full">
            <Routes>
              <Route path="" element={<Navigate to="overview" replace />} />
              {tabRoutes.map(tab => (
                <Route key={tab.key} path={tab.path} element={tab.component} />
              ))}
            </Routes>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
