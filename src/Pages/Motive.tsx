import React, { useState } from 'react';
import ComingSoonModal from './ComingSoonModal';

const Motive: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 to-gray-900 text-white font-sans overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-0 left-0 w-80 h-80 bg-red-600 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ top: '-5rem', left: '-5rem' }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-red-800 opacity-10 rounded-full blur-2xl -z-10 animate-pulse"
        style={{ bottom: '-3rem', right: '-3rem' }}
      />
      <section className="text-center px-6 py-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Our <span className="text-red-500">Motive</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          LocaFindr aims to empower communities by making it easy to discover local businesses, services, and hidden gems.
          <br className="hidden md:block" />
          <span className="block mt-2">
            We believe in supporting local economies and helping people connect with what matters most, right where they live.
          </span>
        </p>
        <button
          className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-3 px-10 rounded-full text-lg font-bold shadow-lg mb-4"
          onClick={() => setShowModal(true)}
        >
          Get Started
        </button>
        <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-zinc-900 bg-opacity-80 rounded-xl p-6 shadow-md flex-1 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Empower Local</h3>
            <p className="text-gray-400">Boost small businesses and foster a thriving local marketplace.</p>
          </div>
          <div className="bg-zinc-900 bg-opacity-80 rounded-xl p-6 shadow-md flex-1 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Connect People</h3>
            <p className="text-gray-400">Bridge the gap between people and the services they need, close to home.</p>
          </div>
        </div>
      </section>

      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}
    </main>
  );
};

export default Motive;
