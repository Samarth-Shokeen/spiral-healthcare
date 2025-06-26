import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-primary-700 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Medical Services
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Comprehensive Orthopedic Care services focused on prevention, treatment, 
                and rehabilitation with a personalized approach.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Comprehensive Orthopedic Care
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a wide range of services focused on Injury Prevention, Pain Relief and Injury Rehabilitation with medical plans personalised to patient needs
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Service */}
      <section className="py-20 bg-gray-50">
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
          src="https://imgs.search.brave.com/DztCa1ghDnM7Az0bd-a_U7AfpwCL8Sqp4fBcZXjpYUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iMjk0/OTY2Mi5zbXVzaGNk/bi5jb20vMjk0OTY2/Mi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMS9FRUNQLVNh/bi1EaWVnby5qcGc_/bG9zc3k9MCZzdHJp/cD0xJndlYnA9MQ"
          alt="ECP Therapy" 
          className="rounded-2xl shadow-xl w-full" 
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6" id="ecp-therapy">
          ECP Therapy for Heart Disease Prevention
        </h2>

        <p className="text-gray-600 mb-6">
          External Counter Pulsation (ECP) Therapy is a non-invasive treatment designed to improve blood flow to the heart 
          and reduce symptoms of angina. It is a safe and effective alternative for patients looking to avoid surgery and medications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">No surgery required</p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">Completely painless</p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">No risk of infection</p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">Cost-effective and affordable</p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">Improves circulation and oxygen delivery</p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">Helps relieve chest pain and fatigue</p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">Non-invasive and outpatient procedure</p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">Recommended for patients unfit for surgery</p>
          </div>
        </div>

        <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
          Learn More
        </button>
      </motion.div>

    </div>
  </div>
</section>

      
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our approach to heart care is based on scientific research, personalized treatment, 
                and a focus on long-term health outcomes.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="p-4 bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                  <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                  <circle cx="20" cy="10" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compassionate Orthopedic Team</h3>
<p className="text-gray-600">
  From diagnosis to recovery, our orthopedic surgeon, physiotherapists, and support staff work together to ensure your healing journey is smooth and effective.
</p>

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="p-4 bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-microscope">
                  <path d="M6 18h8"></path>
                  <path d="M3 22h18"></path>
                  <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
                  <path d="M9 14h2"></path>
                  <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
                  <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Research-Based Approach</h3>
              <p className="text-gray-600">
                All our treatment protocols are based on the latest scientific research and medical 
                evidence in the field of cardiology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="p-4 bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog">
                  <circle cx="18" cy="15" r="3"></circle>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M10 15H6a4 4 0 0 0-4 4v2"></path>
                  <path d="m21.7 16.4-.9-.3"></path>
                  <path d="m15.2 13.9-.9-.3"></path>
                  <path d="m16.6 18.7.3-.9"></path>
                  <path d="m19.1 12.2.3-.9"></path>
                  <path d="m19.6 18.7-.4-1"></path>
                  <path d="m16.8 12.3-.4-1"></path>
                  <path d="m14.3 16.6 1-.4"></path>
                  <path d="m20.7 13.8 1-.4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                We understand that each patient is unique, which is why we create customized treatment 
                plans tailored to individual needs and conditions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="p-4 bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
                  <path d="m18 15-2-2"></path>
                  <path d="m15 18-2-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Non-Invasive Focus</h3>
              <p className="text-gray-600">
                We prioritize non-invasive treatments whenever possible, helping patients avoid 
                unnecessary surgeries and interventions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="p-4 bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart">
                  <path d="M3 3v18h18"></path>
                  <path d="M7 13h3v4H7z"></path>
                  <path d="M14 9h3v8h-3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Measurable Results</h3>
              <p className="text-gray-600">
                Our programs focus on delivering measurable improvements in heart health metrics, 
                with regular monitoring and progress tracking.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="p-4 bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  <path d="M6 8h2"></path>
                  <path d="M6 12h2"></path>
                  <path d="M16 8h2"></path>
                  <path d="M16 12h2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Patient Education</h3>
              <p className="text-gray-600">
                We empower our patients with knowledge and resources to understand their heart 
                condition and actively participate in their treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to Take the First Step?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Schedule a consultation with our specialists to discuss your health 
                and learn how our services can help you.
              </p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Book Your Appointment
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;