'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'
import { Shield, Users, Eye, Lock, Mail, Phone, CheckCircle } from 'lucide-react'

export default function GDPRCompliance() {
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
          <GDPRContent />
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
        <GDPRContent />
        <Footer />
      </div>
    </main>
  )
}

function GDPRContent() {
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
                GDPR Compliance
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-4">
                Last updated: January 1, 2026
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                Belovech Technologies is committed to protecting your data and complying with the General Data Protection Regulation (GDPR).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GDPR Content */}
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
                    What is GDPR?
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals 
                      within the European Union (EU) and the European Economic Area (EEA).
                    </p>
                    <p>
                      It addresses the transfer of personal data outside the EU and EEA areas and aims to give individuals control 
                      over their personal data.
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
                    Your Rights Under GDPR
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>Under GDPR, you have the following rights:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Right to be Informed:</strong> Know what personal data is collected and why</li>
                      <li><strong>Right of Access:</strong> Access your personal data</li>
                      <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                      <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                      <li><strong>Right to Restrict Processing:</strong> Limit how your data is processed</li>
                      <li><strong>Right to Data Portability:</strong> Transfer your data to another service</li>
                      <li><strong>Right to Object:</strong> Object to processing of your data</li>
                      <li><strong>Right to Lodge Complaint:</strong> Complain to a supervisory authority</li>
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
                    Our Commitment to GDPR
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>Belovech Technologies is fully committed to GDPR compliance by:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Implementing privacy by design and default</li>
                      <li>Conducting Data Protection Impact Assessments (DPIAs)</li>
                      <li>Maintaining comprehensive records of processing activities</li>
                      <li>Ensuring lawful basis for all data processing</li>
                      <li>Providing clear privacy notices and consent mechanisms</li>
                      <li>Implementing appropriate technical and organizational security measures</li>
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
                    Data Processing Principles
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>We follow these GDPR principles:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4">
                        <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Lawfulness</h3>
                        <p>Processing must have a lawful basis under GDPR</p>
                      </div>
                      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4">
                        <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Fairness</h3>
                        <p>Data processing must be fair and transparent</p>
                      </div>
                      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4">
                        <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Transparency</h3>
                        <p>Individuals must be informed about data processing</p>
                      </div>
                      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4">
                        <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Purpose Limitation</h3>
                        <p>Collect only data for specified purposes</p>
                      </div>
                      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4">
                        <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Data Minimization</h3>
                        <p>Process only necessary data</p>
                      </div>
                      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-4">
                        <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Accuracy</h3>
                        <p>Maintain accurate and up-to-date data</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Data Subject Rights Implementation
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>We have implemented mechanisms to help you exercise your GDPR rights:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Data Access Portal:</strong> Request and download your data</li>
                      <li><strong>Privacy Dashboard:</strong> Manage your privacy settings and consents</li>
                      <li><strong>Easy Withdrawal:</strong> Withdraw consent at any time</li>
                      <li><strong>Clear Contact Points:</strong> Dedicated GDPR compliance contact</li>
                      <li><strong>Response Times:</strong> Respond to requests within legal timeframes</li>
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
                    International Data Transfers
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      For international data transfers, we ensure GDPR compliance through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Adequacy decisions by the European Commission</li>
                      <li>Standard Contractual Clauses (SCCs)</li>
                      <li>Binding Corporate Rules (BCRs)</li>
                      <li>Appropriate safeguards and security measures</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Data Breach Notification
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      In the event of a personal data breach, we will:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Notify affected individuals within 72 hours</li>
                      <li>Provide clear information about the breach</li>
                      <li>Describe potential consequences and mitigation measures</li>
                      <li>Communicate with relevant supervisory authorities</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Contact for GDPR Inquiries
                  </h2>
                  <div className="space-y-4 text-secondary-600 dark:text-secondary-300">
                    <p>
                      For GDPR-related inquiries or to exercise your rights, please contact our Data Protection Officer:
                    </p>
                    <div className="bg-secondary-50 dark:bg-secondary-900 rounded-lg p-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary-600" />
                        <span>gdpr@belovechtechnologies.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary-600" />
                        <span>+254106573717 (GDPR Line)</span>
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
                      © 2026 Belovech Technologies. This GDPR Compliance statement is effective as of January 1, 2026, 
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
