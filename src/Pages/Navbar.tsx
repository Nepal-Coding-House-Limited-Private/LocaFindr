import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 text-white px-6 py-4 shadow flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tight">
        <Link to="/">LocaFindr</Link>
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <Link to="/motive" className="hover:text-red-500 transition-colors">Motive</Link>
      </div>
    </nav>
  );
}
