
export function angleToPoints(angleInDegrees: number) {
  const angleInRadians = (Math.PI * (180 - angleInDegrees)) / 180
  const x = Math.sin(angleInRadians)
  const y = Math.cos(angleInRadians)
  return {
      start: [0.5 - x / 2, 0.5 - y / 2],
      end: [0.5 + x / 2, 0.5 + y / 2],
    }
}