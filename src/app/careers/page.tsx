'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Users, 
  Briefcase, 
  Star, 
  Heart, 
  GraduationCap, 
  Globe, 
  DollarSign, 
  Calendar, 
  Clock, 
  Code, 
  Brain, 
  Shield, 
  Zap, 
  Database, 
  Cloud, 
  TrendingUp, 
  CheckCircle, 
  Building, 
  Monitor, 
  ArrowRight, 
  Award 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'

interface JobPosition {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  urgent?: boolean;
  level?: string;
  salary?: string;
  posted?: string;
  applicants?: number;
}

const careersData: {
  openPositions: JobPosition[];
  departments: { name: string; count: number; icon: any }[];
  benefits: { title: string; items: string[]; icon: any }[];
  culture: { title: string; description: string; values: { title: string; description: string }[] };
  stats: { label: string; value: string; icon: any }[];
} = {
  openPositions: [],
  

  departments: [
    { name: "all", count: 3, icon: Briefcase },
    { name: "engineering", count: 2, icon: Code },
    { name: "research", count: 0, icon: Brain },
    { name: "security", count: 0, icon: Shield },
    { name: "quantum", count: 0, icon: Zap },
    { name: "data", count: 0, icon: Database },
    { name: "devops", count: 0, icon: Cloud },
    { name: "product", count: 1, icon: TrendingUp }
  ],

  benefits: [
    {
      title: "healthWellness",
      items: [
        "insurance",
        "dental",
        "mental",
        "gym",
        "wellness"
      ],
      icon: Heart
    },
    {
      title: "professionalDevelopment",
      items: [
        "budget",
        "conference",
        "certification",
        "training",
        "mentorship"
      ],
      icon: GraduationCap
    },
    {
      title: "workLifeBalance",
      items: [
        "flexible",
        "remote",
        "pto",
        "parental",
        "stipend"
      ],
      icon: Globe
    },
    {
      title: "financial",
      items: [
        "salary",
        "equity",
        "retirement",
        "bonuses",
        "stock"
      ],
      icon: DollarSign
    }
  ],

  culture: {
    title: "culture",
    description: "cultureDescription",
    values: [
      {
        title: "innovation",
        description: "innovationDesc"
      },
      {
        title: "collaboration",
        description: "collaborationDesc"
      },
      {
        title: "excellence",
        description: "excellenceDesc"
      },
      {
        title: "growth",
        description: "growthDesc"
      }
    ]
  },

  stats: [
    { label: "teamMembers", value: "20+", icon: Users },
    { label: "countries", value: "15+", icon: Globe },
    { label: "openPositions", value: "3", icon: Briefcase },
    { label: "employeeSatisfaction", value: "98%", icon: Star }
  ]
}

export default function CareersPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const { getBackgroundImage } = useResponsiveBackgroundImage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredPositions = selectedDepartment === "all" 
    ? careersData.openPositions 
    : careersData.openPositions.filter((position: JobPosition) => position.category === selectedDepartment)

  if (!mounted) {
    return (
      <main className="min-h-screen relative">
        <div className="relative z-10">
          <Header />
          <CareersContent selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} filteredPositions={filteredPositions} />
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
        <CareersContent selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} filteredPositions={filteredPositions} />
        <Footer />
      </div>
    </main>
  )
}

