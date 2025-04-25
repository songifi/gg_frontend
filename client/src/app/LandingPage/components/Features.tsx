import React from 'react';
import Image from 'next/image';
import { FeatureList } from './list';

const Features = () => {

  const features = [
    "Gasless Messaging",
    "Gas-sponsored peer-to-peer payments",
    "Local AI-powered smart payment requests",
    "Privacy-first, on-device processing",
  ]

  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/featuresBg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Haettenschweiler, sans-serif'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-900 text-[#FFFFFF] rounded-4xl py-4 px-8 mb-2">
            <span className="text-xl font-medium">Key Feature Highlights</span>
          <h2 className="md:text-3xl text-2xl font-bold text-[#C8F9D4]">What to expect from this product</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Feature List */}
          {/* <div className="w-full md:w-2/5 bg-white rounded-xl p-8 shadow-lg mb-8 md:mb-0">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-green-100 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-800 font-medium">Gasless Messaging</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-800 font-medium">Send tokens with zero gas cost</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-800 font-medium">Layer for payment over connected wallets</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-800 font-medium">Private Keys on device (no custody)</span>
              </li>
            </ul>
          </div> */}
          <FeatureList features={features} />

          {/* Mockup image */}
          <div className="w-full md:w-3/5 flex justify-center md:justify-end relative">
            <div className="relative z-10">
              <Image
                src="/mockup.png"
                alt="App mockup"
                width={500}
                height={400}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/30 -z-0" />
    </section>
  );
};

export default Features; 