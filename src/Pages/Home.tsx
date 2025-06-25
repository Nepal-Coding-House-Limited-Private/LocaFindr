import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Adjust the import path as necessary
import companies from '../data/companies.json';
import Footer from '../components/Footer'; // Adjust the import path as necessary

const RECENT_KEY = 'recent_searches';

export function Home() {
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState([]);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_KEY);
    if (stored) setRecent(JSON.parse(stored));
  }, []);

  // Assuming companies.json contains an array of objects with 'name' and other fields
  const companyNames = companies.map((c) => c.name);

  const filteredResults = query
    ? companyNames.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = (text) => {
    const q = text ?? query;
    if (q.trim() === '') return;

    // Save to recent searches
    const updated = [q, ...recent.filter((item) => item !== q)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));

    // Navigate to search page with query
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const removeRecent = (item) => {
    const updated = recent.filter((i) => i !== item);
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <main className="relative bg-white min-h-screen w-full px-6 py-16 flex flex-col items-center overflow-hidden">
        {/* Decorative Bubbles */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-60 blur-2xl animate-bubble-move" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-100 rounded-full opacity-50 blur-2xl animate-bubble-move2" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-100 rounded-full opacity-40 blur-2xl animate-bubble-move3" />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Find the <span className="text-blue-600">Perfect Plan</span> for Your Business
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover business solutions tailored to your needs. Search our database to unlock insights and drive growth.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mt-8 w-full max-w-2xl"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for companies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-12 pr-32 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-300"
            />
            <button
              onClick={() => handleSearch()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6"
        >
          <p className="text-sm text-gray-600 font-medium">
            Start with a <span className="text-blue-600 font-semibold">15-Day Free Trial</span> – No Credit Card Needed
          </p>
        </motion.div>

        {/* Filtered Results */}
        {query && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md"
          >
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-all cursor-pointer text-gray-800"
                  onClick={() => handleSearch(item)}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-gray-500">No results found.</div>
            )}
          </motion.div>
        )}

        {/* Recent Searches */}
        {!query && recent.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-8 w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Recent Searches</h3>
            <div className="flex flex-wrap gap-3">
              {recent.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition"
                >
                  <span
                    className="cursor-pointer"
                    onClick={() => handleSearch(item)}
                  >
                    {item}
                  </span>
                  <X
                    className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-600 transition"
                    onClick={() => removeRecent(item)}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl w-full"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <span className="text-2xl mb-2 block">🔍</span>
              <h3 className="text-lg font-semibold text-gray-800">Instant Search</h3>
              <p className="text-gray-600 text-sm mt-2">Quickly find businesses with our powerful search engine.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <span className="text-2xl mb-2 block">⚡</span>
              <h3 className="text-lg font-semibold text-gray-800">Fast Performance</h3>
              <p className="text-gray-600 text-sm mt-2">Experience seamless and rapid data retrieval.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <span className="text-2xl mb-2 block">📊</span>
              <h3 className="text-lg font-semibold text-gray-800">Data Insights</h3>
              <p className="text-gray-600 text-sm mt-2">Leverage analytics to make informed decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <span className="text-2xl mb-2 block">🌐</span>
              <h3 className="text-lg font-semibold text-gray-800">Global Reach</h3>
              <p className="text-gray-600 text-sm mt-2">Access business data from around the world.</p>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our platform combines cutting-edge technology with user-friendly design to deliver unparalleled business insights. From startups to enterprises, we empower you to make smarter decisions and grow with confidence.
          </p>
        </motion.section>
      </main>

      <Footer />

      {/* Styles for decorative bubbles */}
    </>
  );
}

export default Home;