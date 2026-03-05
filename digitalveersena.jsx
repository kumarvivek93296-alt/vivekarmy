import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiAward, FiBook, FiCpu } from 'react-icons/fi'

const DigitalVeerSena = () => {
  const skills = [
    'Video Editing', 'Web Designing', 'App Development', 
    'Branding', 'Social Media', 'AI Automation'
  ]

  const levels = [
    { name: 'Beginner', earning: 'Start your journey' },
    { name: 'Pro', earning: 'Earn 15k-25k/month' },
    { name: 'Elite', earning: 'Earn 40k+/month' }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Digital <span className="text-green">Veer Sena</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join India's strongest remote digital workforce. Get trained, earn money, 
            and become part of the digital employment revolution.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FiBook className="w-8 h-8" />, title: 'Free Training', desc: 'Skill-wise video training & SOPs' },
            { icon: <FiCpu className="w-8 h-8" />, title: 'AI Tools', desc: 'AI co-pilot tools for faster work' },
            { icon: <FiAward className="w-8 h-8" />, title: 'Certification', desc: 'Get certified & level up' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-saffron/10 to-green/10 p-8 rounded-2xl text-center"
            >
              <div className="text-saffron mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-navy text-white rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills You'll Learn</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Levels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {levels.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className={`text-2xl font-bold mb-4 ${i === 0 ? 'text-saffron' : i === 1 ? 'text-green' : 'text-navy'}`}>
                {level.name}
              </h3>
              <p className="text-gray-600 mb-6">{level.earning}</p>
              <FiUsers className={`w-12 h-12 mx-auto ${i === 0 ? 'text-saffron' : i === 1 ? 'text-green' : 'text-navy'} opacity-50`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <a href="/contact" className="inline-block bg-gradient-to-r from-saffron to-green text-white px-12 py-4 rounded-lg text-xl font-semibold hover:shadow-lg transition-all">
            Apply Now
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default DigitalVeerSena
