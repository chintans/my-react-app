import { Card, Text, Button } from '@radix-ui/themes'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { country: 'Australia', sessions: 634, percentage: '8%', flag: '🇦🇺' },
  { country: 'Indonesia', sessions: 589, percentage: '7.2%', flag: '🇮🇩' },
  { country: 'Thailand', sessions: 562, percentage: '6.2%', flag: '🇹🇭' },
  { country: 'Germany', sessions: 453, percentage: '5.4%', flag: '🇩🇪' },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-dark-100 border border-dark-300 rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">{data.flag}</span>
          <Text size="2" className="text-gray-200 font-medium">
            {data.country}
          </Text>
        </div>
        <div className="mt-1">
          <Text size="2" className="text-gray-100 font-medium">
            {data.sessions.toLocaleString()} sessions
          </Text>
          <Text size="1" className="text-gray-400">
            {data.percentage} of total
          </Text>
        </div>
      </div>
    )
  }
  return null
}

export function SessionsByCountry() {
  return (
    <Card className="bg-dark-100 border-dark-300">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Text size="2" className="text-gray-400 font-medium block">
              Session by Country
            </Text>
            <Text size="1" className="text-gray-500">
              Showing Data for Top Session
            </Text>
          </div>
          <Button variant="surface" className="bg-dark-200 text-gray-400 hover:text-gray-300">
            <DotsHorizontalIcon />
          </Button>
        </div>

        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis 
                type="number" 
                hide 
              />
              <YAxis 
                dataKey="country" 
                type="category" 
                axisLine={false}
                tickLine={false}
                tick={({ y, payload }) => (
                  <g transform={`translate(0,${y})`}>
                    <text 
                      x={0} 
                      y={0} 
                      dy={4} 
                      className="text-xs fill-gray-400" 
                      textAnchor="start"
                    >
                      {payload.value}
                    </text>
                  </g>
                )}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="sessions" 
                fill="#22c55e"
                radius={[0, 4, 4, 0]}
                barSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.country} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.flag}</span>
                <Text className="text-gray-300">{item.country}</Text>
              </div>
              <div className="flex items-center gap-2">
                <Text className="text-gray-100 font-medium">
                  {item.sessions.toLocaleString()}
                </Text>
                <Text className="text-gray-500">• {item.percentage}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
} 