import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  price: string;
  tags: string[];
  link: string; 
}

const ProjectCard = ({ image, title, price, tags, link }: ProjectCardProps) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full">
          <span className="text-white font-medium text-sm">{price}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-opal-accent fill-current" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-3 text-opal-text group-hover:text-opal transition-colors">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-sm px-3 py-1 rounded-full bg-opal-light/10 text-opal-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link 
            to={link} 
            className="inline-flex items-center text-opal hover:text-opal-dark font-medium transition-colors group/link"
          >
            View Details
            <ArrowRight size={16} className="ml-1 transform transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
