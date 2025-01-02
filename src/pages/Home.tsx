import { LinearGradient } from 'tamagui/linear-gradient'
import { angleToPoints } from '@utils/gradient'
// import logo from '@assets/isologo.webp'
import { Stack, XStack, useMedia, Text } from 'tamagui'
import me from '@assets/me.webp'

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
        alignItems="center"
      >
        <XStack zIndex={10} padding="$4" justifyContent="center" alignItems="center" width="100%" height="100%" maxWidth="1080px">
          <Stack>
            <Text fontFamily="$heading" color="#fff" fontSize="$7" fontWeight="normal">Hello, I'm</Text>
            <Text fontFamily="$heading" color="#fff" fontSize="$10" fontWeight="bold">Abel Arismendy</Text>
            <Text fontFamily="$heading" color="#fff" fontSize="$7" fontWeight="normal">Software engineer focusing on frontend web development.</Text>
          </Stack>
          <img src={me} alt="Abel Arismendy" width="50%" style={{ alignSelf: 'flex-start' }}/>
        </XStack>
      </LinearGradient>
  )
}

export default function Home() {
  return <CustomLinearGradient />
}
