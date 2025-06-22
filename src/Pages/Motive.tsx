import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ComingSoonModal from './ComingSoonModal';
import Navbar from '../components/Navbar';

const Motive: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 font-sans overflow-hidden px-6 py-16 md:py-24">
        
        {/* Unique coral/orange blobs */}
        <div
          className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-[#FF6F59] opacity-30 rounded-full blur-[80px] animate-[pulse_10s_ease-in-out_infinite] -z-10"
        />
        <div
          className="absolute bottom-[-4rem] right-[-4rem] w-80 h-80 bg-[#FF9173] opacity-20 rounded-full blur-[60px] animate-[pulse_8s_ease-in-out_infinite] -z-10"
        />

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-tight text-[#FF6F59] drop-shadow-sm">
            Our <span className="text-[#FF9173]">Motive</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-14 leading-relaxed max-w-2xl mx-auto font-[450] tracking-wide">
            LocaFindr aims to empower communities by making it easy to discover local businesses, services, and hidden gems.
            <br className="hidden md:block" />
            <span className="block mt-4 font-[400] text-gray-600">
              We believe in supporting local economies and helping people connect with what matters most, right where they live.
            </span>
          </p>

          <Link to="/get-started" aria-label="Get Started with LocaFindr">
            <button className="px-10 py-4 bg-[#FF6F59] hover:bg-[#FF5A3F] active:bg-[#E04E31] rounded-full font-semibold text-lg shadow-lg text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FF6F59]/50">
              Get Started
            </button>
          </Link>

          <div className="mt-16 flex flex-col md:flex-row gap-12 justify-center">
            {/* Premium smooth cards */}
            <div className="bg-white shadow-xl rounded-3xl p-10 flex-1 min-w-[280px] cursor-default hover:shadow-2xl transition duration-400 ease-in-out border border-gray-200">
              <h3 className="text-3xl font-semibold mb-4 text-[#FF6F59] tracking-wide">
                Empower Local
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-[450]">
                Boost small businesses and foster a thriving local marketplace.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-10 flex-1 min-w-[280px] cursor-default hover:shadow-2xl transition duration-400 ease-in-out border border-gray-200">
              <h3 className="text-3xl font-semibold mb-4 text-[#FF9173] tracking-wide">
                Connect People
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-[450]">
                Bridge the gap between people and the services they need, close to home.
              </p>
            </div>
          </div>
        </section>

        {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}
      </main>
    </>
  );
};

export default Motive;
