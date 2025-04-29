import React from 'react';
import { Star, Clock, Trophy, Users } from 'lucide-react';

interface StatsCardProps {
  number: string;
  title: string;
  description: string;
}

const getIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'sqft under development':
      return <Star className="w-8 h-8 text-opal" />;
    case 'years of trust':
      return <Clock className="w-8 h-8 text-opal" />;
    case 'awards won':
      return <Trophy className="w-8 h-8 text-opal" />;
    case 'registered customers':
      return <Users className="w-8 h-8 text-opal" />;
    default:
      return <Star className="w-8 h-8 text-opal" />;
  }
};

const StatsCard = ({ number, title, description }: StatsCardProps) => {
  return (
    <div className="card p-8 hover:bg-opal-light/5 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-opal-light/10 rounded-full">
          {getIcon(title)}
        </div>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-opal">{number}</h3>
      </div>
      
      <h4 className="text-lg font-medium text-opal-text dark:text-gray-200 uppercase mb-3">{title}</h4>
      <p className="text-opal-gray dark:text-gray-400">{description}</p>
    </div>
  );
};

export default StatsCard;
