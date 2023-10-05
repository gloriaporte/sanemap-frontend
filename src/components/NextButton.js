import { TouchableOpacity, Text, Animated } from 'react-native'

export default function NextButton({ scrollTo }) {
  return (
    <TouchableOpacity onPress={scrollTo} style={{ width: 10, height: 10}} activeOpacity={0.6}>
      <Text>
        aAAAAAAAA
      </Text>
    </TouchableOpacity>
  )
}