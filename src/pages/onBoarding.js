import { View, FlatList, Animated, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React, { useCallback, useRef, useState } from "react";

import OnBoardingItem from "../components/onBoardingItem/onBoardingItem";
import slides from "../components/onBoardingItem/slides";
import Paginator from "../components/Paginator";
import NextButton from '../components/NextButton';


export default function OnBoarding() {
  const {width, height} = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const slidesRef = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      slidesRef?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    slidesRef?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };


  return (
    <View style={{ flex: 3, position: 'relative'}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        ref={slidesRef}
      />
      <View>
        <Paginator data={slides} scrollX={scrollX} />
        <NextButton scrollTo={goToNextSlide} />
      </View>
    </View>
  );
}
