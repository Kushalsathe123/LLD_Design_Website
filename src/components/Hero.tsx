
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    const introSection = document.getElementById('introduction');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-10 z-0"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-lld-lightPurple rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute left-10 bottom-1/4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="inline-block py-1 px-3 mb-4 bg-lld-lightPurple text-lld-purple rounded-full text-sm font-medium">Master Software Architecture</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Learn <span className="gradient-text">Low-Level Design</span> Skills
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
            A comprehensive guide to understanding and implementing effective Low-Level Design principles and patterns
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-lld-purple hover:bg-lld-darkPurple text-lg">
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              View Roadmap
            </Button>
          </div>
          
          <div className="w-full max-w-lg mx-auto p-2 glassmorphic rounded-lg grid grid-cols-3 gap-2">
            <div className="text-center p-2">
              <p className="text-3xl font-bold gradient-text">10+</p>
              <p className="text-sm text-gray-600">Core Concepts</p>
            </div>
            <div className="text-center p-2">
              <p className="text-3xl font-bold gradient-text">25+</p>
              <p className="text-sm text-gray-600">Design Patterns</p>
            </div>
            <div className="text-center p-2">
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-sm text-gray-600">Code Examples</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={scrollToContent} className="rounded-full bg-white shadow-md hover:shadow-lg h-12 w-12">
            <ArrowDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
