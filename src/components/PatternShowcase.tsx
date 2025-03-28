
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, LayoutGrid, Repeat, Layers } from 'lucide-react';

const PatternShowcase = () => {
  const patternCategories = [
    {
      id: "creational",
      name: "Creational Patterns",
      description: "These patterns deal with object creation mechanisms, increasing flexibility and reuse of existing code.",
      patterns: [
        { name: "Singleton", description: "Ensures a class has only one instance and provides a global point of access to it" },
        { name: "Factory Method", description: "Defines an interface for creating an object, but lets subclasses decide which class to instantiate" },
        { name: "Builder", description: "Separates the construction of a complex object from its representation" }
      ]
    },
    {
      id: "structural",
      name: "Structural Patterns",
      description: "These patterns focus on simplifying the composition of objects and classes to form larger structures.",
      patterns: [
        { name: "Adapter", description: "Converts the interface of a class into another interface clients expect" },
        { name: "Decorator", description: "Attaches additional responsibilities to an object dynamically" },
        { name: "Composite", description: "Composes objects into tree structures to represent part-whole hierarchies" }
      ]
    },
    {
      id: "behavioral",
      name: "Behavioral Patterns",
      description: "These patterns are concerned with algorithms and the assignment of responsibilities between objects.",
      patterns: [
        { name: "Observer", description: "Defines a one-to-many dependency between objects so that when one changes state, all dependents are notified" },
        { name: "Strategy", description: "Defines a family of algorithms, encapsulates each one, and makes them interchangeable" },
        { name: "Command", description: "Encapsulates a request as an object, allowing parametrization of clients with queues, requests, and operations" }
      ]
    }
  ];

  const patternIcons = {
    creational: <LayoutGrid className="w-5 h-5" />,
    structural: <Layers className="w-5 h-5" />,
    behavioral: <Repeat className="w-5 h-5" />
  };

  return (
    <section id="design-patterns" className="py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2>Explore Design Patterns</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Discover the key design patterns that professional developers use to create maintainable and scalable systems
          </p>
        </div>

        <Tabs defaultValue="creational" className="w-full max-w-4xl mx-auto animate-fade-in">
          <TabsList className="grid grid-cols-3 mb-8">
            {patternCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2 py-2">
                {patternIcons[category.id as keyof typeof patternIcons]}
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {patternCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="px-2">
              <div className="mb-6">
                <p className="text-gray-700">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {category.patterns.map((pattern, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl mb-2">{pattern.name}</h3>
                      <p className="text-gray-600 text-sm">{pattern.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-10">
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple">
            <Link to="/patterns" className="inline-flex items-center">
              View All Patterns
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatternShowcase;
