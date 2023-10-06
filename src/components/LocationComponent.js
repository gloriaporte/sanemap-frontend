import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
} from "react-native";
import BotaoLargo from "./BotaoLargo";
import * as Location from "expo-location";

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
    <View>
      {text.length > 0 ? (
        <Text>Localizacão Coletada!</Text>
      ) : (
        <BotaoLargo
          paddingButton={15}
          texto={"Localizacão Atual"}
          icone={false}
          onPress={getCurrentLocation}
        />
      )}
    </View>
  );
}
