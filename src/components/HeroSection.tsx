import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-fixity-primary to-fixity-primary/90 text-white py-20 md:py-28">
      {/* Pattern Background */}
     <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            viewBox="100 100"
          >
            <defs>
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="6" fill="rgba(255,255,255,0.15)" />
                <circle cx="30" cy="30" r="6" fill="rgba(255,255,255,0.15)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>

      {/* Abstract shapes for background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-fixity-secondary/10 blur-2xl"></div>
        <div className="absolute left-1/2 -top-24 w-96 h-96 rounded-full bg-fixity-secondary/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-3xl md:mr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unifying Excellence Across Industries
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Fixity Group brings together leading companies in technology, education,
            healthcare, and sustainability under one visionary umbrella.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-fixity-secondary hover:bg-fixity-secondary/90 text-fixity-primary font-medium">
              <Link to="/subsidiaries">
                Explore Our Companies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white transition-colors"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-2/5">
          <div className="relative">
            <img
              src="/images/fixity-group-lyt.png"
              alt="Fixity Group Companies"
              className="rounded-lg object-cover w-full h-auto"
            />
            {/* <div className="absolute -bottom-9 -right-9 w-16 h-16 bg-fixity-secondary rounded-full flex items-center justify-center">
              <span className="text-fixity-primary font-bold"></span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
