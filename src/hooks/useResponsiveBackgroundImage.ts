'use client'

import { useState, useEffect } from 'react'

export function useResponsiveBackgroundImage() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial state
    checkIsMobile()

    // Listen for resize events
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const getBackgroundImage = (theme: string): string | undefined => {
    // Both light and dark themes: show image based on screen size
    // Default to mobile image during SSR or before mount
    if (!mounted) return 'url(/landing-hero.jpg)'
    
    // Mobile: landing-hero (both themes)
    // Desktop: Desktop-hero (both themes)
    return isMobile 
      ? 'url(/landing-hero.jpg)' 
      : 'url(/Desktop-hero.jpg)'
  }

  return {
    mounted,
    isMobile,
    getBackgroundImage
  }
}
