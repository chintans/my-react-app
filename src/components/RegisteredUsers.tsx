import { Card } from './Card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { useState } from 'react'
import { cn } from '../lib/utils'

const data = [
  { name: 'Premium Plan', value: 1809, color: '#22c55e' },
  { name: 'Basic Plan', value: 515, color: '#374151' },
]

const total = data.reduce((sum, item) => sum + item.value, 0)
const percentage = Math.round((data[0].value / total) * 100)

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-dark-100 border border-dark-300 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-gray-200">{data.name}</p>
        <p className="text-lg font-semibold text-gray-100">
          {data.value.toLocaleString()} users
        </p>
        <p className="text-xs text-gray-400">
          {Math.round((data.value / total) * 100)}% of total
        </p>
      </div>
    )
  }
  return null
}

export function RegisteredUsers() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-400">
            Registered users
            <span className="text-xs text-gray-500 ml-1">an overview of your users</span>
          </h3>
          <button className="text-gray-400 hover:text-gray-300 transition-colors">
            <span className="sr-only">View options</span>
            <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 2.5C3.32843 2.5 4 1.82843 4 1C4 0.171573 3.32843 -0.5 2.5 -0.5C1.67157 -0.5 1 0.171573 1 1C1 1.82843 1.67157 2.5 2.5 2.5Z" fill="currentColor"/>
              <path d="M7.5 2.5C8.32843 2.5 9 1.82843 9 1C9 0.171573 8.32843 -0.5 7.5 -0.5C6.67157 -0.5 6 0.171573 6 1C6 1.82843 6.67157 2.5 7.5 2.5Z" fill="currentColor"/>
              <path d="M12.5 2.5C13.3284 2.5 14 1.82843 14 1C14 0.171573 13.3284 -0.5 12.5 -0.5C11.6716 -0.5 11 0.171573 11 1C11 1.82843 11.6716 2.5 12.5 2.5Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                  animationBegin={0}
                  animationDuration={1200}
                  animationEasing="ease-out"
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      strokeWidth={0}
                      className="transition-all duration-200"
                      style={{
                        filter: activeIndex === index ? 'brightness(1.2)' : 'none',
                        transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                        transformOrigin: 'center',
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-semibold text-gray-100 animate-fadeIn">
                  {total.toLocaleString()}
                </p>
                <p className="text-sm text-gray-400">Total Users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {data.map((item, index) => (
            <div 
              key={item.name}
              className={cn(
                "flex items-center justify-between p-2 rounded-md transition-colors duration-200",
                activeIndex === index && "bg-dark-200"
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center gap-2">
                <div 
                  className={cn(
                    "w-3 h-3 rounded-full transition-transform duration-200",
                    activeIndex === index && "scale-125",
                    item.name === 'Premium Plan' ? 'bg-neon-500' : 'bg-gray-700'
                  )} 
                />
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-100">
                {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
} 