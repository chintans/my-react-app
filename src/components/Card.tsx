import { cn } from '../lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "p-6 rounded-xl transition-colors duration-200 bg-white border border-light-400 dark:bg-dark-100 dark:border-dark-300",
      className
    )}>
      {children}
    </div>
  )
} 