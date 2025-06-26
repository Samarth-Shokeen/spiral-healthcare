import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import rishirajImg from '../data/rishiraj-shokeen.jpg'; 


const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-primary-700 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,...')]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Spinal Healthcare Centre
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Expert orthopedic care led focusing on restoring mobility, reducing pain, and improving lives for over two decades.
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

      {/* Our Story */}
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
                src={rishirajImg}
                alt="Spinal Healthcare Centre"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>

              <p className="text-gray-600 mb-6">
                Founded by Dr. Rishiraj Shokeen, Spinal Healthcare Centre has been a trusted name in orthopedic and spine care 
                for over 20 years. Driven by a commitment to clinical excellence and compassionate care, we focus on personalized, 
                evidence-based treatment plans that improve mobility and restore quality of life.
              </p>

              <p className="text-gray-600 mb-6">
                From treating common joint conditions to complex spine disorders, Dr. Shokeen and his team blend 
                modern techniques with a hands-on, patient-first philosophy. We strive to minimize the need 
                for surgery whenever possible — prioritizing recovery, prevention, and long-term wellness.
              </p>

              <p className="text-gray-600">
                Today, Spinal Healthcare Centre continues to evolve with advancements in medical technology, 
                ensuring every patient receives the highest standard of orthopedic care in a supportive environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are committed to redefining orthopedic care through innovation, integrity, and impact.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-card"
            >
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver outstanding orthopedic care with a focus on spinal health, joint recovery, and pain relief — empowering every patient to move freely and live fully.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Offer individualized treatment with a conservative-first approach</p>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Promote recovery through minimally invasive procedures</p>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Build long-term patient relationships rooted in trust</p>
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-card"
            >
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be a center of excellence in orthopedic and spinal care — setting benchmarks in clinical expertise, patient outcomes, and accessibility.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Lead in spine and joint treatment innovations</p>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Provide ethical, transparent, and affordable care</p>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Inspire active, pain-free living across all ages</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
