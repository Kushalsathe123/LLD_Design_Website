import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCode, Book, MessageSquare } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SingletonPattern = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/patterns" className="text-lld-purple hover:text-lld-darkPurple inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Patterns
          </Link>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-4xl font-bold">Singleton Pattern</h1>
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded">Beginner</span>
          </div>
          <p className="text-xl text-gray-700 mt-4">
            Ensures a class has only one instance and provides a global point of access to it.
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Intent</h2>
                <p className="text-gray-700">
                  The Singleton Pattern ensures a class has only one instance and provides a global point of access to it.
                  This is useful when exactly one object is needed to coordinate actions across the system.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Problem</h2>
                <p className="text-gray-700 mb-4">
                  The Singleton pattern solves two problems at the same time:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Ensure that a class has only one instance.</li>
                  <li>Provide a global access point to that instance.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>When exactly one instance of a class is needed to coordinate actions across the system.</li>
                  <li>When you need stricter control over global variables.</li>
                  <li>For shared resources such as a database connection or a file manager.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="implementation">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Basic Implementation</h2>
                <div className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                  <pre><code>{`
class Singleton {
  private static instance: Singleton;
  
  private constructor() {
    // private constructor to prevent instantiation
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    
    return Singleton.instance;
  }
  
  // other methods and properties
  public someBusinessLogic() {
    // ...
  }
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true - both variables contain the same instance
                  `}</code></pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="examples">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2">Database Connection</h3>
                  <p className="text-gray-700 mb-4">
                    A common use case for the Singleton pattern is to manage database connections.
                  </p>
                  <div className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <pre><code>{`
class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connection: any;
  
  private constructor() {
    // Initialize the database connection
    this.connection = {
      // simulated connection object
      query: (sql: string) => console.log(\`Executing query: \${sql}\`)
    };
  }
  
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
  
  public query(sql: string) {
    return this.connection.query(sql);
  }
}

// Usage
const db = DatabaseConnection.getInstance();
db.query('SELECT * FROM users');
                    `}</code></pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="discussion">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Pros and Cons</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2">Pros</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>You can be sure that a class has only one instance.</li>
                    <li>You gain a global access point to that instance.</li>
                    <li>The singleton object is initialized only when it's requested for the first time.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Cons</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Violates the Single Responsibility Principle. The pattern solves two problems at the time.</li>
                    <li>Can mask bad design, for instance, when the components of the program know too much about each other.</li>
                    <li>Requires special treatment in a multithreaded environment.</li>
                    <li>Unit testing can be difficult since many test frameworks rely on inheritance when producing mock objects.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="bg-lld-lightPurple p-6 rounded-lg border border-lld-purple">
          <h3 className="font-bold text-xl mb-2 text-lld-purple">Ready to Practice?</h3>
          <p className="mb-4 text-gray-700">Put your understanding of the Singleton pattern to the test with our interactive coding exercises.</p>
          <div className="flex space-x-4">
            <button className="bg-lld-purple text-white py-2 px-6 rounded-md hover:bg-lld-darkPurple transition-colors inline-flex items-center">
              <FileCode className="mr-2 h-4 w-4" />
              Try Exercises
            </button>
            <button className="bg-white text-lld-purple border border-lld-purple py-2 px-6 rounded-md hover:bg-gray-50 transition-colors inline-flex items-center">
              <Book className="mr-2 h-4 w-4" />
              Study Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingletonPattern;
