'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  TrendingUp,
  Code,
  Brain,
  Shield,
  Zap,
  Globe,
  Database,
  Search,
  Filter
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ComingSoonBadge } from '@/components/ui/coming-soon'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'

export default function BlogPage() {
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
          <BlogContent />
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
        <BlogContent />
        <Footer />
      </div>
    </main>
  )
}

function BlogContent() {
  const { t } = useLanguage()
  
  return (
    <div className="pt-20">
      {/* Hero Section - Coming Soon */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary-50 dark:from-background dark:to-secondary-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center justify-center mb-8">
                <ComingSoonBadge variant="featured" size="lg" />
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                  {t('blog.title')}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
                {t('blog.subtitle')}
              </p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12"
              />

              {/* Coming Soon Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-8 mb-12 border border-primary-500/20"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white animate-pulse" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Exciting Content Coming Soon!
                </h2>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                  We're working on groundbreaking articles about quantum computing, AI, cybersecurity, and more. 
                  Be the first to know when our blog goes live!
                </p>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="max-w-md mx-auto"
              >
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                  Get Notified When We Launch
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                  />
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold whitespace-nowrap"
                  >
                    Notify Me
                  </Button>
                </div>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-3">
                  We'll only email you when the blog is live. No spam, promise!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl" />
      </section>

      {/* What to Expect Section */}
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
                What to Expect
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                We're preparing insightful content on cutting-edge technology topics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI & Machine Learning",
                  description: "Latest developments in artificial intelligence and ML applications",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  icon: Zap,
                  title: "Quantum Computing",
                  description: "Breakthroughs in quantum technology and practical applications",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description: "Essential security practices and emerging threat landscapes",
                  color: "from-green-500 to-teal-500"
                },
                {
                  icon: Code,
                  title: "Software Development",
                  description: "Modern development practices and architectural patterns",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: Globe,
                  title: "Cloud Computing",
                  description: "Cloud infrastructure, DevOps, and scalable solutions",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: Database,
                  title: "Data Science",
                  description: "Data analytics, visualization, and big insights",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-background dark:bg-secondary-800 rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary-500/50 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 bg-gradient-to-r ${topic.color} rounded-lg flex items-center justify-center mb-4`}>
                      <topic.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      {topic.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
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
                Stay Connected
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Follow us on social media for updates and tech insights while we prepare our blog launch
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-white/90 font-semibold"
                  onClick={() => window.open('https://x.com/_belovech', '_blank')}
                >
                  Follow on X
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
                  onClick={() => window.open('https://linkedin.com/in/sirbyrone', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
