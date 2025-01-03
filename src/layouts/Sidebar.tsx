import { 
  HomeIcon, 
  BarChartIcon, 
  LayersIcon,
  BoxIcon,
  ChatBubbleIcon,
  StarIcon,
  GearIcon,
  QuestionMarkIcon,
  ChevronLeftIcon,
  SunIcon,
  MoonIcon
} from '@radix-ui/react-icons'
import { Box, Button } from '@radix-ui/themes'
import { cn } from '../lib/utils'
import { useTheme } from '../contexts/ThemeContext'

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
  const { theme, toggleTheme } = useTheme()

  return (
    <Box className="transition-colors duration-200 dark:bg-dark-100 dark:border-r dark:border-dark-300 bg-white border-r border-light-400">
      <div
        className={cn(
          "fixed inset-0 z-20 md:hidden transition-opacity dark:bg-black/50 bg-gray-900/20",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onToggle}
      />

      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 h-screen z-30 transition-all duration-300 dark:bg-dark-100 dark:border-r dark:border-dark-300 bg-white border-r border-light-400",          
          isOpen
            ? "w-64 translate-x-0"
            : "w-64 -translate-x-full md:w-20 md:translate-x-0"
        )}
      >
        <div
          className={cn(
            "p-4 flex items-center justify-between border-b transition-colors duration-200",
            theme === "dark" ? "border-dark-300" : "border-light-400"
          )}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-teal-500 dark:bg-neon-500">
              <BoxIcon className="text-white dark:text-dark-100 w-5 h-5" />
            </div>
            <span
              className={cn(
                "font-semibold transition-all duration-200",
                theme === "dark" ? "text-gray-100" : "text-gray-900",
                isOpen ? "opacity-100" : "opacity-0 md:hidden"
              )}
            >
              Consist
            </span>
          </div>
          <Button
            variant="ghost"
            className={cn(
              "hidden md:flex transition-colors duration-200",
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            )}
            onClick={onToggle}
          >
            <ChevronLeftIcon
              className={cn(
                "w-4 h-4 transition-transform",
                !isOpen && "rotate-180"
              )}
            />
          </Button>
        </div>

        <nav className="p-4 flex flex-col h-[calc(100vh-4rem)]">
          <div className="space-y-1 flex-1">
            <p
              className={cn(
                "text-xs font-medium uppercase tracking-wider px-3 mb-3 transition-colors duration-200",
                theme === "dark" ? "text-gray-500" : "text-gray-400",
                !isOpen && "md:hidden"
              )}
            >
              MAIN MENU
            </p>
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150",
                  item.active
                    ? "bg-teal-500 text-white dark:bg-neon-500 dark:text-dark-100"
                    : "text-gray-600 hover:bg-light-300 dark:text-gray-400 dark:hover:bg-dark-200"
                )}
              >
                <item.icon
                  className={cn(
                    "w-4 h-4 flex-shrink-0",
                    item.active
                      ? "text-white dark:text-dark-100"
                      : "text-gray-400 dark:text-gray-500"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium whitespace-nowrap transition-opacity duration-200",
                    isOpen ? "opacity-100" : "opacity-0 md:hidden"
                  )}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div
            className={cn(
              "border-t pt-4 space-y-1 transition-colors duration-200",
              theme === "dark" ? "border-dark-300" : "border-light-400"
            )}
          >
            {bottomMenuItems.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded-md transition-colors duration-150",
                  theme === "dark"
                    ? "text-gray-400 hover:bg-dark-200"
                    : "text-gray-600 hover:bg-light-300"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    className={cn(
                      "w-4 h-4 flex-shrink-0",
                      theme === "dark" ? "text-gray-500" : "text-gray-400"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium whitespace-nowrap transition-opacity duration-200",
                      isOpen ? "opacity-100" : "opacity-0 md:hidden"
                    )}
                  >
                    {item.label}
                  </span>
                </div>
                {item.toggle && isOpen && (
                  <div
                    className={cn(
                      "w-8 h-4 rounded-full relative transition-colors duration-200",
                      theme === "dark" ? "bg-dark-300" : "bg-light-300"
                    )}
                  >
                    <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                  </div>
                )}
              </div>
            ))}

            {/* Theme Switch */}
            <div className="flex items-center justify-between px-3 py-2 rounded-md transition-colors duration-150 text-gray-600 hover:bg-light-300 dark:text-gray-400 dark:hover:bg-dark-200">
              <div className="flex items-center gap-3">
                {theme === "dark" ? (
                  <MoonIcon className="w-4 h-4 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                ) : (
                  <SunIcon className="w-4 h-4 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                )}
                <span
                  className={cn(
                    "text-sm font-medium whitespace-nowrap transition-opacity duration-200",
                    isOpen ? "opacity-100" : "opacity-0 md:hidden"
                  )}
                >
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
              </div>
              {isOpen && (
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "w-8 h-4 rounded-full relative transition-colors duration-200",
                    theme === "dark" ? "bg-neon-500" : "bg-teal-500"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-200",
                      theme === "dark" ? "left-[calc(100%-14px)]" : "left-0.5"
                    )}
                  />
                </button>
              )}
            </div>
          </div>
        </nav>
      </aside>
    </Box>
  );
} 