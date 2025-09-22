import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import {
  Menu, DollarSign, Search, TrendingUp, Users, Activity, Zap, ShoppingCart, Globe, Puzzle,
  Bell, Settings, LogOut, ChevronDown, Plus, FileText, Crown
} from 'lucide-react';

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
import UserAvatar from '../components/UserAvatar';
import Logo from '../assets/Logo.png';

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [today, setToday] = useState<string>(() => formatDate(new Date()));
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showViewReports, setShowViewReports] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => setToday(formatDate(new Date())), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const tabRoutes = [
    { key: 'overview', label: 'Overview', path: 'overview', component: <Overview />, icon: <TrendingUp className="w-5 h-5" /> },
    { key: 'userTracker', label: 'User Tracker', path: 'user-tracker', component: <UserTracker />, icon: <Users className="w-5 h-5" /> },
    { key: 'insights', label: 'Insights', path: 'insights', component: <Insights />, icon: <Activity className="w-5 h-5" /> },
    { key: 'proMode', label: 'Pro Mode', path: 'pro-mode', component: <ProMode />, icon: <Zap className="w-5 h-5" /> },
    { key: 'payment', label: 'Payment', path: 'payment', component: <Payment />, icon: <DollarSign className="w-5 h-5" /> },
    { key: 'store', label: 'Store', path: 'store', component: <Store />, icon: <ShoppingCart className="w-5 h-5" /> },
    { key: 'web', label: 'Web', path: 'web', component: <Web />, icon: <Globe className="w-5 h-5" /> },
    { key: 'plugins', label: 'Plugins', path: 'plugins', component: <Plugins />, icon: <Puzzle className="w-5 h-5" /> },
  ];

  const currentTab = tabRoutes.find(tab => location.pathname.includes(tab.path))?.key || 'overview';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSidebarOpen(open => !open)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="h-8 w-8 rounded-lg shadow-sm" />
              <span className="text-xl font-semibold text-gray-900 hidden sm:inline">Info Getter</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <Search className="absolute right-2 top-2.5 w-5 h-5 text-gray-400 cursor-pointer" />
            </div>

            {/* Quick Actions */}
            <div className="hidden md:flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Plus className="w-4 h-4" /> Quick Add
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <FileText className="w-4 h-4" /> Reports
              </button>
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <UserAvatar name="Abhaya Bikram Shahi" size={32} />
                <span className="hidden md:block text-sm font-medium text-gray-700">Abhaya</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    key="user-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Abhaya Bikram Shahi</p>
                      <p className="text-xs text-gray-500">abhaya@example.com</p>
                    </div>
                    <div className="py-1">
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <Crown className="w-4 h-4" /> Pro Account
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile Settings</button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Billing</button>
                    </div>
                    <div className="border-t border-gray-100 pt-1">
                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              key="sidebar"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 shadow-sm lg:shadow-none"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">IG</span>
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">Info Getter</h2>
                      <p className="text-xs text-gray-500">Pro Plan</p>
                    </div>
                  </div>
                  <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setSidebarOpen(false)}>
                    <Menu className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                  {tabRoutes.map(tab => (
                    <motion.button
                      key={tab.key}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => navigate(`/dashboard/${tab.path}`)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                        ${currentTab === tab.key
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {!sidebarOpen && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed left-4 top-20 z-50 bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-lg shadow-lg border border-gray-200 transition-colors lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="p-6 lg:p-8">
            {/* Page Header */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {tabRoutes.find(tab => tab.key === currentTab)?.label}
                  </h1>
                  <p className="text-gray-600">Welcome back! Here's what's happening with your account today.</p>
                  <p className="text-xs text-gray-500 mt-1">{today}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setShowAddProduct(true)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors">
                    <Plus className="w-4 h-4" /> Add Product
                  </button>
                  <button onClick={() => setShowViewReports(true)} className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors">
                    <FileText className="w-4 h-4" /> View Reports
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <Routes>
                <Route path="" element={<Navigate to="overview" replace />} />
                {tabRoutes.map(tab => <Route key={tab.key} path={tab.path} element={tab.component} />)}
              </Routes>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showAddProduct && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Add New Product</h2>
                <button onClick={() => setShowAddProduct(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-2xl text-gray-500 hover:text-gray-700">&times;</span>
                </button>
              </div>
              <div className="p-6">
                <AddProduct />
              </div>
            </motion.div>
          </motion.div>
        )}

        {showViewReports && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">View Reports</h2>
                <button onClick={() => setShowViewReports(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-2xl text-gray-500 hover:text-gray-700">&times;</span>
                </button>
              </div>
              <div className="p-6">
                <ViewReports />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
