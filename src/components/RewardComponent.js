import React from "react";
import { StyleSheet, View, Text, } from "react-native";
import SaneCoin from '../../assets/SaneCoin';

export default function RewardComponent({ data, sanecoins }) {
  return (
    <View>
      <View style={styles.containerReward}>
        <View style={styles.borderSquare}>
          <View
            style={[
              styles.square,
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            {data.icon}
          </View>
        </View>
        <View style={styles.containerInfo}>
          <Text
            style={{
              color: "#5F6F8F",
              fontWeight: "bold",
              fontSize: 16,
              flexWrap: "wrap",
              width: 200,
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              color: "#8398C2",
              fontWeight: "bold",
              fontSize: 13,
              flexWrap: "wrap",
              width: 200,
            }}
          >
            {data.description}
          </Text>
        </View>
      </View>
      <View style={[styles.priceReward, { backgroundColor: sanecoins >= data.price ? "#E3A72F" : "#AAA" }]}>
        <SaneCoin />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {data.price} SC
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerReward: {
    backgroundColor: "#E3EBF4",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  borderSquare: {
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0668B8",
  },
  square: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#0668B8",
  },
  containerInfo: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  priceReward: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    zIndex: -1,
    marginHorizontal: 20,
    marginTop: -20,
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 10,
    borderEndStartRadius: 15,
    borderEndEndRadius: 15,
  },
});