function CareersContent({ selectedDepartment, setSelectedDepartment, filteredPositions }: any) {
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
                  {t('careers.title')}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('careers.subtitle')}
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
            {careersData.stats.map((stat: any, index: number) => (
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
                  {t(`careers.stats.${stat.label}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {careersData.departments.map((department: any, index: number) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedDepartment(department.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedDepartment === department.name
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'bg-background dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 border border-border'
                  }`}
                >
                  <department.icon className="w-4 h-4" />
                  <span className="font-medium">{t(`careers.departments.${department.name}`)}</span>
                  <span className="text-xs opacity-75">({department.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
                {t('careers.openPositions')}
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                {t('careers.subtitle')}
              </p>
            </motion.div>

            {filteredPositions.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center py-20 px-4 relative"
              >
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-8"
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1">
                    <div className="w-full h-full rounded-full bg-background dark:bg-secondary-900 flex items-center justify-center">
                      <Briefcase className="w-16 h-16 text-primary-500 dark:text-primary-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Main Message */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4 text-center"
                >
                  <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                    {t('careers.noPositions.title')}
                  </span>
                </motion.h3>

                {/* Sub Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 text-center max-w-2xl mx-auto"
                >
                  {t('careers.noPositions.subtitle')}
                </motion.p>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-center justify-center gap-4 mb-8"
                >
                  {[0, 1, 2].map((i: number) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      className="w-2 h-2 rounded-full bg-primary-500"
                    />
                  ))}
                </motion.div>

                {/* Additional Message */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base text-secondary-500 dark:text-secondary-400 text-center max-w-xl mx-auto mb-8"
                >
                  {t('careers.noPositions.description')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    {t('careers.noPositions.contactUs')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold"
                    onClick={() => window.location.href = '/about'}
                  >
                    {t('careers.noPositions.learnMore')}
                  </Button>
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(6)].map((_: any, i: number) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -100, 0],
                        x: [0, Math.sin(i) * 50, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute w-1 h-1 rounded-full bg-primary-400"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${50 + i * 10}%`
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {filteredPositions.map((position: JobPosition, index: number) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      {/* Left Content */}
                      <div className="flex-1">
                        <div className="flex items-start mb-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                            <position.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                                {position.title}
                              </h3>
                              {position.urgent && (
                                <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs font-medium rounded-full">
                                  Urgent
                                </span>
                              )}
                            </div>
                            <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                              {position.description}
                            </p>
                          </div>
                        </div>

                        {/* Job Details */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 text-primary-500 mr-2" />
                            <span className="text-secondary-600 dark:text-secondary-300">{position.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Briefcase className="w-4 h-4 text-primary-500 mr-2" />
                            <span className="text-secondary-600 dark:text-secondary-300">{position.type}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <TrendingUp className="w-4 h-4 text-primary-500 mr-2" />
                            <span className="text-secondary-600 dark:text-secondary-300">{position.level}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <DollarSign className="w-4 h-4 text-primary-500 mr-2" />
                            <span className="text-secondary-600 dark:text-secondary-300">{position.salary}</span>
                          </div>
                        </div>

                        {/* Requirements Preview */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                            Key Requirements:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {position.requirements.slice(0, 4).map((requirement: string, reqIndex: number) => (
                              <div key={reqIndex} className="flex items-center text-sm text-secondary-600 dark:text-secondary-300">
                                <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                                {requirement}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Posted {position.posted ? new Date(position.posted).toLocaleDateString() : 'Recently'}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {position.applicants} applicants
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Apply Button */}
                      <div className="lg:ml-8 mt-6 lg:mt-0">
                        <Button 
                          size="lg"
                          className="w-full lg:w-auto bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold"
                          onClick={() => window.location.href = `/careers/${position.id}`}
                        >
                          Apply Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                {t('careers.benefits.title')}
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                {t('careers.benefits.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {careersData.benefits.map((benefit: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-800 rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-4 mx-auto">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-4 text-center">
                    {t(`careers.benefits.${benefit.title}.title`)}
                  </h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-center text-sm text-secondary-600 dark:text-secondary-300">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                        {t(`careers.benefits.${benefit.title}.items.${item}`)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
                {t('careers.culture.title')}
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mb-12">
                {t('careers.culture.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {careersData.culture.values.map((value: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800">
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">
                      {t(`careers.culture.${value.title}.title`)}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                      {t(`careers.culture.${value.title}.description`)}
                    </p>
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
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't see a position that matches your skills? We're always looking for exceptional talent
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-white/90 font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More About Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
