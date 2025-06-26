import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6 bg-white rounded-xl shadow-card border border-gray-100"
    >
      <h3 className="text-4xl font-bold text-primary-600 mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatCard;