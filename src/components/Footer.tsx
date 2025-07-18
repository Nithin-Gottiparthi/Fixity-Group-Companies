import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const subsidiaryColors = {
  "Fixity Technologies": "#f4af1b", // tech
  "Fixity EDX": "#2c34a8", // edx
  "Learning pad": "#FF6701", // learnpad
  "Fixity Green": "#69AF07", // green
  "Jayasree Liberty Hospitals": "#2e5dbf", // hospital
  "Shri Dhanvantri Vidyapeetam": "#FFA500", // vidyapeetam
};

const Footer = () => {
  return (
    <footer className="bg-fixity-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <img
                src="/images/fixity-group-lyt.png"
                alt="Fixity Group"
                style={{ width: "190px", height: "120px" }}
              />
              <img
                src="/images/footer_image.png"
                alt="Fixity Group Accredited"
                style={{ width: "190px", height: "120px" }}
              />
            </h3>
            <p className="text-gray-300 max-w-xs">
              Unifying excellence across technology, education, healthcare,
              and sustainability sectors.
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                icon={Facebook}
                url="https://www.facebook.com/fixitytech"
              />
              <SocialIcon
                icon={Twitter}
                url="https://x.com/FixityTech_"
              />
              <SocialIcon
                icon={Linkedin}
                url="https://www.instagram.com/fixitytech/"
              />
              <SocialIcon
                icon={Instagram}
                url="https://www.linkedin.com/company/fixity-technologies/"
              />
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
            <h3 className="text-lg font-semibold">Our Entities</h3>
            <div className="flex flex-col space-y-2">
              {Object.entries(subsidiaryColors).map(([name, color]) => (
                <FooterLinkWithColor key={name} to="/subsidiaries" color={color}>
                  {name}
                </FooterLinkWithColor>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.google.com/maps?q=3333+Warrenville+Road,+Suite+200,+Lisle,+Illinois+60532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-fixity-secondary transition-colors"
              >
                <MapPin className="w-5 h-5 text-fixity-secondary shrink-0 mt-0.5" />
                <span>
                  3333 Warrenville Road, Suite #200 Lisle, Illinois 60532 USA.
                </span>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 hover:text-fixity-secondary transition-colors"
              >
                <Phone className="w-5 h-5 text-fixity-secondary shrink-0" />
                <span>+1 (630) 270 2250</span>
              </a>

              <a
                href="mailto:info@fixitygroup.com"
                className="flex items-center space-x-3 hover:text-fixity-secondary transition-colors"
              >
                <Mail className="w-5 h-5 text-fixity-secondary shrink-0" />
                <span>info@fixitygroup.com</span>
              </a>

            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fixity Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Social icon with external link
const SocialIcon = ({
  icon: Icon,
  url,
}: {
  icon: React.ElementType;
  url: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-fixity-secondary transition-colors"
  >
    <Icon className="w-4 h-4 text-white" />
  </a>
);

// Subsidiary link with dynamic hover color
const FooterLinkWithColor = ({
  to,
  children,
  color,
}: {
  to: string;
  children: React.ReactNode;
  color: string;
}) => (
  <Link
    to={to}
    className="text-gray-300 transition-colors duration-200"
    onMouseEnter={(e) => (e.currentTarget.style.color = color)}
    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
  >
    {children}
  </Link>
);

// Simple footer link
const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-fixity-secondary transition-colors"
  >
    {children}
  </Link>
);

export default Footer;
