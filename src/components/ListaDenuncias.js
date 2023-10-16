import React, { useContext } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  TouchableHighlight,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { lista } from "../../assets/lista_posts";
import PersonPerfil from "../../assets/PersonPerfil.png";
import { AuthContext } from "../../src/contexts/auth";
import TextInputStyled from "../components/TextInputStyled";
import PostagemDenuncia from "./PostagemDenuncia";

export default function ListaDenuncias({ isModalVisible, setModalVisible }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#DBDBDB",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
          }}
        >
          {user.avatar == "../../assets/PersonPerfil.png" ? (
            <Image source={PersonPerfil} style={styles.foto} />
          ) : (
            <Image source={PersonPerfil} style={styles.foto} />
          )}

          <View style={{ width: 250 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Possui uma denúncia?</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View>
          <TouchableHighlight
            underlayColor="rgba(255, 255, 255, 0.5)"
            onPress={() => {
              setModalVisible(true);
            }}
            style={{
              borderRadius: 10,
              padding: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="photo" size={24} color="#0668B8" />
              <Text
                style={{ color: "#243239", fontWeight: "bold", marginLeft: 5 }}
              >
                Tirar Foto
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <FlatList
        showVerticalScrollIndicator={0}
        data={lista}
        keyExtractor={(item) => item.key}
        style={{ display: "flex" }}
        renderItem={({ item }) => <PostagemDenuncia data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F9FF",
    flex: 1,
  },
  inputContainer: {
    width: 250,
    borderWidth: 2,
    borderColor: "#0668B8",
    borderRadius: 20,
    padding: 10,
  },
  placeholder: {
    color: "#BBBBBB",
    fontWeight: 'bold'
  },
  foto: {
    width: 60,
    height: 60,
    padding: 30,
    resizeMode: "center",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#0668B8",
  },
});
