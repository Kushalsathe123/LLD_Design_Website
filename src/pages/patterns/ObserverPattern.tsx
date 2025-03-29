import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Bell } from 'lucide-react';

const ObserverPattern = () => {
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
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 ml-2">Behavioral Pattern</span>
          <h1 className="text-4xl font-bold mb-4">Observer Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you have two types of objects: a Customer and a Store. The customer is interested in a specific brand of product that should become available in the store soon.
          </p>
          <p className="mb-4">
            The customer could visit the store every day to check product availability. But this would waste time when the product is not yet available.
          </p>
          <p>
            On the other hand, the store could send notifications to all customers each time a new product arrives. This would spam many customers who aren't interested in the new product.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Observer pattern suggests that you add a subscription mechanism to the publisher class (the store) so individual objects (customers) can subscribe to or unsubscribe from a stream of events (product availability).
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// Observer interface
interface Observer {
  update(subject: Subject): void;
}

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject - WeatherStation
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }

    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  // Business logic that triggers notifications
  setTemperature(temperature: number): void {
    console.log(\`WeatherStation: Temperature changed to \${temperature} degrees Celsius\`);
    this.temperature = temperature;
    this.notify();
  }

  getTemperature(): number {
    return this.temperature;
  }
}

// Concrete Observer - Display device
class TemperatureDisplay implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(subject: WeatherStation): void {
    if (subject instanceof WeatherStation) {
      console.log(\`\${this.name}: Reacted to the temperature change. New temperature: \${subject.getTemperature()} degrees Celsius\`);
    }
  }
}

// Client code
const weatherStation = new WeatherStation();

const phoneDisplay = new TemperatureDisplay('Phone Display');
const tabletDisplay = new TemperatureDisplay('Tablet Display');

weatherStation.attach(phoneDisplay);
weatherStation.attach(tabletDisplay);

weatherStation.setTemperature(25);  // Both displays will update
weatherStation.setTemperature(30);  // Both displays will update again

// Detach one observer
weatherStation.detach(phoneDisplay);

weatherStation.setTemperature(35);  // Only tablet display will update now

// React-style observer example with event names
class EventEmitter {
  private events: { [key: string]: Function[] } = {};

  subscribe(eventName: string, callback: Function): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  unsubscribe(eventName: string, callback: Function): void {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
  }

  emit(eventName: string, data?: any): void {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach(callback => callback(data));
  }
}

// Example with EventEmitter
const store = new EventEmitter();

// Customer 1 is interested in iPhone products
const customer1Callback = (product: string) => {
  console.log(\`Customer 1 received notification about: \${product}\`);
};
store.subscribe('iPhone', customer1Callback);

// Customer 2 is interested in Samsung products
store.subscribe('Samsung', (product: string) => {
  console.log(\`Customer 2 received notification about: \${product}\`);
});

// Both customers are interested in discount events
const discountCallback = (discount: string) => {
  console.log(\`All customers receive discount notification: \${discount}\`);
};
store.subscribe('discount', discountCallback);

// Store events
store.emit('iPhone', 'iPhone 15 Pro is now available');  // Only Customer 1 is notified
store.emit('Samsung', 'Samsung Galaxy S23 is now available');  // Only Customer 2 is notified
store.emit('discount', '20% off on all products this weekend');  // Both customers are notified

// Customer 1 unsubscribes from iPhone notifications
store.unsubscribe('iPhone', customer1Callback);
store.emit('iPhone', 'iPhone 15 Pro Max is now available');  // No one is notified`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>When changes to the state of one object may require changing other objects, and the set of objects is unknown or changes dynamically.</li>
            <li>When some objects in your app must observe others, but only for a limited time or in specific cases.</li>
            <li>When an object should be able to notify other objects without making assumptions about what these objects are.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open/Closed Principle: You can introduce new subscriber classes without having to modify the publisher's code.</li>
                <li>You can establish relations between objects at runtime.</li>
                <li>Publishers are completely unaware of concrete subscriber classes. Subscribers can be added and removed independently.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscribers are notified in random order (usually by the order they were added).</li>
                <li>If not implemented carefully, the pattern can introduce memory leaks when observers fail to unsubscribe from subjects they no longer need.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/proxy">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Proxy Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns/strategy">
              Next: Strategy Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ObserverPattern;
