import { Card, Text, Button } from '@radix-ui/themes'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

const data = [
  { region: 'Europe', value: 2728 },
  { region: 'Americas', value: 2409 },
  { region: 'Asia', value: 2843 },
  { region: 'Africa', value: 3028 },
  { region: 'Pacific', value: 1838 },
  { region: 'Middle East', value: 800 },
]

export function SalesByRegion() {
  return (
    <Card className="bg-dark-100 border-dark-300">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Text size="2" className="text-gray-400 font-medium">
            Sales by Region
          </Text>
          <Button variant="surface" className="bg-dark-200 text-gray-400 hover:text-gray-300">
            <DotsHorizontalIcon />
          </Button>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} cx="50%" cy="50%" outerRadius="80%">
              <PolarGrid stroke="#333" />
              <PolarAngleAxis
                dataKey="region"
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <Radar
                name="Sales"
                dataKey="value"
                stroke="#22c55e"
                fill="#22c55e"
                fillOpacity={0.2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.region} className="flex items-center justify-between">
              <Text className="text-gray-300">{item.region}</Text>
              <Text className="text-gray-100 font-medium">
                {item.value.toLocaleString()}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
} 