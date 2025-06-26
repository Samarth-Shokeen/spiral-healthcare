import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Activity, Users, CheckCircle2 } from 'lucide-react';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import StatCard from '../components/StatCard';

import { services,stats } from '../data';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
     {/* About Us Snippet */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2"
      >
        <img 
          src="https://images.unsplash.com/photo-1666886573215-b59d8ad9970c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Orthopedic team discussion" 
          className="rounded-2xl shadow-xl w-90" 
        />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Leading the Way in <span className="text-primary-600">Orthopedic Care</span></h2>
        
        <p className="text-gray-600 mb-6">
          At Spiral Healthcare Center, we specialize in advanced orthopedic care with a focus on minimally invasive treatments and long-term mobility solutions. Our comprehensive programs aim to restore joint health, improve posture, and reduce pain through medical and rehabilitative techniques.
        </p>
        
        <p className="text-gray-600 mb-8">
          With over 15 years of experience in treating musculoskeletal conditions, our team has empowered thousands of patients to overcome injuries and regain movement through personalized orthopedic care.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Modern Techniques</h4>
              <p className="text-sm text-gray-600">Minimally invasive and robotic-assisted options</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Tailored Plans</h4>
              <p className="text-sm text-gray-600">Individualized recovery and rehab protocols</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Integrated Therapy</h4>
              <p className="text-sm text-gray-600">Combining surgery, therapy, and lifestyle guidance</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Long-Term Support</h4>
              <p className="text-sm text-gray-600">Ongoing care for lasting mobility</p>
            </div>
          </div>
        </div>
        
        <Link 
          to="/about" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </div>
</section>

      
      {/* Key Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive cardiovascular care with a focus on non-invasive treatments
                and preventive approaches to heart health.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;