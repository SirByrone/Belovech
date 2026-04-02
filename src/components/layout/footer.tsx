'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react'

// X icon (formerly Twitter) - official X logo
const XIcon = ({ className, ...props }: { className?: string; [key: string]: any }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { getAssetPath } from '@/lib/utils'


const socialLinks = [

  { name: 'X', icon: XIcon, href: 'https://x.com/_belovech' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/sirbyrone' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/goodboybyrone' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/belovech' },
]

export function Footer() {
  const { t } = useLanguage()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement
    const email = emailInput?.value
    
    if (email && email.includes('@')) {
      // Here you would typically send this to your backend
      console.log('Newsletter subscription:', email)
      alert(`Thank you for subscribing with email: ${email}`)
      emailInput.value = ''
    } else {
      alert('Please enter a valid email address')
    }
  }
  
  const footerLinks = {
    services: [
      { name: t('home.services.softwareDevelopment'), href: '/services' },
      { name: t('home.services.websiteDevelopment'), href: '/services' },
      { name: t('home.services.aiMachineLearning'), href: '/services' },
      { name: t('home.services.cybersecurity'), href: '/services' },
    ],
    company: [
      { name: t('footer.links.aboutUs'), href: '/about' },
      { name: t('footer.links.ourTeam'), href: '/about#leadership-team' },
      { name: t('nav.careers'), href: '/careers' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    resources: [
      { name: t('nav.blog'), href: '/blog' },
      { name: t('nav.portfolio'), href: '/portfolio' },
      { name: t('nav.services'), href: '/services' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    legal: [
      { name: t('footer.links.privacyPolicy'), href: '/privacy' },
      { name: t('footer.links.termsOfService'), href: '/terms' },
      { name: t('footer.links.cookiePolicy'), href: '/cookie-policy' },
      { name: t('footer.links.gdprCompliance'), href: '/gdpr' },
    ],
  }

  return (
    <footer className="bg-secondary-50/80 dark:bg-transparent backdrop-blur-lg border-t border-border relative" style={{ zIndex: 1 }}>
      {/* Enhanced background overlay for better photo visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent dark:from-black/30 dark:to-transparent pointer-events-none" />
      <div className="container relative" style={{ zIndex: 2 }}>
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                {/* Use your logo image if available, otherwise fallback to CSS logo */}
                <div className="w-10 h-10 relative">
                  <Image
                    src={getAssetPath('/logo.jpg')}
                    alt="Belovech Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      // Fallback to CSS logo if image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const nextElement = target.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative overflow-hidden hidden"
                       style={{
                         clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 50%)'
                       }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                BELOVECH
              </span>
            </Link>
            
            <p className="text-secondary-600 dark:text-secondary-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-600" />
                <span className="text-secondary-600 dark:text-secondary-400">belovechtechnologies@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-600" />
                <span className="text-secondary-600 dark:text-secondary-400">+254106573717</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-secondary-600 dark:text-secondary-400">{t('common.globalOffices') || 'Global Offices'}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                {t('footer.stayUpdated')}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {t('footer.newsletterDescription')}
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder={t('footer.enterEmail')}
                className="input-field flex-1 md:w-80"
                required
              />
              <Button type="submit" className="whitespace-nowrap">{t('footer.subscribe')}</Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-secondary-600 dark:text-secondary-400">
              <span>{t('footer.copyright')}</span>
              <div className="flex items-center gap-4">
                {footerLinks.legal.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>

              {/* Back to Top */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="flex items-center gap-2"
              >
                <ArrowUp className="w-4 h-4" />
                {t('footer.top')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
