
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-lld-purple to-lld-blue text-white">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Master Low-Level Design?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of developers who have transformed their coding practices and accelerated their careers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lld-purple font-medium hover:bg-white">
              <Link to="/roadmap" className="flex items-center">
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/resources">
                Browse Resources
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
