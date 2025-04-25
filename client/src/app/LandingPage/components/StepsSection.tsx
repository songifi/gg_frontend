import React from 'react';
import Image from 'next/image';

const StepsSection = () => {
  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/StepSection.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Haettenschweiler, sans-serif'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="bg-indigo-900 text-white rounded-4xl py-4 px-6 mx-auto mt-2 max-w-xs">
          <h2 className="text-xl font-medium text-[#FFFFFF]">How it works</h2>
            <span className="font-bold text-2xl md:text-2xl text-[#C8F9D4]">3-step illustration/flow</span>
          </div>
        </div>

        <div className="grid md:grid-cols gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center md:flex-row flex-col justify-center md:gap-44">
          <div>
          <div  style={{
        background: 'linear-gradient(to right, #cbc9db, #998bc0)',
        fontFamily: 'Haettenschweiler, sans-serif'
      }}  className=" text-indigo-900 p-3 rounded-lg">
              Start a conversation
            </div>
          </div>

          <div className="flex items-start">
            <Image 
              src="/numberOne.png" 
              alt="Person using mobile app" 
              width={550} 
              height={550} 
              className=""
            />
          </div>
          </div>
         

          {/* Step 2 */}
         <div className='flex md:flex-row flex-col justify-center items-center md:gap-44'>
         <div className="flex items-start ">
            <Image 
              src="/numberTwo.png" 
              alt="Person sending tokens" 
              width={550} 
              height={550} 
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center">
            <div style={{
        background: 'linear-gradient(to right, #cbc9db, #998bc0)',
        fontFamily: 'Haettenschweiler, sans-serif'
      }} className=" text-indigo-900 p-3 rounded-lg">
              Send tokens gasless
            </div>
          </div>
         </div>

          {/* Step 3 */}
         <div className='flex md:flex-row flex-col justify-center items-center md:gap-44'>
         
          <div className="flex items-center">
            <div style={{
        background: 'linear-gradient(to right, #cbc9db, #998bc0)',
        fontFamily: 'Haettenschweiler, sans-serif'
      }} className=" text-indigo-900 p-3 rounded-lg">
              All done, tokens sent!
            </div>
          </div>

          <div className="flex items-start">
            <Image 
              src="/numberThree.png" 
              alt="Person receiving confirmation" 
              width={550} 
              height={550} 
              className="rounded-lg"
            />
          </div>
         </div>
        </div>
      </div>
      
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/50 -z-0" />
    </section>
  );
};

export default StepsSection; 