import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { 
    StyleSheet,
    View, 
    Image, 
    Text,
    TouchableOpacity
} from "react-native";

import Logo from "../../assets/logo_without_name.png";

export default function Header() {

  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.imagem} />
        <Text style={styles.titulo}>SANEMAP</Text>
      </View>
      <TouchableOpacity style={styles.botao}>
        <View style={styles.circuloBotao}>
            <FontAwesome name={"user"} size={20} height={20} color={"#FFF"}  /> 
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: "#FFF",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      paddingTop: 50,
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: "#DDD",
      width: "100%"
  },

  logo: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end"
  },

  imagem: {
    width: 60,
    height: 60,
    marginRight: "4%",
    resizeMode: "stretch"
  },

  titulo: {
    borderRadius: 20,
    color: "#0668B8",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: "4%"
  },

  botao: {
    borderRadius: 40,
    borderColor: "#0668B8",
    borderWidth: 1,
    marginBottom: "2%"
  },

  circuloBotao: {
    borderRadius: 40,
    padding: "1%",
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "#0668B8",
    width: 40,
    height: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
});