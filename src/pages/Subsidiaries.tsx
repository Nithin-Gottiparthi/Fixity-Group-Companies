
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define subsidiary data
const subsidiaries = [
  {
    id: "fixity-technologies",
    name: "Fixity Technologies",
    color: "tech",
    shortDesc: "Innovative technology solutions and IT services for businesses across industries.",
    longDesc: "Fixity Technologies is at the forefront of digital transformation, providing cutting-edge IT solutions, software development, and consulting services. With expertise in AI, cloud computing, cybersecurity, and enterprise software, we help businesses leverage technology to optimize operations, enhance customer experiences, and drive growth.",
    features: [
      "Custom Software Development",
      "Cloud Migration & Management",
      "Cybersecurity Solutions",
      "AI & Machine Learning Integration",
      "IT Consulting & Strategy"
    ],
    caseStudies: [
      "Helped a financial services firm reduce operational costs by 30% through cloud migration",
      "Developed a custom ERP solution for a manufacturing company increasing efficiency by 25%",
      "Implemented cybersecurity framework for healthcare provider protecting sensitive patient data"
    ],
    website: "#"
  },
  {
    id: "fixity-edx",
    name: "Fixity EDX",
    color: "edx",
    shortDesc: "Digital education platform offering advanced learning experiences and resources.",
    longDesc: "Fixity EDX is transforming education through innovative digital learning platforms. Our comprehensive suite of educational technology solutions serves K-12 schools, universities, and corporate training programs. We combine cutting-edge technology with pedagogical expertise to create engaging, effective, and accessible learning experiences for all.",
    features: [
      "Interactive Learning Management System",
      "Virtual Classrooms & Collaboration Tools",
      "Adaptive Learning Technology",
      "Educational Content Development",
      "Learning Analytics & Assessment Tools"
    ],
    caseStudies: [
      "Partnered with 50+ schools to implement digital learning solutions during pandemic",
      "Developed custom corporate training platform reducing training time by 40%",
      "Created adaptive learning system improving student performance by 28%"
    ],
    website: "#"
  },
  {
    id: "fixity-learnpad",
    name: "Fixity Learnpad",
    color: "learnpad",
    shortDesc: "Interactive learning tools and platforms for students and educational institutions.",
    longDesc: "Fixity Learnpad specializes in interactive learning tools that make education more engaging and effective. Our tablet-based solutions and educational apps are designed for students of all ages, providing personalized learning experiences that adapt to individual needs and learning styles. We're committed to making quality education accessible and enjoyable.",
    features: [
      "Educational Tablets & Devices",
      "Interactive Learning Applications",
      "Gamified Educational Content",
      "Personalized Learning Paths",
      "Classroom Management Tools for Educators"
    ],
    caseStudies: [
      "Deployed 10,000 learning tablets to underserved schools improving literacy rates by 35%",
      "Developed language learning app with 2 million active users",
      "Created special education tools improving engagement for students with diverse learning needs"
    ],
    website: "#"
  },
  {
    id: "fixity-green",
    name: "Fixity Green",
    color: "green",
    shortDesc: "Sustainable solutions and eco-friendly initiatives for a greener future.",
    longDesc: "Fixity Green is dedicated to environmental sustainability through innovative green technology solutions. We develop and implement renewable energy systems, waste management solutions, and sustainable infrastructure projects. Our expert team works with businesses, governments, and communities to reduce environmental impact and create a more sustainable future.",
    features: [
      "Renewable Energy Solutions",
      "Sustainable Waste Management",
      "Energy Efficiency Consulting",
      "Carbon Footprint Analysis",
      "Green Building Design & Certification"
    ],
    caseStudies: [
      "Implemented solar energy solutions for business campus reducing energy costs by 45%",
      "Designed waste management system for municipality reducing landfill waste by 60%",
      "Provided green building consultation for corporate headquarters achieving LEED Platinum certification"
    ],
    website: "#"
  },
  {
    id: "liberty-hospitals",
    name: "Liberty Hospitals",
    color: "hospital",
    shortDesc: "State-of-the-art healthcare facilities providing quality medical services.",
    longDesc: "Liberty Hospitals is committed to providing exceptional healthcare services with compassion and expertise. Our network of modern medical facilities offers comprehensive care across multiple specialties. With a patient-centered approach and investment in the latest medical technologies, we strive to improve healthcare outcomes and enhance the quality of life for our community.",
    features: [
      "State-of-the-art Medical Facilities",
      "Multi-specialty Healthcare Services",
      "Advanced Diagnostic Technologies",
      "Telehealth & Remote Patient Monitoring",
      "Preventive Care & Wellness Programs"
    ],
    caseStudies: [
      "Established telemedicine program serving 50,000+ patients in rural areas",
      "Implemented AI-assisted diagnostic system improving early detection rates by 40%",
      "Created integrated patient care system reducing readmission rates by 25%"
    ],
    website: "#"
  },
  {
    id: "shri-dhanvantri-vidyapeetam",
    name: "Shri Dhanvantri Vidyapeetam",
    color: "vidyapeetam",
    shortDesc: "Educational institution dedicated to traditional and modern learning methodologies.",
    longDesc: "Shri Dhanvantri Vidyapeetam is an educational institution that blends traditional wisdom with modern educational approaches. Specializing in healthcare education, particularly Ayurvedic medicine and holistic wellness, we provide comprehensive academic programs that prepare students for successful careers while preserving ancient knowledge systems. Our curriculum emphasizes both theoretical understanding and practical applications.",
    features: [
      "Ayurvedic Medicine Programs",
      "Modern Healthcare Education",
      "Research Facilities & Initiatives",
      "Traditional Knowledge Systems",
      "Integrated Learning Approach"
    ],
    caseStudies: [
      "Graduated 5,000+ healthcare professionals now practicing worldwide",
      "Conducted research leading to 4 patented herbal formulations",
      "Created innovative curriculum integrating traditional medicine with modern healthcare practices"
    ],
    website: "#"
  }
];

