import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Define TypeScript interfaces
interface Project {
  id: number;
  image: string;
  title: string;
  price: string;
  tags: string[];
  link: string;
  category: string;
}

interface CategoryOption {
  value: string;
  label: string;
}

interface PriceRangeOption {
  value: string;
  label: string;
}

const categories: CategoryOption[] = [
  { value: "All Categories", label: "All Categories" },
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Mixed Use", label: "Mixed Use" },
];

const priceRanges: PriceRangeOption[] = [
  { value: "Price Range", label: "Price Range" },
  { value: "Under 0.5M", label: "Under 0.5M" },
  { value: "0.5M - 1M", label: "0.5M - 1M" },
  { value: "Above 1M", label: "Above 1M" },
];

const OpalProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<string>("Price Range");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const projects: Project[] = [
    {
      id: 1,
      image: "/Images/topCity.png",
      title: "Top City",
      price: "0.7",
      tags: ["Accessible", "Opulent", "Fascinating"],
      link: "/opal-projects/B12",
      category: "Residential",
    },
    {
      id: 2,
      image: "/Images/bahria.png",

      title: "Bahria Enclave",
      price: "1.2",
      tags: ["Premium", "Luxurious", "Modern"],
      link: "/opal-projects/faisal-hills",
      category: "Residential",
    },
    {
      id: 3,
      image: "/Images/newCity.jpg",
      title: "New City Paradise",
      price: "0.8",
      tags: ["Scenic", "Peaceful", "Elite"],
      link: "/opal-projects/park-view",
      category: "Commercial",
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    try {
      let results = [...projects];

      if (searchQuery.trim()) {
        results = results.filter((project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (selectedCategory !== "All Categories") {
        results = results.filter(
          (project) => project.category === selectedCategory
        );
      }

      if (selectedPriceRange !== "Price Range") {
        results = results.filter((project) => {
          const price = parseFloat(project.price);
          if (isNaN(price)) return false;

          switch (selectedPriceRange) {
            case "Under 0.5M":
              return price < 0.5;
            case "0.5M - 1M":
              return price >= 0.5 && price <= 1;
            case "Above 1M":
              return price > 1;
            default:
              return true;
          }
        });
      }

      setFilteredProjects(results);
    } catch (error) {
      console.error("Error filtering projects:", error);
      setFilteredProjects([]);
    }
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/Images/projects.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            OPAL PROJECTS
          </h1>
          <div className="w-24 h-1 bg-[#FFA500]"></div>
        </div>
      </section>

      {/* Filters Section */}

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Explore Our <span className="text-[#FFA500]">Premium</span> Projects
          </h2>

          {filteredProjects.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No projects found matching your criteria
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.slice(0, visibleProjects).map((project) => (
                  <ProjectCard
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    price={`${project.price} Million`}
                    tags={project.tags}
                    link={project.link}
                  />
                ))}
              </div>

              {visibleProjects < filteredProjects.length && (
                <div className="mt-12 text-center">
                  <Button
                    onClick={loadMore}
                    className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-6 rounded-md text-lg"
                  >
                    LOAD MORE PROJECTS
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default OpalProjects;
