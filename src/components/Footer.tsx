import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-opal-background dark:bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              <span className="text-opal">OPAL</span> MARKETING
            </h3>
            <p className="text-opal-gray dark:text-gray-400 mb-6">
              A trusted Real Estate Company with more than one decade of
              services in the Pakistan.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-opal-text dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/sky-projects">Opal Projects</FooterLink>
              <FooterLink to="/real-estate-project">
                Real Estate Projects
              </FooterLink>
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-opal-text dark:text-white">
              Popular Projects
            </h3>
            <ul className="space-y-2">
              <FooterLink to="/Opal-projects">Faisal Hills</FooterLink>
              <FooterLink to="/Opal-projects">Blue World City</FooterLink>
              <FooterLink to="/Opal-projects">Capital Smart City</FooterLink>
              <FooterLink to="/Opal-projects">Park View City</FooterLink>
              <FooterLink to="/Opal-projects">Faisal Town Phase-II</FooterLink>
              <FooterLink to="/Opal-projects">
                CDA Sector B-17 Islamabad
              </FooterLink>
              <FooterLink to="/Opal-projects">New City Paradise </FooterLink>
              <FooterLink to="/Opal-projects">
                Bahria Enclave Phase-II Bahria hills,Islamabad
              </FooterLink>
              <FooterLink to="/Opal-projects">Top City-I ,Islambad</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-opal-text dark:text-white">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-opal mt-1 mr-3" />
                <span className="text-opal-gray dark:text-gray-400">
                  +92 3003353395
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-opal mt-1 mr-3" />
                <span className="text-opal-gray dark:text-gray-400">
                  info@opalmarketing.com
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-opal mt-1 mr-3" />
                <span className="text-opal-gray dark:text-gray-400">
                  Neelam road G-9 Markaz, Islamabad, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-opal-gray dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Opal Marketing. All Rights
            Reserved.
          </p>
          <p className="text-opal-gray dark:text-gray-400 text-sm">
            Designed by{" "}
            <a
              href="https://www.britishbytes.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-opal hover:text-opal-light transition-colors"
            >

              <b>British Bytes</b> 🇬🇧
             

            </a>
            ,{" "}
            </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="bg-white dark:bg-gray-800 p-2 rounded-full text-opal-gray dark:text-gray-400 hover:text-opal hover:bg-opal-light/10 transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      to={to}
      className="text-opal-gray dark:text-gray-400 hover:text-opal transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
