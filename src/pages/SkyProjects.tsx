import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SkyProjects = () => {
  const projects = [
    {
      id: 1,
      image: "public/lovable-uploads/3c436dfc-cb63-4de2-9694-70cc23a31e83.png",
      title: "ALAM ONE",
      price: "0.7 Million",
      tags: ["Accessible", "Opulent", "Fascinating"],
      link: "/sky-projects/alam-one"
    },
    {
      id: 2,
      image: "public/lovable-uploads/d7b32d20-d5ce-4751-a9d4-000826607440.png",
      title: "OPAL ONE",
      price: "0.8 Million",
      tags: ["Prime", "Luxurious", "Scenic"],
      link: "/sky-projects/sky-one"
    },
    {
      id: 3,
      image: "public/lovable-uploads/d0587c6e-1520-40fb-9855-4ffb559c3ad0.png",
      title: "PARK VIEW CITY",
      price: "1 Million",
      tags: ["Innovative", "Developed", "Elite"],
      link: "/sky-projects/park-view-city"
    },
    {
      id: 4,
      image: "public/lovable-uploads/2566a012-93d1-4bb5-a03d-6471a47986f9.png",
      title: "BLUE WORLD CITY",
      price: "0.5 Million",
      tags: ["Premium", "Modern", "Unique"],
      link: "/sky-projects/blue-world-city"
    },
    {
      id: 5,
      image: "public/lovable-uploads/554c90ae-0319-457e-b707-8c8570c88ed7.png",
      title: "CAPITAL SMART CITY",
      price: "1.2 Million",
      tags: ["Exclusive", "Premium", "Peaceful"],
      link: "/sky-projects/capital-smart-city"
    },
    {
      id: 6,
      image: "public/lovable-uploads/d0587c6e-1520-40fb-9855-4ffb559c3ad0.png",
      title: "NOVA CITY",
      price: "0.9 Million",
      tags: ["Accessible", "Opulent", "Playful"],
      link: "/sky-projects/nova-city"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - No top padding needed as header is now transparent */}
      <section className="relative h-[50vh] bg-cover bg-center bg-fixed" style={{
        backgroundImage: `url('public/lovable-uploads/d7b32d20-d5ce-4751-a9d4-000826607440.png')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">OPAL PROJECTS</h1>
          <div className="w-24 h-1 bg-[#FFA500]"></div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-auto flex-grow max-w-2xl">
              <input 
                type="text" 
                placeholder="Search for projects..." 
                className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <select className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent">
                <option>All Categories</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Mixed Use</option>
              </select>
              <select className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent">
                <option>Price Range</option>
                <option>Under 0.5M</option>
                <option>0.5M - 1M</option>
                <option>Above 1M</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore Our <span className="text-[#FFA500]">Premium</span> Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                image={project.image}
                title={project.title}
                price={project.price}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-6 rounded-md text-lg">
              LOAD MORE PROJECTS
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default SkyProjects;
