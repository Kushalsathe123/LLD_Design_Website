
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior Software Engineer",
      company: "TechCorp",
      avatar: "AJ",
      stars: 5,
      text: "LearnLLD helped me understand complex design patterns that I was struggling with for months. The visual explanations and practical examples made all the difference!"
    },
    {
      id: 2,
      name: "Samantha Chen",
      role: "Lead Developer",
      company: "InnovateSoft",
      avatar: "SC",
      stars: 5,
      text: "I credit my recent promotion to the knowledge I gained from this platform. The roadmap approach guided me through exactly what I needed to learn in the right order."
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Software Architect",
      company: "DesignWorks",
      avatar: "MR",
      stars: 5,
      text: "After years of working with code, I finally understand the 'why' behind design decisions. This resource has been invaluable for deepening my software architecture knowledge."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2>What Developers Are Saying</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Join thousands of developers who have transformed their coding practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover animate-fade-in">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-lld-purple text-lld-purple" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 flex-grow">"{testimonial.text}"</p>
                
                <div className="flex items-center mt-auto">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-lld-lightPurple text-lld-purple">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
