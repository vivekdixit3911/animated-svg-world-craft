import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-nucleas-blue">Nucleas IT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-nucleas-blue transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-nucleas-blue transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-nucleas-blue transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-nucleas-blue transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-nucleas-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-nucleas-blue transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-nucleas-blue transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-nucleas-blue transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-nucleas-blue transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 