const Subsidiaries = () => {
  const [activeTab, setActiveTab] = useState("fixity-technologies");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-fixity-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Subsidiaries</h1>
              <p className="text-lg text-gray-200 mb-8">
                Explore our diverse portfolio of companies, each making significant contributions in their respective industries.
              </p>
            </div>
          </div>
        </section>

        {/* Subsidiaries Details */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Tabs 
              defaultValue="fixity-technologies" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-8"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto">
                {subsidiaries.map((subsidiary) => (
                  <TabsTrigger
                    key={subsidiary.id}
                    value={subsidiary.id}
                    className={`
                      px-4 py-3 text-sm font-medium border-b-2 data-[state=active]:border-fixity-${subsidiary.color}
                      data-[state=active]:text-fixity-${subsidiary.color} data-[state=active]:shadow-none
                    `}
                  >
                    {subsidiary.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {subsidiaries.map((subsidiary) => (
                <TabsContent key={subsidiary.id} value={subsidiary.id}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left column with details */}
                    <div className="lg:w-2/3 space-y-8">
                      <div>
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-fixity-${subsidiary.color}`}>
                          {subsidiary.name}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {subsidiary.longDesc}
                        </p>
                        <Button asChild className={`bg-fixity-${subsidiary.color} hover:bg-fixity-${subsidiary.color}/90`}>
                          <a href={subsidiary.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </a>
                        </Button>
                      </div>
                      
                      {/* Key Features */}
                      <div>
                        <h3 className="text-xl font-bold text-fixity-primary mb-4">Key Offerings</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {subsidiary.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className={`w-1.5 h-1.5 bg-fixity-${subsidiary.color} rounded-full mt-2`} />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Case Studies */}
                      <div>
                        <h3 className="text-xl font-bold text-fixity-primary mb-4">Success Stories</h3>
                        <div className="space-y-4">
                          {subsidiary.caseStudies.map((study, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-gray-600">{study}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column with image */}
                    <div className="lg:w-1/3">
                      <div className={`bg-fixity-${subsidiary.color}/10 p-6 rounded-xl h-full`}>
                        <div className={`aspect-square bg-fixity-${subsidiary.color}/20 rounded-lg mb-6 flex items-center justify-center`}>
                          <span className={`text-5xl font-bold text-fixity-${subsidiary.color}/30`}>
                            {subsidiary.name.charAt(0)}
                          </span>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-fixity-primary">Connect With Us</h3>
                          <p className="text-gray-600">
                            Interested in learning more about {subsidiary.name} or discussing potential collaboration?
                          </p>
                          <Button asChild variant="outline" className={`border-fixity-${subsidiary.color} text-fixity-${subsidiary.color} hover:bg-fixity-${subsidiary.color}/5 w-full`}>
                            <a href="/contact">Contact {subsidiary.name}</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Synergy Section */}
        <section className="py-16 md:py-20 bg-fixity-primary/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary mb-4">Better Together</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                While each of our companies excels in their individual domain, together they create a powerful ecosystem 
                of complementary expertise and capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SynergyCard 
                title="Cross-Industry Innovation" 
                description="Our companies collaborate across sectors to develop unique solutions that address complex challenges from multiple perspectives." 
              />
              <SynergyCard 
                title="Shared Resources & Expertise" 
                description="Companies within the Fixity Group benefit from shared knowledge, technology infrastructure, and business support services." 
              />
              <SynergyCard 
                title="Integrated Customer Solutions" 
                description="We provide comprehensive solutions by leveraging the combined strengths and capabilities of our diverse portfolio of companies." 
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-fixity-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect?</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Reach out to learn more about our family of companies or to discuss potential partnerships and opportunities.
            </p>
            <Button asChild className="bg-white text-fixity-primary hover:bg-gray-100">
              <a href="/contact">Contact Fixity Group</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const SynergyCard = ({ title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-xl font-bold text-fixity-primary mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Subsidiaries;
