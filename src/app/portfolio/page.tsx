'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Calendar, 
  Users, 
  Award,
  TrendingUp,
  Globe,
  Code,
  Monitor,
  Brain,
  Shield,
  Zap,
  Database,
  Cloud,
  ShoppingBag,
  Share2,
  Heart,
  LayoutDashboard
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'

// Define TypeScript interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  status: string;
  icon: any;
  technologies: string[];
  results: string[];
}

interface PortfolioContentProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProjects: Project[];
}

const portfolioData = {
  featuredProjects: [
    {
      id: 1,
      title: "National Threat Early Warning System",
      description: "A predictive machine learning platform designed to detect and alert authorities of security threats in real-time.",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "React", "Python", "PostgreSQL", "Scikit-learn"],
      client: "Government Security Agency",
      year: "2026",
      duration: "8 months",
      status: "Prototype / Finalist",
      icon: Shield,
      results: [
        "National Finalist recognition",
        "98% predictive accuracy",
        "Real-time data visualization dashboard",
        "Automated incident reporting"
      ],
    
    },
    {
      id: 2,
      title: "Mythic Wear E-commerce",
      description: "A full-stack multi-product retail platform featuring a modern shopping experience and secure checkout.",
      category: "E-commerce",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Go", "MySQL", "Tailwind CSS"],
      client: "Mythic Wear Fashion Brand",
      year: "2024",
      duration: "12 months",
      status: "Live",
      icon: ShoppingBag,
      results: [
        "Mobile-first responsive design",
        "Integrated inventory management",
        "30% faster load times via Go-based API",
        "Secure payment gateway integration"
      ],

    },
      {
      id: 3,
      title: "Social Media App (Google Play Store)",
      description: "A high-traffic social networking application built with a microservices architecture for high scalability.",
      category: "Mobile Apps",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Java Microservices", "Spring Boot", "Redis", "PostgreSQL"],
      client: "Social Media Startup",
      year: "2025",
      duration: "15 months",
      status: "Live",
      icon: Share2,
      results: [
        "Successfully launched on Google Play Store",
        "Supports high-concurrency user interactions",
        "Real-time messaging and feed updates",
        "99.9% Backend uptime"
      ]
    },
    {
      id: 4,
      title: "Place of Grace Community Centre",
      description: "A comprehensive web presence and management portal for a children's home to coordinate donations and community outreach.",
      category: "NGO / Non-Profit",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      client: "Place of Grace Community Centre",
      year: "2025",
      duration: "4 months",
      status: "Live",
      icon: Heart,
      results: [
        "Streamlined donation processing",
        "Increased digital visibility for the NGO",
        "Centralized volunteer management system",
        "User-friendly interface for non-technical staff"
      ],

    },
    {
      id: 5,
      title: "Celebrating - App Dashboard",
      description: "A sophisticated internal analytics dashboard for tracking event engagement and user celebration metrics.",
      category: "Data Science / Analytics",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Java", "Chart.js", "SQL"],
      duration: "6 months",
      
      
      results: [
        "Interactive data filtering and reporting",
        "Real-time user engagement tracking",
        "Optimized database queries for fast reporting",
        "Exportable PDF/Excel business reports"
      ],
      client: "Celebrating Platform",
      year: "2026",
      status: "Live",
     
      icon: LayoutDashboard
    }
  ],

  categories: [
    { name: "All", count: 5, icon: Code },
    { name: "Cybersecurity", count: 1, icon: Shield },
    { name: "E-commerce", count: 1, icon: ShoppingBag },
    { name: "Mobile Apps", count: 1, icon: Share2 },
    { name: "NGO / Non-Profit", count: 1, icon: Heart },
    { name: "Data Science / Analytics", count: 1, icon: LayoutDashboard }
  ],

  stats: [
    { label: "Projects Completed", value: "100+", icon: Award },
    { label: "Global Clients", value: "50+", icon: Users },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Countries Served", value: "10+", icon: Globe }
  ],

  testimonials: [
    {
      quote: "Belovech transformed our entire digital infrastructure. Their expertise and dedication exceeded our expectations.",
      author: "Julius Ndukuthyo",
      position: "Media and Publicity",
      company: "{Place of Grace Community Centre - NGO"
    },

    {
      quote: "Professional, innovative, and results-driven. Belovech is our go-to technology partner.",
      author: "Robert Mowongela",
      position: "CEO",
      company: "A tech Startup"
    }
  ]
}

export default function PortfolioPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { getBackgroundImage } = useResponsiveBackgroundImage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects = selectedCategory === "All" 
    ? portfolioData.featuredProjects 
    : portfolioData.featuredProjects.filter(project => project.category === selectedCategory)

  if (!mounted) {
    return (
      <main className="min-h-screen relative">
        <div className="relative z-10">
          <Header />
          <PortfolioContent selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} filteredProjects={filteredProjects} />
          <Footer />
        </div>
      </main>
    )
  }

  const backgroundImage = theme ? getBackgroundImage(theme) : undefined

  return (
    <main className="min-h-screen relative">
      {/* Background Image - Translucent for both themes, responsive based on screen size */}
      {backgroundImage && (
        <div 
          className="fixed inset-0 w-full h-full"
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            zIndex: -1,
          }}
        >
          {/* Translucent overlay to ensure content readability */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)',
            }}
          />
        </div>
      )}
      
      <div className="relative z-10">
        <Header />
        <PortfolioContent selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} filteredProjects={filteredProjects} />
        <Footer />
      </div>
    </main>
  )
}

function PortfolioContent({ selectedCategory, setSelectedCategory, filteredProjects }: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProjects: Project[];
}) {
  const { t } = useLanguage()
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary-50 dark:from-background dark:to-secondary-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                  {t('portfolio.title')}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('portfolio.subtitle')}
              </p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {portfolioData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-4 mx-auto">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'bg-background dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 border border-border'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                {t('portfolio.featuredProjects')}
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                {t('portfolio.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project: Project, index: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-background dark:bg-secondary-900 rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-white opacity-80" />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-3">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-secondary-500 dark:text-secondary-400">{t('portfolio.projectDetails.client')}:</span>
                          <div className="font-medium text-secondary-900 dark:text-white">{project.client}</div>
                        </div>
                        <div>
                          <span className="text-secondary-500 dark:text-secondary-400">{t('portfolio.projectDetails.year')}:</span>
                          <div className="font-medium text-secondary-900 dark:text-white">{project.year}</div>
                        </div>
                        <div>
                          <span className="text-secondary-500 dark:text-secondary-400">{t('portfolio.projectDetails.duration')}:</span>
                          <div className="font-medium text-secondary-900 dark:text-white">{project.duration}</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                          {t('services.technologies')}:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, techIndex: number) => (
                            <span key={techIndex} className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                          {t('portfolio.projectDetails.results')}:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.results.map((result: string, resultIndex: number) => (
                            <div key={resultIndex} className="flex items-center text-sm text-secondary-600 dark:text-secondary-300">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-900">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                Client Testimonials
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                Hear from our satisfied clients about their experience working with Belovech
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioData.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-800 rounded-2xl p-8 shadow-lg border border-border"
                >
                  <div className="text-secondary-600 dark:text-secondary-300 mb-6 italic">
                    "{testimonial.quote}"
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-secondary-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      {testimonial.position}
                    </div>
                    <div className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-white/90 font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
                  onClick={() => window.location.href = '/services'}
                >
                  View Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
