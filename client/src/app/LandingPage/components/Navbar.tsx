"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      style={{
        background: 'linear-gradient(to right, #cbc9db, #998bc0)',
        fontFamily: 'Haettenschweiler, sans-serif'
      }} 
      className="shadow-sm rounded-md absolute top-6 left-0 right-0 md:mb-0 mb-7 flex justify-center z-50 w-[80%] mx-auto"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Gasless Gossip Logo" width={32} height={32} className="mr-2" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-20">
            <Link href="#" className="text-[#100F52] font-bold hover:text-indigo-600 transition py-2">
              HOME
            </Link>
            <Link href="#" className="text-[#100F52] font-bold hover:text-indigo-600 transition py-2">
              CHAT
            </Link>
            <Link href="#" className="text-[#100F52] font-bold hover:text-indigo-600 transition py-2">
              EXCHANGE
            </Link>
            <Link href="#" className="text-[#100F52] font-bold hover:text-indigo-600 transition py-2">
              NFTs
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <button className="bg-white text-[#100F52] px-4 py-2 rounded-md hover:bg-indigo-800 hover:text-white transition">
              CONNECT WALLET
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-[#100F52] p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-md shadow-lg">
              <Link href="#" className="block px-3 py-2 text-[#100F52] font-bold hover:bg-purple-100 rounded-md">
                HOME
              </Link>
              <Link href="#" className="block px-3 py-2 text-[#100F52] font-bold hover:bg-purple-100 rounded-md">
                CHAT
              </Link>
              <Link href="#" className="block px-3 py-2 text-[#100F52] font-bold hover:bg-purple-100 rounded-md">
                EXCHANGE
              </Link>
              <Link href="#" className="block px-3 py-2 text-[#100F52] font-bold hover:bg-purple-100 rounded-md">
                NFTs
              </Link>
              <button className="w-full mt-2 bg-white text-[#100F52] border border-[#100F52] px-4 py-2 rounded-md hover:bg-gray-100 transition">
                CONNECT WALLET
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 