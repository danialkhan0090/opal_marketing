import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import StatsCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('public/Images/c17ab826-c3d4-4c1d-ad90-8f64dedf11fa.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
                Welcome to Opal Marketing
              </h2>

              <p className="text-gray-700 mb-4">
                Welcome to Opal Marketing — where your real estate journey
                begins with trust, vision, and opportunity. Headquartered in
                Islamabad and proudly growing across Pakistan, we are committed
                to redefining real estate through innovative marketing and
                client-first solutions.
              </p>

              <p className="text-gray-700 mb-4">
                Whether you're an investor, a first-time buyer, or a family
                seeking the perfect home, our experienced team is here to guide
                you every step of the way. We believe in building lasting
                relationships and delivering value that goes beyond just
                property transactions.
              </p>

              <p className="text-gray-700 mb-6">
                As we expand into real estate development, Opal Marketing
                remains focused on delivering quality projects in prime
                locations — creating not just structures, but thriving
                communities where people truly belong.
              </p>

              <div className="space-y-3 mb-8">
                <FeaturePoint text="Trusted by clients nationwide for reliable real estate solutions" />
                <FeaturePoint text="Experts in strategic property marketing and sales execution" />
                <FeaturePoint text="Skilled and professional team with deep market insight" />
                <FeaturePoint text="Transparent processes with complete and secure documentation" />
              </div>
            </div>

            <div>
              <img
                src="public/Images/real.png"
                alt="Opal Marketing Office"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#1A365D] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-4">
                At Opal Marketing, our mission is to transform the real estate
                experience by offering honest, client-centric services that
                empower individuals to make confident and informed property
                investments. We strive to connect people with opportunities that
                create lasting value and meaningful living spaces.
              </p>
              <p className="text-gray-700">
                We are dedicated to maintaining the highest standards of
                professionalism, innovation, and customer care in every project.
                With a forward-thinking approach, Opal Marketing is focused on
                building trust, strong communities, and a better future in real
                estate across Pakistan.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#1A365D] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 mb-4">
                At Opal Marketing, our vision is to reshape the real estate
                experience in Pakistan through integrity, innovation, and
                long-term value. Based in Islamabad and expanding nationwide, we
                aim to set new benchmarks in real estate consultancy and project
                marketing.
              </p>

              <p className="text-gray-700 mb-4">
                With a commitment to transparency and client satisfaction, we’ve
                guided countless investors and families toward secure, rewarding
                property decisions. Our strategic digital presence ensures
                maximum exposure and trust across every platform we operate.
              </p>

              <p className="text-gray-700 mb-6">
                As we grow into real estate development, our focus remains on
                delivering impactful projects in key locations — building not
                just properties, but lasting communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-12 text-center">
            OUR ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              number="100,000+"
              title="SQFT UNDER DEVELOPMENT"
              description="Changing the landscape with improved designs and innovative projects."
            />
            <StatsCard
              number="20+"
              title="YEARS OF TRUST"
              description="Trusted for delivering every project within the promised deadline."
            />
            <StatsCard
              number="50+"
              title="AWARDS WON"
              description="A recognition of excellence and success in real estate sector."
            />
            <StatsCard
              number="50,000+"
              title="REGISTERED CUSTOMERS"
              description="Adding value to the community with an improved lifestyle."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-12 text-center">
            OUR LEADERSHIP TEAM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Muhammad Ali</h3>
                <p className="text-gray-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-700">
                  With over 20 years in real estate, Muhammad leads our company
                  with expertise and vision.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Sarah Khan</h3>
                <p className="text-gray-600 mb-4">Marketing Director</p>
                <p className="text-gray-700">
                  Sarah drives our innovative marketing strategies that set us
                  apart in the industry.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Umar Farooq</h3>
                <p className="text-gray-600 mb-4">Operations Manager</p>
                <p className="text-gray-700">
                  Umar ensures all our projects run smoothly and are delivered
                  on time with quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            READY TO FIND YOUR NEXT PROPERTY?
          </h2>
          <p className="text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our experts help you find the perfect property that meets all
            your requirements. Contact us today for a consultation.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact-us">
              <Button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-5 rounded-none">
                CONTACT US NOW
              </Button>
            </Link>
            <Link to="/sky-projects">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A365D] px-8 py-5 rounded-none"
              >
                EXPLORE OUR PROJECTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

const FeaturePoint = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="bg-[#FFA500] rounded-full p-1">
      <Check size={16} className="text-white" />
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);

export default AboutUs;
