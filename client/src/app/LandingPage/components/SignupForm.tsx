import React from 'react';
import Image from 'next/image';

const SignupForm = () => {
  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundColor: '#222238',
        fontFamily: 'Haettenschweiler, sans-serif'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#574989] text-white rounded-lg p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-3 border-b border-white/50 bg-transparent text-white placeholder-white/70 focus:outline-none"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 border-b border-white/50 bg-transparent text-white placeholder-white/70 focus:outline-none"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Phone Number" 
                    className="w-full p-3 border-b border-white/50 bg-transparent text-white placeholder-white/70 focus:outline-none"
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-white text-[#574989] py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition text-center"
                  >
                    REQUEST EARLY ACCESS
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-4 text-right text-white/70 text-sm">
              <div className="flex justify-between">
                <p>0</p>
                <p>100</p>
              </div>
              <p>There is supply chain</p>
            </div>
          </div>
          
          {/* Mascot Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-green-400 text-white text-xs font-bold py-1 px-3 rounded-full">
                $24.99
              </div>
              <div className="bg-blue-400 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/mascot.png" 
                  alt="Gasless Gossip Mascot" 
                  width={300} 
                  height={300} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm; 