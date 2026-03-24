'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Monitor, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'

const servicesData = {
  mainServices: [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise-grade software solutions tailored to your business needs",
      features: [
        "Custom Application Development",
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "API Development & Integration",
        "Mobile Application Development",
        "Desktop Software Solutions",
        "Cloud-Native Applications",
        "Microservices Architecture"
      ],
      technologies: ["React", "Node.js", "Python", "Java", "C#", "Go", "Docker", "Kubernetes"],
      timeline: "3-12 months",
      href: "/services/software-development"
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "Modern, responsive websites and web applications that drive business growth",
      features: [
        "Responsive Web Design",
        "E-commerce Platforms",
        "Progressive Web Apps (PWA)",
        "Content Management Systems",
        "Web Application Development",
        "Performance Optimization",
        "SEO Implementation",
        "Accessibility Compliance"
      ],
      technologies: ["Next.js", "React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "WordPress", "Shopify"],
      timeline: "1-6 months",
      href: "/services/website-development"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced artificial intelligence and machine learning",
      features: [
        "Process Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbots & Virtual Assistants",
        "Machine Learning Models",
        "Deep Learning Solutions",
        "AI Strategy Consulting"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Azure AI", "AWS ML", "Google AI", "Hugging Face"],
      timeline: "2-8 months",
      href: "/services/ai-ml"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital assets and infrastructure",
      features: [
        "Security Audits & Assessments",
        "Threat Detection & Response",
        "Compliance Management",
        "Penetration Testing",
        "Security Training Programs",
        "Incident Response Planning",
        "Zero Trust Architecture",
        "Cloud Security Implementation"
      ],
      technologies: ["SIEM", "SOAR", "EDR", "Firewalls", "VPN", "IAM", "Encryption", "Compliance Tools"],
      timeline: "1-4 months",
      href: "/services/cybersecurity"
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Next-generation computing solutions for complex optimization problems",
      features: [
        "Quantum Algorithm Development",
        "Optimization Solutions",
        "Research & Development",
        "Quantum Simulation",
        "Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Cloud Services",
        "Quantum Consulting"
      ],
      technologies: ["Qiskit", "Cirq", "PennyLane", "Q#", "IBM Quantum", "Google Quantum", "Rigetti", "IonQ"],
      timeline: "6-18 months",
      href: "/services/quantum"
    },
    {
      icon: Globe,
      title: "Global Innovation",
      description: "Strategic technology consulting and digital transformation worldwide",
      features: [
        "Digital Transformation Strategy",
        "Technology Roadmaps",
        "Innovation Consulting",
        "Market Analysis",
        "Partnership Development",
        "Technology Due Diligence",
        "Global Expansion Support",
        "Cross-Cultural Tech Solutions"
      ],
      technologies: ["Strategy Frameworks", "Market Research", "Partnership Tools", "Global Platforms", "Cultural Analytics"],
      timeline: "1-3 months",
      href: "/services/innovation"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Streamlined development and deployment processes with cloud infrastructure",
      features: [
        "CI/CD Pipeline Implementation",
        "Cloud Migration Services",
        "Infrastructure Automation",
        "Monitoring & Logging",
        "Container Orchestration",
        "Microservices Architecture",
        "Cloud Security",
        "Disaster Recovery"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"],
      timeline: "2-6 months",
      href: "/services/devops"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Transform data into actionable business insights and intelligence",
      features: [
        "Data Mining & Analysis",
        "Statistical Modeling",
        "Business Intelligence",
        "Data Visualization",
        "Machine Learning Models",
        "Big Data Processing",
        "Data Engineering",
        "Predictive Analytics"
      ],
      technologies: ["Python", "R", "SQL", "Tableau", "Power BI", "Apache Spark", "Hadoop", "Pandas"],
      timeline: "2-5 months",
      href: "/services/data-science"
    }
  ],
  
  additionalServices: [
    "Blockchain Development",
    "IoT Solutions",
    "AR/VR Development",
    "Mobile App Development",
    "API Development",
    "System Integration",
    "Technical Consulting",
    "Quality Assurance",
    "Performance Testing",
    "User Experience Design",
    "Digital Marketing",
    "Cloud Architecture"
  ],

  industries: [
    { name: "Healthcare", projects: "40", clients: "10" },
    { name: "Finance", projects: "30", clients: "6" },
    { name: "E-commerce", projects: "40", clients: "30" },
    { name: "Manufacturing", projects: "10", clients: "5" },
    { name: "Education", projects: "50", clients: "30" },
    { name: "Government", projects: "5", clients: "2" }
  ],

  stats: [
    { label: "projectsCompleted", value: "100+", icon: CheckCircle },
    { label: "globalClients", value: "40+", icon: Users },
    { label: "teamMembers", value: "10", icon: Users },
    { label: "countriesServed", value: "4", icon: Globe },
    { label: "clientSatisfaction", value: "99.9%", icon: Star },
    { label: "successRate", value: "98%", icon: Award }
  ]
}

export default function ServicesPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { getBackgroundImage } = useResponsiveBackgroundImage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen relative">
        <div className="relative z-10">
          <Header />
          <ServicesContent />
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
        <ServicesContent />
        <Footer />
      </div>
    </main>
  )
}

function ServicesContent() {
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
                  {t('services.title')}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('services.subtitle')}
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {servicesData.stats.map((stat, index) => (
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
                  {t(`services.stats.${stat.label}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
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
                {t('services.coreServices')}
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                {t('services.coreServicesDesc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {servicesData.mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300 h-full">
                    {/* Service Header */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                        {t('services.keyFeatures')}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-secondary-600 dark:text-secondary-300">
                            <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                        {t('services.technologies')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 6).map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex justify-center items-center mb-6 text-sm">
                      <div>
                        <span className="text-secondary-500 dark:text-secondary-400">{t('services.timeline')}</span>
                        <div className="font-semibold text-secondary-900 dark:text-white">{service.timeline}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
                {t('services.industriesWeServe')}
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                {t('services.industriesDesc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {servicesData.industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                    {industry.name}
                  </h3>
                  <div className="text-sm text-secondary-600 dark:text-secondary-300 space-y-1">
                    <div>{industry.projects} {t('services.projects')}</div>
                    <div>{industry.clients} {t('services.clients')}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
                {t('services.additionalServices')}
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                {t('services.additionalServicesDesc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {servicesData.additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-900 rounded-lg p-4 text-center hover:shadow-md hover:border-black dark:hover:border-white border border-border transition-all duration-300"
                >
                  <span className="text-sm font-medium text-secondary-900 dark:text-white">
                    {service}
                  </span>
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
                {t('services.readyToTransform')}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {t('services.readyToTransformDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-white/90 font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  {t('services.getStarted')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
                  onClick={() => window.location.href = '/portfolio'}
                >
                  {t('services.viewOurWork')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
