import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Search, MapPin, Bed, Bath, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import ProjectCard from "@/components/ProjectCard";
import StatsCard from "@/components/StatsCard";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/lovable-uploads/real-estate.jpg')`,
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
              <div className="flex gap-4">
                <Button className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <span className="text-white">Explore Properties</span>
                  <ArrowRight className="ml-2 text-white" size={20} />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <span className="text-white">Contact Us</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Property Search Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 transform translate-y-1/2"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by location"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all duration-300"
                  />
                  <MapPin
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Property type"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all duration-300"
                  />
                  <Bed
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Price range"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all duration-300"
                  />
                  <Bath
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <Button className="bg-[#10B981] hover:bg-[#059669] text-white py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Search className="mr-2 text-white" size={20} />
                  <span className="text-white">Search Properties</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
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
            >
              <img
                src="public/lovable-uploads/chatOpal.png"
                alt="Opal Marketing Office"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
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
                  <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                image="public\lovable-uploads\FH-gate.png.jpg.bv_resized_desktop.jpg.bv.webp"
                title="Faisal hills"
                price="0.7 Million"
                tags={["Accessible", "Opulent", "Fascinating"]}
                link="/sky-projects/alam-one"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                image="public\lovable-uploads\park-3.jpg.webp"
                title="Park View City"
                price="0.8 Million"
                tags={["Prime", "Luxurious", "Scenic"]}
                link="/sky-projects/sky-one"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                image="public\lovable-uploads\FT-01.png.jpg"
                title="Faisal Town"
                price="1 Million"
                tags={["Innovative", "Developed", "Elite"]}
                link="/sky-projects/park-view-city"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/sky-projects">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="text-white">VIEW ALL PROJECTS</span>
                <ArrowRight className="ml-2 text-white" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <StatsCard
                  number="100,000+"
                  title="SQFT UNDER DEVELOPMENT"
                  description="Changing the landscape with improved designs and innovative projects."
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StatsCard
                  number="20+"
                  title="YEARS OF TRUST"
                  description="Trusted for delivering every project within the promised deadline."
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <StatsCard
                  number="50+"
                  title="AWARDS WON"
                  description="A recognition of excellence and success in real estate sector."
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <StatsCard
                  number="1000+"
                  title="HAPPY CLIENTS"
                  description="Building trust and delivering excellence to our valued clients."
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">
            HEAR IT FROM OUR CLIENTS!
          </h2>

          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            Our clients are our greatest asset, and they speak for themselves.
            Here, you can check out the latest testimonials from our esteemed
            clients.
          </p>

          <div className="relative">
            {/* <img
              src="public/lovable-uploads/6896dcb0-ed40-4aef-bec8-80bb0c296edf.png"
              alt="Client Testimonial"
              className="w-full h-80 object-cover rounded-md"
            /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all">
                <Play className="text-[#10B981]" size={36} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] text-center mb-6">
            FREE ADVICE FROM OPAL MARKETING
          </h2>

          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            To hear from our experienced team members fill out the form below to
            get in touch with us instantly.
          </p>

          <div className="bg-gray-50 p-8">
            <h3 className="text-2xl font-bold text-[#1A365D] text-center mb-8">
              FILL FOR FREE QUOTE
            </h3>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
