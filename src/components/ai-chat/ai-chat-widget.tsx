'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useChat } from './chat-context'
import { useLanguage } from '@/contexts/language-context'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

function getQuickQuestions(t: (key: string) => string): string[] {
  return [
    t('aiChat.questions.services'),
    t('aiChat.questions.contact'),
    t('aiChat.questions.company'),
    t('aiChat.questions.positions'),
    t('aiChat.questions.pricing'),
    t('aiChat.questions.timeline')
  ]
}

function getBotResponse(userMessage: string, t: (key: string) => string): string {
  const normalizedMessage = userMessage.toLowerCase().trim()
  
  // Check for keywords and return translated responses
  if (normalizedMessage.includes('service') || normalizedMessage.includes('offer')) {
    return t('aiChat.responses.services')
  }
  if (normalizedMessage.includes('contact') || normalizedMessage.includes('email') || normalizedMessage.includes('phone')) {
    return t('aiChat.responses.contact')
  }
  if (normalizedMessage.includes('about') || normalizedMessage.includes('company') || normalizedMessage.includes('who')) {
    return t('aiChat.responses.company')
  }
  if (normalizedMessage.includes('job') || normalizedMessage.includes('career') || normalizedMessage.includes('position') || normalizedMessage.includes('hiring')) {
    return t('aiChat.responses.positions')
  }
  if (normalizedMessage.includes('price') || normalizedMessage.includes('cost') || normalizedMessage.includes('pricing')) {
    return t('aiChat.responses.pricing')
  }
  if (normalizedMessage.includes('time') || normalizedMessage.includes('duration') || normalizedMessage.includes('how long')) {
    return t('aiChat.responses.timeline')
  }
  
  // Default response
  return t('aiChat.responses.default')
}

export function AIChatWidget() {
  const { isOpen, openChat, closeChat } = useChat()
  const { t } = useLanguage()
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('aiChat.greeting'),
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text, t),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    // Auto-send the quick question
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: question,
        sender: 'user',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
      setIsTyping(true)

      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(question, t),
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botResponse])
        setIsTyping(false)
      }, 1000)
    }, 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button - Floating (Mobile only, desktop uses header button) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            onClick={openChat}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Open AI Chat"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] md:w-96 ${
              isMinimized ? 'h-auto' : 'h-[600px] max-h-[calc(100vh-8rem)]'
            } bg-background dark:bg-secondary-900 rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{t('aiChat.title')}</h3>
                  <p className="text-white/80 text-xs">{t('aiChat.subtitle')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 text-white" />
                  ) : (
                    <Minimize2 className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  onClick={closeChat}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary-50/50 dark:bg-secondary-950/50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-primary-500' 
                            : 'bg-gradient-to-r from-primary-500 to-accent-500'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-primary-500 text-white'
                            : 'bg-background dark:bg-secondary-800 text-secondary-900 dark:text-white border border-border'
                        }`}>
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-background dark:bg-secondary-800 rounded-2xl px-4 py-2 border border-border">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="px-4 py-2 border-t border-border bg-background dark:bg-secondary-900">
                    <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-2">{t('aiChat.quickQuestions')}</p>
                    <div className="flex flex-wrap gap-2">
                      {getQuickQuestions(t).slice(0, 3).map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickQuestion(question)}
                          className="text-xs px-3 py-1.5 bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-border bg-background dark:bg-secondary-900">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t('aiChat.placeholder')}
                      className="flex-1 px-4 py-2 bg-secondary-50 dark:bg-secondary-800 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900 dark:text-white placeholder:text-secondary-400"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mt-2 text-center">
                    {t('aiChat.poweredBy')}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

