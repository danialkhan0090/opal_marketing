import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Search, MapPin, Bed, Bath } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import ProjectCard from "@/components/ProjectCard";
import StatsCard from "@/components/StatsCard";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('public/lovable-uploads/d7b32d20-d5ce-4751-a9d4-000826607440.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Find Your Dream <span className="text-[#FFA500]">Home</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover exclusive properties in prime locations across Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Property Search Overlay */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                  <MapPin
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Property type"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                  <Bed
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Price range"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                  <Bath
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <Button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white py-3 rounded-lg">
                  <Search className="mr-2" size={20} />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="public/lovable-uploads/c17ab826-c3d4-4c1d-ad90-8f64dedf11fa.png"
                alt="Opal Marketing Office"
                className="w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">
                WELCOME TO OPAL MARKETING
              </h2>

              <p className="text-gray-700 mb-4">
                Islamabad's most trusted Real Estate Company is also present in
                all the major cities of Pakistan. Having more than 18 years of
                experience, we have achieved success beyond the limitations of
                our own goals and expectations.
              </p>

              <p className="text-gray-700 mb-4">
                Proud to have served a wide array of investors and clients in
                helping to achieve their investment goals and meet their desired
                life standards, we have built an outstanding track record of
                digital marketing of the most significant housing projects.
              </p>

              <p className="text-gray-700 mb-6">
                Opal Marketing is now expanding into the real estate development
                zone and spreading its projects across prime locations in
                Islamabad.
              </p>

              <div className="text-center md:text-left">
                <Link to="/about-us">
                  <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-none">
                    GET TO KNOW US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              image="public/lovable-uploads/3c436dfc-cb63-4de2-9694-70cc23a31e83.png"
              title="ALAM ONE"
              price="0.7 Million"
              tags={["Accessible", "Opulent", "Fascinating"]}
              link="/sky-projects/alam-one"
            />
            
            <ProjectCard 
              image="public/lovable-uploads/d7b32d20-d5ce-4751-a9d4-000826607440.png"
              title="OPAL ONE"
              price="0.8 Million"
              tags={["Prime", "Luxurious", "Scenic"]}
              link="/sky-projects/sky-one"
            />
            
            <ProjectCard 
              image="public/lovable-uploads/d0587c6e-1520-40fb-9855-4ffb559c3ad0.png"
              title="PARK VIEW CITY"
              price="1 Million"
              tags={["Innovative", "Developed", "Elite"]}
              link="/sky-projects/park-view-city"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/sky-projects">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-5 rounded-none">
                VIEW ALL PROJECTS
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Real Estate Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-8">
            REAL ESTATE PROJECTS MARKETED BY OPAL MARKETING
          </h2>
          <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCard
                  image="public\lovable-uploads\FH-gate.png.jpg.bv_resized_desktop.jpg.bv.webp"
                  title="Faisal hills"
                  price="0.7 Million"
                  tags={["Accessible", "Opulent", "Fascinating"]}
                  link="/sky-projects/alam-one"
                />

                <ProjectCard
                  image="public\lovable-uploads\park-3.jpg.webp"
                  title="Park View City"
                  price="0.8 Million"
                  tags={["Prime", "Luxurious", "Scenic"]}
                  link="/sky-projects/sky-one"
                />

                <ProjectCard
                  image="public\lovable-uploads\FT-01.png.jpg"
                  title="Faisal Town"
                  price="1 Million"
                  tags={["Innovative", "Developed", "Elite"]}
                  link="/sky-projects/park-view-city"
                />
              </div>

              <div className="text-center mt-12">
                <Link to="/sky-projects">
                  <Button className="bg-black hover:bg-gray-800 text-white px-8 py-5 rounded-none">
                    VIEW ALL PROJECTS
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          <div className="mt-8">
            <Link to="/real-estate-project">
              {/* <Button className="bg-black hover:bg-gray-800 text-white px-8 py-5 rounded-none">
                VIEW ALL SOCIETIES
              </Button> */}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
                WHY TRUST US AS THE PRIME REAL ESTATE MARKETING COMPANY?
              </h2>

              <p className="text-gray-700 mb-6">
                We have been consistently growing in the real estate market
                while embracing every innovation along the way to meet the
                rising demands within the sector. As a real estate platform, we
                are not shy of diversifying our digital marketing skills. Our
                client base only grew over time as we were willing to create
                effective marketing campaigns in real estate.
              </p>

              <div className="mt-8">
                <Link to="/contact-us">
                  <Button className="bg-black hover:bg-gray-800 text-white px-8 py-5 rounded-none">
                    FREE CONSULTATION
                  </Button>
                </Link>
              </div>
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
            <img
              src="public/lovable-uploads/6896dcb0-ed40-4aef-bec8-80bb0c296edf.png"
              alt="Client Testimonial"
              className="w-full h-80 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all">
                <Play className="text-[#FFA500]" size={36} />
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
