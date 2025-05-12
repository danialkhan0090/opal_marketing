import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin, Bed, Bath } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  price: string;
  tags: string[];
  link?: string;
  location?: string;
  beds?: number;
  baths?: number;
}

const ProjectCard = ({
  image,
  title,
  price,
  tags,
  link = "#",
  location = "Islamabad",
  beds = 3,
  baths = 2,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-[#1A365D] font-semibold">{price}</span>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-white">
            <MapPin size={16} />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-[#1A365D] group-hover:text-[#10B981] transition-colors">
          {title}
        </h3>

        {/* Property Features */}
        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} />
            <span className="text-sm">{baths} Baths</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        <Link
          to={link}
          className="inline-flex items-center text-[#1A365D] hover:text-[#10B981] font-semibold transition-colors group/link"
        >
          View Details
          <ArrowRight
            size={18}
            className="ml-2 transform transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
