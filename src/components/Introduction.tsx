
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, BookOpen, FileText } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="mb-4">What is Low-Level Design?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Low-Level Design (LLD) focuses on the detailed implementation of system components, 
            including classes, interfaces, and their relationships, bringing the architectural vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="animate-fade-in card-hover">
            <CardContent className="p-6">
              <h3 className="mb-4">Why Master Low-Level Design?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-lld-purple mr-2 mt-1">•</span>
                  <span>Build <span className="highlight">maintainable</span> and <span className="highlight">scalable</span> software systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lld-purple mr-2 mt-1">•</span>
                  <span>Improve <span className="highlight">code quality</span> and reduce technical debt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lld-purple mr-2 mt-1">•</span>
                  <span>Enhance collaboration through <span className="highlight">clear component interfaces</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-lld-purple mr-2 mt-1">•</span>
                  <span>Make your systems <span className="highlight">adaptable</span> to changing requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lld-purple mr-2 mt-1">•</span>
                  <span>Ace technical interviews with <span className="highlight">solid LLD knowledge</span></span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in card-hover animate-delay-100">
            <CardContent className="p-6">
              <h3 className="mb-4">The LLD Learning Journey</h3>
              <p className="mb-4 text-gray-700">
                Our structured approach guides you from basic OOP principles to advanced design patterns and best practices:
              </p>
              <ol className="space-y-3 text-gray-700 list-decimal pl-5">
                <li>Master <span className="highlight">object-oriented fundamentals</span></li>
                <li>Learn <span className="highlight">SOLID principles</span> for robust design</li>
                <li>Understand common <span className="highlight">design patterns</span> and when to apply them</li>
                <li>Practice with <span className="highlight">real-world case studies</span> and examples</li>
                <li>Apply knowledge to <span className="highlight">system design interviews</span></li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <div className="bg-gradient-to-br from-lld-lightPurple to-white p-6 rounded-lg text-center flex flex-col items-center card-hover">
            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
              <Code className="h-8 w-8 text-lld-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Approach</h3>
            <p className="text-gray-700">Learn by doing with real-world code examples and implementation scenarios</p>
          </div>
          
          <div className="bg-gradient-to-br from-lld-lightPurple to-white p-6 rounded-lg text-center flex flex-col items-center card-hover">
            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
              <BookOpen className="h-8 w-8 text-lld-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
            <p className="text-gray-700">Follow our roadmap from fundamentals to advanced patterns systematically</p>
          </div>
          
          <div className="bg-gradient-to-br from-lld-lightPurple to-white p-6 rounded-lg text-center flex flex-col items-center card-hover">
            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
              <FileText className="h-8 w-8 text-lld-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interview Success</h3>
            <p className="text-gray-700">Prepare for technical interviews with patterns and best practices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
