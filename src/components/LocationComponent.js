import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

export default function LocationComponent({ setLocationFromModal }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    setLocationFromModal(location.coords)
  }

  return (
    <View style={{ width: "100%" }}>
      {text.length > 0 ? (
        <Text>Localizacão Coletada!</Text>
      ) : (
        <TouchableOpacity title={"Pegar Localização"} onPress={getCurrentLocation} style={{ borderColor: "#0668B8", borderWidth: 3, borderRadius: 30, padding: "4%" }}>
          <Text style={{ fontSize: 20, color: "#0668B8" }}>
            <Ionicons name="map" size={24} color="#0668B8" />
            Pegar Localização Atual
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
