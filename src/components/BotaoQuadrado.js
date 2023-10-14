import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function BotaoQuadrado({ icone, titulo, onPress }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.botao}>
            <FontAwesome5 name={icone} size={40} color="#0668B8" />
            <Text style={styles.titulo}>{titulo}</Text> 
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF",
      padding: "4%",
      borderRadius: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },

  botao: {
    justifyContent: "center",
    alignItems: "center"
  },

  titulo: {
      fontSize: 18,
      color: "#333",
      fontWeight: "700",
      textAlign: "center"
  }
});

