'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, Bell, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComingSoonBadgeProps {
  variant?: 'default' | 'featured' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animated?: boolean
}

export function ComingSoonBadge({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  animated = true 
}: ComingSoonBadgeProps) {
  const baseClasses = cn(
    'inline-flex items-center gap-2 font-medium rounded-full border',
    {
      // Size variants
      'px-3 py-1 text-xs': size === 'sm',
      'px-4 py-1.5 text-sm': size === 'md', 
      'px-5 py-2 text-base': size === 'lg',
      
      // Variant styles
      'bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300':
        variant === 'default',
      'bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-700 dark:text-violet-300':
        variant === 'featured',
      'bg-gradient-to-r from-slate-500/5 to-gray-500/5 border-slate-500/20 text-slate-600 dark:text-slate-400':
        variant === 'subtle',
    },
    className
  )

  const iconSize = size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'
  const Icon = variant === 'featured' ? Star : variant === 'subtle' ? Bell : Clock

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 10,
          delay: 0.2 
        }}
        whileHover={{ scale: 1.05 }}
        className={baseClasses}
      >
        <Icon className={cn(iconSize, 'animate-pulse')} />
        <span>Coming Soon</span>
      </motion.div>
    )
  }

  return (
    <div className={baseClasses}>
      <Icon className={iconSize} />
      <span>Coming Soon</span>
    </div>
  )
}

interface ComingSoonCardProps {
  title: string
  description: string
  estimatedDate?: string
  category?: string
  className?: string
}

export function ComingSoonCard({ 
  title, 
  description, 
  estimatedDate,
  category,
  className = '' 
}: ComingSoonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        'relative bg-gradient-to-br from-background via-secondary-50/50 to-background dark:from-background dark:via-secondary-900/50 dark:to-background rounded-2xl p-8 border border-border/50 overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-500/5 before:to-accent-500/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity',
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
      
      {/* Coming Soon Badge */}
      <div className="absolute top-6 right-6">
        <ComingSoonBadge variant="featured" size="sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {category && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium mb-4">
            {category}
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
          {description}
        </p>

        {estimatedDate && (
          <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400">
            <Calendar className="w-4 h-4" />
            <span>Expected: {estimatedDate}</span>
          </div>
        )}
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  )
}

interface ComingSoonSectionProps {
  title?: string
  subtitle?: string
  items: Array<{
    title: string
    description: string
    estimatedDate?: string
    category?: string
  }>
  className?: string
}

export function ComingSoonSection({ 
  title = "Coming Soon", 
  subtitle = "Exciting content is on the way",
  items,
  className = ''
}: ComingSoonSectionProps) {
  return (
    <section className={cn('py-20 bg-secondary-50/50 dark:bg-secondary-900/50', className)}>
      <div className="container">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <ComingSoonBadge variant="featured" size="lg" animated={false} />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {title}
            </h2>
            
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Coming Soon Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ComingSoonCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
