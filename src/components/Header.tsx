import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import { text } from "stream/consumers";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="/logo.jpeg"
                alt="Opal Marketing Logo"
                className="h-10 w-auto mr-3"
                style={{ maxHeight: '40px' }}
              />
              <div className="relative">
                <span className="text-2xl font-display font-bold">
                  <span className="text-[#00008B]">OPAL</span>{" "}
                  <span
                    className={
                      scrolled || location.pathname !== "/"
                        ? "text-gray-900 dark:text-white"
                        : "text-white"
                    }
                  >
                    MARKETING
                  </span>
                </span>
                {/* <div className="absolute -top-4 right-0 w-full h-4 bg-[#FFA500] rounded-t-full opacity-30"></div> */}
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                scrolled || location.pathname !== "/"
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`transition-colors p-2 rounded-full ${
                scrolled || location.pathname !== "/"
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              active={location.pathname === "/"}
              scrolled={scrolled}
            >
              HOME
            </NavLink>
            <NavLink
              to="/sky-projects"
              active={location.pathname === "/sky-projects"}
              scrolled={scrolled}
            >
              PROPERTIES
            </NavLink>
            <NavLink
              to="/real-estate-project"
              active={location.pathname === "/real-estate-project"}
              scrolled={scrolled}
            >
              DEVELOPMENTS
            </NavLink>
            <NavLink
              to="/about-us"
              active={location.pathname === "/about-us"}
              scrolled={scrolled}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact-us"
              active={location.pathname === "/contact-us"}
              scrolled={scrolled}
            >
              CONTACT
            </NavLink>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                scrolled || location.pathname !== "/"
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact-us"
              className="btn btn-primary flex items-center justify-center bg-[#FFA500] hover:bg-[#FF8C00] text-white"
            >
              <Phone className="mr-2" size={18} />
              <span className="font-medium">CONTACT US</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800 shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-3">
            <MobileNavLink
              to="/"
              active={location.pathname === "/"}
              onClick={toggleMobileMenu}
            >
              HOME
            </MobileNavLink>
            <MobileNavLink
              to="/sky-projects"
              active={location.pathname === "/sky-projects"}
              onClick={toggleMobileMenu}
            >
              PROPERTIES
            </MobileNavLink>
            <MobileNavLink
              to="/real-estate-project"
              active={location.pathname === "/real-estate-project"}
              onClick={toggleMobileMenu}
            >
              DEVELOPMENTS
            </MobileNavLink>
            <MobileNavLink
              to="/about-us"
              active={location.pathname === "/about-us"}
              onClick={toggleMobileMenu}
            >
              ABOUT
            </MobileNavLink>
            <MobileNavLink
              to="/contact-us"
              active={location.pathname === "/contact-us"}
              onClick={toggleMobileMenu}
            >
              CONTACT
            </MobileNavLink>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="btn btn-primary flex items-center justify-center w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white"
                onClick={toggleMobileMenu}
              >
                <Phone className="mr-2" size={18} />
                <span className="font-medium">CONTACT US</span>
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
  scrolled,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
  scrolled: boolean;
}) => (
  <Link
    to={to}
    className={`font-medium tracking-wide transition-colors ${
      active
        ? "text-[#FFA500]"
        : scrolled || to !== "/"
        ? "text-gray-900 dark:text-white hover:text-[#FFA500]"
        : "text-white hover:text-[#FFA500]"
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  active,
  onClick,
  children,
}: {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-2 px-3 ${
      active
        ? "text-[#FFA500] bg-[#FFA500]/10 rounded"
        : "text-gray-900 dark:text-white hover:text-[#FFA500] hover:bg-[#FFA500]/10 hover:rounded"
    } transition-colors`}
  >
    {children}
  </Link>
);

export default Header;
