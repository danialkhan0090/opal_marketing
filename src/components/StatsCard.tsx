import React from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  number: string;
  title: string;
}

const StatsCard = ({ number, title }: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-3">
          {number}
        </h3>
        <h4 className="text-lg font-medium text-gray-600">{title}</h4>
      </div>
    </motion.div>
  );
};

export default StatsCard;
