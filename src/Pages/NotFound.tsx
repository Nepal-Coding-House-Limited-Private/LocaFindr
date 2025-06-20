import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 to-gray-900 text-white font-sans">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-2xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md"
      >
        Go Home
      </Link>
    </main>
  );
}
