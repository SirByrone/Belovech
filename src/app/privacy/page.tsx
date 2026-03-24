'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'
import { Shield, Eye, Lock, User, Database, Globe, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicy() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { getBackgroundImage } = useResponsiveBackgroundImage()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen relative">
        <div className="relative z-10">
          <Header />
          <PrivacyContent />
          <Footer />
        </div>
      </main>
    )
  }

  const backgroundImage = theme ? getBackgroundImage(theme) : undefined

  return (
    <main className="min-h-screen relative">
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
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)',
            }}
          />
        </div>
      )}
      
      <div className="relative z-10">
        <Header />
        <PrivacyContent />
        <Footer />
      </div>
    </main>
  )
}

function PrivacyContent() {
  const { t } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary-50 dark:from-background dark:to-secondary-900">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-4">
                Last updated: January 1, 2026
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                At Belovech Technologies, we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-background dark:bg-secondary-800 rounded-2xl shadow-xl border border-border p-8 md:p-12">
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Contact us through our website or email</li>
                      <li>Request our services or consultations</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Apply for positions at our company</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide our services and respond to your inquiries</li>
                      <li>Send you newsletters and marketing communications (with your consent)</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    3. Data Security
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
                      alteration, disclosure, or destruction. These include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and infrastructure</li>
                      <li>Regular security audits and updates</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    4. Your Rights
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Object to processing of your information</li>
                      <li>Request data portability</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    5. Contact Information
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:
                    </p>
                    <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary-600" />
                        <span>belovechtechnologies@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary-600" />
                        <span>+254106573717</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="border-t border-border pt-8">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      © 2026 Belovech Technologies. This Privacy Policy is effective as of January 1, 2026, 
                      and may be updated periodically to reflect changes in our practices or applicable law.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
