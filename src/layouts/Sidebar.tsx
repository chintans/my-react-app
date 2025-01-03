import { 
  HomeIcon, 
  BarChartIcon, 
  LayersIcon,
  BoxIcon,
  ChatBubbleIcon,
  StarIcon,
  GearIcon,
  QuestionMarkIcon,
  ChevronLeftIcon
} from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import { cn } from '../lib/utils'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  { icon: HomeIcon, label: 'Overview', active: true },
  { icon: BarChartIcon, label: 'Performance' },
  { icon: LayersIcon, label: 'Campaigns' },
  { icon: BoxIcon, label: 'Orders' },
  { icon: StarIcon, label: 'Products' },
  { icon: ChatBubbleIcon, label: 'Message' },
  { icon: StarIcon, label: 'Sales Platform' },
]

const bottomMenuItems = [
  { icon: QuestionMarkIcon, label: 'Help and docs' },
  { icon: GearIcon, label: 'Demo Mode', toggle: true },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onToggle}
      />

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed md:sticky top-0 left-0 h-screen bg-dark-100 border-r border-dark-300 z-30",
          "transition-all duration-300",
          isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:w-20 md:translate-x-0"
        )}
      >
        <div className="p-4 border-b border-dark-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <BoxIcon className="text-dark-100 w-5 h-5" />
            </div>
            <span className={cn(
              "font-semibold text-gray-100 transition-opacity duration-200",
              isOpen ? "opacity-100" : "opacity-0 md:hidden"
            )}>
              Consist
            </span>
          </div>
          <Button 
            variant="ghost" 
            className="text-gray-400 hidden md:flex"
            onClick={onToggle}
          >
            <ChevronLeftIcon className={cn(
              "w-4 h-4 transition-transform",
              !isOpen && "rotate-180"
            )} />
          </Button>
        </div>
        
        <nav className="p-4 flex flex-col h-[calc(100vh-4rem)]">
          <div className="space-y-1 flex-1">
            <p className={cn(
              "text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-3",
              !isOpen && "md:hidden"
            )}>
              MAIN MENU
            </p>
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150 ${
                  item.active 
                    ? 'bg-neon-500 text-dark-100' 
                    : 'text-gray-400 hover:bg-dark-200'
                }`}
              >
                <item.icon 
                  className={`w-4 h-4 flex-shrink-0 ${
                    item.active 
                      ? 'text-dark-100' 
                      : 'text-gray-500'
                  }`} 
                />
                <span className={cn(
                  "text-sm font-medium whitespace-nowrap transition-opacity duration-200",
                  isOpen ? "opacity-100" : "opacity-0 md:hidden"
                )}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-1">
            {bottomMenuItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-3 py-2 rounded-md text-[#4B5563] hover:bg-[#F3F4F6] transition-colors duration-150"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-[#9CA3AF] flex-shrink-0" />
                  <span className={cn(
                    "text-sm font-medium whitespace-nowrap transition-opacity duration-200",
                    isOpen ? "opacity-100" : "opacity-0 md:hidden"
                  )}>
                    {item.label}
                  </span>
                </div>
                {item.toggle && isOpen && (
                  <div className="w-8 h-4 bg-[#E5E7EB] rounded-full relative transition-colors duration-200">
                    <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </>
  )
} 