import '@radix-ui/themes/styles.css'
import { RootLayout } from './layouts/RootLayout'
import { MainComponent } from './components/MainComponent'


function App() {  
  return (
    <RootLayout>
      <MainComponent />
    </RootLayout>   
  )
}

export default App
