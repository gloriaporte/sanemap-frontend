import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SaneCoin from "../../assets/SaneCoin";

import Header from "../components/Header";
import RewardComponent from "../components/RewardComponent";

const rewards = [
  {
    id: 0,
    name: "Recarga de celular",
    description: "Qualquer operadora de celular",
    icon: <Ionicons name="md-phone-portrait" size={50} color="white" />,
    link: "https://www.youtube.com",
    price: 100,
  },
  {
    id: 1,
    name: "Desconto na conta de água",
    description: "5% de desconto na sua próxima conta de água",
    icon: <Ionicons name="water" size={50} color="white" />,
    link: "https://www.youtube.com",
    price: 200,
  },
];

export default function RecompensasScreen() {
  const navigation = useNavigation();
  const date = "14/10/2023";
  const test = 0;

  return (
    <View style={styles.wrapper}>
      <Header />
      <ScrollView style={styles.main}>
        <Text
          style={{
            color: "#99A4B9",
            fontWeight: "bold",
            fontSize: 15,
            textAlign: "center",
            margin: 20,
          }}
        >
          Seus SaneCoins
        </Text>
        <View style={styles.containerSaneCoin}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10}}>
            <SaneCoin />
            <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
              {test} SC
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#243239",
              width: "100%",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>
              Última atualizacão - {date}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#99A4B9",
            fontWeight: "bold",
            fontSize: 15,
            padding: 20,
          }}
        >
          Recompensas
        </Text>
        {rewards.map((item) => (
          <RewardComponent key={item.id} data={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },

  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F4F9FF",
  },

  containerSaneCoin: {
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#0668B8",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 140,
  },
});
