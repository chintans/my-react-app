import '@radix-ui/themes/styles.css'
import { RootLayout } from './layouts/RootLayout'
import { MainComponent } from './components/MainComponent'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <RootLayout>
        <MainComponent />
      </RootLayout>
    </ThemeProvider>
  )
}

export default App
