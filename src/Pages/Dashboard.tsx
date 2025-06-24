import * as React from 'react';
    import { useState } from 'react';
    import Overview from '../Dashboard/Overview';
    import UserTracker from '../Dashboard/UserTracker';
    import Insights from '../Dashboard/Insights';
    import ProMode from '../Dashboard/ProMode';
    import Payment from '../Dashboard/Payment';
    import Store from '../Dashboard/Store';
    import Web from '../Dashboard/Web';
    import Plugins from '../Dashboard/Plugins';

    // Main Dashboard Component
    const Dashboard: React.FC = () => {
      const [activeTab, setActiveTab] = useState<string>('overview');

      // Navigation tabs with emojis
      const tabs: { key: string; label: string; emoji: string }[] = [
        { key: 'overview', label: 'Overview', emoji: '🏠' },
        { key: 'userTracker', label: 'User Tracker', emoji: '👀' },
        { key: 'insights', label: 'Insights', emoji: '📊' },
        { key: 'proMode', label: 'Pro Mode', emoji: '🚀' },
        { key: 'payment', label: 'Payment', emoji: '💳' },
        { key: 'store', label: 'Store', emoji: '🛒' },
        { key: 'web', label: 'Web', emoji: '🌐' },
        { key: 'plugins', label: 'Plugins', emoji: '🔌' },
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 flex">
          {/* Sidebar */}
          <aside className="w-52 bg-white shadow-md h-screen p-4 flex flex-col rounded-tr-2xl rounded-br-2xl border-r border-blue-100">
            {/* Sidebar Navigation Only, no profile */}
            <nav className="space-y-1 flex-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center gap-2 text-left p-2 rounded-md transition-all duration-200 font-medium text-base ${
                    activeTab === tab.key
                      ? 'bg-blue-50 text-blue-700 scale-105 shadow'
                      : 'hover:bg-blue-50 text-gray-700'
                  }`}
                >
                  <span className="text-xl">
                    {(() => {
                      switch(tab.key) {
                        case 'overview': return '🏠';
                        case 'userTracker': return '🧭';
                        case 'insights': return '📈';
                        case 'proMode': return '✨';
                        case 'payment': return '💰';
                        case 'store': return '🛍️';
                        case 'web': return '🌍';
                        case 'plugins': return '🧩';
                        default: return '❓';
                      }
                    })()}
                  </span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-10 flex flex-col">
            {/* Sweet welcome banner */}
            <div className="mb-8 bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 rounded-2xl shadow-lg p-8 flex items-center gap-4 animate-fade-in">
              <span className="text-4xl">👋</span>
              <div>
                <h2 className="text-2xl font-extrabold text-blue-800 mb-1">Welcome back, Loca User!</h2>
                <p className="text-gray-600">Here's your dashboard overview. Have a sweet day! 🍬</p>
              </div>
            </div>
            {/* Main dashboard content */}
            <div className="flex-1">
              {activeTab === 'overview' && <Overview />}
              {activeTab === 'userTracker' && <UserTracker />}
              {activeTab === 'insights' && <Insights />}
              {activeTab === 'proMode' && <ProMode />}
              {activeTab === 'payment' && <Payment />}
              {activeTab === 'store' && <Store />}
              {activeTab === 'web' && <Web />}
              {activeTab === 'plugins' && <Plugins />}
            </div>
          </main>
        </div>
      );
    };

    export default Dashboard;
