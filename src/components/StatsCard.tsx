import React from "react";
import { motion } from "framer-motion";

interface StatsCardProps {
  number: string;
  title: string;
}

const StatsCard = ({ number, title }: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      className="relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <motion.h3
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1A365D] to-[#10B981] bg-clip-text text-transparent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {number}
          </motion.h3>
          <motion.h4
            className="text-lg font-medium text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h4>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
