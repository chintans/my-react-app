interface CardProps {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="p-6 bg-dark-100 border border-dark-300 rounded-xl">
      {children}
    </div>
  )
} 