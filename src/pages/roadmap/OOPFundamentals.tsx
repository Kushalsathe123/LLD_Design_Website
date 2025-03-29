import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ArrowLeft, ArrowRight, Bookmark, CheckCircle2, Code, FileText, GraduationCap, 
         Lightbulb, ListChecks, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import CodeEditor from "@/components/CodeEditor";

// Define concept interface for type safety
interface ConceptExample {
  language: string;
  code: string;
}

interface ConceptQuiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Concept {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
  bestPractices: string[];
  commonPitfalls: string[];
  realWorldExample: string;
  quiz: ConceptQuiz[];
  examples: {
    typescript: { code: string };
    csharp: { code: string };
    java: { code: string };
    python: { code: string };
  };
}

const OOPFundamentals = () => {
  const [activeLanguage, setActiveLanguage] = useState("typescript");
  const [completedConcepts, setCompletedConcepts] = useState<string[]>([]);
  const [expandedConceptIndex, setExpandedConceptIndex] = useState<number | null>(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState<Record<string, boolean>>({});

  // Calculate progress when completed concepts change
  useEffect(() => {
    const progress = (completedConcepts.length / concepts.length) * 100;
    setProgressPercentage(progress);
  }, [completedConcepts]);

  // Toggle concept completion
  const toggleConceptComplete = (conceptId: string) => {
    setCompletedConcepts(prev => 
      prev.includes(conceptId)
        ? prev.filter(id => id !== conceptId)
        : [...prev, conceptId]
    );
  };

  const toggleExpanded = (index: number) => {
    setExpandedConceptIndex(expandedConceptIndex === index ? null : index);
  };

  const selectAnswer = (conceptId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [conceptId]: answerIndex
    }));
  };

  const toggleShowAnswer = (conceptId: string) => {
    setShowAnswers(prev => ({
      ...prev,
      [conceptId]: !prev[conceptId]
    }));
  };

  const toggleCodeEditor = (conceptId: string) => {
    setShowCodeEditor(prev => ({
      ...prev,
      [conceptId]: !prev[conceptId]
    }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleRunCode = (code: string) => {
    console.log("Running code:", code);
  };

  const languageOptions = [
    { value: "typescript", label: "TypeScript" },
    { value: "csharp", label: "C#" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" }
  ];

  const concepts: Concept[] = [
    {
      id: "classes-objects",
      title: "Classes and Objects",
      description: "Learn about the building blocks of OOP - how classes define blueprints and objects are instances that bring those blueprints to life.",
      detailedDescription: "Classes and objects form the foundation of object-oriented programming. A class is a blueprint that defines the structure and behavior that objects of its type will have. An object is a concrete instance of a class - when we 'instantiate' a class, we create an object with the properties and methods defined by that class.",
      icon: <Code className="h-5 w-5" />,
      bestPractices: [
        "Keep classes focused on a single responsibility",
        "Name classes with nouns and methods with verbs",
        "Design classes to be immutable when possible"
      ],
      commonPitfalls: [
        "Creating overly large classes with too many responsibilities",
        "Confusing class definitions with object instances",
        "Exposing too much internal implementation in your class interface"
      ],
      realWorldExample: "A Car class would define the basic properties and behaviors all cars share. Individual car objects (myCar, yourCar) would be instances, each with their own values for those properties.",
      quiz: [
        {
          question: "What is the relationship between a class and an object?",
          options: [
            "A class is an instance of an object",
            "An object is an instance of a class",
            "Classes and objects are the same thing",
            "Classes contain objects but aren't related"
          ],
          correctAnswer: 1
        }
      ],
      examples: {
        typescript: {
          code: `class Car {\n  make: string;\n  model: string;\n  year: number;\n\n  constructor(make: string, model: string, year: number) {\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n\n  drive() {\n    console.log(\`Driving \${this.year} \${this.make} \${this.model}\`);\n  }\n}\n\nconst myCar = new Car('Toyota', 'Corolla', 2022);\nmyCar.drive(); // Outputs: Driving 2022 Toyota Corolla`
        },
        csharp: {
          code: `public class Car\n{\n    public string Make { get; set; }\n    public string Model { get; set; }\n    public int Year { get; set; }\n\n    public Car(string make, string model, int year)\n    {\n        Make = make;\n        Model = model;\n        Year = year;\n    }\n\n    public void Drive()\n    {\n        Console.WriteLine($"Driving {Year} {Make} {Model}");\n    }\n}\n\nCar myCar = new Car("Toyota", "Corolla", 2022);\nmyCar.Drive(); // Outputs: Driving 2022 Toyota Corolla`
        },
        java: {
          code: `public class Car {\n    private String make;\n    private String model;\n    private int year;\n\n    public Car(String make, String model, int year) {\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    }\n\n    public void drive() {\n        System.out.println("Driving " + year + " " + make + " " + model);\n    }\n}\n\nCar myCar = new Car("Toyota", "Corolla", 2022);\nmyCar.drive(); // Outputs: Driving 2022 Toyota Corolla`
        },
        python: {
          code: `class Car:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n\n    def drive(self):\n        print(f"Driving {self.year} {self.make} {self.model}")\n\nmy_car = Car('Toyota', 'Corolla', 2022)\nmy_car.drive() # Outputs: Driving 2022 Toyota Corolla`
        }
      }
    },
    {
      id: "encapsulation",
      title: "Encapsulation",
      description: "Discover how encapsulation bundles data with the methods that operate on that data, controlling access to the internal state of objects.",
      detailedDescription: "Encapsulation is the technique of bundling data (attributes) and the code that manipulates it (methods) together as a single unit. It also involves restricting direct access to some of an object's components, which ensures that data can only be modified through well-defined interfaces. This protects the integrity of the data and hides implementation details.",
      icon: <FileText className="h-5 w-5" />,
      bestPractices: [
        "Use access modifiers appropriately (private, protected, public)",
        "Implement getters and setters with validation logic",
        "Hide implementation details from external code"
      ],
      commonPitfalls: [
        "Creating 'anemic' classes with only getters and setters but no behavior",
        "Making too many fields public, breaking encapsulation",
        "Not validating data in setter methods"
      ],
      realWorldExample: "A BankAccount class encapsulates the balance and provides methods like deposit() and withdraw() that maintain rules like 'balance cannot be negative'.",
      quiz: [
        {
          question: "What is the main benefit of encapsulation?",
          options: [
            "It makes code run faster",
            "It allows direct access to all object properties",
            "It protects an object's state from invalid modifications",
            "It removes the need for classes"
          ],
          correctAnswer: 2
        }
      ],
      examples: {
        typescript: {
          code: `class BankAccount {\n  private _balance: number = 0;\n\n  deposit(amount: number): void {\n    if (amount > 0) {\n      this._balance += amount;\n      console.log(\`Deposited \${amount}. New balance: \${this._balance}\`);\n    }\n  }\n\n  withdraw(amount: number): boolean {\n    if (amount <= this._balance) {\n      this._balance -= amount;\n      console.log(\`Withdrew \${amount}. New balance: \${this._balance}\`);\n      return true;\n    }\n    console.log('Insufficient funds');\n    return false;\n  }\n\n  get balance(): number {\n    return this._balance;\n  }\n}\n\nconst account = new BankAccount();\naccount.deposit(1000);\naccount.withdraw(500);\nconsole.log(account.balance);`
        },
        csharp: {
          code: `public class BankAccount\n{\n    private decimal _balance = 0;\n\n    public decimal Balance\n    {\n        get { return _balance; }\n        private set { _balance = value; }\n    }\n\n    public void Deposit(decimal amount)\n    {\n        if (amount > 0)\n        {\n            _balance += amount;\n            Console.WriteLine($"Deposited {amount}. New balance: {_balance}");\n        }\n    }\n\n    public bool Withdraw(decimal amount)\n    {\n        if (amount <= _balance)\n        {\n            _balance -= amount;\n            Console.WriteLine($"Withdrew {amount}. New balance: {_balance}");\n            return true;\n        }\n        Console.WriteLine("Insufficient funds");\n        return false;\n    }\n}\n\nvar account = new BankAccount();\naccount.Deposit(1000);\naccount.Withdraw(500);\nConsole.WriteLine(account.Balance);`
        },
        java: {
          code: `public class BankAccount {\n    private double balance = 0;\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n            System.out.println("Deposited " + amount + ". New balance: " + this.balance);\n        }\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount <= this.balance) {\n            this.balance -= amount;\n            System.out.println("Withdrew " + amount + ". New balance: " + this.balance);\n            return true;\n        }\n        System.out.println("Insufficient funds");\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nBankAccount account = new BankAccount();\naccount.deposit(1000);\naccount.withdraw(500);\nSystem.out.println(account.getBalance());`
        },
        python: {
          code: `class BankAccount:\n    def __init__(self):\n        self.__balance = 0  # Private attribute with name mangling\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n            print(f"Deposited {amount}. New balance: {self.__balance}")\n\n    def withdraw(self, amount):\n        if amount <= self.__balance:\n            self.__balance -= amount\n            print(f"Withdrew {amount}. New balance: {self.__balance}")\n            return True\n        print("Insufficient funds")\n        return False\n\n    @property\n    def balance(self):\n        return self.__balance\n\naccount = BankAccount()\naccount.deposit(1000)\naccount.withdraw(500)\nprint(account.balance)`
        }
      }
    },
    {
      id: "inheritance",
      title: "Inheritance",
      description: "Explore how classes can inherit properties and methods from parent classes, promoting code reuse and establishing a hierarchy.",
      detailedDescription: "Inheritance allows a class (child/derived) to inherit attributes and behaviors from another class (parent/base). This creates an 'is-a' relationship between classes, establishes a hierarchy, and enables code reuse. The child class can extend or override functionality from the parent class while maintaining its core characteristics.",
      icon: <GraduationCap className="h-5 w-5" />,
      bestPractices: [
        "Use inheritance for clear 'is-a' relationships",
        "Keep inheritance hierarchies shallow (avoid deep nesting)",
        "Favor composition over inheritance when appropriate"
      ],
      commonPitfalls: [
        "Creating overly deep inheritance hierarchies",
        "Using inheritance for 'has-a' relationships (use composition instead)",
        "Breaking the Liskov Substitution Principle with improper inheritance"
      ],
      realWorldExample: "A Savings Account 'is-a' Bank Account with additional interest calculation capabilities, while a Checking Account 'is-a' Bank Account with check writing features.",
      quiz: [
        {
          question: "What type of relationship does inheritance establish?",
          options: [
            "Has-a relationship",
            "Uses-a relationship",
            "Is-a relationship",
            "Contains-a relationship"
          ],
          correctAnswer: 2
        }
      ],
      examples: {
        typescript: {
          code: `class Animal {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  speak(): void {\n    console.log(\`\${this.name} makes a sound\`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name: string) {\n    super(name); // Call the parent constructor\n  }\n\n  speak(): void {\n    console.log(\`\${this.name} barks\`);\n  }\n\n  fetch(): void {\n    console.log(\`\${this.name} fetches the ball\`);\n  }\n}\n\nconst dog = new Dog('Rex');\ndog.speak(); // Outputs: Rex barks\ndog.fetch(); // Outputs: Rex fetches the ball`
        },
        csharp: {
          code: `public class Animal\n{\n    public string Name { get; set; }\n\n    public Animal(string name)\n    {\n        Name = name;\n    }\n\n    public virtual void Speak()\n    {\n        Console.WriteLine($"{Name} makes a sound");\n    }\n}\n\npublic class Dog : Animal\n{\n    public Dog(string name) : base(name) // Call the parent constructor\n    {\n    }\n\n    public override void Speak()\n    {\n        Console.WriteLine($"{Name} barks");\n    }\n\n    public void Fetch()\n    {\n        Console.WriteLine($"{Name} fetches the ball");\n    }\n}\n\nDog dog = new Dog("Rex");\ndog.Speak(); // Outputs: Rex barks\ndog.Fetch(); // Outputs: Rex fetches the ball`
        },
        java: {
          code: `public class Animal {\n    protected String name;\n\n    public Animal(String name) {\n        this.name = name;\n    }\n\n    public void speak() {\n        System.out.println(name + " makes a sound");\n    }\n}\n\npublic class Dog extends Animal {\n    public Dog(String name) {\n        super(name); // Call the parent constructor\n    }\n\n    @Override\n    public void speak() {\n        System.out.println(name + " barks");\n    }\n\n    public void fetch() {\n        System.out.println(name + " fetches the ball");\n    }\n}\n\nDog dog = new Dog("Rex");\ndog.speak(); // Outputs: Rex barks\ndog.fetch(); // Outputs: Rex fetches the ball`
        },
        python: {
          code: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        print(f"{self.name} makes a sound")\n\nclass Dog(Animal):  # Dog inherits from Animal\n    def __init__(self, name):\n        super().__init__(name)  # Call the parent constructor\n\n    def speak(self):  # Override the speak method\n        print(f"{self.name} barks")\n\n    def fetch(self):\n        print(f"{self.name} fetches the ball")\n\ndog = Dog("Rex")\ndog.speak()  # Outputs: Rex barks\ndog.fetch()  # Outputs: Rex fetches the ball`
        }
      }
    },
    {
      id: "polymorphism",
      title: "Polymorphism",
      description: "Understand how polymorphism allows objects to be treated as instances of their parent class, enabling flexible and reusable code.",
      detailedDescription: "Polymorphism allows objects of different classes to be treated through a common interface. This powerful concept enables you to write code that can work with objects of various types without knowing their specific classes at compile time. The two main types are compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).",
      icon: <CheckCircle2 className="h-5 w-5" />,
      bestPractices: [
        "Design interfaces based on behavior rather than implementation",
        "Use abstract methods to enforce implementation in child classes",
        "Program to interfaces, not implementations"
      ],
      commonPitfalls: [
        "Overriding methods without maintaining the contract/behavior of the base class",
        "Confusion between overloading (compile-time) and overriding (runtime)",
        "Not properly using 'super' when appropriate in overridden methods"
      ],
      realWorldExample: "A payment processing system can handle various payment methods (credit card, PayPal, cryptocurrency) through a common Payment interface, each implementing their own processPayment() method.",
      quiz: [
        {
          question: "What is the key benefit of polymorphism?",
          options: [
            "It makes code run faster",
            "It allows different objects to be treated through a common interface",
            "It prevents inheritance",
            "It simplifies object creation"
          ],
          correctAnswer: 1
        }
      ],
      examples: {
        typescript: {
          code: `interface Shape {\n  calculateArea(): number;\n}\n\nclass Circle implements Shape {\n  radius: number;\n\n  constructor(radius: number) {\n    this.radius = radius;\n  }\n\n  calculateArea(): number {\n    return Math.PI * this.radius * this.radius;\n  }\n}\n\nclass Rectangle implements Shape {\n  width: number;\n  height: number;\n\n  constructor(width: number, height: number) {\n    this.width = width;\n    this.height = height;\n  }\n\n  calculateArea(): number {\n    return this.width * this.height;\n  }\n}\n\nclass Triangle implements Shape {\n  base: number;\n  height: number;\n\n  constructor(base: number, height: number) {\n    this.base = base;\n    this.height = height;\n  }\n\n  calculateArea(): number {\n    return (this.base * this.height) / 2;\n  }\n}\n\n// Polymorphic function that works with any Shape\nfunction printArea(shape: Shape) {\n  console.log(\`Area: \${shape.calculateArea().toFixed(2)}\`);\n}\n\nconst circle = new Circle(5);\nconst rectangle = new Rectangle(4, 6);\nconst triangle = new Triangle(4, 6);\n\nprintArea(circle); // Output: Area: 78.54\nprintArea(rectangle); // Output: Area: 24.00\nprintArea(triangle); // Output: Area: 12.00`
        },
        csharp: {
          code: `public interface IShape\n{\n    double CalculateArea();\n}\n\npublic class Circle : IShape\n{\n    public double Radius { get; set; }\n\n    public Circle(double radius)\n    {\n        Radius = radius;\n    }\n\n    public double CalculateArea()\n    {\n        return Math.PI * Radius * Radius;\n    }\n}\n\npublic class Rectangle : IShape\n{\n    public double Width { get; set; }\n    public double Height { get; set; }\n\n    public Rectangle(double width, double height)\n    {\n        Width = width;\n        Height = height;\n    }\n\n    public double CalculateArea()\n    {\n        return Width * Height;\n    }\n}\n\npublic class Triangle : IShape\n{\n    public double Base { get; set; }\n    public double Height { get; set; }\n\n    public Triangle(double @base, double height)\n    {\n        Base = @base;\n        Height = height;\n    }\n\n    public double CalculateArea()\n    {\n        return (Base * Height) / 2;\n    }\n}\n\n// Polymorphic method that works with any IShape\npublic void PrintArea(IShape shape)\n{\n    Console.WriteLine($"Area: {shape.CalculateArea():F2}");\n}\n\nvar circle = new Circle(5);\nvar rectangle = new Rectangle(4, 6);\nvar triangle = new Triangle(4, 6);\n\nPrintArea(circle); // Output: Area: 78.54\nPrintArea(rectangle); // Output: Area: 24.00\nPrintArea(triangle); // Output: Area: 12.00`
        },
        java: {
          code: `interface Shape {\n    double calculateArea();\n}\n\nclass Circle implements Shape {\n    private double radius;\n\n    public Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    public double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n}\n\nclass Rectangle implements Shape {\n    private double width;\n    private double height;\n\n    public Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    @Override\n    public double calculateArea() {\n        return width * height;\n    }\n}\n\nclass Triangle implements Shape {\n    private double base;\n    private double height;\n\n    public Triangle(double base, double height) {\n        this.base = base;\n        this.height = height;\n    }\n\n    @Override\n    public double calculateArea() {\n        return (base * height) / 2;\n    }\n}\n\n// Polymorphic method that works with any Shape\npublic void printArea(Shape shape) {\n    System.out.printf("Area: %.2f%n", shape.calculateArea());\n}\n\nShape circle = new Circle(5);\nShape rectangle = new Rectangle(4, 6);\nShape triangle = new Triangle(4, 6);\n\nprintArea(circle); // Output: Area: 78.54\nprintArea(rectangle); // Output: Area: 24.00\nprintArea(triangle); // Output: Area: 12.00`
        },
        python: {
          code: `from abc import ABC, abstractmethod\nimport math\n\nclass Shape(ABC):\n    @abstractmethod\n    def calculate_area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n\n    def calculate_area(self):\n        return math.pi * self.radius * self.radius\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n\n    def calculate_area(self):\n        return self.width * self.height\n\nclass Triangle(Shape):\n    def __init__(self, base, height):\n        self.base = base\n        self.height = height\n\n    def calculate_area(self):\n        return (self.base * self.height) / 2\n\n# Polymorphic function that works with any Shape\ndef print_area(shape):\n    print(f"Area: {shape.calculate_area():.2f}")\n\ncircle = Circle(5)\nrectangle = Rectangle(4, 6)\ntriangle = Triangle(4, 6)\n\nprint_area(circle)    # Output: Area: 78.54\nprint_area(rectangle) # Output: Area: 24.00\nprint_area(triangle)  # Output: Area: 12.00`
        }
      }
    },
    {
      id: "abstraction",
      title: "Abstraction",
      description: "Learn how abstraction simplifies complex systems by modeling classes based on essential properties and behaviors.",
      detailedDescription: "Abstraction is the process of hiding complex implementation details and showing only the essential features of an object. It allows you to focus on what an object does rather than how it does it. In OOP, abstraction is achieved through abstract classes and interfaces that define a contract without specifying the implementation details.",
      icon: <Bookmark className="h-5 w-5" />,
      bestPractices: [
        "Define clear interfaces with well-documented methods",
        "Use abstract classes to provide partial implementation",
        "Hide implementation details that clients don't need to know"
      ],
      commonPitfalls: [
        "Creating abstractions that leak implementation details",
        "Overusing abstraction for simple problems",
        "Creating overly generic abstractions that don't fit any specific use case well"
      ],
      realWorldExample: "A TV remote control provides abstraction - you press 'Volume Up' without knowing the electronic signals being sent or how the speaker amplifies sound.",
      quiz: [
        {
          question: "What is the primary purpose of abstraction?",
          options: [
            "To make code run faster",
            "To hide implementation details and show only essential features",
            "To create more classes",
            "To eliminate inheritance in code"
          ],
          correctAnswer: 1
        }
      ],
      examples: {
        typescript: {
          code: `abstract class Database {\n  abstract connect(): void;\n  abstract query(sql: string): any[];\n  abstract close(): void;\n\n  // Common functionality\n  executeQuery(sql: string): any[] {\n    this.connect();\n    const result = this.query(sql);\n    this.close();\n    return result;\n  }\n}\n\nclass MySQLDatabase extends Database {\n  connect(): void {\n    console.log('Connected to MySQL database');\n  }\n\n  query(sql: string): any[] {\n    console.log(\`Executing MySQL query: \${sql}\`);\n    return [{ id: 1, name: 'Example Data' }];\n  }\n\n  close(): void {\n    console.log('Closed MySQL connection');\n  }\n}\n\nclass PostgreSQLDatabase extends Database {\n  connect(): void {\n    console.log('Connected to PostgreSQL database');\n  }\n\n  query(sql: string): any[] {\n    console.log(\`Executing PostgreSQL query: \${sql}\`);\n    return [{ id: 1, name: 'Example Data' }];\n  }\n\n  close(): void {\n    console.log('Closed PostgreSQL connection');\n  }\n}\n\nfunction getDataFromDatabase(db: Database) {\n  return db.executeQuery('SELECT * FROM users');\n}\n\nconst mysqlDb = new MySQLDatabase();\nconst postgresDb = new PostgreSQLDatabase();\n\ngetDataFromDatabase(mysqlDb);\ngetDataFromDatabase(postgresDb);`
        },
        csharp: {
          code: `public abstract class Database\n{\n    public abstract void Connect();\n    public abstract List<object> Query(string sql);\n    public abstract void Close();\n\n    // Common functionality\n    public List<object> ExecuteQuery(string sql)\n    {\n        Connect();\n        var result = Query(sql);\n        Close();\n        return result;\n    }\n}\n\npublic class MySQLDatabase : Database\n{\n    public override void Connect()\n    {\n        Console.WriteLine("Connected to MySQL database");\n    }\n\n    public override List<object> Query(string sql)\n    {\n        Console.WriteLine($"Executing MySQL query: {sql}");\n        return new List<object> { new { Id = 1, Name = "Example Data" } };\n    }\n\n    public override void Close()\n    {\n        Console.WriteLine("Closed MySQL connection");\n    }\n}\n\npublic class PostgreSQLDatabase : Database\n{\n    public override void Connect()\n    {\n        Console.WriteLine("Connected to PostgreSQL database");\n    }\n\n    public override List<object> Query(string sql)\n    {\n        Console.WriteLine($"Executing PostgreSQL query: {sql}");\n        return new List<object> { new { Id = 1, Name = "Example Data" } };\n    }\n\n    public override void Close()\n    {\n        Console.WriteLine("Closed PostgreSQL connection");\n    }\n}\n\npublic List<object> GetDataFromDatabase(Database db)\n{\n    return db.ExecuteQuery("SELECT * FROM users");\n}\n\nvar mysqlDb = new MySQLDatabase();\nvar postgresDb = new PostgreSQLDatabase();\n\nGetDataFromDatabase(mysqlDb);\nGetDataFromDatabase(postgresDb);`
        },
        java: {
          code: `abstract class Database {\n    public abstract void connect();\n    public abstract List<Object> query(String sql);\n    public abstract void close();\n\n    // Common functionality\n    public List<Object> executeQuery(String sql) {\n        connect();\n        List<Object> result = query(sql);\n        close();\n        return result;\n    }\n}\n\nclass MySQLDatabase extends Database {\n    @Override\n    public void connect() {\n        System.out.println("Connected to MySQL database");\n    }\n\n    @Override\n    public List<Object> query(String sql) {\n        System.out.println("Executing MySQL query: " + sql);\n        return Arrays.asList(Map.of("id", 1, "name", "Example Data"));\n    }\n\n    @Override\n    public void close() {\n        System.out.println("Closed MySQL connection");\n    }\n}\n\nclass PostgreSQLDatabase extends Database {\n    @Override\n    public void connect() {\n        System.out.println("Connected to PostgreSQL database");\n    }\n\n    @Override\n    public List<Object> query(String sql) {\n        System.out.println("Executing PostgreSQL query: " + sql);\n        return Arrays.asList(Map.of("id", 1, "name", "Example Data"));\n    }\n\n    @Override\n    public void close() {\n        System.out.println("Closed PostgreSQL connection");\n    }\n}\n\npublic List<Object> getDataFromDatabase(Database db) {\n    return db.executeQuery("SELECT * FROM users");\n}\n\nDatabase mysqlDb = new MySQLDatabase();\nDatabase postgresDb = new PostgreSQLDatabase();\n\ngetDataFromDatabase(mysqlDb);\ngetDataFromDatabase(postgresDb);`
        },
        python: {
          code: `from abc import ABC, abstractmethod\n\nclass Database(ABC):\n    @abstractmethod\n    def connect(self):\n        pass\n\n    @abstractmethod\n    def query(self, sql):\n        pass\n\n    @abstractmethod\n    def close(self):\n        pass\n\n    # Common functionality\n    def execute_query(self, sql):\n        self.connect()\n        result = self.query(sql)\n        self.close()\n        return result\n\nclass MySQLDatabase(Database):\n    def connect(self):\n        print("Connected to MySQL database")\n\n    def query(self, sql):\n        print(f"Executing MySQL query: {sql}")\n        return [{"id": 1, "name": "Example Data"}]\n\n    def close(self):\n        print("Closed MySQL connection")\n\nclass PostgreSQLDatabase(Database):\n    def connect(self):\n        print("Connected to PostgreSQL database")\n\n    def query(self, sql):\n        print(f"Executing PostgreSQL query: {sql}")\n        return [{"id": 1, "name": "Example Data"}]\n\n    def close(self):\n        print("Closed PostgreSQL connection")\n\ndef get_data_from_database(db):\n    return db.execute_query("SELECT * FROM users")\n\nmysql_db = MySQLDatabase()\npostgres_db = PostgreSQLDatabase()\n\nget_data_from_database(mysql_db)\nget_data_from_database(postgres_db)`
        }
      }
    }
  ];

  // Animation classes
  const fadeIn = "transition-opacity duration-500 ease-in-out";
  const slideIn = "transition-transform duration-300 ease-in-out";
  const scale = "transition-transform duration-200 hover:scale-105";

  return (
    <div className={cn("min-h-screen transition-colors", 
      isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800")}>
      <div className={cn("py-8 px-6 border-b", 
        isDarkMode ? "border-gray-700" : "border-gray-200")}>
        <div className="mb-8 flex justify-between items-center">
          <Link to="/roadmap" className={cn(
            "text-sm flex items-center transition-colors",
            isDarkMode ? "text-purple-300 hover:text-purple-200" : "text-lld-purple hover:text-lld-darkPurple"
          )}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Roadmap</span>
          </Link>
          
          <Button
            variant="outline"
            onClick={toggleDarkMode}
            className={cn(
              "text-sm",
              isDarkMode ? "border-gray-600 text-gray-300" : "border-gray-300"
            )}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        <div className="mb-10">
          <span className={cn(
            "inline-block text-xs font-semibold px-2.5 py-0.5 rounded mb-2",
            isDarkMode ? "bg-green-800 text-green-100" : "bg-green-100 text-green-800"
          )}>Foundation</span>
          
          <h1 className={cn(
            "text-4xl font-bold mb-4",
            isDarkMode ? "text-white" : "text-gray-900"
          )}>Object-Oriented Programming Fundamentals</h1>
          
          <p className={cn(
            "text-xl mb-6",
            isDarkMode ? "text-gray-300" : "text-gray-700"
          )}>
            Master the core concepts of OOP to create maintainable, modular, and reusable software designs. 
            These principles form the foundation for effective low-level design.
          </p>

          <div className={cn(
            "p-4 rounded-lg mb-8 border",
            isDarkMode ? "bg-gray-800 border-purple-800" : "bg-lld-lightPurple border-lld-purple/20"
          )}>
            <div className="flex items-start">
              <div className={cn(
                "rounded-full p-2 mr-4",
                isDarkMode ? "bg-purple-700" : "bg-lld-purple"
              )}>
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className={cn(
                  "font-semibold mb-1",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}>What you'll learn</h3>
                <p className={cn(
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}>
                  Understand the 5 core principles of Object-Oriented Programming: Classes & Objects, 
                  Encapsulation, Inheritance, Polymorphism, and Abstraction.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className={cn(
                "font-semibold",
                isDarkMode ? "text-gray-300" : "text-gray-700"
              )}>Your Progress</h3>
              <span className={cn(
                "text-sm",
                isDarkMode ? "text-gray-400" : "text-gray-600"
              )}>
                {completedConcepts.length} of {concepts.length} completed
              </span>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-lld-purple transition-all duration-500 ease-in-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {concepts.map((concept) => (
              <span 
                key={concept.id} 
                className={cn(
                  "text-xs font-medium px-2.5 py-0.5 rounded cursor-pointer transition-colors",
                  completedConcepts.includes(concept.id) 
                    ? (isDarkMode ? "bg-purple-600 text-white" : "bg-lld-purple text-white") 
                    : (isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-800")
                )}
                onClick={() => toggleConceptComplete(concept.id)}
              >
                {concept.title}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {concepts.map((concept, index) => (
            <div 
              key={concept.id} 
              className={cn(
                "rounded-lg shadow-sm border transition-all duration-300",
                expandedConceptIndex === index 
                  ? (isDarkMode ? "bg-gray-800 border-purple-700" : "bg-white border-lld-purple") 
                  : (isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"),
                completedConcepts.includes(concept.id) && "border-l-4 border-l-green-500"
              )}
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex items-center">
                  <div className={cn(
                    "rounded-full p-2 mr-3",
                    isDarkMode ? "bg-gray-700" : "bg-lld-lightPurple"
                  )}>
                    {concept.icon}
                  </div>
                  <h2 className={cn(
                    "text-2xl font-semibold",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}>{concept.title}</h2>
                </div>
                <div className="flex items-center">
                  {completedConcepts.includes(concept.id) && (
                    <CheckCircle2 className={cn(
                      "h-5 w-5 mr-2",
                      isDarkMode ? "text-green-400" : "text-green-500"
                    )} />
                  )}
                  {expandedConceptIndex === index ? (
                    <ChevronUp className={cn(
                      "h-5 w-5",
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    )} />
                  ) : (
                    <ChevronDown className={cn(
                      "h-5 w-5",
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    )} />
                  )}
                </div>
              </div>

              {expandedConceptIndex === index && (
                <div className={cn(
                  fadeIn,
                  "px-6 pb-6"
                )}>
                  <p className={cn(
                    "mb-4",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}>{concept.detailedDescription}</p>

                  <div className="mb-8">
                    <h3 className={cn(
                      "text-xl font-semibold mb-3",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}>Code Examples</h3>
                    
                    <Tabs defaultValue={activeLanguage} className="w-full">
                      <TabsList className="grid grid-cols-4 mb-4">
                        {languageOptions.map(lang => (
                          <TabsTrigger 
                            key={lang.value} 
                            value={lang.value}
                            onClick={() => setActiveLanguage(lang.value)}
                            className={cn(
                              isDarkMode ? "data-[state=active]:bg-gray-700" : ""
                            )}
                          >
                            {lang.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      
                      {languageOptions.map(lang => (
                        <TabsContent key={lang.value} value={lang.value} className="mt-0">
                          {showCodeEditor[concept.id] ? (
                            <CodeEditor
                              initialCode={concept.examples[lang.value].code}
                              language={lang.value}
                              darkMode={isDarkMode}
                              onRun={handleRunCode}
                            />
                          ) : (
                            <>
                              <div className={cn(
                                "rounded-lg p-4 border font-mono text-sm overflow-auto",
                                isDarkMode ? "bg-gray-900 text-gray-200 border-gray-700" : "bg-gray-50 text-gray-800 border-gray-200"
                              )}>
                                <pre className="whitespace-pre-wrap">{concept.examples[lang.value].code}</pre>
                              </div>
                              <div className="mt-2 flex justify-end">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className={cn(
                                    "text-xs",
                                    isDarkMode ? "bg-gray-700 hover:bg-gray-600 border-gray-600" : ""
                                  )}
                                  onClick={() => toggleCodeEditor(concept.id)}
                                >
                                  Try it yourself
                                </Button>
                              </div>
                            </>
                          )}
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className={cn(
                      "rounded-lg p-4 border",
                      isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                    )}>
                      <h4 className={cn(
                        "font-semibold mb-2 flex items-center",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}>
                        <ListChecks className="h-4 w-4 mr-2" />
                        Best Practices
                      </h4>
                      <ul className="space-y-1 list-disc list-inside">
                        {concept.bestPractices.map((practice, i) => (
                          <li key={i} className={cn(
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          )}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={cn(
                      "rounded-lg p-4 border",
                      isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                    )}>
                      <h4 className={cn(
                        "font-semibold mb-2 flex items-center",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}>
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Common Pitfalls
                      </h4>
                      <ul className="space-y-1 list-disc list-inside">
                        {concept.commonPitfalls.map((pitfall, i) => (
                          <li key={i} className={cn(
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          )}>{pitfall}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "mb-8 p-4 rounded-lg border",
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-lld-lightPurple border-lld-purple/10"
                  )}>
                    <h4 className={cn(
                      "font-semibold mb-2",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}>Real-World Example</h4>
                    <p className={cn(
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    )}>{concept.realWorldExample}</p>
                  </div>
                  
                  <div className={cn(
                    "rounded-lg border p-4 mb-4",
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                  )}>
                    <h4 className={cn(
                      "font-semibold mb-3 flex items-center",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}>
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Test Your Understanding
                    </h4>
                    {concept.quiz.map((quizItem, quizIndex) => (
                      <div key={quizIndex}>
                        <p className={cn(
                          "mb-2 font-medium",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}>{quizItem.question}</p>
                        <div className="space-y-2 mb-4">
                          {quizItem.options.map((option, optionIndex) => (
                            <div 
                              key={optionIndex}
                              className={cn(
                                "p-3 rounded-md border cursor-pointer transition-colors",
                                selectedAnswers[concept.id] === optionIndex
                                  ? (optionIndex === quizItem.correctAnswer
                                    ? (isDarkMode ? "bg-green-800 border-green-700" : "bg-green-100 border-green-200")
                                    : (isDarkMode ? "bg-red-900 border-red-800" : "bg-red-100 border-red-200"))
                                  : (isDarkMode ? "bg-gray-700 border-gray-600 hover:bg-gray-600" : "bg-gray-50 border-gray-200 hover:bg-gray-100")
                              )}
                              onClick={() => selectAnswer(concept.id, optionIndex)}
                            >
                              <p className={cn(
                                isDarkMode ? "text-gray-200" : "text-gray-700"
                              )}>{option}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleShowAnswer(concept.id)}
                            className={cn(
                              isDarkMode ? "bg-gray-700 hover:bg-gray-600 border-gray-600" : ""
                            )}
                          >
                            {showAnswers[concept.id] ? "Hide Answer" : "Show Answer"}
                          </Button>
                          
                          {showAnswers[concept.id] && (
                            <p className={cn(
                              "text-sm",
                              isDarkMode ? "text-green-400" : "text-green-600"
                            )}>
                              Correct answer: {quizItem.options[quizItem.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => toggleConceptComplete(concept.id)}
                      className={cn(
                        isDarkMode ? "border-gray-600" : "",
                        completedConcepts.includes(concept.id) ? "bg-green-50 text-green-700" : ""
                      )}
                    >
                      {completedConcepts.includes(concept.id) ? (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Completed
                        </>
                      ) : (
                        "Mark as Complete"
                      )}
                    </Button>
                    
                    {index < concepts.length - 1 && (
                      <Button
                        onClick={() => {
                          toggleExpanded(index + 1);
                          window.scrollTo({
                            top: window.scrollY + 400,
                            behavior: 'smooth'
                          });
                        }}
                        className={cn(
                          isDarkMode ? "bg-purple-700 hover:bg-purple-600" : "bg-lld-purple hover:bg-lld-darkPurple"
                        )}
                      >
                        Next: {concepts[index + 1].title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous: Introduction
          </Button>
          <Link to="/roadmap/solid-principles">
            <Button className={cn(
              "flex items-center",
              isDarkMode ? "bg-purple-700 hover:bg-purple-600" : "bg-lld-purple hover:bg-lld-darkPurple"
            )}>
              Next: SOLID Principles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OOPFundamentals;
