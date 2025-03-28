
import React from 'react';

const RoadmapPage = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Low-Level Design Roadmap</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-lld-purple">Getting Started with Low-Level Design</h2>
          <p className="text-gray-700 mb-4">
            This roadmap will guide you through the process of mastering Low-Level Design concepts and principles. 
            Follow the steps below to build a strong foundation and progress to advanced topics.
          </p>
          <div className="flex flex-col space-y-2 mb-4">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
              <span className="text-gray-800 font-medium">Foundation</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-gray-800 font-medium">Intermediate</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
              <span className="text-gray-800 font-medium">Advanced</span>
            </div>
          </div>
        </div>

        {/* Step 1: Foundations */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">1</div>
            <h2 className="text-2xl font-bold ml-3">Foundations of Low-Level Design</h2>
          </div>
          <div className="ml-12 border-l-2 border-green-500 pl-6 pb-6">
            <h3 className="text-xl font-semibold mb-3">Object-Oriented Programming Basics</h3>
            <ul className="list-disc ml-5 mb-4 space-y-2 text-gray-700">
              <li>Classes and Objects</li>
              <li>Inheritance and Polymorphism</li>
              <li>Encapsulation and Abstraction</li>
              <li>Interfaces and Abstract Classes</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Basic Design Principles</h3>
            <ul className="list-disc ml-5 mb-4 space-y-2 text-gray-700">
              <li>DRY (Don't Repeat Yourself)</li>
              <li>KISS (Keep It Simple, Stupid)</li>
              <li>YAGNI (You Aren't Gonna Need It)</li>
              <li>Single Responsibility Principle</li>
            </ul>
          </div>
        </div>

        {/* Step 2: Intermediate */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">2</div>
            <h2 className="text-2xl font-bold ml-3">Intermediate Concepts</h2>
          </div>
          <div className="ml-12 border-l-2 border-yellow-500 pl-6 pb-6">
            <h3 className="text-xl font-semibold mb-3">SOLID Principles</h3>
            <ul className="list-disc ml-5 mb-4 space-y-2 text-gray-700">
              <li>Single Responsibility Principle</li>
              <li>Open/Closed Principle</li>
              <li>Liskov Substitution Principle</li>
              <li>Interface Segregation Principle</li>
              <li>Dependency Inversion Principle</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Common Design Patterns</h3>
            <ul className="list-disc ml-5 mb-4 space-y-2 text-gray-700">
              <li>Creational Patterns: Factory, Singleton, Builder</li>
              <li>Structural Patterns: Adapter, Facade, Composite</li>
              <li>Behavioral Patterns: Observer, Strategy, Command</li>
            </ul>
          </div>
        </div>

        {/* Step 3: Advanced */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">3</div>
            <h2 className="text-2xl font-bold ml-3">Advanced Topics</h2>
          </div>
          <div className="ml-12 border-l-2 border-red-500 pl-6 pb-6">
            <h3 className="text-xl font-semibold mb-3">Advanced Design Patterns</h3>
            <ul className="list-disc ml-5 mb-4 space-y-2 text-gray-700">
              <li>Architectural Patterns: MVC, MVVM, Hexagonal</li>
              <li>Concurrency Patterns</li>
              <li>Enterprise Integration Patterns</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">System Design Considerations</h3>
            <ul className="list-disc ml-5 mb-4 space-y-2 text-gray-700">
              <li>Performance Optimization</li>
              <li>Scalability Planning</li>
              <li>Security By Design</li>
              <li>Testability and Maintainability</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-lld-lightPurple p-6 rounded-lg border border-lld-purple">
          <h3 className="font-bold text-xl mb-2 text-lld-purple">Ready to start your journey?</h3>
          <p className="mb-4 text-gray-700">Begin with the foundations and gradually progress through each step. Remember that building a strong foundation is crucial for mastering advanced concepts.</p>
          <button className="bg-lld-purple text-white py-2 px-6 rounded-md hover:bg-lld-darkPurple transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
