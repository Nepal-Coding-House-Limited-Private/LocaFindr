import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Motive', path: '/motive' },
  { name: 'Pricing', path: '/pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4  flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="text-[#1C40FC] font-extrabold text-3xl tracking-tight">
        <Link to="/">LocaFindr</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-600 hover:text-blue-600 text-base font-medium transition-colors"
          >
            {item.name}
          </Link>
        ))}

        {/* Auth Actions */}
        <div className="flex items-center space-x-4 ml-6">
          <Link
            to="/login"
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-gray-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-6 py-6 border-t border-gray-200 shadow-md flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 text-sm"
            >
              Login
            </Link>
            <Link
              to="/get-started"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm text-center py-2 rounded-md transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
