import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleDropdownHover = (dropdown: string | null) => {
    setActiveDropdown(dropdown);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center gap-2"
            >
              <img
                src="/lovable-uploads/opal2.png"
                alt="Opal Marketing Logo"
                className="h-12 w-auto object-contain transition-transform duration-300"
              />
              <span className="text-2xl font-display font-bold tracking-tight">
                <span className="text-[#1A365D] dark:text-blue-400">OPAL</span>{" "}
                <span
                  className={`transition-colors duration-300 ${
                    scrolled || location.pathname !== "/"
                      ? "text-gray-900 dark:text-white"
                      : "text-white"
                  }`}
                >
                  MARKETING
                </span>
              </span>
            </motion.div>
          </Link>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled || location.pathname !== "/"
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className={`transition-all duration-300 p-2 rounded-full ${
                scrolled || location.pathname !== "/"
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              active={location.pathname === "/"}
              scrolled={scrolled}
            >
              HOME
            </NavLink>

            {/* Properties Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownHover("properties")}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <NavLink
                to="/sky-projects"
                active={location.pathname === "/sky-projects"}
                scrolled={scrolled}
                hasDropdown
              >
                PROPERTIES
                <ChevronDown size={16} className="ml-1" />
              </NavLink>

              <AnimatePresence>
                {activeDropdown === "properties" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2"
                  >
                    <DropdownLink to="/sky-projects/residential">
                      Residential
                    </DropdownLink>
                    <DropdownLink to="/sky-projects/commercial">
                      Commercial
                    </DropdownLink>
                    <DropdownLink to="/sky-projects/luxury">
                      Luxury
                    </DropdownLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Developments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownHover("developments")}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <NavLink
                to="/real-estate-project"
                active={location.pathname === "/real-estate-project"}
                scrolled={scrolled}
                hasDropdown
              >
                DEVELOPMENTS
                <ChevronDown size={16} className="ml-1" />
              </NavLink>

              <AnimatePresence>
                {activeDropdown === "developments" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2"
                  >
                    <DropdownLink to="/real-estate-project/ongoing">
                      Ongoing Projects
                    </DropdownLink>
                    <DropdownLink to="/real-estate-project/completed">
                      Completed Projects
                    </DropdownLink>
                    <DropdownLink to="/real-estate-project/upcoming">
                      Upcoming Projects
                    </DropdownLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled || location.pathname !== "/"
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="mr-2 text-white" size={18} />
                <span className="text-white">CONTACT US</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 shadow-lg"
          >
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={toggleMobileMenu}
                  >
                    <Phone className="mr-2 text-white" size={18} />
                    <span className="text-white">CONTACT US</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({
  to,
  active,
  children,
  scrolled,
  hasDropdown,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
  scrolled: boolean;
  hasDropdown?: boolean;
}) => (
  <Link
    to={to}
    className={`font-medium tracking-wide transition-all duration-300 hover:scale-105 flex items-center ${
      active
        ? "text-[#10B981]"
        : scrolled || to !== "/"
        ? "text-gray-900 dark:text-white hover:text-[#10B981]"
        : "text-white hover:text-[#10B981]"
    }`}
  >
    {children}
  </Link>
);

const DropdownLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
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
    className={`block py-2 px-3 rounded-lg transition-all duration-300 ${
      active
        ? "bg-[#10B981]/10 text-[#10B981]"
        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
    }`}
  >
    {children}
  </Link>
);

export default Header;
