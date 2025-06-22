import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Adjust the import path as necessary
import companies from '../data/companies.json';

const RECENT_KEY = 'recent_searches';

export function Home() {
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState<string[]>([]);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_KEY);
    if (stored) setRecent(JSON.parse(stored));
  }, []);

  const dummyData = companies.map((c) => c.name);

  const filteredResults = query
    ? dummyData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = (text?: string) => {
    const q = text ?? query;
    if (q.trim() === '') return;

    // Save to recent searches
    const updated = [q, ...recent.filter((item) => item !== q)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));

    // Navigate to search page
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const removeRecent = (item: string) => {
    const updated = recent.filter((i) => i !== item);
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };

  return (
   <>
    < Navbar />
    <main className="bg-gradient-to-tr from-gray-50 to-blue-100 min-h-screen w-full px-4 py-12 flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Select the Plan
          </span>{' '}
          That Best Fits <br />
          <span className="text-blue-700">Your Business</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600">
          This is the best place to get your business info and increase the traffic. Make smart decisions to grow sales.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative mt-10 w-full max-w-xl"
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search companies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 shadow-md"
        />
        <button
          onClick={() => handleSearch()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg text-sm transition"
        >
          Search
        </button>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-4"
      >
        <p className="text-sm text-gray-600">
          🚀 <span className="font-semibold text-blue-600">Try 15 Days Free</span> – No Credit Card Required
        </p>
      </motion.div>

      {/* Filtered Results */}
      {query && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 border-b last:border-b-0 hover:bg-blue-50 transition-all cursor-pointer"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-md p-4"
        >
          <h3 className="text-gray-700 font-semibold mb-2">Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            {recent.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
              >
                <span
                  className="cursor-pointer"
                  onClick={() => handleSearch(item)}
                >
                  {item}
                </span>
                <X
                  className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500"
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
        className="mt-20 max-w-5xl w-full"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          🚀 Our Key Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-8 text-gray-700 text-lg">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            🔍 Instant Business Search
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            ⚡ Blazing Fast Performance
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            📊 Insightful Analytics
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            🌐 Global Accessibility
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          💡 Why Choose Us?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We're not just another business directory. We're the smart solution for companies looking to be found and grow. Backed by powerful tech, thoughtful UI, and data-driven insights — we help you shine 🌟.
        </p>
      </motion.section>
    </main>
   </>
  );
}

export default Home;
