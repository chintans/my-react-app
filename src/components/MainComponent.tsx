import { Button, Flex, Grid, Heading } from '@radix-ui/themes'
import { MetricCard } from './MetricCard'
import { RegisteredUsers } from './RegisteredUsers'
import { RevenueChart } from './RevenueChart'
import { SessionsByCountry } from './SessionsByCountry'
import { SalesByRegion } from './SalesByRegion'
import { SalesByPlatform } from './SalesByPlatform'

const metrics = [
  {
    title: 'Total Income',
    value: '$32,499.93',
    change: 12.95,
    changeLabel: 'Compared to last month'
  },
  {
    title: 'Profit',
    value: '$10,499.93',
    change: 0.33,
    changeLabel: 'Compared to last month'
  },
  {
    title: 'Total Views',
    value: '5,211,832',
    change: 0.32,
    changeLabel: 'Compared to last month'
  },
  {
    title: 'Conversion Rate',
    value: '4.83%',
    change: 8.05,
    changeLabel: 'Compared to last month'
  }
]

export function MainComponent() {
  return (
    <div className="space-y-6">
      <Flex justify="between" align="center">
        <Heading size="5" className="text-gray-100">
          Overview
        </Heading>
        <Flex gap="3">
          <Button 
            variant="surface" 
            className="bg-dark-100 border-dark-300 text-gray-300 hover:bg-dark-200"
          >
            Customize Widget
          </Button>
          <Button 
            variant="surface" 
            className="bg-dark-100 border-dark-300 text-gray-300 hover:bg-dark-200"
          >
            Filter
          </Button>
          <Button 
            variant="surface" 
            className="bg-dark-100 border-dark-300 text-gray-300 hover:bg-dark-200"
          >
            Share
          </Button>
        </Flex>
      </Flex>

      <Grid columns={{ initial: '1', md: '2', lg: '4' }} gap="4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeLabel={metric.changeLabel}
          />
        ))}
      </Grid>

      <Grid columns={{ initial: '1', lg: '3' }} gap="4">
        <RevenueChart />
        <RegisteredUsers />
      </Grid>

      <Grid columns={{ initial: '1', lg: '3' }} gap="4">
        <SessionsByCountry />
        <SalesByRegion />
        <SalesByPlatform />
      </Grid>
    </div>
  )
} 