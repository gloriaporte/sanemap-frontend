import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import LogoWithoutName from '../../assets/logoWithoutName';

import { 
    StyleSheet,
    View, 
    Text,
    StatusBar
} from "react-native";

export default function Header() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <LogoWithoutName width='64' height='64' />
        <Text style={styles.titulo}>SANEMAP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: "#F4F9FF",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: StatusBar.currentHeight || 0,
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
    marginLeft: "5%",
    marginBottom: "5%"
  },

  botao: {
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