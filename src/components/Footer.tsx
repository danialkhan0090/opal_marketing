
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              <span className="text-[#FFA500]">OPAL</span> MARKETING
            </h3>
            <p className="text-gray-600 mb-4">
              Islamabad's most trusted Real Estate Company with more than 18 years of experience in the industry.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/sky-projects">Opal Projects</FooterLink>
              <FooterLink to="/real-estate-project">Real Estate Projects</FooterLink>
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Popular Projects</h3>
            <ul className="space-y-2">
              <FooterLink to="/sky-projects">Opal One</FooterLink>
              <FooterLink to="/sky-projects">Alam One</FooterLink>
              <FooterLink to="/sky-projects">Blue World City</FooterLink>
              <FooterLink to="/sky-projects">Capital Smart City</FooterLink>
              <FooterLink to="/sky-projects">Park View City</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-[#FFA500]" />
                <span>0333 1518966</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-[#FFA500]" />
                <span>info@opalmarketing.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#FFA500]" />
                <span>Office 10, 2nd Floor, Magna Plaza, Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Opal Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="bg-white p-2 rounded-full text-gray-600 hover:text-[#FFA500] transition-colors">
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-600 hover:text-[#FFA500] transition-colors">
      {children}
    </Link>
  </li>
);

export default Footer;
