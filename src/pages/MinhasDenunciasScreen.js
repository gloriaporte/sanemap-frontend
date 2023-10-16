import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../src/contexts/auth";
import MapView from "react-native-maps";

import { StyleSheet, View, Image, Text } from "react-native";

import Header from "../components/Header";
import ListaDenuncias from "../components/ListaDenuncias";

export default function MinhasDenunciasScreen() {
  const [ isModalVisible, setModalVisible ] = useState(false)

  return (
    <View style={styles.wrapper}>
      <Text>aaaaaa</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    position: "relative",
  },
  main: {
    flex: 1,
    width: "100%",
  },
});
