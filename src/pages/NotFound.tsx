
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularLinks = [
    { title: "Design Patterns", path: "/patterns" },
    { title: "SOLID Principles", path: "/roadmap/solid-principles" },
    { title: "Learning Roadmap", path: "/roadmap" },
    { title: "Educational Resources", path: "/resources" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="relative mx-auto w-32 h-32 mb-4">
            <div className="absolute inset-0 bg-lld-lightPurple rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-bold text-lld-purple">404</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Page not found</h1>
          <p className="text-lg text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Link to="/">
              <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                <HomeIcon className="h-4 w-4 mr-2" />
                <span>Return to Home</span>
              </Button>
            </Link>
            <Link to="/patterns">
              <Button className="w-full bg-lld-purple hover:bg-lld-darkPurple flex items-center justify-center space-x-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Explore Patterns</span>
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Popular destinations</h2>
          <div className="space-y-3">
            {popularLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="block p-3 rounded-md hover:bg-gray-50 transition-colors border border-gray-100 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lld-purple">{link.title}</span>
                  <ArrowLeft className="h-4 w-4 transform rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-gray-500 flex items-center justify-center">
          <Search className="h-4 w-4 mr-2" />
          <span>Lost? Try searching for what you need</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
