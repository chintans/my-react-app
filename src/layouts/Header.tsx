import { 
  MagnifyingGlassIcon, 
  DownloadIcon, 
  Link2Icon, 
  GearIcon,
  PersonIcon,
  HamburgerMenuIcon
} from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-14 bg-dark-100 border-b border-dark-300 flex items-center px-4 sticky top-0 z-10">
      <Button 
        variant="ghost" 
        className="mr-2 text-gray-400 md:hidden" 
        onClick={onMenuClick}
      >
        <HamburgerMenuIcon className="w-5 h-5" />
      </Button>
      <div className="flex-1 flex items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="text-gray-500" height={16} width={16} />
          </div>
          <input 
            type="text"
            placeholder="Search anything here..." 
            className="pl-10 pr-4 py-1.5 w-[400px] rounded-md border border-dark-300 bg-dark-200 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-gray-400 hover:text-gray-200">
          <DownloadIcon />
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-gray-200">
          <Link2Icon />
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-gray-200">
          <GearIcon />
        </Button>
        <div className="w-px h-6 bg-dark-300" />
        <Button variant="ghost" className="text-gray-400 hover:text-gray-200">
          <PersonIcon />
        </Button>
      </div>
    </header>
  )
} 