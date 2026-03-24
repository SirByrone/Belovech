'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Lightbulb, Globe, Shield, Zap, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

const aboutContent = {
  title: "Belovech - Unveiling Quantum Horizons in Tech",
  subtitle: "Empowering Global Innovation Through Cutting-Edge Technology Solutions",
  
  mission: {
    icon: Target,
    title: "Our Mission",
    content: "Empower global innovation by delivering cutting-edge tech solutions that solve real-world problems, fostering sustainable advancement and accessibility for all, while transforming visionary ideas into scalable, user-centric realities through ethical AI, secure systems, and cross-cultural collaboration.",
    details: [
      "Develop innovative software solutions that address complex business challenges",
      "Promote sustainable technology practices that benefit society and environment",
      "Ensure accessibility and inclusivity in all our technological solutions",
      "Foster ethical AI development with transparency and accountability",
      "Build secure systems that protect user privacy and data integrity",
      "Enable cross-cultural collaboration through technology"
    ]
  },
  
  vision: {
    icon: Eye,
    title: "Our Vision", 
    content: "Become the world's leading tech enterprise, driving multibillion-dollar growth through transformative technologies that connect, automate, and elevate societies worldwide, emphasizing quality, security, and inclusive scalability across diverse markets and industries.",
    details: [
      "Lead the global technology transformation across multiple industries",
      "Achieve sustainable multibillion-dollar growth through innovation",
      "Connect communities worldwide through advanced technology platforms",
      "Automate complex processes to improve efficiency and productivity",
      "Elevate societies by democratizing access to cutting-edge technology",
      "Maintain the highest standards of quality and security in all solutions"
    ]
  },
  
  valueProposition: {
    icon: Lightbulb,
    title: "Value Proposition",
    content: "Belovech provides scalable, AI-driven tech solutions with unmatched reliability, customization, and global support, delivering 10x efficiency gains at competitive costs to propel businesses into the future.",
    details: [
      "Scalable solutions that grow with your business needs",
      "AI-driven automation for enhanced productivity and efficiency",
      "Unmatched reliability with 99.9% uptime guarantee",
      "Customized solutions tailored to specific industry requirements",
      "24/7 global support across multiple time zones",
      "Competitive pricing with transparent cost structures",
      "10x efficiency improvements through process optimization",
      "Future-ready technology that adapts to market changes"
    ]
  },

  // Additional sections for comprehensive about page
  companyOverview: {
    title: "Company Overview",
    content: "Founded with a vision to revolutionize technology, Belovech has grown from a startup to a global enterprise, serving clients across multiple countries. Our team of experts combines deep technical expertise with innovative thinking to deliver solutions that transform businesses and communities.",
    stats: [
      { label: "Global Clients", value: "40+" },
      { label: "Countries Served", value: "4" },
      { label: "Projects Completed", value: "100+" }
    ]
  },

  coreValues: {
    title: "Core Values",
    values: [
      {
        title: "Innovation",
        description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative problem-solving approaches."
      },
      {
        title: "Excellence",
        description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional outcomes."
      },
      {
        title: "Integrity",
        description: "We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners."
      },
      {
        title: "Collaboration",
        description: "We believe in the power of teamwork and partnership, both internally and with our clients, to achieve greater success."
      },
      {
        title: "Sustainability",
        description: "We are committed to environmentally responsible practices and creating solutions that benefit society long-term."
      },
      {
        title: "Accessibility",
        description: "We ensure our technology is inclusive and accessible to all users, regardless of their abilities or circumstances."
      }
    ]
  },

  leadership: {
    title: "Leadership Team",
    description: "Our leadership team brings together decades of experience in technology, business, and innovation, guiding Belovech toward continued growth and success.",
    members: [
      {
        name: "Byrone Opande",
        role: "Chief Executive Officer",
        bio: "A visionary founder with 8+ years of experience in technology and business transformation. A forward-thinking leader who drives innovation and excellence in the tech industry, combining strategic vision with hands-on technical expertise to guide Belovech toward groundbreaking achievements.",
        image: "/api/placeholder/300/300",
        linkedin: "https://linkedin.com/in/byroneopande",
        email: "belovechtechnologies@gmail.com"
      },
      {
        name: "Samuel Livio",
        role: "Chief Technology Officer",
        bio: "Technology innovator specializing in AI, quantum computing, and scalable systems. Holds multiple patents in machine learning and distributed computing.",
        image: "/api/placeholder/300/300",
        linkedin: "https://linkedin.com/in/samuellivio",
        email: "belovechtechnologies@gmail.com"
      },
      {
        name: "Don Michaels",
        role: "Chief Operating Officer",
        bio: "Operations expert with a track record of scaling companies from startup to enterprise. Specializes in process optimization and global expansion.",
        image: "/api/placeholder/300/300",
        linkedin: "https://linkedin.com/in/donmichaels",
        email: "belovechtechnologies@gmail.com"
      }
    ]
  },

  achievements: {
    title: "Key Achievements",
    description: "Over the years, Belovech has achieved significant milestones that demonstrate our commitment to excellence and innovation.",
    achievements: [
      "Selected to help in the development of Celebrating - A game-changing social media platform",
      "Good grades and papers in the tech industry",
      "Skilled labor from different organizations",
      "Recognition for excellence in technology education and student achievements",
      "Successful delivery of innovative tech solutions across multiple industries",
      "Building a reputation for quality and innovation in the technology sector"
    ]
  }
}

export function AboutSection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary-50 dark:from-background dark:to-secondary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      {/* Floating Golden Particles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-2 h-2 bg-primary-400 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-accent-400 rounded-full"
      />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto leading-relaxed mb-4">
              {t('about.fullTitle')}
            </p>
            
            <p className="text-base sm:text-lg text-secondary-500 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
            
            {/* Elegant Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-8"
            />
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <aboutContent.mission.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4 text-center">
                  {t('about.mission.title')}
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed text-center">
                  {t('about.mission.content')}
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <aboutContent.vision.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4 text-center">
                  {t('about.vision.title')}
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed text-center">
                  {t('about.vision.content')}
                </p>
              </div>
            </motion.div>

            {/* Value Proposition Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <aboutContent.valueProposition.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4 text-center">
                  {t('about.valueProposition.title')}
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed text-center">
                  {t('about.valueProposition.content')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Company Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
                {t('about.companyOverview.title')}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                {t('about.companyOverview.content')}
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {aboutContent.companyOverview.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
              {aboutContent.coreValues.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutContent.coreValues.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-900 rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
                {t('about.achievements.title')}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
                {t('about.achievements.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aboutContent.achievements.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-secondary-700 dark:text-secondary-300 text-sm">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Leadership Team Section */}
          <motion.div
            id="leadership-team"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                {t('about.leadership.title')}
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                {t('about.leadership.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutContent.leadership.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-background dark:bg-secondary-900 rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300 h-full">
                    {/* Member Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-background dark:bg-secondary-800 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center">
                            <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                        {member.name}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center justify-center gap-3">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16 space-x-4"
          >
            {[Globe, Shield, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
