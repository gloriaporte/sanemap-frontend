import { View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions()

  return (
    <View style={{ position:'absolute', bottom: 0, flexDirection: 'row' }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width ]
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 50, 10],
          extrapolate: 'clamp'
        })

        return <Animated.View style={[styles.dot, { width: dotWidth }]} key={i.toString()} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#A4ABBD',
    marginHorizontal: 8,
  }
})