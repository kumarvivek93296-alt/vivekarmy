import React from 'react'
import { motion } from 'framer-motion'
import { FiVideo, FiCode, FiTrendingUp, FiCheck } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      icon: <FiVideo className="w-12 h-12" />,
      title: 'Media & Production',
      description: 'Professional video editing, reels, product ads, and cinematic brand videos.',
      features: ['Video Editing', 'Reels & Shorts', 'Product Ads', 'Event Shoots', 'Cinematic Videos'],
      price: 'Starting ₹4,999',
      color: 'saffron'
    },
    {
      icon: <FiCode className="w-12 h-12" />,
      title: 'Tech & Development',
      description: 'Custom websites, mobile apps, AI integration, and e-commerce solutions.',
      features: ['Web Development', 'App Development', 'AI Tools', 'E-commerce', 'Landing Pages'],
      price: 'Starting ₹9,999',
      color: 'green'
    },
    {
      icon: <FiTrendingUp className="w-12 h-12" />,
      title: 'Marketing & Branding',
      description: 'Strategic marketing, branding, and growth solutions for your business.',
      features: ['Social Media', 'Performance Ads', 'Branding', 'Strategy', 'SEO'],
      price: 'Starting ₹7,999',
      color: 'navy'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Our <span className="text-saffron">Services</span>
        </motion.h1>

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-${service.color}`}>
              <div className={`text-${service.color} mb-6`}>{service.icon}</div>
              <h2 className={`text-3xl font-bold mb-4 text-${service.color}`}>{service.title}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <FiCheck className={`text-${service.color} mr-2 flex-shrink-0`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold text-${service.color}`}>{service.price}</span>
                <a href="/contact" className={`bg-${service.color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}>
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
