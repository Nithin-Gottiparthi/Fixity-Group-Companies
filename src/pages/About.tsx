import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-fixity-primary text-white">
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
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fixity Group</h1>
              <p className="text-lg text-gray-200 mb-8">
                Learn more about our organization, our mission, and the vision that drives us forward.
              </p>
            </div>
          </div>
        </section>


        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary">Our Story</h2>
                <p className="text-gray-600">
                  Fixity Group was founded with a vision to create a synergistic ecosystem of companies that excel in their
                  respective industries while sharing knowledge, resources, and a common set of values.
                </p>
                <p className="text-gray-600">
                  What began as a single technology company has evolved into a diverse portfolio spanning technology,
                  education, healthcare, and sustainability. Through strategic growth and acquisitions,
                  we've assembled a family of companies that complement and strengthen each other.
                </p>
                <p className="text-gray-600">
                  Today, Fixity Group represents a commitment to excellence across multiple sectors, delivering
                  innovative solutions that address complex challenges and create meaningful impact.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gradient-to-br to-gray-100 rounded-xl flex items-center justify-center">
                  <img src="/images/timeline.png" alt="fixity timeline" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 md:py-24 bg-fixity-primary/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="aspect-square bg-fixity-tech/10 rounded-lg flex items-center justify-center">
                  <img
                    src="/images/companies.png"
                    alt="companies image"
                    style={{ borderRadius: 10 }}
                    className="w-full h-full object-cover"
                  />
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
                  <Link to="/Subsidiaries">
                    Explore Our Subsidiaries
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        {/* <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary mb-4">Our Leadership</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Meet the team guiding Fixity Group's vision and strategy across our family of companies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <LeadershipCard
                name="Vinay Velivela"
                position="Chief Executive Officer"
                description="With over 20 years in technology leadership, Viny drives our strategic vision and oversees the entire Fixity Group ecosystem."
                imageUrl="/images/ceo.png"
              />
              <LeadershipCard
                name="Dr. Jayasree Menon"
                position="Chief Innovation Officer"
                description="Leading our R&D initiatives across all subsidiaries, Dr. Menon focuses on transformative technologies and collaborative innovation."
                imageUrl="/images/jayasree.jpg"
              />
              <LeadershipCard
                name="Sarah Williams"
                position="Chief Financial Officer"
                description="Bringing extensive experience in corporate finance, Sarah manages our financial strategy and ensures sustainable growth across all businesses."
                imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              />
              <LeadershipCard
                name="Michael Chen"
                position="Chief Technology Officer"
                description="Michael leads our technology initiatives, driving digital transformation and ensuring technological excellence across our subsidiaries."
                imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              />
              <LeadershipCard
                name="Dr. Priya Shah"
                position="Director of Healthcare"
                description="Overseeing our healthcare subsidiaries, Dr. Shah brings medical expertise and a passion for improving healthcare accessibility and quality."
                imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              />
              <LeadershipCard
                name="Dr. Aarav Patel"
                position="Director of Education"
                description="An education innovator with a focus on blending traditional wisdom with modern teaching methods for our education subsidiaries."
                imageUrl="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              />
            </div>
          </div>
        </section> */}

        {/* Our Core Values (Updated Version) */}
        <section className="py-16 md:py-20 bg-fixity-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-200 max-w-3xl mx-auto">
                These principles guide everything we do across the Fixity Group of companies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <ValueCard key={value.title} title={value.title} description={value.description} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary mb-6">Interested in Learning More?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our family of companies and see how each contributes to our overall mission and vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-fixity-primary hover:bg-fixity-primary/90">
                <Link to="/subsidiaries">Explore Our Subsidiaries</Link>
              </Button>
              <Button asChild variant="outline" className="border-fixity-secondary text-fixity-secondary hover:bg-fixity-secondary/5">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const coreValues = [
  {
    title: "Innovation",
    description: "Constantly seeking new ideas and approaches to solve complex problems and create better solutions.",
  },
  {
    title: "Excellence",
    description: "Striving for the highest standards in everything we do, from product quality to customer service.",
  },
  {
    title: "Integrity",
    description: "Conducting business with honesty, transparency and ethical practices at all times.",
  },
  {
    title: "Collaboration",
    description: "Working together across our companies to share knowledge, resources and drive better outcomes.",
  },
  {
    title: "Sustainability",
    description: "Committed to environmental responsibility and creating solutions that benefit future generations.",
  },
  {
    title: "Social Impact",
    description: "Dedicated to making a positive difference in communities through our work and initiatives.",
  },
];

const ValueCard = ({ title, description }) => (
  <div className="bg-white/90 text-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold text-fixity-primary mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const LeadershipCard = ({ name, position, description, imageUrl }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="aspect-[4/3] relative">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${name}, ${position}`}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="text-4xl font-bold text-fixity-primary bg-fixity-secondary/20">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-fixity-primary">{name}</h3>
      <p className="text-fixity-secondary mb-2">{position}</p>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  </div>
);

export default About;
