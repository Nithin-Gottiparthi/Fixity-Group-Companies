
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Stethoscope, BookOpen, Briefcase } from "lucide-react";

const ShriDhanvantriVidyapeetam = () => {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Paramedical & Nursing Education",
      description: "Comprehensive academic programs combining theoretical knowledge with practical expertise."
    },
    {
      icon: Stethoscope,
      title: "Clinical Skills Development",
      description: "Advanced training in essential clinical procedures and patient care techniques."
    },
    {
      icon: Heart,
      title: "Hands-on Hospital Training",
      description: "Real-world experience in healthcare settings with direct patient interaction."
    },
    {
      icon: Users,
      title: "Community Health Outreach",
      description: "Programs focused on public health initiatives and community wellness."
    },
    {
      icon: BookOpen,
      title: "Ethics & Professional Practice",
      description: "Foundation in healthcare ethics, professional standards, and patient advocacy."
    },
    {
      icon: Briefcase,
      title: "Career Readiness in Healthcare",
      description: "Job placement assistance and career development support for graduates."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-fixity-primary to-fixity-primary/80 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern id="healthcare-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <path d="M8 10h4M10 8v4" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#healthcare-pattern)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
            {/* Coming Soon Badge */}
            <div className="mb-6">
              <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-400 text-lg px-6 py-2 font-bold animate-pulse">
                🚀 COMING SOON
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shri Dhanvantri Vidyapeetam
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Shaping Compassionate Healthcare Leaders of Tomorrow
            </p>

            {/* Institution Logo */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <img
                  src="/images/shri-danvantri.jpeg"
                  alt="Shri Dhanvantri Vidyapeetam Logo"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary mb-6">
                  About Our Institution
                </h2>
                <div className="w-24 h-1 bg-fixity-vidyapeetam mx-auto mb-8"></div>
              </div>

              <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                    Dhanvantri College of Paramedical & Nursing Sciences is a world-class institution committed to nurturing compassionate, skilled, and job-ready nursing professionals. With a forward-looking vision and strong ethical foundation, we are set to launch in the coming year as a premier destination for paramedical and nursing education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Focus Areas Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary mb-6">
                Core Focus Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach to healthcare education encompasses six key pillars that prepare students for successful careers in nursing and paramedical fields.
              </p>
              <div className="w-24 h-1 bg-fixity-vidyapeetam mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fixity-vidyapeetam/20 to-fixity-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-fixity-vidyapeetam" />
                      </div>
                      <CardTitle className="text-xl text-fixity-primary group-hover:text-fixity-vidyapeetam transition-colors">
                        {area.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-center text-gray-600 leading-relaxed">
                        {area.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Launch Timeline Section */}
        <section className="py-16 md:py-20 bg-fixity-primary/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fixity-primary mb-8">
              Get Ready for Launch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              We are excited to announce that Shri Dhanvantri Vidyapeetam will be opening its doors soon. 
              Stay tuned for updates on admissions, course offerings, and campus facilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-fixity-vidyapeetam/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-fixity-vidyapeetam">1</span>
                </div>
                <h3 className="text-lg font-semibold text-fixity-primary mb-2">Campus Development</h3>
                <p className="text-gray-600">State-of-the-art facilities and modern learning environments</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-fixity-vidyapeetam/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-fixity-vidyapeetam">2</span>
                </div>
                <h3 className="text-lg font-semibold text-fixity-primary mb-2">Faculty Recruitment</h3>
                <p className="text-gray-600">Expert educators and healthcare professionals</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-fixity-vidyapeetam/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-fixity-vidyapeetam">3</span>
                </div>
                <h3 className="text-lg font-semibold text-fixity-primary mb-2">Admissions Open</h3>
                <p className="text-gray-600">Applications for our inaugural academic year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-fixity-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Be the first to know when admissions open and get updates on our progress. 
              Contact the Fixity Group for more information about Shri Dhanvantri Vidyapeetam.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-fixity-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us for Updates
              </a>
              <a
                href="/subsidiaries"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-fixity-primary transition-colors"
              >
                Explore Other Entities
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShriDhanvantriVidyapeetam;
