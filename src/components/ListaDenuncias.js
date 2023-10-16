import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  TouchableHighlight
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { lista } from "../../assets/lista_posts";
import PersonPerfil from "../../assets/PersonPerfil.png";
import { AuthContext } from "../../src/contexts/auth";
import PostagemDenuncia from "./PostagemDenuncia";
import { getTodasPostagens } from '../services/requests/getTodasPostagens';
import { SafeAreaView } from "react-native-safe-area-context";
import { getTodasPostagensUser } from '../services/requests/getTodasPostagensUser';

export default function ListaDenuncias({ isModalVisible, setModalVisible, allPosts = true }) {
  const { user } = useContext(AuthContext);
  const [ postagens, setPostagens ] = useState([])

  useEffect(() => {
    if (allPosts === true) {
      const getPostagens = async () => {
        const response = await getTodasPostagens(user);
        setPostagens(response.data)
      };
      getPostagens();
    } else {
      const getPostagensActualUser = async () => {
        const response = await getTodasPostagensUser(user)
        setPostagens(response.data)
      }
      getPostagensActualUser()
    }
  }, []);

  function refresh() {
    const getPostagens = async () => {
      const response = await getTodasPostagens(user);
      setPostagens(response.data)
    };
  }

  const renderLista = postagens.map((item) => 
    <PostagemDenuncia data={item} />
  );

  return (
    <View style={[styles.container, {flex: 1}]}>
      <FlatList
        showVerticalScrollIndicator={0}
        data={postagens}
        refreshing={false}
        onRefresh={refresh}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#DBDBDB",
              padding: 10,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
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
        }
        renderItem={({ item }) => <PostagemDenuncia data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F9FF"
  },

  inputContainer: {
    width: "100%",
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
    resizeMode: "stretch",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#0668B8",
  },
});
