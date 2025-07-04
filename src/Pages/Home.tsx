import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import companies from '../data/companies.json';
// Fix Footer import for TypeScript
// @ts-ignore
import Footer from '../components/Footer.jsx';
import Logo from '../assets/logo.png'; // Adjust the path as necessary

const RECENT_KEY = 'recent_searches';

export function Home() {
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Load recent searches
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_KEY);
    if (stored) setRecent(JSON.parse(stored));
  }, []);

  // Type guard for a valid company object
  function isValidCompany(c: any): c is { name: string } {
    return (
      c &&
      typeof c.name === 'string' &&
      typeof c.image === 'string' &&
      typeof c.description === 'string' &&
      typeof c.location === 'string' &&
      typeof c.website === 'string' &&
      Array.isArray(c.reviews) &&
      typeof c.likes !== 'undefined' &&
      typeof c.dislikes !== 'undefined' &&
      Array.isArray(c.comments)
    );
  }

  // Ensure companyNames is a string[] and filter out invalid entries
  const companyNames = Array.isArray(companies)
    ? companies.filter(isValidCompany).map((c) => c.name)
    : [];

  // Enhanced search logic for companies
  const filteredCompanies = Array.isArray(companies)
    ? companies.filter((c: any) => {
        if (!c || typeof query !== 'string' || !query.trim()) return false;
        const q = query.trim().toLowerCase();
        const name = c.name?.toLowerCase() || '';
        const location = c.location?.toLowerCase() || '';
        const description = c.description?.toLowerCase() || '';
        const aeo = c.aeo?.toLowerCase() || '';
        const tags = Array.isArray(c.tags) ? c.tags.map((t: string) => t.toLowerCase()).join(' ') : '';
        const keywords = c.seo?.keywords ? c.seo.keywords.join(' ').toLowerCase() : '';
        return (
          name.includes(q) ||
          location.includes(q) ||
          description.includes(q) ||
          aeo.includes(q) ||
          tags.includes(q) ||
          keywords.includes(q)
        );
      })
      // Prioritize companies that match 'best' and 'kalikot'
      .sort((a: any, b: any) => {
        const aScore = ([a.name, a.location, a.description, a.aeo, (a.tags||[]).join(' '), (a.seo?.keywords||[]).join(' ')].join(' ').toLowerCase().includes('best software company in kalikot')) ? 1 : 0;
        const bScore = ([b.name, b.location, b.description, b.aeo, (b.tags||[]).join(' '), (b.seo?.keywords||[]).join(' ')].join(' ').toLowerCase().includes('best software company in kalikot')) ? 1 : 0;
        return bScore - aScore;
      })
      .map((c: any) => c.name)
    : [];

  const filteredResults = query ? filteredCompanies : [];

  const handleSearch = (text?: string) => {
    const q = (typeof text === 'string' ? text : query).trim();
    if (!q) return;

    const updated = [q, ...recent.filter((item) => item !== q)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));

    // Always navigate to top-level /search route
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

  // 🔥 Splash screen
  if (loading) {
    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 text-center">
        <motion.img
          src= {Logo} // Replace with your actual logo path
          alt="Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[500px] h-[500px]  animate-bounce mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl font-medium text-blue-700"
        >
          Getting things ready...
        </motion.p>
      </div>
    );
  }

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
                <Link
                  key={index}
                  className="block px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-all cursor-pointer text-gray-800"
                  to={`/search?q=${encodeURIComponent(item)}`}
                >
                  {item}
                </Link>
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
                  <Link
                    className="cursor-pointer"
                    to={`/search?q=${encodeURIComponent(item)}`}
                  >
                    {item}
                  </Link>
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
    
      {/* Only render <Footer /> if it is a valid React component */}
      {typeof Footer === 'function' && <Footer />}
    </>
  );
}

export default Home;
