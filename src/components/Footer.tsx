
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-lld-charcoal text-white py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-lld-purple text-white font-bold rounded-md p-1.5 mr-2">LLD</div>
              <span className="font-bold text-xl">LearnLLD</span>
            </div>
            <p className="text-gray-300 mb-4">
              Master software architecture one pattern at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lld-purple">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lld-purple">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lld-purple">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm2.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-1 1h2v8h-2v-8zm5 0h2v1.8c.4-.5 1.2-1 2.5-1 2.2 0 3.5 1.5 3.5 4.2v3h-2v-2.8c0-1.3-.5-2-1.5-2-1.3 0-2 .8-2 2v2.8h-2v-8z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/roadmap" className="text-gray-300 hover:text-lld-purple">Roadmap</Link></li>
              <li><Link to="/patterns" className="text-gray-300 hover:text-lld-purple">Design Patterns</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-lld-purple">Resources</Link></li>
              <li><Link to="/quiz" className="text-gray-300 hover:text-lld-purple">Practice Quiz</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">Cheat Sheets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">Interview Prep</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">Recommended Books</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-lld-purple">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} LearnLowDesign. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-lld-purple text-sm mx-2">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-lld-purple text-sm mx-2">Terms</a>
            <a href="#" className="text-gray-400 hover:text-lld-purple text-sm mx-2">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
