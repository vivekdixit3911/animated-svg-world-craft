import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import NucleasLogo from '../icons/NucleasLogo';

const Footer = () => {
  return (
    <footer className="bg-nucleas-dark footer-gradient pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <NucleasLogo className="h-8 w-8" />
              <span className="font-bold text-xl">Nucleas IT</span>
            </div>
            <p className="text-gray-400 mb-4">
              Advancing Software and Digital Innovation for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575910441814" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/nucleasitsolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nucleas-it-solutions-solutions-353125364/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Noida Sector 62,<br/>India
              </li>
              <li className="text-gray-400">
                nucleasitsolutions@gmail.com
              </li>
              <li className="text-gray-400">
                +91 9129999362, +91 9044632203
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Nucleas IT. All rights reserved.</p>
            <p className="mt-2">nucleasitsolutions@gmail.com</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Nucleas IT. Custom software development, cloud solutions, SaaS, AI-powered business solutions, and digital transformation services. |
          <a href="/sitemap.xml" className="underline hover:text-white ml-1" target="_blank" rel="noopener noreferrer">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
