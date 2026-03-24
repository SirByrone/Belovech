'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'es' | 'zh' | 'ja' | 'ko' | 'fr' | 'de' | 'pt' | 'hi' | 'ar' | 'sw'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_STORAGE_KEY = 'belovech-language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load language from localStorage or browser preference
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language
    if (savedLanguage && ['en', 'es', 'zh', 'ja', 'ko', 'fr', 'de', 'pt', 'hi', 'ar', 'sw'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0]
      const supportedLangs: Language[] = ['en', 'es', 'zh', 'ja', 'ko', 'fr', 'de', 'pt', 'hi', 'ar', 'sw']
      if (supportedLangs.includes(browserLang as Language)) {
        setLanguageState(browserLang as Language)
      }
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  }

  const t = (key: string, params?: Record<string, string | number>): string => {
    if (!mounted) return key // Return key during SSR
    
    try {
      // Dynamic import for translations
      let translations: any
      switch (language) {
        case 'en':
          translations = require('@/locales/en.json')
          break
        case 'es':
          translations = require('@/locales/es.json')
          break
        case 'zh':
          translations = require('@/locales/zh.json')
          break
        case 'ja':
          translations = require('@/locales/ja.json')
          break
        case 'ko':
          translations = require('@/locales/ko.json')
          break
        case 'fr':
          translations = require('@/locales/fr.json')
          break
        case 'de':
          translations = require('@/locales/de.json')
          break
        case 'pt':
          translations = require('@/locales/pt.json')
          break
        case 'hi':
          translations = require('@/locales/hi.json')
          break
        case 'ar':
          translations = require('@/locales/ar.json')
          break
        case 'sw':
          translations = require('@/locales/sw.json')
          break
        default:
          translations = require('@/locales/en.json')
      }
      
      let translation = key.split('.').reduce((obj: any, k: string) => obj?.[k], translations) || key
      
      // Replace parameters in translation
      if (params && typeof translation === 'string') {
        Object.entries(params).forEach(([paramKey, value]) => {
          translation = translation.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(value))
        })
      }
      
      return translation || key
    } catch (error) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

