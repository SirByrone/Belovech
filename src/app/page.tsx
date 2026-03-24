'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SimpleLandingSection } from '@/components/sections/simple-landing-section'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useResponsiveBackgroundImage } from '@/hooks/useResponsiveBackgroundImage'

export default function HomePage() {
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
               <SimpleLandingSection />
               <Footer />
             </div>
           </main>
         )
  }

  const backgroundImage = theme ? getBackgroundImage(theme) : undefined

  return (
    <main className="min-h-screen relative">
      {/* Background Image - Full opacity for both themes on home page, responsive based on screen size */}
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
            backgroundColor: theme === 'dark' ? '#000' : '#fff'
          }}
        />
      )}
      
      {/* Content Layer - Above background */}
      <div className="relative z-10">
        <Header />
        <SimpleLandingSection />
        <Footer />
      </div>
    </main>
  )
}
