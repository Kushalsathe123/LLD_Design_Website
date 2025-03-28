
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Bookmark, CheckCircle2, Code, FileText, GraduationCap } from 'lucide-react';

const OOPFundamentals = () => {
  const concepts = [
    {
      title: "Classes and Objects",
      description: "Learn about the building blocks of OOP - how classes define blueprints and objects are instances that bring those blueprints to life.",
      icon: <Code className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `class Car {\n  make: string;\n  model: string;\n  year: number;\n\n  constructor(make: string, model: string, year: number) {\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n\n  drive() {\n    console.log(\`Driving \${this.year} \${this.make} \${this.model}\`);\n  }\n}\n\nconst myCar = new Car('Toyota', 'Corolla', 2022);\nmyCar.drive(); // Outputs: Driving 2022 Toyota Corolla`
        }
      ]
    },
    {
      title: "Encapsulation",
      description: "Discover how encapsulation bundles data with the methods that operate on that data, controlling access to the internal state of objects.",
      icon: <FileText className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `class BankAccount {\n  private _balance: number = 0;\n\n  deposit(amount: number): void {\n    if (amount > 0) {\n      this._balance += amount;\n      console.log(\`Deposited \${amount}. New balance: \${this._balance}\`);\n    }\n  }\n\n  withdraw(amount: number): boolean {\n    if (amount <= this._balance) {\n      this._balance -= amount;\n      console.log(\`Withdrew \${amount}. New balance: \${this._balance}\`);\n      return true;\n    }\n    console.log('Insufficient funds');\n    return false;\n  }\n\n  get balance(): number {\n    return this._balance;\n  }\n}\n\nconst account = new BankAccount();\naccount.deposit(1000);\naccount.withdraw(500);\nconsole.log(account.balance);`
        }
      ]
    },
    {
      title: "Inheritance",
      description: "Explore how classes can inherit properties and methods from parent classes, promoting code reuse and establishing a hierarchy.",
      icon: <GraduationCap className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `class Animal {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  speak(): void {\n    console.log(\`\${this.name} makes a sound\`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name: string) {\n    super(name); // Call the parent constructor\n  }\n\n  speak(): void {\n    console.log(\`\${this.name} barks\`);\n  }\n}\n\nconst dog = new Dog('Rex');\ndog.speak(); // Outputs: Rex barks`
        }
      ]
    },
    {
      title: "Polymorphism",
      description: "Understand how polymorphism allows objects to be treated as instances of their parent class, enabling flexible and reusable code.",
      icon: <CheckCircle2 className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `interface Shape {\n  calculateArea(): number;\n}\n\nclass Circle implements Shape {\n  radius: number;\n\n  constructor(radius: number) {\n    this.radius = radius;\n  }\n\n  calculateArea(): number {\n    return Math.PI * this.radius * this.radius;\n  }\n}\n\nclass Rectangle implements Shape {\n  width: number;\n  height: number;\n\n  constructor(width: number, height: number) {\n    this.width = width;\n    this.height = height;\n  }\n\n  calculateArea(): number {\n    return this.width * this.height;\n  }\n}\n\n// Polymorphic function that works with any Shape\nfunction printArea(shape: Shape) {\n  console.log(\`Area: \${shape.calculateArea().toFixed(2)}\`);\n}\n\nconst circle = new Circle(5);\nconst rectangle = new Rectangle(4, 6);\n\nprintArea(circle); // Output: Area: 78.54\nprintArea(rectangle); // Output: Area: 24.00`
        }
      ]
    },
    {
      title: "Abstraction",
      description: "Learn how abstraction simplifies complex systems by modeling classes based on essential properties and behaviors.",
      icon: <Bookmark className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `abstract class Database {\n  abstract connect(): void;\n  abstract query(sql: string): any[];\n  abstract close(): void;\n\n  // Common functionality\n  executeQuery(sql: string): any[] {\n    this.connect();\n    const result = this.query(sql);\n    this.close();\n    return result;\n  }\n}\n\nclass MySQLDatabase extends Database {\n  connect(): void {\n    console.log('Connected to MySQL database');\n  }\n\n  query(sql: string): any[] {\n    console.log(\`Executing MySQL query: \${sql}\`);\n    return [{ id: 1, name: 'Example Data' }];\n  }\n\n  close(): void {\n    console.log('Closed MySQL connection');\n  }\n}\n\nconst db = new MySQLDatabase();\nconst results = db.executeQuery('SELECT * FROM users');`
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/roadmap" className="text-sm text-lld-purple hover:text-lld-darkPurple flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Roadmap</span>
          </Link>
        </div>

        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">Foundation</span>
          <h1 className="text-4xl font-bold mb-4">Object-Oriented Programming Fundamentals</h1>
          <p className="text-xl text-gray-700 mb-6">
            Master the core concepts of OOP to create maintainable, modular, and reusable software designs. These principles form the foundation for effective low-level design.
          </p>

          <div className="bg-lld-lightPurple p-4 rounded-lg mb-8 border border-lld-purple/20">
            <div className="flex items-start">
              <div className="bg-lld-purple rounded-full p-2 mr-4">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">What you'll learn</h3>
                <p className="text-gray-700">
                  Understand the 5 core principles of Object-Oriented Programming: Classes & Objects, Encapsulation, Inheritance, Polymorphism, and Abstraction.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Classes</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Objects</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Encapsulation</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Inheritance</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Polymorphism</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Abstraction</span>
          </div>
        </div>

        <div className="space-y-10">
          {concepts.map((concept, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-lld-lightPurple rounded-full p-2 mr-3">
                  {concept.icon}
                </div>
                <h2 className="text-2xl font-semibold">{concept.title}</h2>
              </div>

              <p className="text-gray-700 mb-6">{concept.description}</p>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-medium mb-2 text-gray-800">Example in {concept.examples[0].language}</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
                  <code>{concept.examples[0].code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous: Introduction
          </Button>
          <Button className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            Next: SOLID Principles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OOPFundamentals;
