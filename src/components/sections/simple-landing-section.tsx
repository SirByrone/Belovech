'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Shield, Brain, Globe, Code, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'

const mainServices = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom applications tailored to your business needs',
    subServices: ['Custom Applications', 'Enterprise Solutions', 'API Integration', 'Mobile Apps', 'Desktop Software', 'Cloud Solutions'],
    href: '/services#software-development'
  },
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Modern, responsive websites that drive results',
    subServices: ['Web Applications', 'E-commerce Platforms', 'Responsive Design', 'Progressive Web Apps', 'CMS Development', 'Performance Optimization'],
    href: '/services#website-development'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced AI',
    subServices: ['Process Automation', 'Data Analytics', 'Predictive Models', 'Natural Language Processing', 'Computer Vision', 'Chatbots & Virtual Assistants'],
    href: '/services#ai-ml'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive protection for your digital assets',
    subServices: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Penetration Testing', 'Security Training', 'Incident Response'],
    href: '/services#cybersecurity'
  },
  {
    icon: Zap,
    title: 'Quantum Computing',
    description: 'Next-generation computing for complex problems',
    subServices: ['Quantum Algorithms', 'Optimization Solutions', 'Research & Development', 'Quantum Simulation', 'Cryptography', 'Quantum Machine Learning'],
    href: '/services#quantum'
  },
  {
    icon: Globe,
    title: 'Global Innovation',
    description: 'Strategic technology consulting worldwide',
    subServices: ['Tech Consulting', 'Digital Transformation', 'Innovation Strategy', 'Technology Roadmaps', 'Market Analysis', 'Partnership Development'],
    href: '/services#innovation'
  },
  {
    icon: Code,
    title: 'DevOps & Cloud',
    description: 'Streamlined development and deployment processes',
    subServices: ['CI/CD Pipelines', 'Cloud Migration', 'Infrastructure Automation', 'Monitoring & Logging', 'Container Orchestration', 'Microservices Architecture'],
    href: '/services#devops'
  },
  {
    icon: Monitor,
    title: 'Data Science',
    description: 'Transform data into actionable business insights',
    subServices: ['Data Mining', 'Statistical Analysis', 'Business Intelligence', 'Data Visualization', 'Machine Learning Models', 'Big Data Processing'],
    href: '/services#data-science'
  }
]

export function SimpleLandingSection() {
  const { t } = useLanguage()
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      {/* Floating Golden Particles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-32 right-32 w-1 h-1 bg-primary-500 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-accent-400 rounded-full"
      />

      <div className="container relative z-10">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4">
            
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                  {t('home.hero.title')}
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-secondary-600 dark:text-white/90 mb-8">
                {t('home.hero.subtitle')}
              </h2>
              
              {/* Elegant Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"
              />

            {/* Sparkle Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
                className="flex gap-3 justify-center mb-8"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                  className="text-primary-500"
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              ))}
            </motion.div>

              {/* Simple Why Belovech - Hover to Pop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
                className="relative group cursor-pointer inline-block"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-secondary-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {t('home.hero.whyBelovech')}
                </h3>

                {/* Charismatic Pop-up Services */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-background dark:bg-secondary-900 rounded-xl shadow-xl border border-border p-4 w-[90vw] max-w-[520px] md:w-[650px] md:max-w-[650px] max-h-[420px]"
                  >
                    {/* Header */}
                    <div className="text-center mb-3">
                      <h4 className="text-base font-semibold text-secondary-900 dark:text-secondary-100">
                        {t('home.hero.ourServices')}
                      </h4>
                    </div>

                    {/* Scrollable Services Grid */}
                    <div className="max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary-400 dark:scrollbar-thumb-secondary-500 scrollbar-track-secondary-100 dark:scrollbar-track-secondary-800 hover:scrollbar-thumb-secondary-500 dark:hover:scrollbar-thumb-secondary-400 scroll-smooth">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 pr-2">
                        {mainServices.map((service, index) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group-hover:group"
                          >
                            <div className="bg-secondary-50 dark:bg-secondary-800 rounded-lg p-3 md:p-3 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-300 cursor-pointer border border-border hover:border-secondary-300 dark:hover:border-secondary-600 hover:shadow-md"
                                 onClick={() => window.location.href = service.href}>
                              {/* Service Header */}
                              <div className="flex items-center mb-2 md:mb-2">
                                <div className="flex items-center justify-center w-8 h-8 md:w-8 md:h-8 bg-secondary-200 dark:bg-secondary-700 rounded-lg mr-2 flex-shrink-0">
                                  <service.icon className="w-4 h-4 text-secondary-700 dark:text-secondary-300" />
                                </div>
                                <h5 className="text-sm md:text-sm font-semibold text-secondary-900 dark:text-secondary-100 leading-tight">
                                  {service.title}
                                </h5>
                              </div>
                              
                              {/* Sub-services List */}
                              <div className="space-y-1">
                                {service.subServices.slice(0, 2).map((subService, subIndex) => (
                                  <div key={subIndex} className="flex items-center justify-between">
                                    <span className="text-xs text-secondary-600 dark:text-secondary-400 font-medium">
                                      {subService}
                                    </span>
                                    <ArrowRight className="w-2 h-2 text-secondary-400 dark:text-secondary-500" />
                                  </div>
                                ))}
                                {service.subServices.length > 2 && (
                                  <div className="text-xs text-secondary-500 dark:text-secondary-400 font-medium bg-secondary-100 dark:bg-secondary-700 rounded px-1 py-0.5 text-center">
                                    +{service.subServices.length - 2} more
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* View All Button */}
                    <div className="mt-3 pt-3 border-t border-border">
                      <Button 
                        size="sm" 
                        className="w-full bg-secondary-900 dark:bg-secondary-100 hover:bg-secondary-800 dark:hover:bg-secondary-200 text-secondary-100 dark:text-secondary-900 font-medium text-sm transition-all duration-300 hover:shadow-md"
                        onClick={() => window.location.href = '/services'}
                      >
                        {t('home.hero.viewAllServices')}
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
            </motion.div>
          </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
