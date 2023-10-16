import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PipelineMaintenance from "../../assets/pipeline-maintenance.png";

import { View, Image, Text, StyleSheet, StatusBar } from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";

export default function IndexScreen() {
  const navigation = useNavigation();

  const sendToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const sendToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.formatText, {fontSize: 24, color: '#5F6F8F', textAlign: 'center', marginTop: '5rem' }]}>
        Bem-vindo ao {"\n"}<Text style={{ color: '#0668B8'}}>Sanemap</Text>
      </Text>
      <View style={[styles.containerButtons, { justifyContent: "flex-end" }]}>
        <Text style={[styles.formatText, { color: '#A4ABBD', marginVertical: 2 }]}>Novo por aqui?</Text>
        <BotaoLargo
          paddingButton={16}
          texto={"Registar"}
          icone={false}
          onPress={sendToRegister}
        />
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.orText}>OU</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.containerButtons}>
        <BotaoLargo
          paddingButton={16}
          texto={"Entrar"}
          icone={false}
          onPress={sendToLogin}
        />
      </View>
      <Image source={PipelineMaintenance} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: 30
  },
  containerButtons: {
    flex: 0.5,
    padding: 40,
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  formatText: {
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1,
  },
  image: {
    width: "100vw",
    height: "30vh",
    resizeMode: "contain",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#A4ABBD",
  },
  orText: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#A4ABBD",
  },
});
