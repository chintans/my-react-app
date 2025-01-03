import { Card, Text, Button } from '@radix-ui/themes'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'Amazon', value: 45, color: '#22c55e' },
  { name: 'Tokopedia', value: 25, color: '#0ea5e9' },
  { name: 'Alibaba', value: 35, color: '#f59e0b' },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-dark-100 border border-dark-300 rounded-lg p-3 shadow-lg">
        <Text size="2" className="text-gray-200 font-medium">
          {data.name}
        </Text>
        <Text size="1" className="text-gray-400">
          {data.value}% of total sales
        </Text>
      </div>
    )
  }
  return null
}

export function SalesByPlatform() {
  return (
    <Card className="bg-dark-100 border-dark-300">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Text size="2" className="text-gray-400 font-medium">
            Sales by e-commerce platform
          </Text>
          <Button variant="surface" className="bg-dark-200 text-gray-400 hover:text-gray-300">
            <DotsHorizontalIcon />
          </Button>
        </div>

        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    strokeWidth={0}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <Text className="text-gray-300">{item.name}</Text>
              </div>
              <Text className="text-gray-100 font-medium">{item.value}%</Text>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
} 