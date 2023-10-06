import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../src/contexts/auth";

import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";
import Header from "../components/Header";
import BotaoFlutuante from "../components/BotaoFlutuante";
import ListaDenuncias from "../components/ListaDenuncias";
import ModalPost from "../components/ModalPost"

export default function HomeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  const createPost = () => {
    console.log("abrindo modal")
    setModalVisible(true)
  }

  return (
    <View style={styles.wrapper}>
      <Header />
      <ListaDenuncias />
      <ModalPost isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
      <BotaoFlutuante onPress={() => createPost()} />
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        position: "relative"
    },
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EEE",
  },
});
