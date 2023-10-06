import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";

export default function BotaoFlutuante({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ position: "absolute", bottom: 15, right: 15 }}>
        <View style={styles.circle}>
          <AntDesign
            name="pluscircle"
            size={40}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    position: "absolute",
    bottom: 15,
    right: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    position: 'relative',
    backgroundColor: "#0668B8",
    borderRadius: 40,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
  },
});
