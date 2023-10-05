import { Image, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React from 'react';

import slides from "../components/onBoardingItem/slides";
import Onboarding from "react-native-onboarding-swiper";


export default function OnBoarding() {
  return (
    <View style={styles.container}>
      <Onboarding
        pages={slides}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

