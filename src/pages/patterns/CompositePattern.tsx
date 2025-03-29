import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code, FileText } from 'lucide-react';

const CompositePattern = () => {
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
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 ml-2">Structural Pattern</span>
          <h1 className="text-4xl font-bold mb-4">Composite Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Composite pattern lets you compose objects into tree structures and then work with these structures as if they were individual objects. It enables clients to treat individual objects and compositions of objects uniformly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you're building an application that works with geometric shapes. Your starting classes are simple: a Circle and a Rectangle.
          </p>
          <p className="mb-4">
            But then you decide to add a feature that lets users group shapes together to form more complex shapes. These groups can include simple shapes like circles and rectangles, as well as other groups.
          </p>
          <p>
            The problem is that your code now needs to distinguish individual shapes from groups, which increases its complexity and makes it error-prone.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Composite pattern suggests that you work with geometric shapes through a common interface which declares operations like draw() for both simple shapes and complex shapes.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// Component interface
interface Graphic {
  move(x: number, y: number): void;
  draw(): void;
}

// Leaf class
class SimpleShape implements Graphic {
  private x: number = 0;
  private y: number = 0;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
    console.log(\`\${this.name} moved to (\${this.x}, \${this.y})\`);
  }

  draw(): void {
    console.log(\`Drawing \${this.name} at (\${this.x}, \${this.y})\`);
  }
}

// Composite class
class CompositeGraphic implements Graphic {
  private children: Graphic[] = [];
  private name: string;
  private x: number = 0;
  private y: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  add(graphic: Graphic): void {
    this.children.push(graphic);
  }

  remove(graphic: Graphic): void {
    const index = this.children.indexOf(graphic);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
    console.log(\`\${this.name} group moved to (\${this.x}, \${this.y})\`);
    
    for (const child of this.children) {
      child.move(x, y);
    }
  }

  draw(): void {
    console.log(\`Drawing \${this.name} group at (\${this.x}, \${this.y})\`);
    
    for (const child of this.children) {
      child.draw();
    }
  }
}

// Client code
const circle = new SimpleShape("Circle");
const rectangle = new SimpleShape("Rectangle");

// Create a group and add shapes to it
const group = new CompositeGraphic("Main");
group.add(circle);
group.add(rectangle);

// Create another group
const subGroup = new CompositeGraphic("Sub");
subGroup.add(new SimpleShape("Triangle"));

// Add the second group to the first group
group.add(subGroup);

// Moving the main group moves all the shapes
group.move(1, 2);

// Drawing the main group draws all the shapes
group.draw();`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you're working with tree-like object structures.</li>
            <li>When you want clients to be able to ignore the difference between compositions of objects and individual objects.</li>
            <li>When the components of your hierarchy can be nested to any level.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can work with complex tree structures more conveniently.</li>
                <li>Open/Closed Principle: You can introduce new element types without breaking existing code.</li>
                <li>It simplifies client code by allowing it to treat complex and primitive objects uniformly.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>It might be difficult to provide a common interface for classes whose functionality differs too much.</li>
                <li>In certain scenarios, the Composite pattern might overcomplicate your design.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/adapter">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Adapter Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns/proxy">
              Next: Proxy Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompositePattern;