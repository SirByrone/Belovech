'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  MessageCircle as MessageCircleIcon,
  Calendar as CalendarIcon,
  Users as UsersIcon,
  Globe as GlobeIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'
import { useLanguage } from '@/contexts/language-context'

const contactData = {
  offices: [
    {
      name: "Headquarters",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+254106573717",
      email: "belovechtechnologies@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      timezone: "Pacific Time",
      icon: MapPinIcon,
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    {
      name: "East Coast Office",
      address: "456 Tech Boulevard, New York, NY 10001",
      phone: "+254106573717",
      email: "belovechtechnologies@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      timezone: "Eastern Time",
      icon: MapPinIcon,
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    {
      name: "European Office",
      address: "789 Innovation Square, London, UK EC1A 4HD",
      phone: "+254106573717",
      email: "belovechtechnologies@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM GMT",
      timezone: "Greenwich Mean Time",
      icon: MapPinIcon,
      coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    {
      name: "Asia Pacific Office",
      address: "321 Technology Park, Singapore 138588",
      phone: "+254106573717",
      email: "belovechtechnologies@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      timezone: "Singapore Time",
      icon: MapPinIcon,
      coordinates: { lat: 1.3521, lng: 103.8198 }
    }
  ],

  departments: [
    {
      name: "General Inquiries",
      email: "belovechtechnologies@gmail.com",
      phone: "+254106573717",
      description: "For general questions about our services and company",
      icon: MessageCircleIcon
    },
    {
      name: "Sales",
      email: "belovechtechnologies@gmail.com",
      phone: "+254106573717",
      description: "Interested in our services? Contact our sales team",
      icon: UsersIcon
    },
    {
      name: "Support",
      email: "belovechtechnologies@gmail.com",
      phone: "+254106573717",
      description: "Technical support and customer service",
      icon: MessageCircleIcon
    },
    {
      name: "Partnerships",
      email: "belovechtechnologies@gmail.com",
      phone: "+254106573717",
      description: "Business partnerships and collaborations",
      icon: GlobeIcon
    },
    {
      name: "Careers",
      email: "belovechtechnologies@gmail.com",
      phone: "+254106573717",
      description: "Job opportunities and career inquiries",
      icon: UsersIcon
    },
    {
      name: "Media",
      email: "belovechtechnologies@gmail.com",
      phone: "+254106573717",
      description: "Press inquiries and media relations",
      icon: MailIcon
    }
  ],

  contactMethods: [
    {
      title: "Schedule a Call",
      description: "Book a consultation with our experts",
      icon: CalendarIcon,
      action: "Schedule Now",
      href: "/contact/schedule"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageCircleIcon,
      action: "Start Chat",
      href: "/contact/chat"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: MailIcon,
      action: "Send Email",
      href: "mailto:belovechtechnologies@gmail.com"
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: PhoneIcon,
      action: "Call Now",
      href: "tel:+254106573717"
    }
  ],

  faq: [
    {
      question: "What services does Belovech offer?",
      answer: "We offer comprehensive technology solutions including software development, AI/ML, cybersecurity, quantum computing, data science, DevOps, and global innovation consulting."
    },
    {
      question: "How can I get started with a project?",
      answer: "Contact our sales team through the contact form or schedule a consultation. We'll discuss your requirements and provide a customized proposal."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple websites take 1-3 months, while complex enterprise solutions can take 6-18 months."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive support and maintenance services for all our projects, including 24/7 monitoring and regular updates."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, education, and government sectors."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security measures including encryption, secure coding practices, regular audits, and compliance with international standards."
    }
  ],

  socialMedia: [
    { name: "LinkedIn", url: "https://linkedin.com/company/belovech", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/belovech", icon: "twitter" },
    { name: "Facebook", url: "https://facebook.com/belovech", icon: "facebook" },
    { name: "Instagram", url: "https://instagram.com/belovech", icon: "instagram" },
    { name: "YouTube", url: "https://youtube.com/belovech", icon: "youtube" },
    { name: "GitHub", url: "https://github.com/belovech", icon: "github" }
  ]
}

export default function ContactPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { getBackgroundImage } = useResponsiveBackgroundImage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    department: '',
    message: '',
    budget: '',
    timeline: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  if (!mounted) {
    return (
      <main className="min-h-screen relative">
        <div className="relative z-10">
          <Header />
          <ContactContent formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
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
        <ContactContent formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        <Footer />
      </div>
    </main>
  )
}

function ContactContent({ formData, handleInputChange, handleSubmit }: any) {
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
                  {t('contact.title')}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('contact.subtitle')}
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

      {/* Contact Methods */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-900">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactData.contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-800 rounded-xl p-6 text-center shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-4 mx-auto">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-4">
                    {method.description}
                  </p>
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white"
                    onClick={() => window.location.href = method.href}
                  >
                    {method.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-background dark:bg-secondary-900 rounded-2xl p-8 shadow-lg border border-border">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    {t('contact.form.send')}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          {t('contact.form.name')} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          {t('contact.form.email')} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Company and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          {t('contact.form.company')}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          {t('contact.form.phone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                          placeholder="+254106573717"
                        />
                      </div>
                    </div>

                    {/* Subject and Department */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          {t('contact.form.subject')} *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                          placeholder="Brief subject"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          {t('contact.form.department')}
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                        >
                          <option value="">{t('contact.form.selectDepartment')}</option>
                          <option value="sales">Sales</option>
                          <option value="support">Support</option>
                          <option value="partnerships">Partnerships</option>
                          <option value="careers">Careers</option>
                          <option value="media">Media</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget and Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="under-25k">Under $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-250k">$100,000 - $250,000</option>
                          <option value="250k-500k">$250,000 - $500,000</option>
                          <option value="over-500k">Over $500,000</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white"
                        >
                          <option value="">Select Timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-12-months">6-12 months</option>
                          <option value="over-12-months">Over 12 months</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white resize-none"
                        placeholder="Tell us about your project requirements, goals, and any specific needs..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold"
                    >
                      {t('contact.form.send')}
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Offices */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Our Offices
                  </h2>
                  
                  {contactData.offices.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-background dark:bg-secondary-900 rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg mr-4 flex-shrink-0">
                          <office.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                            {office.name}
                          </h3>
                          <div className="space-y-2 text-sm text-secondary-600 dark:text-secondary-300">
                            <div className="flex items-center">
                              <MapPinIcon className="w-4 h-4 mr-2 text-primary-500" />
                              {office.address}
                            </div>
                            <div className="flex items-center">
                              <PhoneIcon className="w-4 h-4 mr-2 text-primary-500" />
                              {office.phone}
                            </div>
                            <div className="flex items-center">
                              <MailIcon className="w-4 h-4 mr-2 text-primary-500" />
                              {office.email}
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                              {office.hours} ({office.timezone})
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
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
                Contact by Department
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                Reach out to the right team for your specific needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactData.departments.map((department, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-800 rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-4 mx-auto">
                    <department.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2 text-center">
                    {department.name}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm text-center mb-4">
                    {department.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <MailIcon className="w-4 h-4 mr-2 text-primary-500" />
                      <a href={`mailto:${department.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                        {department.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <PhoneIcon className="w-4 h-4 mr-2 text-primary-500" />
                      <a href={`tel:${department.phone}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                        {department.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                Quick answers to common questions about our services and processes
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactData.faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background dark:bg-secondary-900 rounded-xl p-6 shadow-lg border border-border"
                >
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {item.answer}
                  </p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can help you achieve your goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-white/90 font-semibold"
                  onClick={() => window.location.href = '/services'}
                >
                  View Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
                  onClick={() => window.location.href = '/portfolio'}
                >
                  See Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
