import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Subsidiary contact details
const subsidiaryContacts = [
  {
    name: "Fixity Technologies",
    color: "tech",
    address: "3333 Warrenville Road, Suite #200, Lisle, Illinois 60532 USA",
    phone: "+1 (630) 270 2250",
    email: "info@fixitytech.com",
    logo: "/images/Fixity-Tech.jpg",
  },
  {
    name: "Fixity EDX",
    color: "edx",
    address: "125 S Clark Street, 17th Floor, Chicago, IL 60603 USA",
    phone: "+91-8374448889",
    email: "contact@fixityedx.com",
    logo: "/images/Fixityedx.jpg",
  },
  {
    name: "Learning pad",
    color: "learnpad",
    address: "1st floor, Legend Platinum, Jubilee Enclave, HITEC City, Kondapur, Telangana 500084",
    phone: "+91 9390938141",
    email: "hello@fixitylearn.com",
    logo: "/images/Fixity-Learn.jpg",
  },
  {
    name: "Fixity Green",
    color: "green",
    address: "Legend Platinum, Jubilee Enclave, HITEC City, Kondapur, Telangana 500084",
    phone: "+91 7075762952",
    email: "info@fixitygreen.com",
    logo: "/images/fixity-green.png",
  },
  {
    name: "Liberty Hospitals",
    color: "hospital",
    address: "Kings Square Complex, MG Rd, Kishore Nagar, Vijayawada, Andhra Pradesh 520007",
    phone: "+91-7095123222",
    email: "contact@jslibertyhospitals.com",
    logo: "/images/jayasree.jpg",
  },
  {
    name: "Shri Dhanvantri Vidyapeetam",
    color: "vidyapeetam",
    address: "2345 Education Lane, Chennai, Tamil Nadu 600001 India",
    phone: "+91 (555) 678-9012",
    email: "info@dhanvantri.edu",
    logo: "/images/shri-danvantri.jpeg",
  },
];

const getColor = (key: string) => ({
  tech: '#f4af1b',
  edx: '#5568fe', // brightened for visibility
  learnpad: '#FF6701',
  green: '#69AF07',
  hospital: '#3f84f2', // brightened for visibility
  vidyapeetam: '#FFA500',
}[key] || "#ccc");

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-fixity-primary text-white">
          <img
            src="/images/contact-us-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-10 z-10" />
          <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-lg text-gray-200 mb-8 font-bold">
                Have questions about Fixity Group or any of our subsidiaries? We'd love to hear from you and help address your
                inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
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
                    details={["+1 (630) 270 2250", "+91 (720) 710 7334"]}
                  />
                  <ContactItem
                    icon={Mail}
                    title="Email Addresses"
                    details={["info@fixitygroup.com | info@fixitytech.com", "support@fixitygroup.com"]}
                  />
                  <ContactItem
                    icon={Clock}
                    title="Business Hours"
                    details={["Monday - Friday: 9am - 6pm", "Saturday & Sunday: Closed"]}
                  />
                </div>
              </div>
              <div
                className="lg:col-span-2 p-8 rounded-2xl border transition-all duration-300 bg-gradient-to-br from-white via-gray-50 to-gray-100 border-gray-200 shadow-md hover:shadow-lg hover:border-fixity-primary transform hover:scale-[1.02]">
                <h2 className="text-2xl font-bold text-fixity-primary mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* Find Us Section */}
        <section className="py-16 md:py-20 bg-fixity-primary/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold text-fixity-primary mb-8 text-center">Find Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subsidiaryContacts.map((subsidiary, idx) => (
                <SubsidiaryLocationCard key={idx} {...subsidiary} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ContactItem = ({ icon: Icon, title, details }: any) => (
  <div className="flex space-x-4">
    <Icon className="w-5 h-5 text-fixity-secondary mt-1" />
    <div>
      <h3 className="font-medium text-fixity-primary">{title}</h3>
      <div className="mt-1 space-y-1">
        {details.map((d: string, i: number) => (
          <p key={i} className="text-gray-600">{d}</p>
        ))}
      </div>
    </div>
  </div>
);

const SubsidiaryLocationCard = ({
  name,
  color,
  address,
  phone,
  email,
  logo,
}: {
  name: string;
  color: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
}) => {
  const clr = getColor(color);

  return (
    <div
      className="bg-white rounded-lg p-5 border border-gray-100 transform transition-all duration-300 hover:scale-105"
      style={{
        borderTop: `3px solid ${clr}`,
        boxShadow: `0 2px 8px rgba(0, 0, 0, 0.05)`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 20px ${clr}55`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 8px rgba(0, 0, 0, 0.05)`;
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
            style={{ backgroundColor: clr }}
          >
            {name.charAt(0)}
          </div>
        )}
        <h3 className="font-bold text-fixity-primary">{name}</h3>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
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

export default Contact;
