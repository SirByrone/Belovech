'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'
import { Cookie, Settings, Eye, Shield, Mail, Phone } from 'lucide-react'

export default function CookiePolicy() {
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
          <CookieContent />
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
        <CookieContent />
        <Footer />
      </div>
    </main>
  )
}

function CookieContent() {
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
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-4">
                Last updated: January 1, 2026
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                This Cookie Policy explains how Belovech Technologies uses cookies and similar technologies on our website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
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
                    What Are Cookies?
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
                      They help the website remember information about your visit, which can make it easier to visit again and make the 
                      site more useful to you.
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
                    How We Use Cookies
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong>Functionality Cookies:</strong> Allow us to remember your preferences and settings</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver advertisements relevant to you</li>
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
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-6">
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
                    </div>
                    <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-6">
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Analytics Cookies</h3>
                      <p>These cookies help us understand how our website is being used and how we can improve it.</p>
                    </div>
                    <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-6">
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Preference Cookies</h3>
                      <p>These cookies allow our website to remember choices you make and provide enhanced features.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Managing Your Cookie Preferences
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>You can control and/or delete cookies as you wish. You can:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Delete all cookies already on your computer</li>
                      <li>Set most browsers to prevent cookies from being placed</li>
                      <li>Set your browser to notify you when you receive a cookie</li>
                      <li>Block third-party cookies</li>
                    </ul>
                    <p className="mt-4">
                      Note that blocking all cookies may impact your user experience and some features of our website may not function properly.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Third-Party Cookies
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      Our website may use third-party services that also use cookies. These include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Google Analytics for website analytics</li>
                      <li>Social media platforms for sharing functionality</li>
                      <li>Marketing automation platforms for email campaigns</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Updates to This Policy
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our use of cookies or 
                      for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date.
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
                    Contact Information
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      If you have any questions about this Cookie Policy, please contact us:
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
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="border-t border-border pt-8">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      © 2026 Belovech Technologies. This Cookie Policy is effective as of January 1, 2026, 
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
