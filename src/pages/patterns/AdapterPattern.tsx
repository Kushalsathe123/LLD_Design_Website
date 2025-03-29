import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code, FileText } from 'lucide-react';

const AdapterPattern = () => {
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
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 ml-2">Structural Pattern</span>
          <h1 className="text-4xl font-bold mb-4">Adapter Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Adapter pattern allows objects with incompatible interfaces to collaborate. It acts as a wrapper between objects, converting the interface of one object to match what another object expects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you're building an application that displays statistical data as charts. You've found a nice third-party chart library that perfectly fits your needs.
          </p>
          <p className="mb-4">
            But there's a catch: your data is structured in a way that's incompatible with what the charting library expects. The library expects data in XML format, but your application works with JSON.
          </p>
          <p>
            You could change your application to work with XML, but that might affect code that's already working well with JSON. And you certainly can't change the library's code.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Adapter pattern suggests creating a special object (an adapter) that converts the interface of one object to match what another expects.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// Target interface
interface Target {
  request(): string;
}

// The existing class with an incompatible interface
class Adaptee {
  specificRequest(): string {
    return 'Specific request from Adaptee';
  }
}

// Adapter makes Adaptee's interface compatible with Target's
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  // The adapter method
  request(): string {
    const result = this.adaptee.specificRequest();
    return \`Adapter: (TRANSLATED) \${result}\`;
  }
}

// Client code that works with the Target interface
function clientCode(target: Target) {
  console.log(target.request());
}

// Client code can work with any class that follows the Target interface
const adaptee = new Adaptee();
console.log('Client: I can\'t work with the Adaptee:');
console.log(\`Adaptee: \${adaptee.specificRequest()}\`);

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);

// A real-world example: Converting JSON data to XML for a chart library
interface ChartLibrary {
  displayChart(xmlData: string): void;
}

class ThirdPartyChartLibrary implements ChartLibrary {
  displayChart(xmlData: string): void {
    console.log(\`Chart Library: Displaying chart with data: \${xmlData}\`);
  }
}

class JsonToXmlAdapter implements ChartLibrary {
  private chartLibrary: ThirdPartyChartLibrary;

  constructor(chartLibrary: ThirdPartyChartLibrary) {
    this.chartLibrary = chartLibrary;
  }

  displayChart(jsonData: string): void {
    // Convert JSON to XML
    const xmlData = this.convertJsonToXml(jsonData);
    // Call the adapted method
    this.chartLibrary.displayChart(xmlData);
  }

  private convertJsonToXml(jsonData: string): string {
    // Simplified conversion for example
    console.log(\`Adapter: Converting JSON to XML: \${jsonData}\`);
    return \`<data>\${jsonData}</data>\`;
  }
}

// Client application
const jsonData = '{"points": [1, 2, 3, 4, 5]}';
const chartLibrary = new ThirdPartyChartLibrary();
const jsonToXmlAdapter = new JsonToXmlAdapter(chartLibrary);

// Now we can use our JSON data with the chart library
jsonToXmlAdapter.displayChart(jsonData);`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you want to use an existing class, but its interface isn't compatible with the rest of your code.</li>
            <li>When you need to reuse several existing subclasses but lack certain common functionality that cannot be added to the superclass.</li>
            <li>When you want to use a class but don't have access to its source code.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Single Responsibility Principle: You can separate the interface or data conversion code from the primary business logic.</li>
                <li>Open/Closed Principle: You can introduce new types of adapters without breaking existing client code.</li>
                <li>You can integrate classes that couldn't otherwise work together due to incompatible interfaces.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The overall complexity of the code increases because you need to introduce new interfaces and classes.</li>
                <li>Sometimes it's simpler to change the service class so that it matches the rest of your code.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/builder">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Builder Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns/composite">
              Next: Composite Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdapterPattern;