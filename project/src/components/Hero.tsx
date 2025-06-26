import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bone, Dumbbell, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-primary-800 to-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-10 lg:mt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Holistic Orthopedic Care for a <span className="text-accent-400">Stronger</span> Tomorrow
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            Expert solutions in joint replacement, spine health, and rehabilitation. Our team is committed to restoring your mobility and quality of life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              to="/services" 
              className="bg-transparent hover:bg-primary-700 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition"
            >
              Our Services
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Bone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Joint Replacement</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Physiotherapy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Preventive Care</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img 
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
            alt="Orthopedic care image" 
            className="rounded-2xl shadow-2xl object-cover max-h-[500px] w-full" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
