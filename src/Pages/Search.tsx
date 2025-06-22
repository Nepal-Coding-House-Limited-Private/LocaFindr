import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import companies from '../data/companies.json';

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
  likes: number;
  dislikes: number;
  comments: Comment[];
}

const Search: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState<Company[]>([]);

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

  useEffect(() => {
    if (!query || query.trim() === '') {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }

    const filtered = companies.filter((c: Company) =>
      c.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    setResults(filtered);
  }, [query, navigate]);

  return (
    <div className="relative flex flex-col lg:flex-row max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 z-10 flex flex-col">
        {results.length > 0 ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black text-transparent bg-clip-text">
                Search Results for "{query}"
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                Explore company profiles, user feedback, and visit websites to discover more.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2">
              {results.map((company, idx) => {
                const avgRating =
                  company.reviews.length > 0
                    ? company.reviews.reduce((a, r) => a + r.rating, 0) /
                      company.reviews.length
                    : 0;

                return (
                  <div
                    key={idx}
                    className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-8 pt-24 overflow-hidden hover:shadow-3xl transition-transform duration-300 hover:scale-105 flex flex-col min-h-[440px] group"
                  >
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 group-hover:scale-110 transition-transform duration-300 mt-6">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover mt-[12px] transform group-hover:rotate-3 transition-transform duration-300"
                      />
                    </div>

                    <h2 className="text-2xl font-extrabold text-center text-red-600 mt-4 mb-1 tracking-tight">
                      {company.name}
                    </h2>
                    <div className="text-center text-gray-500 text-sm mb-2">📍 {company.location}</div>

                    <div className="flex flex-wrap justify-center gap-4 text-base mb-3">
                      <span className="text-green-600 font-medium">👍 {company.likes}</span>
                      <span className="text-red-600 font-medium">👎 {company.dislikes}</span>
                      <span className="text-yellow-500 flex items-center">
                        {'★'.repeat(Math.round(avgRating))}
                        <span className="ml-1 text-gray-500 text-sm">({company.reviews.length} reviews)</span>
                      </span>
                    </div>

                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-blue-600 font-semibold hover:text-blue-800 transition underline mb-2"
                    >
                      Visit Website
                    </a>

                    <p className="mb-4 text-gray-700 text-sm text-center line-clamp-3 px-2">{company.description}</p>

                    <div className="border-t border-gray-200 my-2"></div>

                    <div className="mt-2 bg-gradient-to-r from-red-100 via-pink-100 to-blue-100 p-3 rounded-xl shadow-inner">
                      <h3 className="text-md font-semibold mb-1 text-gray-800">⭐ Top Review</h3>
                      {company.reviews[0] ? (
                        <div className="text-sm text-gray-700">
                          <span className="font-bold text-red-500">{company.reviews[0].user}:</span>{' '}
                          {company.reviews[0].comment}{' '}
                          <span className="text-yellow-500 ml-2">
                            {'★'.repeat(company.reviews[0].rating)}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">No reviews yet</div>
                      )}
                    </div>

                    <div className="mt-3 bg-gradient-to-r from-blue-100 via-red-100 to-pink-100 p-3 rounded-xl shadow-inner">
                      <h3 className="text-md font-semibold mb-1 text-gray-800">💬 Recent Comment</h3>
                      {company.comments[0] ? (
                        <div className="text-sm text-gray-700">
                          <span className="font-bold">{company.comments[0].user}:</span>{' '}
                          {company.comments[0].text}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">No comments yet</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
              {query ? `No results found for "${query}"` : 'No search keyword provided.'}
            </div>
            {!query && (
              <div className="text-base md:text-lg text-gray-500 animate-pulse">
                Redirecting to home...
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Side Cover */}
      <div className="hidden lg:flex w-full lg:w-1/3 pl-0 lg:pl-8 relative flex-col">
        <div className="sticky top-28">
          <div className="rounded-3xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Search Visual"
              className="w-full h-[420px] object-cover rounded-3xl"
            />
          </div>
          <div className="mt-4 text-base text-gray-500 text-center font-medium">
            Discover verified businesses trusted by users just like you 💡
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;