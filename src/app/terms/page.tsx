'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'
import { FileText, Users, Shield, AlertCircle, Mail, Phone } from 'lucide-react'

export default function TermsOfService() {
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
          <TermsContent />
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
        <TermsContent />
        <Footer />
      </div>
    </main>
  )
}

function TermsContent() {
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-4">
                Last updated: January 1, 2026
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                Welcome to Belovech Technologies. These Terms of Service govern your use of our website and services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                    1. Acceptance of Terms
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      By accessing and using Belovech Technologies' website and services, you accept and agree to be bound 
                      by the terms and provision of this agreement.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    2. Services Description
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      Belovech Technologies provides the following services:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Software Development and Consulting</li>
                      <li>Website Development and Design</li>
                      <li>AI & Machine Learning Solutions</li>
                      <li>Cybersecurity Services</li>
                      <li>Quantum Computing Consulting</li>
                      <li>Data Science and Analytics</li>
                      <li>DevOps & Cloud Infrastructure</li>
                      <li>Global Innovation Consulting</li>
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
                    3. User Responsibilities
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>As a user of our services, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information</li>
                      <li>Use our services for lawful purposes only</li>
                      <li>Not attempt to gain unauthorized access to our systems</li>
                      <li>Not interfere with the proper working of our services</li>
                      <li>Respect intellectual property rights</li>
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
                    4. Payment Terms
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      For paid services, the following terms apply:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Payment terms are specified in individual service agreements</li>
                      <li>Prices are subject to change without prior notice</li>
                      <li>Payment must be made in accordance with agreed terms</li>
                      <li>Late payments may incur interest charges</li>
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
                    5. Intellectual Property
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      All content and materials available on our website, including but not limited to text, graphics, 
                      logos, images, and software, are the property of Belovech Technologies and are protected by 
                      intellectual property laws.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    6. Limitation of Liability
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      To the fullest extent permitted by law, Belovech Technologies shall not be liable for any indirect, 
                      incidental, special, or consequential damages resulting from your use of our services.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    7. Termination
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      We reserve the right to terminate or suspend your access to our services immediately, without prior 
                      notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    8. Contact Information
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
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
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="border-t border-border pt-8">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      © 2026 Belovech Technologies. These Terms of Service are effective as of January 1, 2026, 
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
