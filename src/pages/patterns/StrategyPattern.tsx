
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code } from 'lucide-react';

const StrategyPattern = () => {
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
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 ml-2">Behavioral Pattern</span>
          <h1 className="text-4xl font-bold mb-4">Strategy Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you're building a navigation app that helps users find routes between locations. Initially, your app only calculated routes for driving, but as it grew in popularity, users started asking for options like walking, cycling, and public transport.
          </p>
          <p className="mb-4">
            Each time you add a new navigation strategy, your main navigation class grows larger and becomes more difficult to maintain. If you decide to add another strategy, you have to modify the class again, violating the Open/Closed Principle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Strategy pattern suggests taking a class that does something specific in multiple different ways and extracting all these algorithms into separate classes called strategies.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// Strategy interface
interface RouteStrategy {
  buildRoute(pointA: string, pointB: string): string;
}

// Concrete strategies
class DrivingStrategy implements RouteStrategy {
  buildRoute(pointA: string, pointB: string): string {
    return \`Drive from \${pointA} to \${pointB} via highways\`;
  }
}

class WalkingStrategy implements RouteStrategy {
  buildRoute(pointA: string, pointB: string): string {
    return \`Walk from \${pointA} to \${pointB} via pedestrian paths\`;
  }
}

class PublicTransportStrategy implements RouteStrategy {
  buildRoute(pointA: string, pointB: string): string {
    return \`Take the bus from \${pointA} to \${pointB}\`;
  }
}

class CyclingStrategy implements RouteStrategy {
  buildRoute(pointA: string, pointB: string): string {
    return \`Cycle from \${pointA} to \${pointB} via cycling lanes\`;
  }
}

// Context class
class Navigator {
  private strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy;
  }

  buildRoute(pointA: string, pointB: string): string {
    return this.strategy.buildRoute(pointA, pointB);
  }
}

// Client code
function clientCode() {
  const navigator = new Navigator(new DrivingStrategy());
  
  console.log("Client: Strategy is set to driving");
  console.log(navigator.buildRoute("Home", "Work"));
  
  console.log("Client: Strategy is changed to walking");
  navigator.setStrategy(new WalkingStrategy());
  console.log(navigator.buildRoute("Home", "Park"));
  
  console.log("Client: Strategy is changed to public transport");
  navigator.setStrategy(new PublicTransportStrategy());
  console.log(navigator.buildRoute("Home", "Downtown"));
  
  console.log("Client: Strategy is changed to cycling");
  navigator.setStrategy(new CyclingStrategy());
  console.log(navigator.buildRoute("Home", "Beach"));
}

clientCode();

// Another example with payment methods
interface PaymentStrategy {
  pay(amount: number): boolean;
}

class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private cvv: string;
  private dateOfExpiry: string;
  private cardHolderName: string;

  constructor(cardNumber: string, cvv: string, dateOfExpiry: string, cardHolderName: string) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.dateOfExpiry = dateOfExpiry;
    this.cardHolderName = cardHolderName;
  }

  pay(amount: number): boolean {
    console.log(\`Paying \${amount} using Credit Card\`);
    return true;
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  pay(amount: number): boolean {
    console.log(\`Paying \${amount} using PayPal\`);
    return true;
  }
}

class BitcoinPayment implements PaymentStrategy {
  private address: string;

  constructor(address: string) {
    this.address = address;
  }

  pay(amount: number): boolean {
    console.log(\`Paying \${amount} using Bitcoin\`);
    return true;
  }
}

class ShoppingCart {
  private paymentStrategy: PaymentStrategy;
  private items: { name: string, price: number }[] = [];

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  addItem(item: { name: string, price: number }): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  checkout(): boolean {
    const amount = this.calculateTotal();
    return this.paymentStrategy.pay(amount);
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime.</li>
            <li>When you have many similar classes that only differ in how they execute some behavior.</li>
            <li>When you want to isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic.</li>
            <li>When your class has a massive conditional statement that switches between different variants of the same algorithm.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can swap algorithms used inside an object at runtime.</li>
                <li>You can isolate the implementation details of an algorithm from the code that uses it.</li>
                <li>You can replace inheritance with composition.</li>
                <li>Open/Closed Principle: You can introduce new strategies without having to change the context.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>If you only have a few algorithms and they rarely change, there might be no real reason to add the additional complexity.</li>
                <li>Clients must be aware of the differences between strategies to select the appropriate one.</li>
                <li>Modern programming languages have functional type support that enables implementing different versions of an algorithm inside a set of anonymous functions, which are easier to use than separate strategy classes.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/observer">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Observer Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns/command">
              Next: Command Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StrategyPattern;