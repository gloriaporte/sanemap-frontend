import React, { useState } from "react";
// import { Modal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { TERMS } from "../../assets/terms_of_use";
import { registrarUsuario } from "../services/requests/registrar";

import Pipeline from "../../assets/pipeline-2.png";
import BotaoLargo from "../components/BotaoLargo";
import TextInputStyled from "../components/TextInputStyled";
import LogoWithoutName from '../../assets/logoWithoutName';

import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
  StatusBar,
  ToastAndroid,
  Modal,
  TouchableWithoutFeedback
} from "react-native";

export default function RegisterScreen() {
  const [visible, setVisible] = useState(false);
  const [erro, setErro] = useState(null);

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const windowHeight = useWindowDimensions().height;
  const navigation = useNavigation();

  const registrar = async (payload) => {
    const response = await registrarUsuario(payload);
    if(response) {
      if(response.status == 400) {
        setErro({id: "1", msg: response.message });
      } else {
        setErro(null);
        ToastAndroid.show('Cadastro realizado com sucesso! Aguarde alguns instantes...', ToastAndroid.SHORT);

        setTimeout(() => {
            navigation.navigate("LoginScreen");
        }, 2000);
      }
    } else {
      setErro({id: "1", msg: "Ocorreu um erro, contate o suporte."})
    }  
  }

  const handleRegister = () => {
    if(email.trim().length === 0 && password.trim().length === 0 && confirmPassword.trim().length == 0 && nomeCompleto.trim().length == 0 && cpf.trim().length == 0 && telefone.trim().length == 0) {
      setErro({id: "1", msg: "Preencha todos os campos."});
    } else if (nomeCompleto.trim().length === 0) {
      setErro({id: "2", msg: "Preencha o campo do nome completo."});
    } else if (cpf.trim().length === 0) {
      setErro({id: "3", msg: "Preencha o campo CPF."});
    } else if (isNaN(cpf)) {
      setErro({id: "3", msg: "Preencha o campo CPF somente com números."});
    } else if (telefone.trim().length === 0) {
      setErro({id: "4", msg: "Preencha o campo telefone."});
    } else if (isNaN(telefone)) {
      setErro({id: "3", msg: "Preencha o campo telefone somente com números."});
    } else if (email.trim().length === 0) {
      setErro({id: "5", msg: "Preencha o campo de email."});
    } else if (!email.includes('@')) {
      setErro({id: "5", msg: "Insira um email válido."});
    } else if (password.trim().length === 0) {
      setErro({id: "6", msg: "Preencha o campo de senha."});
    } else if (confirmPassword.trim().length === 0) {
      setErro({id: "7", msg: "Preencha o campo de confirmação de senha."});
    } else if (password !== confirmPassword) {
      setErro({id: "8", msg: "As senhas não são iguais."});
    } else {
      let payload = {
        nome: nomeCompleto,
        cpf: cpf,
        email: email.toLowerCase(),
        password: password,
        telefone: telefone
      };
      registrar(payload);
      setErro(null);
    }
  };

  return (
    <View style={[styles.container, {minHeight: Math.round(windowHeight)}]}>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
        <LogoWithoutName />
      </View>

      <View style={styles.containerInputs}>
        <TextInputStyled
          state={nomeCompleto}
          setState={setNomeCompleto}
          label="Nome Completo"
          heightSize={50}
          seguro={false}
          erro={(erro && (erro.id == 1 || erro.id == 2)) ? true : false}
          tipo={"default"}
        />
        <TextInputStyled
          state={cpf}
          setState={setCpf}
          label="CPF"
          heightSize={50}
          seguro={false}
          erro={(erro && (erro.id == 1 || erro.id == 3)) ? true : false}
          tipo={"number-pad"}
        />
         <TextInputStyled 
          state={telefone} 
          setState={setTelefone} 
          label="Telefone" 
          heightSize={50}
          seguro={false}
          erro={(erro && (erro.id == 1 || erro.id == 4)) ? true : false}
          tipo={"number-pad"}
        />
        <TextInputStyled 
          state={email} 
          setState={setEmail} 
          label="Email" 
          heightSize={50}
          seguro={false}
          erro={(erro && (erro.id == 1 || erro.id == 5)) ? true : false}
          tipo={"email-address"}
        />
        <TextInputStyled
          state={password}
          setState={setPassword}
          label="Senha"
          heightSize={50}
          seguro={true}
          erro={(erro && (erro.id == 1 || erro.id == 6 || erro.id == 8)) ? true : false}
          tipo={"default"}
        />
        <TextInputStyled
          state={confirmPassword}
          setState={setConfirmPassword}
          label="Confirme a senha"
          heightSize={50}
          seguro={true}
          erro={(erro && (erro.id == 1 || erro.id == 7 || erro.id == 8)) ? true : false}
          tipo={"default"}
        />
      </View>

      <View style={[styles.containerTerms ]}>
        <Text style={[styles.formatText, { textAlign: "center" }]}>
          Ao se registrar, você aceita com os &nbsp;
          <TouchableWithoutFeedback onPress={showModal}>
            <Text style={[styles.formatText, { color: "#0668B8" }]}>
              Termos e Política Privacidade &nbsp;
            </Text>
          </TouchableWithoutFeedback> 
          <Text style={[styles.formatText]}>
            do aplicativo.
          </Text>
        </Text>
        <BotaoLargo
          paddingButton={16}
          texto={"Registrar"}
          icone={false}
          onPress={handleRegister}
        />
        <View style={{ height: 20 }}>
          {
            erro && 
            (<Text style={styles.mensagemErro}>{erro.msg}</Text>)
          }
        </View>
      </View>

      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        transparent={true}
      >
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalStyle}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Termos de Uso e Política de Privacidade</Text>
            <ScrollView style={{  marginVertical: "4%" }}>
              <Text style={{ fontSize: 14, overflow: 'scroll', textAlign: 'justify', letterSpacing: 2 }}>{TERMS}</Text>
            </ScrollView>
            <BotaoLargo
                paddingButton={16}
                texto={"Fechar"}
                icone={false}
                onPress={hideModal}
              />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginTop: StatusBar.currentHeight || 0
  },

  containerInputs: {
    flex: 0.7,
    paddingHorizontal: 40,
    marginTop: 10,
  },

  containerTerms: {
    flex: 0.3,
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
  },

  image: {
    width: "60%",
    height: "100%",
    resizeMode: "contain",
  },

  formatText: {
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1
  },

  modalContainerStyle: {
    backgroundColor: "rgba(0, 0, 0, .4)",
    margin: "auto",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    padding: "6%"
  },

  modalStyle: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    padding: "4%",
    borderRadius: 20
  },

  mensagemErro: {
    color: "#c20202",
    textAlign: "center",
    fontWeight: "700"
  }
});
