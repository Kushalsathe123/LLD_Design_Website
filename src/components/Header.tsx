
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 animate-fade-in">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-lld-purple text-white font-bold rounded-md p-1.5 mr-2">LLD</div>
            <span className="font-bold text-xl hidden sm:inline">Learn Low-Level Design</span>
            <span className="font-bold text-xl sm:hidden">LearnLLD</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-lld-purple transition-colors">Home</Link>
          <Link to="/roadmap" className="font-medium hover:text-lld-purple transition-colors">Roadmap</Link>
          <Link to="/patterns" className="font-medium hover:text-lld-purple transition-colors">Design Patterns</Link>
          <Link to="/resources" className="font-medium hover:text-lld-purple transition-colors">Resources</Link>
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="default" className="bg-lld-purple hover:bg-lld-darkPurple">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="mr-2">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
            <Link to="/" className="block px-3 py-2 rounded-md font-medium hover:bg-lld-lightPurple hover:text-lld-purple">Home</Link>
            <Link to="/roadmap" className="block px-3 py-2 rounded-md font-medium hover:bg-lld-lightPurple hover:text-lld-purple">Roadmap</Link>
            <Link to="/patterns" className="block px-3 py-2 rounded-md font-medium hover:bg-lld-lightPurple hover:text-lld-purple">Design Patterns</Link>
            <Link to="/resources" className="block px-3 py-2 rounded-md font-medium hover:bg-lld-lightPurple hover:text-lld-purple">Resources</Link>
            <div className="px-3 py-2">
              <Button variant="default" className="w-full bg-lld-purple hover:bg-lld-darkPurple">Get Started</Button>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar - Both Mobile and Desktop */}
      {isSearchOpen && (
        <div className="container mx-auto px-4 py-2 border-b border-gray-200 bg-white animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search for concepts, patterns..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lld-purple focus:border-transparent"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
