import { Card, Text } from '@radix-ui/themes'
import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons'
import { cn } from '../lib/utils'

interface MetricCardProps {
  title: string
  value: string
  change: number
  changeLabel: string
}

export function MetricCard({ title, value, change, changeLabel }: MetricCardProps) {
  const isPositive = change > 0

  return (
    <Card>
      <div className="space-y-1">
        <Text size="2" className="font-medium block text-gray-500 dark:text-gray-400">
          {title}
        </Text>
        
        <Text size="6" className="font-semibold block text-gray-900 dark:text-gray-100">
          {value}
        </Text>
        
        <div className="flex items-center gap-1">
          <div className={cn(
            "flex items-center gap-1 px-2 py-0.5 rounded",
            isPositive 
              ? "text-teal-600 bg-teal-500/10 dark:text-neon-400 dark:bg-neon-500/10" 
              : "text-red-400 bg-red-500/10"
          )}>
            {isPositive ? (
              <ArrowUpIcon className="w-3 h-3" />
            ) : (
              <ArrowDownIcon className="w-3 h-3" />
            )}
            <Text size="1" className="font-medium">
              {Math.abs(change)}%
            </Text>
          </div>
          <Text size="1" className="text-gray-500">
            {changeLabel}
          </Text>
        </div>
      </div>
    </Card>
  )
} 