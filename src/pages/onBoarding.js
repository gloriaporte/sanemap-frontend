import { View, FlatList, Animated, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";

import OnBoardingItem from "../components/onBoardingItem/onBoardingItem";
import slides from "../components/onBoardingItem/slides";
import Paginator from "../components/Paginator";

export default function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={{ flex: 3, position: 'relative'}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
}
