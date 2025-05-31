import React from 'react';
import { HeroSection } from './components/HeroSection';
import { KeyFeatures } from './components/KeyFeatures';
import { HowItWorks } from './components/HowItWorks';
import { AboutUs } from './components/About';
import { Experience } from './components/Experience';
import { EarlyAccess } from './components/EarlyAccess';
import { Footer } from './components/Footer';
import { ReadyToJoin } from './components/ReadyToJoin';


export default function LandingPage() {
  return (
    <div className="scroll-smooth">
      <main>
       <HeroSection />
       <KeyFeatures />
       <HowItWorks />
       <AboutUs />
       <Experience />
       <EarlyAccess />
       <ReadyToJoin />
      </main>
      <Footer />
     
    </div>
  );
}
