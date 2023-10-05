import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function BotaoFlutuante({ onPress }) {

  return (
    <TouchableOpacity style={styles.botao}>
        <FontAwesome name={"plus"} size={40} height={40} color={"#0668B8"}  /> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    botao: {
        position: "absolute",
        bottom: 10,
        right: 10,
        borderRadius: 40,
        padding: "1%",
        borderWidth: 4,
        width: 60,
        height: 60,
        display: "flex",
        borderColor: "#0668B8",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingTop: 2
      }
});

