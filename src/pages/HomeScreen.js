import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../src/contexts/auth";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

import Header from "../components/Header";
import BotaoFlutuante from "../components/BotaoFlutuante";
import ListaDenuncias from "../components/ListaDenuncias";
import ModalPost from "../components/ModalPost";

export default function HomeScreen() {
  const { user, signOut } = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Header />
      <ListaDenuncias
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
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
