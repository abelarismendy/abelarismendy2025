import { XStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

function angleToPoints(angleInDegrees: number) {
  const angleInRadians = (Math.PI * (180 - angleInDegrees)) / 180
  const x = Math.sin(angleInRadians)
  const y = Math.cos(angleInRadians)
  return {
    start: [0.5 - x / 2, 0.5 - y / 2],
    end: [0.5 + x / 2, 0.5 + y / 2],
  }
}

function CustomLinearGradient() {
  const { start, end } = angleToPoints(68.2)

  return (
    <XStack width="100%" height="100%" justifyContent="center" alignItems="center">
      <LinearGradient
        width="100%"
        height="100vh"
        borderRadius="$4"
        colors={[
          'rgb(7, 3, 98)',
          'rgb(179, 26, 132)',
          'rgb(239, 186, 83)',
        ]}
        locations={[0, 0.477, 1]}
        start={start}
        end={end}
      />
    </XStack>
  )
}


export default function Home() {
  return <CustomLinearGradient />
}
