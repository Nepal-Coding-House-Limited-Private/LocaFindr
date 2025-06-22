import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import ESEWA from '../assets/esewa.png'
import Khalti from '../assets/khalti.png'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#f7f9fb] to-[#e3eafc] text-[#1a2340] pt-16 pb-8 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-14 items-start">
        {/* Brand & Description */}
        <div className="mb-10 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg">LocaFindr</span>
          </div>
          <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">LocaFindr is your go-to platform for discovering local businesses, services, and experiences. Fast, reliable, and hyper-relevant local search for everyone.</p>
          <div className="text-base text-gray-500 font-semibold">&copy; {new Date().getFullYear()} LocaFindr. All rights reserved.</div>
        </div>
        {/* Business Solutions */}
        <div>
          <div className="font-bold mb-3 text-xl text-[#1a2340] border-b-2 border-blue-900 inline-block">Business Solutions</div>
          <ul className="space-y-2 mt-3 text-lg">
            <li>Local Marketing</li>
            <li>Business Analytics</li>
            <li>Premium Listings</li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-bold mb-3 text-xl text-[#1a2340] border-b-2 border-blue-900 inline-block">Quick Links</div>
          <ul className="space-y-2 mt-3 text-lg">
            <li><a href="/" className="hover:text-blue-700 font-semibold">Home</a></li>
            <li><a href="/pricing" className="hover:text-blue-700 font-semibold">Pricing</a></li>
            <li><a href="/search" className="hover:text-blue-700 font-semibold">Search</a></li>
            <li><a href="/terms" className="hover:text-blue-700 font-semibold">Terms & Policy</a></li>
          </ul>
        </div>
        {/* Social & Partners */}
        <div>
          <div className="font-bold mb-3 text-xl text-[#1a2340] border-b-2 border-blue-900 inline-block">Follow us on</div>
          <div className="flex gap-5 mt-4 mb-8 text-3xl">
          <FaFacebook />
           <FaTiktok />
<FaInstagram />
           
          </div>
          <div className="font-bold mb-3 text-xl text-[#1a2340] border-b-2 border-blue-900 inline-block">We Acpect</div>
          <div className="mt-4 flex h-[60px]">
            <img src= {ESEWA} alt="" />
            <img src= {Khalti} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;