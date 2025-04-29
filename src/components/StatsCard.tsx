
import React from 'react';

interface StatsCardProps {
  number: string;
  title: string;
  description: string;
}

const StatsCard = ({ number, title, description }: StatsCardProps) => {
  return (
    <div className="bg-white p-8">
      <h3 className="text-5xl font-bold text-[#FFA500] mb-2">{number}</h3>
      <h4 className="text-lg text-gray-700 uppercase mb-4">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StatsCard;
