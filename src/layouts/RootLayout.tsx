import { Theme } from '@radix-ui/themes'
import { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Theme appearance="dark" accentColor="green" scaling="95%">
      <div className="min-h-screen flex bg-dark-200">
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