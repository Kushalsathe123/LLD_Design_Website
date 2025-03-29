import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code, FileText } from 'lucide-react';

const FactoryMethodPattern = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/patterns" className="text-sm text-lld-purple hover:text-lld-darkPurple flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Patterns</span>
          </Link>
        </div>

        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">Beginner</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 ml-2">Creational Pattern</span>
          <h1 className="text-4xl font-bold mb-4">Factory Method Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you're building a logistics management application. Initially, your app only handled transportation by trucks, so most of your code was in the Truck class.
          </p>
          <p className="mb-4">
            Later, your app became popular, and you received requests to include sea transportation as well. This would require significant changes to your codebase, as most of your code is coupled with the Truck class.
          </p>
          <p>
            Each time you need to add a new transportation type, you need to modify the entire codebase, which violates the Open/Closed Principle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Factory Method pattern suggests replacing direct object construction calls with calls to a special factory method.
          </p>
          <p className="mb-4">
            Objects returned by a factory method are often referred to as "products."
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// Product interface
interface Transport {
  deliver(): void;
}

// Concrete Products
class Truck implements Transport {
  deliver(): void {
    console.log("Deliver by land in a box");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("Deliver by sea in a container");
  }
}

// Creator abstract class
abstract class Logistics {
  // Factory Method
  abstract createTransport(): Transport;
  
  planDelivery(): void {
    // Call the factory method to create a Transport object
    const transport = this.createTransport();
    
    console.log("Planning the route...");
    // Use the product to deliver
    transport.deliver();
  }
}

// Concrete Creators
class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

// Client code
function deliverProduct(logistics: Logistics) {
  console.log("Client: I'm not aware of the creator's class");
  logistics.planDelivery();
}

// Application can configure itself with different types of logistics
deliverProduct(new RoadLogistics());
deliverProduct(new SeaLogistics());`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you don't know beforehand the exact types and dependencies of the objects your code should work with.</li>
            <li>When you want to provide users of your library or framework with a way to extend its internal components.</li>
            <li>When you want to save system resources by reusing existing objects instead of rebuilding them each time.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You avoid tight coupling between the creator and the concrete products.</li>
                <li>Single Responsibility Principle: You can move the product creation code into one place.</li>
                <li>Open/Closed Principle: You can introduce new types of products without breaking existing code.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The code may become more complicated since you need to introduce a lot of new subclasses.</li>
                <li>The pattern requires creating inheritance hierarchies for both the creator and the product.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/singleton">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Singleton Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns/builder">
              Next: Builder Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FactoryMethodPattern;