import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import Home from './pages/Home'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Home />
    </TamaguiProvider>
  )
}