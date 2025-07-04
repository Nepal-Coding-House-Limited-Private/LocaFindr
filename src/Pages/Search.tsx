import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import companies from '../data/companies.json';
import { Helmet } from 'react-helmet-async';
import { FaUserCircle } from 'react-icons/fa';
import { ChevronDown, Search as SearchIcon, LayoutDashboard } from 'lucide-react';

interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface Comment {
  user: string;
  text: string;
}

interface Company {
  name: string;
  image: string;
  aeo?: string;
  description: string;
  location: string;
  website: string;
  reviews: Review[];
  likes: number | number[];
  dislikes: number;
  comments: Comment[];
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  about?: string;
}

const Search: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const [searchInput, setSearchInput] = useState(query || '');
  const [results, setResults] = useState<Company[]>([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const isLoggedIn = true;
  const hasShop = true;

  useEffect(() => {
    if (!query || query.trim() === '') {
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }

    const q = query.trim().toLowerCase();
    const filtered = companies.filter((c: any) => {
      if (!c) return false;
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
    }).map((c: any) => ({
      ...c,
      likes: Array.isArray(c.likes)
        ? c.likes
        : typeof c.likes === 'number'
        ? Array(c.likes).fill(1)
        : [],
      dislikes: typeof c.dislikes === 'number' ? c.dislikes : 0,
      reviews: Array.isArray(c.reviews) ? c.reviews : [],
      comments: Array.isArray(c.comments) ? c.comments : [],
    }));

    // Prioritize companies that match 'best' and 'kalikot'
    const prioritized = filtered.sort((a: any, b: any) => {
      const aScore = ([a.name, a.location, a.description, a.aeo, (a.tags||[]).join(' '), (a.seo?.keywords||[]).join(' ')].join(' ').toLowerCase().includes('best software company in kalikot')) ? 1 : 0;
      const bScore = ([b.name, b.location, b.description, b.aeo, (b.tags||[]).join(' '), (b.seo?.keywords||[]).join(' ')].join(' ').toLowerCase().includes('best software company in kalikot')) ? 1 : 0;
      return bScore - aScore;
    });
    setResults(prioritized as Company[]);
  }, [query, navigate]);

  const toggleDetails = (companyName: string) => {
    setExpandedId(expandedId === companyName ? null : companyName);
  };

  return (
    <>
      <Helmet>
        <title>Search results for "{query}" | LocaFindr</title>
        <meta name="description" content={`Search results for ${query} on LocaFindr platform`} />
        <meta name="robots" content="index, follow" />
        {results.map((company, index) => {
          const avgRating =
            company.reviews.length > 0
              ? company.reviews.reduce((a, r) => a + r.rating, 0) / company.reviews.length
              : 0;

          return (
            <script key={index} type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: company.name,
                url: company.website,
                logo: company.image,
                image: company.image,
                description: company.description,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: company.location,
                  addressCountry: 'Nepal',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: avgRating.toFixed(1),
                  reviewCount: company.reviews.length,
                },
                review: company.reviews.slice(0, 2).map((r) => ({
                  '@type': 'Review',
                  author: r.user,
                  reviewBody: r.comment,
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: r.rating,
                  },
                })),
              })}
            </script>
          );
        })}
      </Helmet>

      <header className="sticky top-0 z-50 bg-gray-50 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-sans font-bold text-gray-900 tracking-tight">LocaFindr</h1>
          <div className="flex items-center gap-3 sm:gap-4">
            {isLoggedIn && hasShop && (
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Go to Dashboard"
              >
                <LayoutDashboard className="w-5 h-5" />
              </button>
            )}
            {!isLoggedIn && (
              <button
                onClick={() => navigate('/search')}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Search"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            )}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                onClick={() => setProfileOpen(!profileOpen)}
                aria-haspopup="true"
                aria-expanded={profileOpen}
              >
                <FaUserCircle className="text-xl sm:text-2xl text-gray-500" />
                <span className="hidden sm:inline">@abhaya</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {profileOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 transform transition-all duration-200 ease-in-out"
                  role="menu"
                  aria-label="Profile Menu"
                >
                  <div className="px-4 py-2 text-sm text-gray-700 font-medium border-b border-gray-100">@abhaya</div>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 font-medium transition-colors duration-150">
                    My Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 font-medium transition-colors duration-150">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col lg:flex-row gap-8">
        {/* Google-style Search Bar */}
        <div className="w-full lg:w-2/3 mb-8">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (searchInput.trim()) navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
            }}
            className="flex items-center bg-white rounded-full shadow border border-gray-200 px-4 py-2 mb-6"
          >
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-lg px-2"
              placeholder="Search for companies..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); if (searchInput.trim()) navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`); } }}
            />
            <button
              type="submit"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </form>
          {/* Results List */}
          <div className="flex-1">
            {query && results.length === 0 && (
              <div className="text-center text-gray-500 text-lg py-12">No results found for "{query}".</div>
            )}
            {results.length > 0 && (
              <div className="divide-y divide-gray-100 bg-white rounded-xl shadow border border-gray-100">
                {results.map((company) => (
                  <div
                    key={company.name}
                    className={`group p-6 flex flex-col md:flex-row items-center gap-6 cursor-pointer transition hover:bg-blue-50 ${selectedCompany?.name === company.name ? 'ring-2 ring-blue-400 bg-blue-50' : ''}`}
                    onClick={() => setSelectedCompany(company)}
                  >
                    <img src={company.image} alt={company.name} className="w-20 h-20 object-cover rounded-lg border border-gray-200" />
                    <div className="flex-1">
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-800 group-hover:underline">
                        {company.name}
                      </a>
                      <div className="text-gray-600 text-sm mb-1">{company.location}</div>
                      <div className="text-gray-700 mb-1 line-clamp-2">{company.description}</div>
                      <div className="text-xs text-gray-400">{company.website}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* RHS Business Profile Panel */}
        {selectedCompany && (
          <aside className="w-full lg:w-[380px] flex-shrink-0 sticky top-24 self-start bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-fit animate-modalIn">
            <img src={selectedCompany.image} alt={selectedCompany.name} className="w-32 h-32 object-cover rounded-lg border border-gray-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-800 mb-2 text-left">{selectedCompany.name}</h2>
            <div className="text-gray-600 mb-2 text-left">{selectedCompany.aeo}</div>
            {selectedCompany.seo && (
              <div className="mb-2 text-xs text-gray-500 text-left">
                <div><b>SEO Title:</b> {selectedCompany.seo.metaTitle}</div>
                <div><b>SEO Desc:</b> {selectedCompany.seo.metaDescription}</div>
                <div><b>Keywords:</b> {selectedCompany.seo.keywords?.join(', ')}</div>
              </div>
            )}
            <div className="text-gray-700 mb-2 text-left">{selectedCompany.location}</div>
            <div className="text-gray-700 mb-4 text-left">{selectedCompany.about || selectedCompany.description}</div>
            <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline font-medium mb-4 text-left">Visit Website</a>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1 text-left">Reviews</h4>
              <ul className="space-y-1">
                {selectedCompany.reviews?.map((r, i) => (
                  <li key={i} className="text-sm text-gray-600 text-left">"{r.comment}" <span className="text-xs text-gray-400">- {r.user}, {r.rating}★</span></li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <h4 className="font-semibold text-gray-800 mb-1 text-left">Contact</h4>
              <div className="text-sm text-gray-600 text-left">{selectedCompany.website}</div>
            </div>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition" onClick={() => setSelectedCompany(null)}>Close</button>
          </aside>
        )}
      </main>
    </>
  );
};

export default Search;
