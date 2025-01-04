import { LinearGradient } from 'tamagui/linear-gradient'
import { angleToPoints } from '@utils/gradient'
// import logo from '@assets/isologo.webp'
import { Stack, XStack, Text, Paragraph } from 'tamagui'
import me from '@assets/me.webp'

function CustomLinearGradient() {
  const { start, end } = angleToPoints(68.2)
  
  const gradientConfig = {
    colors: [
      'rgb(179, 26, 132)',
      '#1A1E3D',
    ],
    locations: [0, 0.6, 1]
  }

  return (
    <>
      <LinearGradient
        width="100%"
        height="100vh"
        borderRadius="$4"
        {...gradientConfig}
        start={start}
        end={end}
        alignItems="center"
      >
        <Stack zIndex={10} paddingHorizontal="$4" justifyContent="space-between" alignItems="center" width="100%" height="100%" maxWidth="1080px" 
        $sm={{
          flexDirection: 'column-reverse',
          justifyContent: 'space-between',
        }}
        flexDirection="row"
        >
          <Stack alignSelf="flex-end" width="50%" $sm={{
            alignSelf: 'center',
            width: '100%',
          }}>
            <img src={me} alt="Abel Arismendy" width="100%"/>
          </Stack>
          <Stack $sm={{
            marginTop: '$4',
          }}>
            <Text fontFamily="$heading" color="#fff" fontSize="$7" fontWeight="normal">Hello, I'm</Text>
            <Text fontFamily="$heading" color="#fff" fontSize="$10" fontWeight="bold">Abel Arismendy</Text>
            <Paragraph fontFamily="$heading" color="#fff" fontSize="$7" fontWeight="normal">Software engineer focusing on frontend web development.</Paragraph>
          </Stack>
        </Stack>
      </LinearGradient>
      <Stack height="100vh" backgroundColor="#fff">
        <Text>Hello</Text>
      </Stack>
    </>
  )
}

export default function Home() {
  return <CustomLinearGradient />
}
