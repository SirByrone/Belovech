import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { ChatProvider } from '@/components/ai-chat'
import { AIChatWidget } from '@/components/ai-chat'
import { LanguageProvider } from '@/contexts/language-context'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Belovech - Unveiling Quantum Horizons in Tech',
  description: 'Empowering global innovation by delivering cutting-edge tech solutions that solve real-world problems, fostering sustainable advancement and accessibility for all.',
  keywords: 'AI, quantum computing, software development, cybersecurity, data science, tech consulting, global innovation',
  authors: [{ name: 'Belovech Team' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Belovech - Unveiling Quantum Horizons in Tech',
    description: 'Empowering global innovation through cutting-edge technology solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Belovech - Unveiling Quantum Horizons in Tech',
    description: 'Empowering global innovation through cutting-edge technology solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ChatProvider>
              {children}
              <AIChatWidget />
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'var(--toast-bg)',
                    color: 'var(--toast-color)',
                    border: '1px solid var(--toast-border)',
                  },
                }}
              />
            </ChatProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
