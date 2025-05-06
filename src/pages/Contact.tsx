
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Define subsidiary contact information
const subsidiaryContacts = [
  {
    name: "Fixity Technologies",
    color: "tech",
    address: "3333 Warrenville Road, Suite #200, Lisle, Illinois 60532 USA",
    phone: "+1 (555) 123-4567",
    email: "info@fixitytechnologies.com",
    logo: "/images/Fixity-Tech.jpg"
  },
  {
    name: "Fixity EDX",
    color: "edx",
    address: "125 S Clark Street, 17th Floor, Chicago, IL 60603 USA",
    phone: "+1 (555) 234-5678",
    email: "info@fixityedx.com",
    logo: "/images/Fixityedx.jpg"
  },
  {
    name: "Fixity Learnpad",
    color: "learnpad",
    address: "1234 Innovation Drive, Suite #300, Austin, TX 78701 USA",
    phone: "+1 (555) 345-6789",
    email: "info@fixitylearnpad.com",
    logo: "/images/Fixity-Learn.jpg"
  },
  {
    name: "Fixity Green",
    color: "green",
    address: "5678 Eco Boulevard, Portland, OR 97201 USA",
    phone: "+1 (555) 456-7890",
    email: "info@fixitygreen.com",
    logo: "/images/fixity-green.png"
  },
  {
    name: "Liberty Hospitals",
    color: "hospital",
    address: "8901 Healthcare Avenue, Boston, MA 02110 USA",
    phone: "+1 (555) 567-8901",
    email: "info@libertyhospitals.com",
    logo: "/images/jayasree.jpg"
  },
  {
    name: "Shri Dhanvantri Vidyapeetam",
    color: "vidyapeetam",
    address: "2345 Education Lane, Chennai, Tamil Nadu 600001 India",
    phone: "+91 (555) 678-9012",
    email: "info@dhanvantri.edu",
    logo: "/images/shri-danvantri.jpeg"
  }
];

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-fixity-primary text-white">
          {/* Background Image */}
          <img
            src="/images/contact-us-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay with reduced opacity */}
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>

          {/* Text Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-lg text-grey-200 mb-8 font-bold">
                Have questions about Fixity Group or any of our subsidiaries?
                We'd love to hear from you and help address your inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left column with contact details */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-fixity-primary mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <ContactItem
                      icon={MapPin}
                      title="Headquarters Address"
                      details={["3333 Warrenville Road, Suite #200 Lisle, Illinois 60532 USA."]}
                    />
                    <ContactItem
                      icon={Phone}
                      title="Phone Numbers"
                      details={["+1 (555) 123-4567", "+1 (555) 987-6543"]}
                    />
                    <ContactItem
                      icon={Mail}
                      title="Email Addresses"
                      details={["info@fixitygroup.com", "support@fixitygroup.com"]}
                    />
                    <ContactItem
                      icon={Clock}
                      title="Business Hours"
                      details={["Monday - Friday: 9am - 6pm", "Saturday & Sunday: Closed"]}
                    />
                  </div>
                </div>

                {/* Subsidiary Contacts */}
                <div>
                  <h2 className="text-2xl font-bold text-fixity-primary mb-6">Subsidiary Contacts</h2>
                  <div className="space-y-4">
                    <SubsidiaryContact name="Fixity Technologies" email="info@fixitytechnologies.com" />
                    <SubsidiaryContact name="Fixity EDX" email="info@fixityedx.com" />
                    <SubsidiaryContact name="Fixity Learnpad" email="info@fixitylearnpad.com" />
                    <SubsidiaryContact name="Fixity Green" email="info@fixitygreen.com" />
                    <SubsidiaryContact name="Liberty Hospitals" email="info@libertyhospitals.com" />
                    <SubsidiaryContact name="Shri Dhanvantri Vidyapeetam" email="info@dhanvantri.edu" />
                  </div>
                </div>
              </div>

              {/* Right column with contact form */}
              <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-fixity-primary mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-20 bg-fixity-primary/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold text-fixity-primary mb-8 text-center">Find Us</h2>
            
            {/* Main Map */}
            <div className="h-80 bg-gray-200 rounded-xl overflow-hidden mb-12">
              <iframe
                title="Hyderabad Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.4563184893!2d78.474061!3d17.385044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973f4f1f3075%3A0x6d00faed5e3b6c7e!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714918423893!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
            
            {/* Subsidiary Location Cards */}
            <h3 className="text-xl font-bold text-fixity-primary mb-6 text-center">Our Subsidiary Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subsidiaryContacts.map((subsidiary, index) => (
                <SubsidiaryLocationCard 
                  key={index}
                  name={subsidiary.name}
                  address={subsidiary.address}
                  phone={subsidiary.phone}
                  email={subsidiary.email}
                  color={subsidiary.color}
                  logo={subsidiary.logo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold text-fixity-primary mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FaqItem
                question="How can I partner with Fixity Group?"
                answer="We're always open to exploring strategic partnerships. Please reach out through our contact form with details about your organization and partnership interests."
              />
              <FaqItem
                question="Are there job opportunities across Fixity Group companies?"
                answer="Yes, we regularly have openings across our subsidiaries. Please visit the careers section of the specific subsidiary you're interested in for current opportunities."
              />
              <FaqItem
                question="How do the different Fixity Group companies work together?"
                answer="Our subsidiaries maintain their operational independence while collaborating on projects and initiatives that benefit from cross-industry expertise and shared resources."
              />
              <FaqItem
                question="Can I get services from multiple Fixity Group companies?"
                answer="Absolutely! Many of our clients benefit from integrated solutions that leverage the capabilities of multiple companies within our group. Contact us to discuss your needs."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ContactItem = ({ icon: Icon, title, details }) => (
  <div className="flex space-x-4">
    <div className="mt-1">
      <Icon className="w-5 h-5 text-fixity-secondary" />
    </div>
    <div>
      <h3 className="font-medium text-fixity-primary">{title}</h3>
      <div className="mt-1 space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  </div>
);

const SubsidiaryContact = ({ name, email }) => (
  <div className="p-3 bg-gray-50 rounded-md">
    <p className="font-medium text-fixity-primary">{name}</p>
    <a href={`mailto:${email}`} className="text-sm text-fixity-secondary hover:underline">
      {email}
    </a>
  </div>
);

const SubsidiaryLocationCard = ({ name, address, phone, email, color, logo }) => {
  // Get color based on subsidiary type
  const getColor = (colorKey) => {
    const colorMap = {
      'tech': '#f4af1b',
      'edx': '#181d4c',
      'learnpad': '#FF6701',
      'green': '#69AF07',
      'hospital': '#406cb3',
      'vidyapeetam': '#FFA500'
    };
    return colorMap[colorKey] || colorMap.tech;
  };

  const subsidiaryColor = getColor(color);
  
  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow"
      style={{
        borderTop: `3px solid ${subsidiaryColor}`
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        {logo ? (
          <div className="w-10 h-10 overflow-hidden rounded-md flex items-center justify-center bg-white border border-gray-100">
            <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div 
            className="w-10 h-10 rounded-md flex items-center justify-center text-white text-lg font-bold"
            style={{ backgroundColor: subsidiaryColor }}
          >
            {name.charAt(0)}
          </div>
        )}
        <h3 className="font-bold text-fixity-primary">{name}</h3>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{address}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" />
          <a href={`tel:${phone}`} className="text-gray-600 hover:text-fixity-primary hover:underline">
            {phone}
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <a href={`mailto:${email}`} className="text-gray-600 hover:text-fixity-primary hover:underline">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="font-bold text-fixity-primary mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Contact;
