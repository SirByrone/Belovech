'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AboutSection } from '@/components/sections/about-section'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'

export default function AboutPage() {
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
          <AboutSection />
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
      
      {/* Content Layer - Above background */}
      <div className="relative z-10">
        <Header />
        <AboutSection />
        <Footer />
      </div>
    </main>
  )
}
