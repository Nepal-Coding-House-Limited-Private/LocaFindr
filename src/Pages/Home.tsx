import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 to-gray-900 text-white font-sans overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" style={{ top: '-6rem', left: '-6rem' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-800 opacity-10 rounded-full blur-2xl -z-10 animate-pulse" style={{ bottom: '-4rem', right: '-4rem' }} />
      <section className="text-center px-6 py-10 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          Discover Local Gems with <span className="text-red-500">LocaFindr</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Find the best shops, services, and experiences in your area. Empowering communities, one discovery at a time.
        </p>
        <button
          className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-3 px-10 rounded-full text-lg font-bold shadow-lg mb-8"
          onClick={() => navigate('/motive')}
        >
          Get Started
        </button>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
          <div className="bg-zinc-900 bg-opacity-80 rounded-xl p-6 shadow-md flex-1 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Shop Local</h3>
            <p className="text-gray-400">Support your neighborhood businesses and discover unique products near you.</p>
          </div>
          <div className="bg-zinc-900 bg-opacity-80 rounded-xl p-6 shadow-md flex-1 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Find Services</h3>
            <p className="text-gray-400">From repairs to wellness, easily connect with trusted local service providers.</p>
          </div>
          <div className="bg-zinc-900 bg-opacity-80 rounded-xl p-6 shadow-md flex-1 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Community Driven</h3>
            <p className="text-gray-400">Join a growing community and help others discover the best your city has to offer.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
