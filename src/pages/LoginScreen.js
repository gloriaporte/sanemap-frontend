import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import BotaoLargo from "../components/BotaoLargo";
import Pipeline from "../../assets/pipeline.png";

import TextInputStyled from "../components/TextInputStyled";

export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("logando...");
  };

  const recoverPassword = () => {
    console.log("recuperando senha...");
  };

  const sendToRegister = () => {
    navigation.navigate('RegisterScreen')
  };

  return (
    <View style={styles.container}>
      <Image source={Pipeline} style={styles.image} />
      <View style={styles.containerButtons}>
        <View style={{ marginVertical: 10}}>
          <BotaoLargo
            paddingButton={"15px"}
            icone={"google"}
            titulo={"Entrar com Google"}
            texto={"Entrar com Google"}
          />
        </View>
        <View style={{ marginVertical: 10}}>
          <BotaoLargo
            style={styles.marginCustom}
            paddingButton={"15px"}
            icone={"facebook"}
            titulo={"Entrar com Facebook"}
            texto={"Entrar com Facebook"}
          />
        </View>
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.orText}>OU</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.containerForm}>
        <View>
          <TextInputStyled state={email} setState={setEmail} label="Email" />
          <TextInputStyled
            state={password}
            setState={setPassword}
            label="Password"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-10%",
          }}
        >
          <TouchableOpacity onPress={recoverPassword}>
            <Text style={[styles.formatText, { color: "#0668B8" }]}>
              Esqueceu a Senha?
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.formatText}>Não tem conta?</Text>
            <TouchableOpacity onPress={sendToRegister}>
              <Text style={[styles.formatText, { color: "#0668B8" }]}>
                Crie uma
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <BotaoLargo
          paddingButton={"15px"}
          texto={"Entrar"}
          icone={false}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  marginCustom: {
    marginHorizontal: '5rem'
  },
  containerButtons: {
    flex: 0.5,
    justifyContent: "flex-end",
    padding: 40,
  },
  containerForm: {
    flex: 0.5,
    justifyContent: "space-evenly",
    paddingHorizontal: 40,
    marginBottom: 40
  },
  image: {
    position: "absolute",
    width: "50%",
    height: "15%",
    resizeMode: "contain",
    top: 0,
    left: "50%",
    transform: [{ translateX: "-50%" }],
  },
  formatText: {
    fontWeight: "bold",
    fontSize: "1rem",
    letterSpacing: 1
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
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
    color:"#A4ABBD"
  },
});
