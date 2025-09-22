import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Activity, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Eye,
  MousePointer,
  Clock,
  Target
} from 'lucide-react';

const Overview: React.FC = () => {
  // Sample data (replace with real data or props as needed)
  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: <Users className="w-5 h-5" />,
      color: 'blue'
    },
    {
      title: 'Active Users',
      value: '3,284',
      change: '+8.2%',
      changeType: 'positive',
      icon: <Activity className="w-5 h-5" />,
      color: 'green'
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+23.1%',
      changeType: 'positive',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'purple'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-1.2%',
      changeType: 'negative',
      icon: <Target className="w-5 h-5" />,
      color: 'orange'
    }
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Added new product', time: '2 minutes ago', type: 'product' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '5 minutes ago', type: 'profile' },
    { id: 3, user: 'Mike Johnson', action: 'Completed payment', time: '10 minutes ago', type: 'payment' },
    { id: 4, user: 'Sarah Wilson', action: 'Downloaded report', time: '15 minutes ago', type: 'report' },
  ];

  const quickMetrics = [
    { label: 'Page Views', value: '2.4M', icon: <Eye className="w-4 h-4" /> },
    { label: 'Clicks', value: '847K', icon: <MousePointer className="w-4 h-4" /> },
    { label: 'Avg. Session', value: '4m 32s', icon: <Clock className="w-4 h-4" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                <div className={`text-${stat.color}-600`}>
                  {stat.icon}
                </div>
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.changeType === 'positive' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Analytics Overview</h3>
              <p className="text-sm text-gray-600">Last 30 days performance</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                This Month
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                Last Month
              </button>
            </div>
          </div>
          
          {/* Placeholder for Chart */}
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Chart Component</p>
              <p className="text-sm text-gray-500">Integration with react-chartjs-2</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Metrics */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Metrics</h3>
          <div className="space-y-4">
            {quickMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <div className="text-gray-600">
                      {metric.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{metric.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-blue-600">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Performance Summary */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Performance</h3>
            <TrendingUp className="w-6 h-6" />
          </div>
          <p className="text-3xl font-bold mb-2">98.2%</p>
          <p className="text-blue-100">System uptime this month</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Growth</h3>
            <ArrowUpRight className="w-6 h-6" />
          </div>
          <p className="text-3xl font-bold mb-2">+24.5%</p>
          <p className="text-green-100">User growth this quarter</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Overview;
