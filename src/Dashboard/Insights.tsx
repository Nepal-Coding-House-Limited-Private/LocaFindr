import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Insights: React.FC = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Users',
        data: [800, 1200, 1000, 1800, 1600, 2200, 2000],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Page Views',
        data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [45, 40, 15],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 146, 60, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const insights = [
    {
      title: 'Revenue Growth',
      value: '+24.5%',
      change: 'positive',
      description: 'Compared to last month',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'blue',
    },
    {
      title: 'User Engagement',
      value: '+18.2%',
      change: 'positive',
      description: 'Average session duration',
      icon: <Users className="w-5 h-5" />,
      color: 'green',
    },
    {
      title: 'Conversion Rate',
      value: '+12.8%',
      change: 'positive',
      description: 'From last week',
      icon: <Activity className="w-5 h-5" />,
      color: 'purple',
    },
    {
      title: 'Revenue per User',
      value: '$45.23',
      change: 'positive',
      description: 'Increased by 8.5%',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'orange',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Key Insights */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-${insight.color}-100`}>
                <div className={`text-${insight.color}-600`}>{insight.icon}</div>
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                insight.change === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {insight.change === 'positive' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {insight.value}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{insight.title}</h3>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue & Users Trend */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Revenue & Users Trend</h3>
              <p className="text-sm text-gray-600">Last 7 months performance</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Revenue</span>
              <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
              <span className="text-sm text-gray-600">Users</span>
            </div>
          </div>
          <div className="h-64">
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Page Views */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Weekly Page Views</h3>
              <p className="text-sm text-gray-600">This week's performance</p>
            </div>
          </div>
          <div className="h-64">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </motion.div>
      </div>

      {/* Device Distribution */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">Direct Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">35%</div>
              <div className="text-sm text-gray-600">Organic Search</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">20%</div>
              <div className="text-sm text-gray-600">Social Media</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Distribution</h3>
          <div className="h-48">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98.5%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1.2s</div>
            <div className="text-sm text-gray-600">Load Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Insights;
