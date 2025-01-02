import { LinearGradient } from 'tamagui/linear-gradient'
import { angleToPoints } from '@utils/gradient'
import logo from '@assets/isologo.webp'
import { Stack, useMedia } from 'tamagui'

function CustomLinearGradient() {
  const media = useMedia()
  const { start, end } = angleToPoints(68.2)
  
  const gradientConfig = media.sm ? {
    // Mobile gradient
    colors: [
      'rgb(7, 3, 98)',
      'rgb(179, 26, 132)',
    ],
    locations: [0, 0.9, 1]
  } : {
    // Desktop gradient
    colors: [
      'rgb(7, 3, 98)',
      'rgb(179, 26, 132)',
      'rgb(239, 186, 83)',
    ],
    locations: [0, 0.477, 1]
  }

  return (
      <LinearGradient
        width="100%"
        height="100vh"
        borderRadius="$4"
        {...gradientConfig}
        start={start}
        end={end}
      >
        <Stack zIndex={10} padding="$4" alignItems="flex-start">
          <img src={logo} alt="Abel Arismendy" height="64px" />
        </Stack>
      </LinearGradient>
  )
}

export default function Home() {
  return <CustomLinearGradient />
}
