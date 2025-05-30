import React from 'react';
import Hero from './components/Hero';
import StepsSection from './components/StepsSection';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';


export default function LandingPage() {
  return (
    <div className="">
      <main>
        <Hero />
        <StepsSection />
        <Features />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  );
}
