import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SubsidiaryCard, { SubsidiaryProps } from "@/components/SubsidiaryCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const subsidiaries: SubsidiaryProps[] = [
  {
    name: "Fixity Technologies",
    description: "Innovative technology solutions and IT services for businesses across industries.",
    color: "tech",
    website: "#",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Fixity EDX",
    description: "Digital education platform offering advanced learning experiences and resources.",
    color: "edx",
    website: "#",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Fixity Learnpad",
    description: "Interactive learning tools and platforms for students and educational institutions.",
    color: "learnpad",
    website: "#",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Fixity Green",
    description: "Sustainable solutions and eco-friendly initiatives for a greener future.",
    color: "green",
    website: "#",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Jayasree Liberty Hospitals",
    description: "State-of-the-art healthcare facilities providing quality medical services.",
    color: "hospital",
    website: "#",
    logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Shri Dhanvantri Vidyapeetam",
    description: "Educational institution dedicated to traditional and modern learning methodologies.",
    color: "vidyapeetam",
    website: "#",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop&auto=format",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary">
                  Bringing Together Excellence Under One Vision
                </h2>
                <p className="text-gray-600">
                  Fixity Group is the parent organization that unites six diverse yet complementary companies across technology, 
                  education, healthcare, and sustainability sectors. Our mission is to drive innovation and excellence 
                  in each industry while fostering collaboration among our subsidiaries.
                </p>
                <p className="text-gray-600">
                  With a strong commitment to quality, innovation, and social responsibility, 
                  Fixity Group companies are leaders in their respective fields, contributing to 
                  a better future through cutting-edge solutions and services.
                </p>
                <Button asChild className="bg-fixity-primary hover:bg-fixity-primary/90">
                  <Link to="/about">
                    Discover Our Journey
                  </Link>
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for image or video */}
                  <div className="text-6xl font-bold text-fixity-primary/20">FIXITY GROUP</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subsidiaries Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary mb-4">
                Our Family of Companies
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover our diverse portfolio of businesses, each contributing unique expertise 
                and solutions in their respective industries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsidiaries.map((subsidiary) => (
                <div key={subsidiary.name} className={`card-${subsidiary.color} transform transition-all duration-300 hover:-translate-y-1`}>
                  <SubsidiaryCard {...subsidiary} />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-fixity-secondary text-fixity-secondary hover:bg-fixity-secondary/5">
                <Link to="/subsidiaries">
                  Learn More About Our Companies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 md:py-24 bg-fixity-primary/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-fixity-tech/20 rounded-lg"></div>
                  <div className="aspect-square bg-fixity-edx/20 rounded-lg"></div>
                  <div className="aspect-square bg-fixity-learnpad/20 rounded-lg"></div>
                  <div className="aspect-square bg-fixity-green/20 rounded-lg"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary">
                  Who We Are
                </h2>
                <p className="text-gray-600">
                  At Fixity Group, we believe in the power of collaboration and excellence. 
                  Our diverse portfolio of companies shares a common purpose: to innovate, elevate standards, 
                  and create meaningful impact in their respective industries.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-fixity-primary">Our Mission</h3>
                    <p className="text-gray-600">To unite diverse expertise under one vision, delivering exceptional value and driving positive change.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-fixity-primary">Our Vision</h3>
                    <p className="text-gray-600">To be a global leader in creating innovative solutions that improve lives and transform industries.</p>
                  </div>
                </div>
                <Button asChild className="bg-fixity-primary hover:bg-fixity-primary/90">
                  <Link to="/about">
                    More About Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
