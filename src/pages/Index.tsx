import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SubsidiaryCard, { SubsidiaryProps } from "@/components/SubsidiaryCard";
import InteractivePartners from "@/components/InteractivePartners";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const subsidiaries: SubsidiaryProps[] = [
  {
    name: "Fixity Technologies",
    description: "Innovative technology solutions and IT services for businesses across industries.",
    color: "tech",
    website: "https://fixitytech.com",
    logo: "/images/Fixity-Tech.jpg",
  },
  {
    name: "Fixity EDX",
    description: "Digital education platform offering advanced learning experiences and resources.",
    color: "edx",
    website: "https://fixityedx.com",
    logo: "/images/Fixityedx.jpg",
  },
  {
    name: "Learning Pad",
    description: "Interactive learning tools and platforms for students and educational institutions.",
    color: "learnpad",
    website: "https://fixitylearn.com",
    logo: "/images/Fixity-Learn.jpg",
  },
  {
    name: "Fixity Green",
    description: "Sustainable solutions and eco-friendly initiatives for a greener future.",
    color: "green",
    website: "https://fixitygreen.com",
    logo: "/images/fixity-green.png",
  },
  {
    name: "Jayasree Liberty Hospitals",
    description: "State-of-the-art healthcare facilities providing quality medical services.",
    color: "hospital",
    website: "https://jslibertyhospitals.com",
    logo: "/images/jayasree.jpg",
  },
  {
    name: "Shri Dhanvantri Vidyapeetam",
    description: "Educational institution dedicated to traditional and modern learning methodologies.",
    color: "vidyapeetam",
    website: "#",
    logo: "/images/shri-danvantri.jpeg",
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
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl flex items-center justify-center p-8">
                  <InteractivePartners />
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
                <div className="aspect-square bg-fixity-tech/10 rounded-lg flex items-center justify-center">
                  <img
                    src="/images/ceo.png"
                    alt="Ceo image"
                    style={{ borderRadius: 10 }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary">
                  Chairman's Message
                </h2>
                <p className="text-gray-600">
                  <strong>Dear Valued Stakeholders,</strong><br />

                  On behalf of Fixity Group of Companies, thank you for your continued support and partnership. We are proud to be recognized by Fortune 500 companies as a global leader in IT staffing and solutions, product development, and learning and development.

                  Our commitment to excellence drives us to deliver exceptional service while building strong, trust-based relationships with our customers, employees, partners, and shareholders. We believe that investing in our people is key to our success, and we are dedicated to providing continuous learning and growth opportunities within a culture of innovation and collaboration.

                  Your support is vital to our journey, and we are honored to have you with us. We look forward to continuing our successful partnership and delivering outstanding results together.

                  Thank you for your trust in Fixity Group of Companies.
                </p>
                <p className="text-gray-600">
                  Sincerely,
                  <br />
                  <strong>Vinay Velivela</strong>
                  <br />
                  Founder & Chairman, Fixity Group of Companies
                </p>
                <Button asChild className="bg-fixity-primary hover:bg-fixity-primary/90">
                  <Link to="/about">More About Us</Link>
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
