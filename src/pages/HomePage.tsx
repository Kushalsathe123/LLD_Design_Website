
import React from 'react';
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import RoadmapPreview from "@/components/RoadmapPreview";
import PatternShowcase from "@/components/PatternShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Introduction />
      <RoadmapPreview />
      <PatternShowcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default HomePage;
