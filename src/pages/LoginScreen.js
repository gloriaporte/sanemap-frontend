import React, { useState, useContext } from "react";
import Pipeline from "../../assets/pipeline.png";
import BotaoLargo from "../components/BotaoLargo";
import { useNavigation } from "@react-navigation/native";
import TextInputStyled from "../components/TextInputStyled";
import { AuthContext } from "../../src/contexts/auth";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    signIn(email, password);
  };

  const recoverPassword = () => {
    console.log("recuperando senha...");
  };

  const sendToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -100 }}>
        <Image source={Pipeline} style={styles.image} />
      </View>
      <View style={styles.containerButtons}>
        <View style={{ marginVertical: 10 }}>
          <BotaoLargo
            paddingButton={15}
            icone={"google"}
            titulo={"Entrar com Google"}
            texto={"Entrar com Google"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <BotaoLargo
            paddingButton={15}
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
            marginBottom: 20,
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
          paddingButton={15}
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
    marginHorizontal: "5rem",
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
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
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
    color: "#A4ABBD",
  },
});
