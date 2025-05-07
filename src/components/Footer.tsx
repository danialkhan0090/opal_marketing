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
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1A365D] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest updates on properties
              and real estate news
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#10B981] text-white rounded-lg font-medium hover:bg-[#059669] transition-colors"
              >
                <span className="text-white">Subscribe</span>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-2xl mb-6">
              <span className="text-[#10B981]">OPAL</span> MARKETING
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              A trusted Real Estate Company with more than one decade of
              services in Pakistan, delivering excellence and value to our
              clients.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/sky-projects">Opal Projects</FooterLink>
              <FooterLink to="/real-estate-project">
                Real Estate Projects
              </FooterLink>
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-white">
              Popular Projects
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/Opal-projects">Faisal Hills</FooterLink>
              <FooterLink to="/Opal-projects">Blue World City</FooterLink>
              <FooterLink to="/Opal-projects">Capital Smart City</FooterLink>
              <FooterLink to="/Opal-projects">Park View City</FooterLink>
              <FooterLink to="/Opal-projects">Faisal Town Phase-II</FooterLink>
              <FooterLink to="/Opal-projects">
                CDA Sector B-17 Islamabad
              </FooterLink>
              <FooterLink to="/Opal-projects">New City Paradise</FooterLink>
              <FooterLink to="/Opal-projects">
                Bahria Enclave Phase-II
              </FooterLink>
              <FooterLink to="/Opal-projects">Top City-I, Islamabad</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-white">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Phone className="w-5 h-5 text-[#10B981] mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  +92 3003353395
                </span>
              </li>
              <li className="flex items-start group">
                <Mail className="w-5 h-5 text-[#10B981] mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  info@opalmarketing.com
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-[#10B981] mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Neelam road G-9 Markaz, Islamabad, Pakistan
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Opal Marketing. All Rights
              Reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>Designed by</span>
              <a
                href="https://www.britishbytes.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10B981] hover:text-[#059669] transition-colors font-medium flex items-center gap-1"
              >
                <span>British Bytes</span>
                <span role="img" aria-label="UK Flag">
                  🇬🇧
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href="#"
    className="bg-white/10 p-3 rounded-full text-white hover:bg-[#10B981] hover:text-white transition-all duration-300"
  >
    {icon}
  </motion.a>
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
      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
    >
      <ArrowRight
        size={14}
        className="text-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <span className="text-gray-300 group-hover:text-white">{children}</span>
    </Link>
  </li>
);

export default Footer;
