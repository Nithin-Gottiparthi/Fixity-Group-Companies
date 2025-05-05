
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fixity-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              FIXITY <span className="text-fixity-secondary">GROUP</span>
            </h3>
            <p className="text-gray-300 max-w-xs">
              Unifying excellence across technology, education, healthcare, 
              and sustainability sectors.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/subsidiaries">Subsidiaries</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </div>
          </div>

          {/* Subsidiaries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Subsidiaries</h3>
            <div className="flex flex-col space-y-2">
              <FooterLink to="/subsidiaries">Fixity Technologies</FooterLink>
              <FooterLink to="/subsidiaries">Fixity EDX</FooterLink>
              <FooterLink to="/subsidiaries">Fixity Learnpad</FooterLink>
              <FooterLink to="/subsidiaries">Fixity Green</FooterLink>
              <FooterLink to="/subsidiaries">Liberty Hospitals</FooterLink>
              <FooterLink to="/subsidiaries">Shri Dhanvantri Vidyapeetam</FooterLink>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-fixity-secondary shrink-0 mt-0.5" />
                <span>123 Business Street, Tech Park, Business City, 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-fixity-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-fixity-secondary shrink-0" />
                <span>info@fixitygroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fixity Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-fixity-secondary transition-colors"
  >
    <Icon className="w-4 h-4" />
  </a>
);

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-gray-300 hover:text-fixity-secondary transition-colors">
    {children}
  </Link>
);

export default Footer;
