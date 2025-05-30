import React from 'react';
import { HeroSection } from './components/HeroSection';
import { KeyFeatures } from './components/KeyFeatures';
import { HowItWorks } from './components/HowItWorks';

export default function LandingPage() {
  return (
    <div className="">
      <main>
       <HeroSection />
       <KeyFeatures />
       <HowItWorks />
       
      </main>
     
    </div>
  );
}
