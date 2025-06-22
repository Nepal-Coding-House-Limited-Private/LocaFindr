import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import companies from '../data/companies.json';
import { UserCircle } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa";

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
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }

    const filtered = companies.filter((c: Company) =>
      c.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    setResults(filtered);
  }, [query, navigate]);

  return (
<>
<div className="flex justify-end items-center gap-2 p-2">
  <span className="text-base text-gray-800 font-medium">@abhaya</span>
  <FaUserCircle className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
</div>

    <div className="relative flex flex-col lg:flex-row max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 gap-10">
    
      {/* Left Section */}
      <div className="w-full lg:w-2/3 z-10 flex flex-col">
        {results.length > 0 ? (
          <>
            <div className="text-center mb-14">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Results for "{query}"
              </h1>
              <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
                Explore trusted business profiles, write reviews, and discover top-rated services.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2">
              {results.map((company, idx) => {
                const avgRating =
                  company.reviews.length > 0
                    ? company.reviews.reduce((a, r) => a + r.rating, 0) / company.reviews.length
                    : 0;

                return (
                  <div
                    key={idx}
                    className="relative bg-white rounded-3xl border border-gray-200 shadow-xl p-8 pt-20 transition hover:shadow-2xl hover:-translate-y-1 duration-300"
                  >
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h2 className="text-center text-2xl font-semibold text-gray-900 mt-4">
                      {company.name}
                    </h2>
                    <p className="text-center text-sm text-gray-500 mb-2">📍 {company.location}</p>

                    <div className="flex justify-center gap-4 text-sm text-gray-700 mb-3">
                      <span className="font-medium text-green-600">👍 {company.likes}</span>
                      <span className="font-medium text-red-500">👎 {company.dislikes}</span>
                      <span className="text-yellow-500 flex items-center">
                        {'★'.repeat(Math.round(avgRating))}
                        <span className="ml-1 text-gray-500">({company.reviews.length})</span>
                      </span>
                    </div>

                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-blue-600 hover:text-blue-800 font-medium underline mb-2"
                    >
                      Visit Website
                    </a>

                    <p className="text-center text-gray-600 text-sm mb-3 line-clamp-3 px-2">
                      {company.description}
                    </p>

                    <div className="mt-4 space-y-3">
                      <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 p-4 rounded-xl shadow-inner">
                        <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <UserCircle size={18} /> Top Review
                        </h3>
                        {company.reviews[0] ? (
                          <div className="text-sm text-gray-700">
                            <span className="font-semibold text-red-500">{company.reviews[0].user}:</span> {company.reviews[0].comment}{' '}
                            <span className="text-yellow-500 ml-1">
                              {'★'.repeat(company.reviews[0].rating)}
                            </span>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">No reviews yet</p>
                        )}
                      </div>

                      <div className="bg-gradient-to-r from-blue-100 via-red-100 to-pink-100 p-4 rounded-xl shadow-inner">
                        <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <UserCircle size={18} /> Recent Comment
                        </h3>
                        {company.comments[0] ? (
                          <div className="text-sm text-gray-700">
                            <span className="font-semibold">{company.comments[0].user}:</span> {company.comments[0].text}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">No comments yet</p>
                        )}
                      </div>
                    </div>

                    <button className="mt-5 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-semibold transition">
                      Write a Review
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
              {query ? `No results for "${query}"` : 'No search keyword provided.'}
            </h2>
            {!query && (
              <p className="text-base text-gray-500 animate-pulse">Redirecting to home...</p>
            )}
          </div>
        )}
      </div>

      {/* Right Visual Section */}
      <div className="hidden lg:flex w-full lg:w-1/3 pl-0 lg:pl-8 relative">
        <div className="sticky top-24 w-full">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Search Visual"
            className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
          />
          <p className="mt-4 text-center text-gray-500 font-medium">
            Discover verified businesses trusted by users like you 💡
          </p>
        </div>
      </div>
    </div>
</>
  );
};

export default Search;