import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

type IconKey = keyof typeof Icons;

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = Icons[service.icon as IconKey] || Icons.Heart;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4 space-x-3">
          <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
            <IconComponent className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <Link 
          to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;