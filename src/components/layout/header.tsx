'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Globe,
  MessageCircle
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Button } from '@/components/ui/button'
import { useChat } from '@/components/ai-chat'
import { useLanguage } from '@/contexts/language-context'
import { getAssetPath } from '@/lib/utils'

// Navigation will be translated in component

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const { openChat } = useChat()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              {/* Use theme-appropriate logo */}
              <div className="w-12 h-12 relative">
                <Image
                  src={getAssetPath(theme === 'dark' ? "/logo.jpg" : "/logo-white.jpg")}
                  alt="Belovech Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to CSS logo if image fails to load
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
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
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
              BELOVECH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/services"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {t('nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/about"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/portfolio"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {t('nav.portfolio')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/blog"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {t('nav.blog')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/careers"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {t('nav.careers')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2">
              <Globe className="w-4 h-4 text-secondary-500" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-sm border-none outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="fr">FR</option>
                <option value="de">DE</option>
                <option value="pt">PT</option>
                <option value="hi">हिंदी</option>
                <option value="ar">العربية</option>
                <option value="sw">Kiswahili</option>
              </select>
            </div>

            {/* AI Chat Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex"
              onClick={openChat}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('nav.aiChat')}
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md"
            >
              <nav className="py-4 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                >
                  {t('nav.home')}
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                >
                  {t('nav.services')}
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                >
                  {t('nav.portfolio')}
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                >
                  {t('nav.blog')}
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                >
                  {t('nav.careers')}
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
                >
                  {t('nav.contact')}
                </Link>
                
                <div className="px-4 py-2 border-t border-border mt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Globe className="w-4 h-4 text-secondary-500" />
                    <select 
                      value={language} 
                      onChange={(e) => setLanguage(e.target.value as any)}
                      className="bg-transparent text-sm border-none outline-none cursor-pointer"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="zh">中文</option>
                      <option value="ja">日本語</option>
                      <option value="ko">한국어</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="pt">Português</option>
                      <option value="hi">हिंदी</option>
                      <option value="ar">العربية</option>
                      <option value="sw">Kiswahili</option>
                    </select>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={openChat}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('nav.aiChat')}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
