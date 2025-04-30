import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NucleasLogo from '../icons/NucleasLogo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-nucleas-dark/90 backdrop-blur-md shadow-lg' 
          : 'py-5 bg-transparent'
      } border-b border-white/10`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <NucleasLogo className={`transition-all duration-300 ${scrolled ? 'h-8 w-8' : 'h-10 w-10'}`} />
          <span className={`font-bold text-white transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
            Nucleas IT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-gray-300 hover:text-white transition-colors relative group ${
                location.pathname === item.path ? 'text-white' : ''
              }`}
            >
              {item.name}
              <span className={`absolute bottom-[-5px] left-0 w-full h-[2px] transform scale-x-0 origin-left transition-transform duration-300 bg-blue-500 group-hover:scale-x-100 ${
                location.pathname === item.path ? 'scale-x-100' : ''
              }`}></span>
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 animate-pulse-subtle">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation using Sheet for better UX */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-nucleas-dark/95 border-white/10 backdrop-blur-md">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md text-lg ${
                      location.pathname === item.path 
                        ? 'bg-blue-900/30 text-white'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" className="mt-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-400 w-full py-6 text-lg">Contact Us</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;