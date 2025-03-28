
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Low-Level Design?",
      answer: "Low-Level Design (LLD) is a component-level design process that focuses on the detailed implementation aspects of a system. It includes defining classes, interfaces, their relationships, methods, and the implementation details of algorithms that were outlined during the high-level design phase."
    },
    {
      question: "How is LLD different from High-Level Design?",
      answer: "High-Level Design (HLD) focuses on the overall architecture and structure of a system, dealing with component placement, database design, and service identification. LLD, on the other hand, zooms into the actual implementation details of each component, with class diagrams, sequence diagrams, and specific algorithms."
    },
    {
      question: "Do I need to know UML for Low-Level Design?",
      answer: "While a deep understanding of UML (Unified Modeling Language) isn't mandatory, having a basic knowledge of class diagrams, sequence diagrams, and activity diagrams is valuable for LLD. These diagrams help communicate designs effectively, but the focus should be on the underlying principles rather than UML notation perfection."
    },
    {
      question: "How important are design patterns for LLD?",
      answer: "Design patterns are extremely important for LLD as they provide tested, proven development paradigms. They offer standardized solutions to common problems, promote code reusability, and make your system more maintainable. Understanding when and how to apply appropriate design patterns is a key skill in effective low-level design."
    },
    {
      question: "Can I apply LLD principles to my current projects?",
      answer: "Absolutely! LLD principles can be applied to projects of any size. For existing projects, you can gradually refactor code to follow SOLID principles and appropriate design patterns. For new features, you can implement them with proper LLD from the start, improving the overall code quality incrementally."
    },
    {
      question: "How does LLD help in technical interviews?",
      answer: "Many technical interviews, especially for senior roles, include LLD problems where candidates are asked to design classes and their interactions for a given scenario. Strong LLD skills help you demonstrate your ability to create maintainable, extensible code solutions, showcasing your software design expertise."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2>Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Common questions about learning and applying low-level design principles
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
