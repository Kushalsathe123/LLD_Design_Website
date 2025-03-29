import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code, Shield } from 'lucide-react';

const ProxyPattern = () => {
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
          <h1 className="text-4xl font-bold mb-4">Proxy Pattern</h1>
          <p className="text-xl text-gray-700 mb-6">
            The Proxy pattern provides a surrogate or placeholder for another object to control access to it. It acts as an intermediary that delegates operations to the real service object.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="mb-4">
            Imagine you have a massive object that consumes a lot of system resources. You need the object from time to time, but not always.
          </p>
          <p>
            You could create this object only when it's needed, but this approach has a performance penalty when the object is needed frequently but not continuously. What's worse, the client code would need to bear the responsibility of managing the object's lifecycle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="mb-4">
            The Proxy pattern suggests creating a new proxy class with the same interface as the original service object. Then you replace all direct references to the service object with the proxy.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
            <h3 className="font-medium mb-2 text-gray-800">TypeScript Implementation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm">
              <code>{`// Subject interface
interface Image {
  display(): void;
}

// Real Subject
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(\`Loading \${this.filename} from disk\`);
    // Simulate resource-intensive operation
    // In reality, this might involve reading a large file, connecting to a database, etc.
  }

  display(): void {
    console.log(\`Displaying \${this.filename}\`);
  }
}

// Proxy
class ProxyImage implements Image {
  private filename: string;
  private realImage: RealImage | null = null;

  constructor(filename: string) {
    this.filename = filename;
  }

  display(): void {
    // Load the real image only when needed
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Client code
function clientCode() {
  // The proxy loads the real image only when needed
  console.log("Client: I'm going to create a proxy image");
  const image = new ProxyImage("sample.jpg");
  
  console.log("Client: Image created, but not loaded yet");
  
  // The real image is loaded only when display() is called
  console.log("Client: Calling display for the first time");
  image.display(); // Real image is loaded here
  
  console.log("Client: Calling display again");
  image.display(); // Real image is not loaded again, just displayed
}

clientCode();

// Virtual Proxy Example
// Here's another example of a virtual proxy for a video player
interface Video {
  play(): void;
}

class RealVideo implements Video {
  private videoFile: string;

  constructor(videoFile: string) {
    this.videoFile = videoFile;
    this.loadVideo();
  }

  private loadVideo(): void {
    console.log(\`Loading high-resolution video: \${this.videoFile}\`);
    // Simulate loading a large video file
  }

  play(): void {
    console.log(\`Playing: \${this.videoFile}\`);
  }
}

class VideoProxy implements Video {
  private videoFile: string;
  private realVideo: RealVideo | null = null;
  private thumbnailShown: boolean = false;

  constructor(videoFile: string) {
    this.videoFile = videoFile;
  }

  showThumbnail(): void {
    if (!this.thumbnailShown) {
      console.log(\`Showing thumbnail for: \${this.videoFile}\`);
      this.thumbnailShown = true;
    }
  }

  play(): void {
    if (this.realVideo === null) {
      console.log('Loading video on demand...');
      this.realVideo = new RealVideo(this.videoFile);
    }
    this.realVideo.play();
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lazy initialization (Virtual Proxy):</strong> When you have a heavyweight service object that wastes resources by being always up.</li>
            <li><strong>Access control (Protection Proxy):</strong> When you want to control access to a service object based on the client's credentials.</li>
            <li><strong>Caching (Caching Proxy):</strong> When you need to cache results of client requests and manage the life cycle of this cache.</li>
            <li><strong>Remote proxy:</strong> When the service object is located on a remote server.</li>
            <li><strong>Logging (Logging Proxy):</strong> When you want to keep a history of requests to the service object.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-green-700">Pros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can control the service object without clients knowing about it.</li>
                <li>You can manage the lifecycle of the service object when clients don't care about it.</li>
                <li>The proxy works even when the service object isn't ready or is not available.</li>
                <li>Open/Closed Principle: You can introduce new proxies without changing the service or clients.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-red-700">Cons</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The code may become more complicated since you need to introduce new classes.</li>
                <li>The response from the service might get delayed due to the proxy's extra layer.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild className="flex items-center">
            <Link to="/patterns/composite">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Composite Pattern
            </Link>
          </Button>
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple flex items-center">
            <Link to="/patterns/observer">
              Next: Observer Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProxyPattern;