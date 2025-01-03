import { Theme } from '@radix-ui/themes'
import { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { useTheme } from '../contexts/ThemeContext'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { theme } = useTheme()

  return (
    <Theme appearance={theme} accentColor="green" scaling="95%">
      <div className="min-h-screen flex transition-colors duration-200 bg-light-300 text-gray-900 dark:bg-dark-300 dark:text-gray-100">
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 flex flex-col">
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </Theme>
  )
} 