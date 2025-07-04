import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-lg w-full border border-gray-100">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <Search className="w-12 h-12 text-blue-500" />
          </span>
          <h1 className="text-6xl font-extrabold text-blue-700 mb-2">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-500 mb-4 text-center">Sorry, the page you are looking for does not exist or has been moved.</p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
