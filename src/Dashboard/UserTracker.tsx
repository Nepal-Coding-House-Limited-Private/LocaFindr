import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Clock, 
  MapPin, 
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  User,
  Users,
  Activity,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const UserTracker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Sample user data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      status: 'online',
      lastActivity: '2 minutes ago',
      location: 'New York, US',
      device: 'Desktop',
      pageViews: 45,
      sessionTime: '12m 34s',
      avatar: 'JD',
      ip: '192.168.1.1',
      userAgent: 'Chrome/91.0.4472.124'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'online',
      lastActivity: '5 minutes ago',
      location: 'London, UK',
      device: 'Mobile',
      pageViews: 23,
      sessionTime: '8m 12s',
      avatar: 'JS',
      ip: '192.168.1.2',
      userAgent: 'Safari/14.1.1'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      status: 'offline',
      lastActivity: '1 hour ago',
      location: 'Toronto, CA',
      device: 'Tablet',
      pageViews: 67,
      sessionTime: '25m 8s',
      avatar: 'MJ',
      ip: '192.168.1.3',
      userAgent: 'Firefox/89.0'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      status: 'online',
      lastActivity: '1 minute ago',
      location: 'Sydney, AU',
      device: 'Desktop',
      pageViews: 89,
      sessionTime: '18m 45s',
      avatar: 'SW',
      ip: '192.168.1.4',
      userAgent: 'Chrome/91.0.4472.124'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@example.com',
      status: 'busy',
      lastActivity: '30 minutes ago',
      location: 'Berlin, DE',
      device: 'Mobile',
      pageViews: 34,
      sessionTime: '15m 22s',
      avatar: 'DB',
      ip: '192.168.1.5',
      userAgent: 'Safari/14.1.1'
    }
  ];

  const stats = [
    {
      title: 'Active Users',
      value: '1,247',
      change: '+12.5%',
      changeType: 'positive',
      icon: <Users className="w-5 h-5" />,
      color: 'blue'
    },
    {
      title: 'Total Sessions',
      value: '3,891',
      change: '+8.2%',
      changeType: 'positive',
      icon: <Activity className="w-5 h-5" />,
      color: 'green'
    },
    {
      title: 'Avg. Session Time',
      value: '14m 32s',
      change: '+5.1%',
      changeType: 'positive',
      icon: <Clock className="w-5 h-5" />,
      color: 'purple'
    },
    {
      title: 'Bounce Rate',
      value: '23.4%',
      change: '-2.1%',
      changeType: 'positive',
      icon: <ArrowDownRight className="w-5 h-5" />,
      color: 'orange'
    }
  ];

  const deviceStats = [
    { device: 'Desktop', users: 45, percentage: 45, icon: <Monitor className="w-4 h-4" /> },
    { device: 'Mobile', users: 35, percentage: 35, icon: <Smartphone className="w-4 h-4" /> },
    { device: 'Tablet', users: 20, percentage: 20, icon: <Tablet className="w-4 h-4" /> },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-gray-400';
      case 'busy': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'desktop': return <Monitor className="w-4 h-4" />;
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'tablet': return <Tablet className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {/* Stats Overview */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
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
          </div>
        ))}
      </motion.div>

      {/* Search and Filters */}
      <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Users</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="busy">Busy</option>
            </select>
          </div>
        </div>

        {/* Device Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {deviceStats.map((device) => (
            <div key={device.device} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <div className="text-gray-600">
                  {device.icon}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{device.device}</p>
                <p className="text-xs text-gray-600">{device.users} users ({device.percentage}%)</p>
              </div>
            </div>
          ))}
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Device</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Page Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Session Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Activity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">{user.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`}></div>
                      <span className="text-sm text-gray-700 capitalize">{user.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="text-gray-600">
                        {getDeviceIcon(user.device)}
                      </div>
                      <span className="text-sm text-gray-700">{user.device}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{user.location}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-gray-900">{user.pageViews}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-700">{user.sessionTime}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{user.lastActivity}</span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Real-time Activity Feed */}
      <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Real-time Activity</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {users.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">{user.avatar}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-600">Last activity: {user.lastActivity}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`}></div>
                <span className="text-xs text-gray-600 capitalize">{user.status}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserTracker;
