import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Play,
  Search,
  MapPin,
  Bed,
  Bath,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import ProjectCard from "@/components/ProjectCard";
import StatsCard from "@/components/StatsCard";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsSearchVisible(true);
      } else {
        setIsSearchVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/Images/real-estate.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Find Your Dream <span className="text-[#10B981]">Home</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover exclusive properties in prime locations across Pakistan
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <span className="text-white">Explore Properties</span>
                  <ArrowRight className="ml-2 text-white" size={20} />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white hover:border-white/70"
                >
                  <span className="text-white">Contact Us</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-white w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Property Search Overlay */}
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src="/Images/chatOpal.png"
                alt="Opal Marketing Office"
                className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-8">
                WELCOME TO OPAL MARKETING
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Islamabad's most trusted Real Estate Company is also present in
                all the major cities of Pakistan. Having more than 18 years of
                experience, we have achieved success beyond the limitations of
                our own goals and expectations.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Proud to have served a wide array of investors and clients in
                helping to achieve their investment goals and meet their desired
                life standards, we have built an outstanding track record of
                digital marketing of the most significant housing projects.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Opal Marketing is now expanding into the real estate development
                zone and spreading its projects across prime locations in
                Islamabad.
              </p>
              <div className="text-center md:text-left">
                <Link to="/about-us">
                  <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <span className="text-white">GET TO KNOW US</span>
                    <ArrowRight className="ml-2 text-white" size={20} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
              FEATURED PROJECTS
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our exclusive collection of premium properties in prime
              locations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/Images/FH-gate.png",
                title: "Faisal hills",
                price: "0.7 Million",
                tags: ["Accessible", "Opulent", "Fascinating"],
              },
              {
                image: "/Images/park-3.jpg.webp",
                title: "Park View City",
                price: "0.8 Million",
                tags: ["Prime", "Luxurious", "Scenic"],
              },
              {
                image: "/Images/FT-01.png.jpg",
                title: "Faisal Town",
                price: "1 Million",
                tags: ["Innovative", "Developed", "Elite"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/Opal-Projects">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="text-white">VIEW ALL PROJECTS</span>
                <ArrowRight className="ml-2 text-white" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
              OUR ACHIEVEMENTS
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building trust and delivering excellence through our years of
              experience
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                title: "SQFT UNDER DEVELOPMENT",
              },
              {
                number: "500+",
                title: "HAPPY CLIENTS",
              },
              {
                number: "18+",
                title: "YEARS EXPERIENCE",
              },
              {
                number: "50+",
                title: "PROJECTS COMPLETED",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatsCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
