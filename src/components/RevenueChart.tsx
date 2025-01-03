import { Card, Text, Button } from '@radix-ui/themes'
import { DownloadIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { cn } from '../lib/utils'

const data = [
  { month: 'Mar 2023', revenue: 28000, target: 25000 },
  { month: 'Jun 2023', revenue: 25000, target: 28000 },
  { month: 'Sep 2023', revenue: 30000, target: 27000 },
  { month: 'Dec 2023', revenue: 31000, target: 29000 },
  { month: 'Mar 2024', revenue: 29000, target: 28000 },
  { month: 'Jun 2024', revenue: 32839, target: 30932 },
  { month: 'Sep 2024', revenue: 33500, target: 31000 },
  { month: 'Dec 2024', revenue: 34000, target: 32000 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-100 border border-dark-300 rounded-lg p-3 shadow-lg">
        <Text size="2" className="text-gray-200 font-medium mb-1">
          {label}
        </Text>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-500" />
            <Text size="1" className="text-gray-400">Revenue:</Text>
            <Text size="2" className="text-gray-100 font-medium">
              ${payload[0].value.toLocaleString()}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500" />
            <Text size="1" className="text-gray-400">Target:</Text>
            <Text size="2" className="text-gray-100 font-medium">
              ${payload[1].value.toLocaleString()}
            </Text>
          </div>
        </div>
      </div>
    )
  }
  return null
}

const CustomizedDot = ({ cx, cy, value, index }: any) => {
  return (
    <circle 
      cx={cx} 
      cy={cy} 
      r={4}
      className={cn(
        "stroke-2 transition-all duration-200",
        index === data.length - 1 
          ? "fill-neon-500 stroke-neon-500/20 r-6" 
          : "fill-dark-100 stroke-neon-500"
      )}
    />
  )
}

export function RevenueChart() {
  const currentRevenue = data[data.length - 1].revenue
  const currentTarget = data[data.length - 1].target
  const percentage = Math.round((currentRevenue / currentTarget) * 100)

  return (
    <Card className="bg-dark-100 border-dark-300 col-span-2">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Text size="2" className="text-gray-400 font-medium block">
              Revenue Over Time
            </Text>
            <div className="flex items-center gap-6 mt-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-500" />
                <Text className="text-gray-300">
                  Total Revenue: ${currentRevenue.toLocaleString()}
                </Text>
                <Text className="text-gray-500">• 55%</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <Text className="text-gray-300">
                  Total Target: ${currentTarget.toLocaleString()}
                </Text>
                <Text className="text-gray-500">• 45%</Text>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="surface" className="bg-dark-200 text-gray-400 hover:text-gray-300">
              <DownloadIcon />
            </Button>
            <Button variant="surface" className="bg-dark-200 text-gray-400 hover:text-gray-300">
              <DotsHorizontalIcon />
            </Button>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false}
                stroke="#333" 
              />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                tickFormatter={(value) => `$${value/1000}k`}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ stroke: '#333', strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22c55e"
                strokeWidth={2}
                dot={<CustomizedDot />}
                activeDot={{ r: 6, fill: "#22c55e", stroke: "#22c55e20", strokeWidth: 4 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#374151"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#374151", stroke: "#37415120", strokeWidth: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
} 