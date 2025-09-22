import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Zap, 
  Shield, 
  BarChart3, 
  Download, 
  Upload, 
  Settings, 
  Clock,
  CheckCircle,
  XCircle,
  Star,
  TrendingUp,
  Users,
  Activity,
  Globe,
  Lock,
  Unlock,
  Eye,
  EyeOff
} from 'lucide-react';

const ProMode: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const proFeatures = [
    {
      title: 'Advanced Analytics',
      description: 'Get detailed insights with custom reports and real-time data',
      icon: <BarChart3 className="w-6 h-6" />,
      status: 'active',
      color: 'blue'
    },
    {
      title: 'Unlimited Tracking',
      description: 'Track unlimited users and sessions without restrictions',
      icon: <Users className="w-6 h-6" />,
      status: 'active',
      color: 'green'
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Shield className="w-6 h-6" />,
      status: 'active',
      color: 'purple'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with your favorite tools and platforms',
      icon: <Globe className="w-6 h-6" />,
      status: 'inactive',
      color: 'orange'
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with SSO and 2FA',
      icon: <Lock className="w-6 h-6" />,
      status: 'active',
      color: 'red'
    },
    {
      title: 'API Access',
      description: 'Full API access for custom integrations',
      icon: <Zap className="w-6 h-6" />,
      status: 'inactive',
      color: 'yellow'
    }
  ];

  const usageStats = [
    {
      title: 'Data Points Tracked',
      value: '2.4M',
      limit: '5M',
      percentage: 48,
      color: 'blue'
    },
    {
      title: 'Active Users',
      value: '1,247',
      limit: '2,500',
      percentage: 50,
      color: 'green'
    },
    {
      title: 'API Calls',
      value: '45.2K',
      limit: '100K',
      percentage: 45,
      color: 'purple'
    },
    {
      title: 'Storage Used',
      value: '8.5GB',
      limit: '20GB',
      percentage: 42,
      color: 'orange'
    }
  ];

  const recentActivity = [
    {
      action: 'Advanced report generated',
      time: '2 minutes ago',
      type: 'success',
      user: 'John Doe'
    },
    {
      action: 'API integration configured',
      time: '15 minutes ago',
      type: 'success',
      user: 'Jane Smith'
    },
    {
      action: 'Custom dashboard created',
      time: '1 hour ago',
      type: 'success',
      user: 'Mike Johnson'
    },
    {
      action: 'Data export completed',
      time: '2 hours ago',
      type: 'info',
      user: 'Sarah Wilson'
    }
  ];

  const getStatusIcon = (status: string) => {
    return status === 'active' ? (
      <CheckCircle className="w-5 h-5 text-green-600" />
    ) : (
      <XCircle className="w-5 h-5 text-gray-400" />
    );
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-red-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

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
      {/* Pro Header */}
      <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
              <Crown className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Pro Mode Active</h2>
              <p className="text-purple-100">Unlock the full potential of Info Getter</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-purple-100">Plan expires in</p>
            <p className="text-xl font-bold">45 days</p>
          </div>
        </div>
      </motion.div>

      {/* Usage Statistics */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {usageStats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              <span className="text-xs text-gray-500">{stat.percentage}%</span>
            </div>
            <div className="mb-3">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">of {stat.limit}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getProgressColor(stat.percentage)} transition-all duration-300`}
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pro Features Grid */}
      <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Pro Features</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {showAdvanced ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAdvanced ? 'Hide' : 'Show'} Advanced
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proFeatures.map((feature) => (
            <div
              key={feature.title}
              className={`p-6 rounded-xl border transition-all duration-200 ${
                feature.status === 'active' 
                  ? 'border-gray-200 bg-white hover:shadow-md' 
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${feature.color}-100`}>
                  <div className={`text-${feature.color}-600`}>
                    {feature.icon}
                  </div>
                </div>
                {getStatusIcon(feature.status)}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
              {feature.status === 'inactive' && (
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                  Upgrade to Enable
                </button>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Advanced Settings */}
      {showAdvanced && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Advanced Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Real-time Analytics</p>
                  <p className="text-sm text-gray-600">Enable live data streaming</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Custom Webhooks</p>
                  <p className="text-sm text-gray-600">Send data to external services</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Advanced Filters</p>
                  <p className="text-sm text-gray-600">Create complex data filters</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Data Export</p>
                  <p className="text-sm text-gray-600">Export data in multiple formats</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">White Label</p>
                  <p className="text-sm text-gray-600">Remove branding</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">API Rate Limits</p>
                  <p className="text-sm text-gray-600">Increased API call limits</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Pro Activity</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-600">by {activity.user}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pro Benefits */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6" />
            <h3 className="text-lg font-semibold">Performance Boost</h3>
          </div>
          <p className="text-blue-100 mb-4">Get up to 10x faster data processing with our optimized Pro infrastructure.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Real-time processing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Advanced caching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">CDN optimization</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6" />
            <h3 className="text-lg font-semibold">Enterprise Security</h3>
          </div>
          <p className="text-purple-100 mb-4">Bank-level security with advanced encryption and compliance features.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">SOC 2 compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">End-to-end encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Advanced threat protection</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProMode;
