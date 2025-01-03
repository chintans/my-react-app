import { 
  MagnifyingGlassIcon, 
  DownloadIcon, 
  Link2Icon, 
  GearIcon,
  PersonIcon,
  HamburgerMenuIcon
} from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import { cn } from '../lib/utils'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-14 flex items-center px-4 sticky top-0 z-10 transition-colors duration-200 bg-white border-b border-light-400 dark:bg-dark-100 dark:border-dark-300">
      <Button 
        variant="ghost" 
        className="mr-2 md:hidden text-gray-600 dark:text-gray-400"
        onClick={onMenuClick}
      >
        <HamburgerMenuIcon className="w-5 h-5" />
      </Button>
      <div className="flex-1 flex items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          </div>
          <input 
            type="text"
            placeholder="Search anything here..." 
            className="pl-10 pr-4 py-1.5 w-[400px] rounded-md transition-colors duration-200 
              bg-light-300 border-light-400 text-gray-900 placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-teal-500 
              dark:bg-dark-200 dark:border-dark-300 dark:text-gray-200 dark:placeholder-gray-500 
              dark:focus:ring-neon-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="transition-colors duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
          <DownloadIcon />
        </Button>
        <Button variant="ghost" className="transition-colors duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
          <Link2Icon />
        </Button>
        <Button variant="ghost" className="transition-colors duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
          <GearIcon />
        </Button>
        <div className="w-px h-6 bg-light-400 dark:bg-dark-300" />
        <Button variant="ghost" className="transition-colors duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
          <PersonIcon />
        </Button>
      </div>
    </header>
  )
} 