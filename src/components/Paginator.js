import { View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions()

  return (
    <View style={{ position:'absolute', bottom: 0, left: '50%', transform: [{ translateX: -50 }], marginBottom: 25, marginLeft: -10, flexDirection: 'row' }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width ]
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 50, 10],
          extrapolate: 'clamp'
        })
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        })
        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0668B8',
    marginHorizontal: 8,
  }
})