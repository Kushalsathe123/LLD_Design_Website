
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Code, Compass } from 'lucide-react';


const RoadmapPreview = () => {
  const roadmapSteps = [
    {
      id: 1,
      title: "OOP Fundamentals",
      description: "Master object-oriented principles that form the foundation of effective LLD",
      progress: 100,
      icon: <BookOpen className="text-lld-purple" />,
      link: "/roadmap/oop-fundamentals"
    },
    {
      id: 2,
      title: "SOLID Principles",
      description: "Understand the cornerstone principles for maintainable software design",
      progress: 85,
      icon: <Compass className="text-lld-purple" />,
      link: "/roadmap/solid-principles"
    },
    {
      id: 3,
      title: "Design Patterns",
      description: "Implement proven solutions to common design challenges in software",
      progress: 60,
      icon: <Code className="text-lld-purple" />,
      link: "/roadmap/design-patterns"
    }
  ];

  return (
    <section id="roadmap-preview" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2>Your LLD Learning Roadmap</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Follow our structured learning path designed to take you from beginner to expert in low-level design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roadmapSteps.map((step) => (
            <Link key={step.id} to={step.link} className="block">
              <Card className="overflow-hidden card-hover animate-fade-in h-full transition-transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {step.icon}
                    <h3 className="ml-3 mb-0">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{step.progress}%</span>
                    </div>
                    <Progress value={step.progress} className="h-2" />
                  </div>
                  <div className="mt-4 text-right">
                    <span className="text-lld-purple inline-flex items-center text-sm font-medium">
                      Explore content <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-lld-purple hover:bg-lld-darkPurple">
            <Link to="/roadmap" className="inline-flex items-center">
              View Full Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPreview;
