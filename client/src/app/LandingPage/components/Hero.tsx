import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <>
    <section 
      className="relative flex flex-col lg:flex-row items-center justify-between px-6 py-16 lg:px-16 text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/heroBg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#4338ca', // Fallback color (indigo-700)
        fontFamily: 'Haettenschweiler, sans-serif'
      }}
    >
      <Navbar />
      <div className="grid gap-y-6 pt-7 max-w-xl z-10 mt-10 md:mt-0">
       
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: 'Haettenschweiler, sans-serif' }}>
          Easiest Way to Chat and Send Tokens without Gas Fees
        </h1>
        <h2 className="text-6xl font-bold text-[#C8F9D4]" style={{ fontFamily: 'Haettenschweiler, sans-serif' }}>Chat. Pay. Gasless</h2>
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-wrap gap-4">
          <Link href="#" className="bg-[#1F1D5D] text-[#FFFFFF] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition flex items-center gap-2" style={{ fontFamily: 'Haettenschweiler, sans-serif' }}>
            <Image src="/apple.svg" alt="Apple logo" width={20} height={20} className="w-5 h-5" />
            Download On iOS
          </Link>
          <Link href="#" className="bg-[#1F1D5D] text-[#FFFFFF] px-6 py-3 rounded-full font-medium transition flex items-center gap-2" style={{ fontFamily: 'Haettenschweiler, sans-serif' }}>
            <Image src="/android.svg" alt="Android logo" width={20} height={20} className="w-5 h-5" />
            Download On Android
          </Link>
          </div>
          <div>
          <Link
            href="#"
            className="bg-white text-[#1F1D5D] px-6 py-3 mt-2 border border-[#1F1D5D] rounded-full font-bold transition hover:bg-opacity-90 text-center min-w-[185px]"
          >
            GET EARLY ACCESS
          </Link>
          </div>
        </div>
        {/* <Link href="#" className="bg-[#FFFFFF] w-[31%] text-[#1F1D5D] px-6 py-3 rounded-full font-medium transition" style={{ fontFamily: 'Haettenschweiler, sans-serif' }}>
          Download On Android
          </Link> */}
      </div>
      
      <div className="relative mt-12 pt-5 lg:mt-0 lg:w-1/2">
        <div className="relative p-4 rounded-xl ">
          <Image
            src="/heroImg.png"
            alt="Chat interface with two people"
            width={600}
            height={500}
            className="rounded-lg relative z-10 pt-10"
            priority
          />
          <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/30 -z-10" />
    </section>
    
    </>
  );
};

export default Hero; 