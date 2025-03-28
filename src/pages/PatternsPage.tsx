
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PatternsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [levelFilter, setLevelFilter] = useState('All Levels');
  
  const patterns = {
    creational: [
      {
        name: "Singleton",
        description: "Ensures a class has only one instance and provides a global point of access to it.",
        category: "Creational Pattern",
        level: "Beginner",
        link: "/patterns/singleton"
      },
      {
        name: "Factory Method",
        description: "Defines an interface for creating an object, but lets subclasses decide which class to instantiate.",
        category: "Creational Pattern",
        level: "Beginner",
        link: "/patterns/factory-method"
      },
      {
        name: "Builder",
        description: "Separates the construction of a complex object from its representation.",
        category: "Creational Pattern",
        level: "Intermediate",
        link: "/patterns/builder"
      }
    ],
    structural: [
      {
        name: "Adapter",
        description: "Allows incompatible interfaces to work together by wrapping an instance of one class into an adapter.",
        category: "Structural Pattern",
        level: "Beginner",
        link: "/patterns/adapter"
      },
      {
        name: "Composite",
        description: "Composes objects into tree structures to represent part-whole hierarchies.",
        category: "Structural Pattern",
        level: "Intermediate",
        link: "/patterns/composite"
      },
      {
        name: "Proxy",
        description: "Provides a surrogate or placeholder for another object to control access to it.",
        category: "Structural Pattern",
        level: "Intermediate",
        link: "/patterns/proxy"
      }
    ],
    behavioral: [
      {
        name: "Observer",
        description: "Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.",
        category: "Behavioral Pattern",
        level: "Beginner",
        link: "/patterns/observer"
      },
      {
        name: "Strategy",
        description: "Define a family of algorithms, encapsulate each one, and make them interchangeable.",
        category: "Behavioral Pattern",
        level: "Intermediate",
        link: "/patterns/strategy"
      },
      {
        name: "Command",
        description: "Encapsulates a request as an object, allowing you to parameterize clients with different requests.",
        category: "Behavioral Pattern",
        level: "Advanced",
        link: "/patterns/command"
      }
    ]
  };
  
  const getLevelBgColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Design Patterns</h1>
        <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint
          that can be customized to solve a particular design problem in your code.
        </p>
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search patterns..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lld-purple"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lld-purple"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option>All Categories</option>
              <option>Creational</option>
              <option>Structural</option>
              <option>Behavioral</option>
            </select>
            <select 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lld-purple"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
        
        {/* Pattern Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-lld-purple">Creational Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.creational.map((pattern, index) => (
              <Link to={pattern.link} key={index} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-lld-purple transition-colors h-full">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-lg">{pattern.name}</h3>
                      <span className={`${getLevelBgColor(pattern.level)} text-xs font-semibold px-2.5 py-0.5 rounded`}>
                        {pattern.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{pattern.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{pattern.category}</span>
                      <span className="text-lld-purple hover:text-lld-darkPurple text-sm font-medium flex items-center">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-lld-purple">Structural Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.structural.map((pattern, index) => (
              <Link to={pattern.link} key={index} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-lld-purple transition-colors h-full">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-lg">{pattern.name}</h3>
                      <span className={`${getLevelBgColor(pattern.level)} text-xs font-semibold px-2.5 py-0.5 rounded`}>
                        {pattern.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{pattern.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{pattern.category}</span>
                      <span className="text-lld-purple hover:text-lld-darkPurple text-sm font-medium flex items-center">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-lld-purple">Behavioral Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.behavioral.map((pattern, index) => (
              <Link to={pattern.link} key={index} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-lld-purple transition-colors h-full">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-lg">{pattern.name}</h3>
                      <span className={`${getLevelBgColor(pattern.level)} text-xs font-semibold px-2.5 py-0.5 rounded`}>
                        {pattern.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{pattern.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{pattern.category}</span>
                      <span className="text-lld-purple hover:text-lld-darkPurple text-sm font-medium flex items-center">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternsPage;
