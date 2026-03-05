import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiVideo, FiCode, FiTrendingUp } from 'react-icons/fi'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-white to-green/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-saffron/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-saffron">India's</span>{' '}
            <span className="text-gray-900">Employment-Driven</span>{' '}
            <span className="text-green">Digital Company</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Empowering brands with cutting-edge digital solutions while creating 
            massive employment opportunities through Digital Veer Sena.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/services" className="bg-gradient-to-r from-saffron to-green text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
              Get Service <FiArrowRight className="inline ml-2" />
            </a>
            <a href="/join" className="border-2 border-saffron text-saffron px-8 py-4 rounded-lg font-semibold hover:bg-saffron hover:text-white transition-all">
              Join Digital Veer Sena
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-saffron">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FiVideo className="w-8 h-8" />, title: 'Media & Production', color: 'saffron' },
              { icon: <FiCode className="w-8 h-8" />, title: 'Tech & Development', color: 'green' },
              { icon: <FiTrendingUp className="w-8 h-8" />, title: 'Marketing & Branding', color: 'navy' }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`text-${service.color} mb-4`}>{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">Professional digital solutions for your brand</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Choose Your <span className="text-green">Package</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '9,999', color: 'saffron' },
              { name: 'Growth', price: '29,999', color: 'green', popular: true },
              { name: 'Premium', price: '99,999+', color: 'navy' }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-lg relative ${pkg.popular ? 'border-2 border-saffron scale-105' : ''}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-saffron to-green text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold mb-2 text-${pkg.color}`}>{pkg.name}</h3>
                <div className="text-4xl font-bold mb-4">₹{pkg.price}</div>
                <a href="/contact" className={`block text-center border-2 border-${pkg.color} text-${pkg.color} px-6 py-3 rounded-lg font-semibold hover:bg-${pkg.color} hover:text-white transition-all`}>
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
