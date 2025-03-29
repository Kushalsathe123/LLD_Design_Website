import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code, FileText } from 'lucide-react';

const BuilderPattern = () => {
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
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">Intermediate</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 ml-2">Creational Pattern</span>
          <h1 className="text-4xl font-bold mb-4">Builder Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Builder pattern allows you to construct complex objects step by step. It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you're creating a house-building application. The simplest house might need just four walls and a floor, but what about more complex houses with swimming pools, fancy gardens, or smart home systems?
          </p>
          <p className="mb-4">
            You could create a giant House class with all possible parameters for all types of houses, but most of those parameters would be unused, making the constructor calls messy.
          </p>
          <p>
            Another approach could be creating subclasses for each house type, but this would lead to a huge class hierarchy and still not solve the problem of customizing houses with arbitrary features.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Builder pattern suggests extracting the object construction code out of its own class and moving it to separate objects called builders.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// The product class
class House {
  private walls: number = 0;
  private doors: number = 0;
  private windows: number = 0;
  private hasPool: boolean = false;
  private hasGarage: boolean = false;
  private hasGarden: boolean = false;

  setWalls(count: number) {
    this.walls = count;
  }

  setDoors(count: number) {
    this.doors = count;
  }

  setWindows(count: number) {
    this.windows = count;
  }

  setPool(has: boolean) {
    this.hasPool = has;
  }

  setGarage(has: boolean) {
    this.hasGarage = has;
  }

  setGarden(has: boolean) {
    this.hasGarden = has;
  }

  describe(): string {
    return \`House with \${this.walls} walls, \${this.doors} doors, \${this.windows} windows.\${
      this.hasPool ? ' Has a pool.' : ''
    }\${this.hasGarage ? ' Has a garage.' : ''}\${this.hasGarden ? ' Has a garden.' : ''}\`;
  }
}

// The builder interface
interface HouseBuilder {
  buildWalls(): void;
  buildDoors(): void;
  buildWindows(): void;
  buildPool(): void;
  buildGarage(): void;
  buildGarden(): void;
  getResult(): House;
}

// Concrete builder for simple houses
class SimpleHouseBuilder implements HouseBuilder {
  private house: House = new House();

  buildWalls(): void {
    this.house.setWalls(4);
  }

  buildDoors(): void {
    this.house.setDoors(1);
  }

  buildWindows(): void {
    this.house.setWindows(4);
  }

  buildPool(): void {
    // No pool in a simple house
  }

  buildGarage(): void {
    // No garage in a simple house
  }

  buildGarden(): void {
    // No garden in a simple house
  }

  getResult(): House {
    return this.house;
  }
}

// Concrete builder for luxury houses
class LuxuryHouseBuilder implements HouseBuilder {
  private house: House = new House();

  buildWalls(): void {
    this.house.setWalls(8);
  }

  buildDoors(): void {
    this.house.setDoors(3);
  }

  buildWindows(): void {
    this.house.setWindows(12);
  }

  buildPool(): void {
    this.house.setPool(true);
  }

  buildGarage(): void {
    this.house.setGarage(true);
  }

  buildGarden(): void {
    this.house.setGarden(true);
  }

  getResult(): House {
    return this.house;
  }
}

// The director class
class HouseDirector {
  private builder: HouseBuilder;

  constructor(builder: HouseBuilder) {
    this.builder = builder;
  }

  constructHouse(): void {
    this.builder.buildWalls();
    this.builder.buildDoors();
    this.builder.buildWindows();
    this.builder.buildPool();
    this.builder.buildGarage();
    this.builder.buildGarden();
  }

  getHouse(): House {
    return this.builder.getResult();
  }
}

// Client code
const simpleBuilder = new SimpleHouseBuilder();
const simpleDirector = new HouseDirector(simpleBuilder);
simpleDirector.constructHouse();
const simpleHouse = simpleDirector.getHouse();
console.log(simpleHouse.describe());

const luxuryBuilder = new LuxuryHouseBuilder();
const luxuryDirector = new HouseDirector(luxuryBuilder);
luxuryDirector.constructHouse();
const luxuryHouse = luxuryDirector.getHouse();
console.log(luxuryHouse.describe());`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you want to construct complex objects with many optional parts or configurations.</li>
            <li>When the construction of an object needs to be independent of the parts that make it up.</li>
            <li>When the construction process must allow different representations of the constructed object.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can construct objects step-by-step, defer construction steps, or run steps recursively.</li>
                <li>You can reuse the same construction code for different representations of objects.</li>
                <li>Single Responsibility Principle: You can isolate complex construction code from the business logic.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Overall complexity of the code increases since the pattern requires creating multiple new classes.</li>
                <li>The client might be exposed to implementation details because the director is optional and the client might have to interact directly with builders.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/factory-method">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Factory Method Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns/adapter">
              Next: Adapter Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuilderPattern;