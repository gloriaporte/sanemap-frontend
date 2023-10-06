import React, { useState } from "react";
import Pipeline from "../../assets/pipeline-2.png";
import LogoWithoutName from "../../assets/logo_without_name.png";
import BotaoLargo from "../components/BotaoLargo";
import TextInputStyled from "../components/TextInputStyled";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Modal } from "react-native-paper";
import { TERMS } from "../../assets/terms_of_use";

export default function RegisterScreen() {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log("aaaaa");
  };
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={LogoWithoutName}
          style={{ width: "30%", height: "100%", resizeMode: "contain" }}
        />
      </View>
      <View style={styles.containerInputs}>
        <TextInputStyled
          state={nomeCompleto}
          setState={setNomeCompleto}
          label="Nome Completo"
        />
        <TextInputStyled state={email} setState={setEmail} label="Email" />
        <TextInputStyled
          state={password}
          setState={setPassword}
          label="Senha"
        />
        <TextInputStyled
          state={confirmPassword}
          setState={setConfirmPassword}
          label="Confirme a senha"
        />
      </View>
      <View style={[styles.containerTerms, { flexDirection: "column" }]}>
        <Text style={[styles.formatText, { textAlign: "center" }]}>
          Ao se registrar, você aceita com os
          <TouchableOpacity onPress={showModal}>
            <Text style={[styles.formatText, { color: "#0668B8" }]}>
              Termos e Política Privacidade
            </Text>
          </TouchableOpacity>{" "}
          do Aplicativo
        </Text>
        <BotaoLargo
          paddingButton={"10px"}
          texto={"Registrar"}
          icone={false}
          onPress={handleRegister}
        />
      </View>
      <View
        style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={Pipeline} style={styles.image} />
      </View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <Text style={{ fontSize: 14, overflow: 'scroll', textAlign: 'justify', letterSpacing: 1.6}}>{TERMS}</Text>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  containerInputs: {
    flex: 0.3,
    paddingHorizontal: 40,
    marginTop: 25,
  },
  containerTerms: {
    flex: 0.3,
    justifyContent: "space-evenly",
    paddingHorizontal: 40,
  },
  image: {
    width: "60%",
    height: "100%",
    resizeMode: "contain",
  },
  formatText: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  containerStyle: {
    backgroundColor: "#F4F9FF",
    margin: "auto",
    width: "80%",
    height: "70%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
});
