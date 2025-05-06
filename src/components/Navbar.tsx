
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-bold text-2xl text-fixity-primary">
            <img
              src="/images/Fixity Group.jpg"
              alt="Fixity Group"
              className="h-14 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks currentPath={location.pathname} className="flex space-x-8" />
          <Button asChild className="bg-fixity-primary hover:bg-fixity-primary/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-fixity-primary">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-5 absolute w-full left-0 shadow-md animate-fade-in">
          <NavLinks currentPath={location.pathname} className="flex flex-col space-y-4" />
          <div className="mt-6">
            <Button asChild className="w-full bg-fixity-primary hover:bg-fixity-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  className?: string;
  currentPath: string;
}

const NavLinks = ({ className, currentPath }: NavLinksProps) => (
  <div className={cn("text-fixity-primary font-medium", className)}>
    <Link 
      to="/" 
      className={cn(
        "hover:text-fixity-secondary transition-colors",
        currentPath === "/" && "text-fixity-secondary font-bold"
      )}
    >
      Home
    </Link>
    <Link 
      to="/about" 
      className={cn(
        "hover:text-fixity-secondary transition-colors",
        currentPath === "/about" && "text-fixity-secondary font-bold"
      )}
    >
      About Us
    </Link>
    <Link 
      to="/subsidiaries" 
      className={cn(
        "hover:text-fixity-secondary transition-colors",
        currentPath === "/subsidiaries" && "text-fixity-secondary font-bold"
      )}
    >
      Our Subsidiaries
    </Link>
  </div>
);

export default Navbar;
