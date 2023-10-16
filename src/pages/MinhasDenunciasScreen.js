import React, { useContext, useState } from "react";
import BotaoFlutuante from "../components/BotaoFlutuante";
import ModalPost from "../components/ModalPost";

import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import ListaDenuncias from "../components/ListaDenuncias";

export default function MinhasDenunciasScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Header />
      <ListaDenuncias
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        allPosts={false}
      />
      <ModalPost
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <BotaoFlutuante
        onPress={() => {
          setModalVisible(!isModalVisible);
        }}
      />
    </View>
  );
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
