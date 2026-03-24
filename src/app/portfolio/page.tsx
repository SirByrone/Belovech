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
  Cloud
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'

const portfolioData = {
  featuredProjects: [
    {
      id: 1,
      title: "Global Healthcare Platform",
      description: "Comprehensive healthcare management system serving 2M+ patients across 15 countries",
      category: "Healthcare",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      duration: "12 months",
      team: "25 developers",
      budget: "$2.5M",
      results: [
        "2M+ active users",
        "99.9% uptime",
        "40% cost reduction",
        "50% faster processing"
      ],
      client: "Global Health Corp",
      year: "2024",
      status: "Live",
      links: {
        live: "https://healthcare-platform.com",
        github: "https://github.com/belovech/healthcare-platform"
      },
      icon: Monitor
    },
    {
      id: 2,
      title: "AI-Powered Trading System",
      description: "Advanced algorithmic trading platform with machine learning capabilities",
      category: "Finance",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "Kubernetes", "Redis", "PostgreSQL"],
      duration: "8 months",
      team: "18 developers",
      budget: "$1.8M",
      results: [
        "35% higher returns",
        "Real-time processing",
        "99.95% accuracy",
        "24/7 operation"
      ],
      client: "Quantum Capital",
      year: "2024",
      status: "Live",
      links: {
        live: "https://ai-trading-system.com",
        github: "https://github.com/belovech/ai-trading"
      },
      icon: Brain
    },
    {
      id: 3,
      title: "E-commerce Marketplace",
      description: "Multi-vendor e-commerce platform with advanced analytics and AI recommendations",
      category: "E-commerce",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS"],
      duration: "10 months",
      team: "22 developers",
      budget: "$2.2M",
      results: [
        "500K+ products",
        "1M+ monthly users",
        "25% conversion rate",
        "60% mobile traffic"
      ],
      client: "MarketPlace Inc",
      year: "2023",
      status: "Live",
      links: {
        live: "https://marketplace-platform.com",
        github: "https://github.com/belovech/marketplace"
      },
      icon: Globe
    },
    {
      id: 4,
      title: "Cybersecurity Command Center",
      description: "Real-time threat detection and response system for enterprise security",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Elasticsearch", "Kafka", "Docker", "Kubernetes"],
      duration: "6 months",
      team: "15 developers",
      budget: "$1.5M",
      results: [
        "99.9% threat detection",
        "Real-time monitoring",
        "50% faster response",
        "Zero false positives"
      ],
      client: "SecureTech Solutions",
      year: "2024",
      status: "Live",
      links: {
        live: "https://cyber-command-center.com",
        github: "https://github.com/belovech/cybersecurity"
      },
      icon: Shield
    },
    {
      id: 5,
      title: "Quantum Computing Research Platform",
      description: "Advanced quantum computing research and development platform",
      category: "Quantum Computing",
      image: "/api/placeholder/600/400",
      technologies: ["Qiskit", "Python", "Jupyter", "AWS", "Docker"],
      duration: "18 months",
      team: "30 developers",
      budget: "$3.2M",
      results: [
        "10x faster calculations",
        "Breakthrough algorithms",
        "Research publications",
        "Patent applications"
      ],
      client: "Quantum Research Lab",
      year: "2023",
      status: "Research",
      links: {
        live: "https://quantum-research-platform.com",
        github: "https://github.com/belovech/quantum-platform"
      },
      icon: Zap
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description: "Comprehensive business intelligence and analytics platform",
      category: "Data Science",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "Apache Spark", "PostgreSQL", "Docker"],
      duration: "7 months",
      team: "20 developers",
      budget: "$1.7M",
      results: [
        "Real-time insights",
        "50+ data sources",
        "Custom dashboards",
        "Predictive analytics"
      ],
      client: "DataCorp Analytics",
      year: "2024",
      status: "Live",
      links: {
        live: "https://analytics-dashboard.com",
        github: "https://github.com/belovech/analytics"
      },
      icon: Database
    }
  ],

  categories: [
    { name: "All", count: 24, icon: Code },
    { name: "Healthcare", count: 4, icon: Monitor },
    { name: "Finance", count: 5, icon: TrendingUp },
    { name: "E-commerce", count: 6, icon: Globe },
    { name: "Cybersecurity", count: 3, icon: Shield },
    { name: "AI/ML", count: 4, icon: Brain },
    { name: "Quantum", count: 2, icon: Zap }
  ],

  stats: [
    { label: "Projects Completed", value: "2000+", icon: Award },
    { label: "Global Clients", value: "500+", icon: Users },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Countries Served", value: "50+", icon: Globe }
  ],

  testimonials: [
    {
      quote: "Belovech transformed our entire digital infrastructure. Their expertise and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Global Health Corp",
      company: "Healthcare"
    },
    {
      quote: "The AI trading system they built has revolutionized our investment strategies. Outstanding results!",
      author: "Michael Chen",
      position: "CEO, Quantum Capital",
      company: "Finance"
    },
    {
      quote: "Professional, innovative, and results-driven. Belovech is our go-to technology partner.",
      author: "Emily Rodriguez",
      position: "VP Technology, MarketPlace Inc",
      company: "E-commerce"
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

function PortfolioContent({ selectedCategory, setSelectedCategory, filteredProjects }: any) {
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
              {filteredProjects.map((project, index) => (
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
                        <div>
                          <span className="text-secondary-500 dark:text-secondary-400">{t('portfolio.projectDetails.budget')}:</span>
                          <div className="font-medium text-secondary-900 dark:text-white">{project.budget}</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                          {t('services.technologies')}:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
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
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-sm text-secondary-600 dark:text-secondary-300">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <Button 
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white"
                          onClick={() => window.open(project.links.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('portfolio.viewProject')}
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(project.links.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {t('portfolio.viewCode')}
                        </Button>
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
