
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-md shadow-lg rounded-b-2xl mx-4 mt-0 bg-background/80"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-heading text-foreground">
            neco
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#services" className="navbar-link">
            Services
          </a>
          <a href="#testimonials" className="navbar-link">
            Testimonials
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
          <ThemeToggle />
          <a href="#contact" className="btn-primary transform hover:scale-105 transition-transform duration-300">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none hover:bg-muted/50 rounded-full transition-colors duration-300"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out rounded-b-2xl ${
          isOpen ? "max-h-80 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <Link 
            to="/" 
            className="py-2 navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a 
            href="#about" 
            className="py-2 navbar-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="py-2 navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            className="py-2 navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="py-2 navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="btn-primary w-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
