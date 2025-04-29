
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  price: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ image, title, price, tags, link }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[#FFA500] font-medium text-sm">{price}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-center uppercase mb-3 text-gray-800">{title}</h3>
        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-gray-600 text-sm"
            >
              {index > 0 ? ' | ' : ''}{tag}
            </span>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link 
            to={link} 
            className="inline-flex items-center text-[#1A365D] hover:text-[#FFA500] font-medium transition-colors group"
          >
            View Details
            <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
