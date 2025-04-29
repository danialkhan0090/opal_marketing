
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RealEstateProject = () => {
  const societies = [
    {
      id: 1,
      image: "public/lovable-uploads/3c436dfc-cb63-4de2-9694-70cc23a31e83.png",
      title: "CAPITAL SMART CITY",
      price: "1.2 Million",
      tags: ["Exclusive", "Premium", "Modern"],
      link: "/real-estate-project/capital-smart-city"
    },
    {
      id: 2,
      image: "public/lovable-uploads/d7b32d20-d5ce-4751-a9d4-000826607440.png",
      title: "BLUE WORLD CITY",
      price: "0.5 Million",
      tags: ["Prime", "Accessible", "Scenic"],
      link: "/real-estate-project/blue-world-city"
    },
    {
      id: 3,
      image: "public/lovable-uploads/d0587c6e-1520-40fb-9855-4ffb559c3ad0.png",
      title: "PARK VIEW CITY",
      price: "1 Million",
      tags: ["Innovative", "Developed", "Elite"],
      link: "/real-estate-project/park-view-city"
    },
    {
      id: 4,
      image: "public/lovable-uploads/2566a012-93d1-4bb5-a03d-6471a47986f9.png",
      title: "NOVA CITY",
      price: "0.9 Million",
      tags: ["Premium", "Modern", "Unique"],
      link: "/real-estate-project/nova-city"
    },
    {
      id: 5,
      image: "public/lovable-uploads/554c90ae-0319-457e-b707-8c8570c88ed7.png",
      title: "EIGHTEEN ISLAMABAD",
      price: "2.5 Million",
      tags: ["Luxury", "Premium", "Elite"],
      link: "/real-estate-project/eighteen-islamabad"
    },
    {
      id: 6,
      image: "public/lovable-uploads/c17ab826-c3d4-4c1d-ad90-8f64dedf11fa.png",
      title: "RUDN ENCLAVE",
      price: "0.7 Million",
      tags: ["Accessible", "Peaceful", "Modern"],
      link: "/real-estate-project/rudn-enclave"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: `url('public/lovable-uploads/554c90ae-0319-457e-b707-8c8570c88ed7.png')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">REAL ESTATE PROJECTS</h1>
        </div>
      </section>
      
      {/* Marketing Statement */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            REAL ESTATE PROJECTS MARKETED BY OPAL MARKETING
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Opal Marketing is proud to represent some of the most prestigious real estate developments in Pakistan. 
            We offer a diverse portfolio of properties to suit every need and budget.
          </p>
        </div>
      </section>
      
      {/* Societies List */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {societies.map((society) => (
              <ProjectCard 
                key={society.id}
                image={society.image}
                title={society.title}
                price={society.price}
                tags={society.tags}
                link={society.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-5 rounded-none">
              VIEW ALL SOCIETIES
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            LOOKING FOR INVESTMENT OPPORTUNITIES?
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Our expert team is ready to guide you through the best investment options available in the market.
            Get personalized advice based on your budget and goals.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact-us">
              <Button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-5 rounded-none">
                GET FREE CONSULTATION
              </Button>
            </Link>
            <Link to="/sky-projects">
              <Button variant="outline" className="border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-white px-8 py-5 rounded-none">
                EXPLORE PROJECTS
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

export default RealEstateProject;
