
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link to="/" className="flex items-center">
              <div className="relative">
                <span className="text-2xl font-bold">
                  <span className="text-[#FFA500]">OPAL</span> <span className={scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}>MARKETING</span>
                </span>
                <div className="absolute -top-4 right-0 w-full h-4 bg-[#FFA500] rounded-t-full opacity-30"></div>
                <p className={`text-xs tracking-wider mt-1 ${scrolled || location.pathname !== '/' ? 'text-gray-500' : 'text-white/80'}`}>MOVE ON UP</p>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className={`transition-colors p-2 ${scrolled || location.pathname !== '/' ? 'text-gray-800 hover:text-[#FFA500]' : 'text-white hover:text-[#FFA500]'}`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/" active={location.pathname === '/'} scrolled={scrolled}>
              HOME
            </NavLink>
            <NavLink to="/sky-projects" active={location.pathname === '/sky-projects'} scrolled={scrolled}>
              OPAL PROJECTS
            </NavLink>
            <NavLink to="/real-estate-project" active={location.pathname === '/real-estate-project'} scrolled={scrolled}>
              REAL ESTATE PROJECT
            </NavLink>
            <NavLink to="/about-us" active={location.pathname === '/about-us'} scrolled={scrolled}>
              ABOUT US
            </NavLink>
            <NavLink to="/contact-us" active={location.pathname === '/contact-us'} scrolled={scrolled}>
              CONTACT US
            </NavLink>
          </div>

          <div className="hidden md:block">
            <Link 
              to="/contact-us" 
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors"
            >
              <Phone className="mr-2" size={18} />
              <span className="font-medium">CALL NOW</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-3">
            <MobileNavLink to="/" active={location.pathname === '/'} onClick={toggleMobileMenu}>
              HOME
            </MobileNavLink>
            <MobileNavLink to="/sky-projects" active={location.pathname === '/sky-projects'} onClick={toggleMobileMenu}>
              OPAL PROJECTS
            </MobileNavLink>
            <MobileNavLink to="/real-estate-project" active={location.pathname === '/real-estate-project'} onClick={toggleMobileMenu}>
              REAL ESTATE PROJECT
            </MobileNavLink>
            <MobileNavLink to="/about-us" active={location.pathname === '/about-us'} onClick={toggleMobileMenu}>
              ABOUT US
            </MobileNavLink>
            <MobileNavLink to="/contact-us" active={location.pathname === '/contact-us'} onClick={toggleMobileMenu}>
              CONTACT US
            </MobileNavLink>
            
            <div className="pt-2">
              <Link 
                to="/contact-us" 
                className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-4 py-2 rounded-md flex items-center justify-center transition-colors w-full"
                onClick={toggleMobileMenu}
              >
                <Phone className="mr-2" size={18} />
                <span className="font-medium">CALL NOW</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ 
  to, 
  active, 
  children, 
  scrolled 
}: { 
  to: string, 
  active: boolean, 
  children: React.ReactNode, 
  scrolled: boolean 
}) => (
  <Link
    to={to}
    className={`font-medium tracking-wide transition-colors ${
      active 
        ? 'text-[#FFA500]' 
        : scrolled || to !== '/' 
          ? 'text-gray-800 hover:text-[#FFA500]' 
          : 'text-white hover:text-[#FFA500]'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, onClick, children }: { to: string, active: boolean, onClick: () => void, children: React.ReactNode }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-2 px-3 ${
      active ? 'text-[#FFA500] bg-gray-50 rounded' : 'text-gray-800 hover:text-[#FFA500] hover:bg-gray-50 hover:rounded'
    } transition-colors`}
  >
    {children}
  </Link>
);

export default Header;
