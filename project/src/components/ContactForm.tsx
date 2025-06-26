import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `Hello, I would like to request an appointment.\n
Name: ${formData.name}\n
Email: ${formData.email}\n
Phone: ${formData.phone}\n
Service: ${formData.service}\n
Message: ${formData.message}`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '919818095152'; // Country code + number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');

  // Reset form
  setFormData({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
};


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Here you would typically send the form data to an API
  //   console.log('Form data:', formData);
    
  //   // Show success message
  //   setFormSubmitted(true);
    
  //   // Reset form
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     service: '',
  //     message: '',
  //   });
    
  //   // Reset success message after 5 seconds
  //   setTimeout(() => {
  //     setFormSubmitted(false);
  //   }, 5000);
  // };

  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Request Appointment</h3>
      
      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-success-50 border border-success-200 text-success-700 px-4 py-3 rounded-lg mb-6"
        >
          <p className="font-medium">Thank you for your message!</p>
          <p>We will contact you shortly to confirm your appointment.</p>
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Required*
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Select a service</option>
            <option value="Joint Pain Management">Joint Pain Management</option>
            <option value="Fracture Treatment">Fracture Treatment</option>
            <option value="Arthritis Care">Arthritis Care</option>
            <option value="Sports Injury Rehab">Sports Injury Rehab</option>
            <option value="Spine & Back Care">Spine & Back Care</option>
            <option value="Joint Replacement Consultation">Joint Replacement Consultation</option>
            <option value="General Orthopedic Consultation">General Orthopedic Consultation</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="Please provide any additional information about your health concerns."
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors"
        >
          Submit Request <Send className="ml-2 w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

