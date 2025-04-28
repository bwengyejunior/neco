
import { Instagram, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-heading">neco</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Empowering businesses through innovative technology solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Strategic IT Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Cloud Migration & Management
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-muted-foreground">Theme</span>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center md:flex md:justify-between md:text-left text-muted-foreground text-sm">
          <p>&copy; {currentYear} neco Technologies. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-primary">❤</span> for innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
