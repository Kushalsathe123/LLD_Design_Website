
import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const resources = [
    {
      title: "Books",
      items: [
        { name: "Clean Code by Robert C. Martin", link: "#", description: "A handbook of agile software craftsmanship" },
        { name: "Design Patterns: Elements of Reusable Object-Oriented Software", link: "#", description: "The classic 'Gang of Four' book on design patterns" },
        { name: "Head First Design Patterns", link: "#", description: "A brain-friendly guide to design patterns" }
      ]
    },
    {
      title: "Online Courses",
      items: [
        { name: "Design Patterns in Object Oriented Programming", link: "#", description: "Comprehensive video course on design patterns" },
        { name: "Software Architecture & Design", link: "#", description: "Learn about software architecture principles" },
        { name: "Clean Code: Writing Code for Humans", link: "#", description: "Learn how to write clean, maintainable code" }
      ]
    },
    {
      title: "Websites & Blogs",
      items: [
        { name: "RefactoringGuru", link: "https://refactoring.guru/", description: "Explanations and examples of design patterns" },
        { name: "SourceMaking", link: "https://sourcemaking.com/", description: "Design patterns, antipatterns, refactoring, UML" },
        { name: "Martin Fowler's Blog", link: "https://martinfowler.com/", description: "Articles on software design, patterns and architecture" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "PlantUML", link: "https://plantuml.com/", description: "Tool to create UML diagrams from text description" },
        { name: "draw.io", link: "https://www.draw.io/", description: "Free online diagram software for making flowcharts, process diagrams, etc." },
        { name: "Visual Paradigm", link: "#", description: "UML tool that supports all UML, SysML and ERD diagrams" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Low-Level Design Resources</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-lld-purple">Essential Resources for Low-Level Design</h2>
          <p className="text-gray-700 mb-4">
            This curated collection of resources will help you deepen your understanding of Low-Level Design concepts.
            From books and online courses to websites and tools, these resources cover different aspects of LLD.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resources.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-lld-purple p-4">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-lld-purple hover:underline"
                      >
                        {item.name}
                      </a>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-lld-lightPurple p-6 rounded-lg border border-lld-purple mb-8">
          <h3 className="font-bold text-xl mb-2 text-lld-purple">Suggest a Resource</h3>
          <p className="mb-4 text-gray-700">Know a great resource that's not listed here? Let us know and we'll consider adding it to our collection!</p>
          <button className="bg-lld-purple text-white py-2 px-6 rounded-md hover:bg-lld-darkPurple transition-colors">
            Suggest Resource
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 text-lld-purple">Looking for more guidance?</h3>
          <p className="text-gray-700 mb-4">
            Our structured roadmap will guide you through the process of learning low-level design concepts step by step.
          </p>
          <Link to="/roadmap" className="inline-block bg-lld-purple text-white py-2 px-6 rounded-md hover:bg-lld-darkPurple transition-colors">
            View Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
