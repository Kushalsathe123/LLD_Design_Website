
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Bookmark, CheckCircle2, Code, FileText, GraduationCap } from 'lucide-react';

const SOLIDPrinciples = () => {
  const principles = [
    {
      title: "Single Responsibility Principle",
      acronym: "S",
      description: "A class should have only one reason to change, meaning it should have only one job or responsibility.",
      icon: <Code className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `// Bad: Class has multiple responsibilities\nclass User {\n  name: string;\n  email: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n  validateEmail(): boolean {\n    // Email validation logic\n    return /^\\S+@\\S+\\.\\S+$/.test(this.email);\n  }\n\n  saveToDatabase(): void {\n    // Database logic here\n    console.log(\`Saving user \${this.name} to database\`);\n  }\n\n  sendWelcomeEmail(): void {\n    // Email sending logic here\n    console.log(\`Sending welcome email to \${this.email}\`);\n  }\n}\n\n// Good: Separated responsibilities\nclass User {\n  name: string;\n  email: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n}\n\nclass UserValidator {\n  validateEmail(email: string): boolean {\n    return /^\\S+@\\S+\\.\\S+$/.test(email);\n  }\n}\n\nclass UserRepository {\n  save(user: User): void {\n    console.log(\`Saving user \${user.name} to database\`);\n  }\n}\n\nclass EmailService {\n  sendWelcomeEmail(email: string): void {\n    console.log(\`Sending welcome email to \${email}\`);\n  }\n}`
        }
      ]
    },
    {
      title: "Open/Closed Principle",
      acronym: "O",
      description: "Software entities should be open for extension but closed for modification. You should be able to add new functionality without changing existing code.",
      icon: <FileText className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `// Bad: Violating Open/Closed\nclass Rectangle {\n  width: number;\n  height: number;\n\n  constructor(width: number, height: number) {\n    this.width = width;\n    this.height = height;\n  }\n}\n\nclass Circle {\n  radius: number;\n\n  constructor(radius: number) {\n    this.radius = radius;\n  }\n}\n\nclass AreaCalculator {\n  calculateArea(shape: Rectangle | Circle): number {\n    if (shape instanceof Rectangle) {\n      return shape.width * shape.height;\n    } else if (shape instanceof Circle) {\n      return Math.PI * shape.radius * shape.radius;\n    }\n    return 0;\n  }\n}\n\n// Good: Following Open/Closed\ninterface Shape {\n  calculateArea(): number;\n}\n\nclass Rectangle implements Shape {\n  constructor(private width: number, private height: number) {}\n\n  calculateArea(): number {\n    return this.width * this.height;\n  }\n}\n\nclass Circle implements Shape {\n  constructor(private radius: number) {}\n\n  calculateArea(): number {\n    return Math.PI * this.radius * this.radius;\n  }\n}\n\n// Now we can add new shapes without changing existing code\nclass Triangle implements Shape {\n  constructor(\n    private base: number,\n    private height: number\n  ) {}\n\n  calculateArea(): number {\n    return (this.base * this.height) / 2;\n  }\n}`
        }
      ]
    },
    {
      title: "Liskov Substitution Principle",
      acronym: "L",
      description: "Subtypes must be substitutable for their base types without altering the correctness of the program.",
      icon: <GraduationCap className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `// Bad: Violating Liskov Substitution\nclass Bird {\n  fly(): void {\n    console.log('Flying...');\n  }\n}\n\nclass Ostrich extends Bird {\n  fly(): void {\n    throw new Error('Ostriches cannot fly!');\n  }\n}\n\nfunction makeBirdFly(bird: Bird): void {\n  bird.fly(); // Will throw error for Ostrich\n}\n\nconst bird = new Bird();\nconst ostrich = new Ostrich();\n\nmakeBirdFly(bird); // Works fine\nmakeBirdFly(ostrich); // Throws error!\n\n// Good: Following Liskov Substitution\nclass Bird {\n  move(): void {\n    console.log('Moving...');\n  }\n}\n\nclass FlyingBird extends Bird {\n  fly(): void {\n    console.log('Flying...');\n  }\n\n  move(): void {\n    this.fly();\n  }\n}\n\nclass FlightlessBird extends Bird {\n  walk(): void {\n    console.log('Walking...');\n  }\n\n  move(): void {\n    this.walk();\n  }\n}\n\nfunction makeBirdMove(bird: Bird): void {\n  bird.move(); // Works for all birds\n}\n\nconst eagle = new FlyingBird();\nconst ostrich = new FlightlessBird();\n\nmakeBirdMove(eagle); // Works fine\nmakeBirdMove(ostrich); // Also works fine`
        }
      ]
    },
    {
      title: "Interface Segregation Principle",
      acronym: "I",
      description: "Clients should not be forced to depend on interfaces they do not use. Many client-specific interfaces are better than one general-purpose interface.",
      icon: <CheckCircle2 className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `// Bad: Fat interface\ninterface Worker {\n  work(): void;\n  eat(): void;\n  sleep(): void;\n}\n\nclass Human implements Worker {\n  work() { console.log('Working'); }\n  eat() { console.log('Eating'); }\n  sleep() { console.log('Sleeping'); }\n}\n\nclass Robot implements Worker {\n  work() { console.log('Working'); }\n  eat() { throw new Error('Robots do not eat'); } // Forced to implement\n  sleep() { throw new Error('Robots do not sleep'); } // Forced to implement\n}\n\n// Good: Segregated interfaces\ninterface Workable {\n  work(): void;\n}\n\ninterface Eatable {\n  eat(): void;\n}\n\ninterface Sleepable {\n  sleep(): void;\n}\n\nclass Human implements Workable, Eatable, Sleepable {\n  work() { console.log('Working'); }\n  eat() { console.log('Eating'); }\n  sleep() { console.log('Sleeping'); }\n}\n\nclass Robot implements Workable {\n  work() { console.log('Working'); }\n  // No need to implement eat() and sleep()\n}`
        }
      ]
    },
    {
      title: "Dependency Inversion Principle",
      acronym: "D",
      description: "High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.",
      icon: <Bookmark className="h-5 w-5" />,
      examples: [
        {
          language: "TypeScript",
          code: `// Bad: High-level module depends on low-level module\nclass MySQLDatabase {\n  connect(): void {\n    console.log('Connected to MySQL database');\n  }\n\n  query(sql: string): any[] {\n    console.log(\`Executing query: \${sql}\`);\n    return [];\n  }\n}\n\nclass UserRepository {\n  private database: MySQLDatabase;\n\n  constructor() {\n    this.database = new MySQLDatabase(); // Direct dependency\n  }\n\n  getUsers(): any[] {\n    this.database.connect();\n    return this.database.query('SELECT * FROM users');\n  }\n}\n\n// Good: Using dependency inversion\ninterface Database {\n  connect(): void;\n  query(sql: string): any[];\n}\n\nclass MySQLDatabase implements Database {\n  connect(): void {\n    console.log('Connected to MySQL database');\n  }\n\n  query(sql: string): any[] {\n    console.log(\`Executing MySQL query: \${sql}\`);\n    return [];\n  }\n}\n\nclass PostgreSQLDatabase implements Database {\n  connect(): void {\n    console.log('Connected to PostgreSQL database');\n  }\n\n  query(sql: string): any[] {\n    console.log(\`Executing PostgreSQL query: \${sql}\`);\n    return [];\n  }\n}\n\nclass UserRepository {\n  private database: Database;\n\n  constructor(database: Database) {\n    this.database = database; // Dependency injection\n  }\n\n  getUsers(): any[] {\n    this.database.connect();\n    return this.database.query('SELECT * FROM users');\n  }\n}`
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
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">Intermediate</span>
          <h1 className="text-4xl font-bold mb-4">SOLID Principles</h1>
          <p className="text-xl text-gray-700 mb-6">
            Master the five key principles of object-oriented design that make software more maintainable, flexible, and easy to understand.
          </p>

          <div className="bg-lld-lightPurple p-4 rounded-lg mb-8 border border-lld-purple/20">
            <div className="flex items-start">
              <div className="bg-lld-purple rounded-full p-2 mr-4">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Why SOLID matters</h3>
                <p className="text-gray-700">
                  These principles were introduced by Robert C. Martin and form the foundation for writing clean, maintainable, and scalable code. They help developers create software that is easy to extend, modify, test, and refactor without breaking existing functionality.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Single Responsibility</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Open/Closed</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Liskov Substitution</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Interface Segregation</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Dependency Inversion</span>
          </div>
        </div>

        <div className="space-y-10">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-lld-lightPurple rounded-full p-2 mr-3">
                  {principle.icon}
                </div>
                <div>
                  <span className="text-sm font-bold text-lld-purple">{principle.acronym}</span>
                  <h2 className="text-2xl font-semibold">{principle.title}</h2>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{principle.description}</p>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-medium mb-2 text-gray-800">Example in {principle.examples[0].language}</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
                  <code>{principle.examples[0].code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button asChild variant="outline" className="flex items-center">
            <Link to="/roadmap/oop-fundamentals">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: OOP Fundamentals
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/roadmap/design-patterns">
              Next: Design Patterns
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SOLIDPrinciples;
