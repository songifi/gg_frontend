import React from 'react';
import { HeroSection } from './components/HeroSection';
import { KeyFeatures } from './components/KeyFeatures';
import { HowItWorks } from './components/HowItWorks';
import { AboutUs } from './components/About';
import { Experience } from './components/Experience';
import { EarlyAccess } from './components/EarlyAccess';


export default function LandingPage() {
  return (
    <div className="">
      <main>
       <HeroSection />
       <KeyFeatures />
       <HowItWorks />
       <AboutUs />
       <Experience />
       <EarlyAccess />
       
      </main>
     
    </div>
  );
}
