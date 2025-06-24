import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import companies from '../data/companies.json';
import { Helmet } from 'react-helmet';
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
  description: string;
  location: string;
  website: string;
  reviews: Review[];
  likes: number[];
  dislikes: number;
  comments: Comment[];
}

const Search: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState<Company[]>([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Placeholder for user authentication state
  const isLoggedIn = true; // Replace with actual auth logic
  const hasShop = true; // Replace with actual shop ownership logic

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

  useEffect(() => {
    if (!query || query.trim() === '') {
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }

    const filtered = companies.filter((c: Company) =>
      c.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    setResults(filtered);
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

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">LocaFindr</h1>
          <div className="flex items-center gap-4">
            {isLoggedIn && hasShop && (
              <button
                onClick={() => navigate('/dashboard')}
                className="text-gray-800 hover:text-blue-600 transition"
                aria-label="Go to Dashboard"
              >
                <LayoutDashboard className="w-6 h-6" />
              </button>
            )}
            {!isLoggedIn && (
              <button
                onClick={() => navigate('/search')}
                className="text-gray-800 hover:text-blue-600 transition"
                aria-label="Search"
              >
                <SearchIcon className="w-6 h-6" />
              </button>
            )}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-blue-600 focus:outline-none"
                onClick={() => setProfileOpen(!profileOpen)}
                aria-haspopup="true"
                aria-expanded={profileOpen}
              >
                <FaUserCircle className="text-2xl" />
                <span>@abhaya</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {profileOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-10"
                  role="menu"
                  aria-label="Profile Menu"
                >
                  <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b border-gray-200">@abhaya</div>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 font-medium transition">
                    My Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 font-medium transition">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section>
          <form
            className="mb-12 relative"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const input = form.elements.namedItem('search') as HTMLInputElement;
              navigate(`/search?q=${encodeURIComponent(input.value)}`);
            }}
            role="search"
            aria-label="Search Form"
          >
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              name="search"
              aria-label="Search companies"
              placeholder="Search companies..."
              defaultValue={query || ''}
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-300 text-lg"
            />
          </form>

          {results.length > 0 ? (
            <div className="space-y-6">
              {results.map((company, idx) => {
                const avgRating =
                  company.reviews.length > 0
                    ? company.reviews.reduce((a, r) => a + r.rating, 0) / company.reviews.length
                    : 0;

                const isExpanded = expandedId === company.name;

                return (
                  <article
                    key={idx}
                    className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label={`Company card for ${company.name}`}
                  >
                    <div className="flex gap-6 items-start">
                      <img
                        src={company.image}
                        alt={`${company.name} logo`}
                        className="w-16 h-16 rounded-full object-cover border border-gray-200 shadow-sm"
                      />
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900">{company.name}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>📍 {company.location}</span>
                          <span className="text-yellow-500">★ {avgRating.toFixed(1)}</span>
                        </div>
                        <p className="mt-3 text-gray-700 text-sm line-clamp-2">{company.description}</p>
                        <div className="mt-3 flex items-center gap-4 text-sm">
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-medium transition"
                          >
                            Visit Website ↗
                          </a>
                          <span className="text-gray-500">👍 {company.likes.length} | 👎 {company.dislikes}</span>
                          <button
                            onClick={() => toggleDetails(company.name)}
                            className="text-blue-600 hover:text-blue-700 font-medium transition"
                          >
                            {isExpanded ? 'Show Less' : 'See More'}
                          </button>
                        </div>
                        {company.reviews[0] && (
                          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
                            <p className="font-semibold text-gray-800">
                              Top Review by <span className="text-blue-600">{company.reviews[0].user}</span>
                            </p>
                            <p className="text-gray-600 mt-1 italic line-clamp-2">"{company.reviews[0].comment}"</p>
                          </div>
                        )}
                        {isExpanded && (
                          <div className="mt-6 border-t border-gray-200 pt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
                            <div className="space-y-4 text-sm text-gray-700">
                              <p>
                                <span className="font-medium">Full Description:</span> {company.description}
                              </p>
                              <p>
                                <span className="font-medium">Location:</span> {company.location}
                              </p>
                              <p>
                                <span className="font-medium">Website:</span>{' '}
                                <a
                                  href={company.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {company.website}
                                </a>
                              </p>
                              <div>
                                <span className="font-medium">Reviews:</span>
                                {company.reviews.length > 0 ? (
                                  <ul className="mt-2 space-y-2">
                                    {company.reviews.map((review, i) => (
                                      <li key={i} className="border-b border-gray-100 pb-2">
                                        <p className="font-medium text-gray-800">{review.user}</p>
                                        <p className="text-gray-600 italic">"{review.comment}"</p>
                                        <p className="text-yellow-500">★ {review.rating}</p>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-gray-600 mt-2">No reviews yet.</p>
                                )}
                              </div>
                              <div>
                                <span className="font-medium">Comments:</span>
                                {company.comments.length > 0 ? (
                                  <ul className="mt-2 space-y-2">
                                    {company.comments.map((comment, i) => (
                                      <li key={i} className="border-b border-gray-100 pb-2">
                                        <p className="font-medium text-gray-800">{comment.user}</p>
                                        <p className="text-gray-600">{comment.text}</p>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-gray-600 mt-2">No comments yet.</p>
                                )}
                              </div>
                              <p>
                                <span className="font-medium">Likes:</span> {company.likes.length}
                              </p>
                              <p>
                                <span className="font-medium">Dislikes:</span> {company.dislikes}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {query ? `No results found for "${query}"` : 'No search keyword provided.'}
              </h2>
              {!query && <p className="text-gray-500 animate-pulse">Redirecting to home...</p>}
              {query && (
                <p className="text-gray-600 mt-2">
                  Try adjusting your search term or explore our{' '}
                  <a href="/" className="text-blue-600 hover:underline">
                    home page
                  </a>
                  .
                </p>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Search;