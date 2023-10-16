import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';

import TextInputStyled from "./TextInputStyled";
import CameraComponent from "./CameraComponent";
import LocationComponent from "./LocationComponent";
import BotaoLargo from "./BotaoLargo";
import GalleryComponent from "./GalleryComponent";

import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import { criarPost } from "../services/requests/criarPostagem";

import { 
  Modal, 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid
} from "react-native";

export default function ModalPost({ isModalVisible, setModalVisible }) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(null);
  const [imageInput, setImageInput] = useState([]);
  const [erro, setErro] = useState(null);
  const { user } = useContext(AuthContext);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const postar = async (payload) => {
    const response = await criarPost(payload, user.token);
    if(response) {
      if(response.status == 400) {
        setErro({id: "1", msg: response.message });
      } else {
        setErro(null);
        // setDescription(null);
        // setLocation(null);
        // setImageInput(null);
        
        ToastAndroid.show('Denúncia realizada! Aguarde alguns instantes...', ToastAndroid.SHORT);
        setTimeout(() => {
          toggleModal();
        }, 2000);
      }
    } else {
      setErro({id: "1", msg: "Ocorreu um erro, contate o suporte."})
    }  
  }

  const handlePost = () => {

    if (description.trim().length === 0) {
      setErro({id: "1", msg: "Preenchaa descrição da denúncia."});
    } else if (!location) {
      setErro({id: "2", msg: "Adicione a sua localização."});
    } else if (imageInput.length === 0) {
      setErro({id: "3", msg: "Adicione ao menos uma imagem do local."});
    } 

    const payload = {
      images: imageInput,
      description: description,
      location: location
    };
    
    postar(payload);
    // lista.push({ key: lista.length + 1, ...payload})
  };

  return (
    <View>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.container}>
          <View style={styles.scrollview}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 5 }}>
              <Text style={{ fontWeight: 700, fontSize: 22 }}>Nova Denúncia</Text>
              <TouchableOpacity
                textColor="#566583"
                rippleColor="rgba(6, 104, 184, 0.3)"
                onPress={toggleModal}
                style={{ position: "absolute", right: 0, top: 0}}
              >
                <FontAwesome name="times-circle-o" size={30} color="#930" />
              </TouchableOpacity>
            </View>

            <TextInputStyled
              label="Descreva o problema"
              state={description}
              setState={setDescription}
              heightSize={120}
              erro={(erro && (erro.id == 1)) ? true : false}
            />

          <View>
          { location ?
            // <Image source={{ uri: imageInput }} style={{ width: '50%', height: '50%'}} /> 
            <Text style={styles.sucesso}>Localização pega com êxito!</Text>
            :
            <View>
              <LocationComponent setLocationFromModal={setLocation} />
              <Text style={styles.alerta}>Precisamos da sua localização atual.</Text>
            </View>
          }
          </View>

          <Text style={{ fontSize: 18, fontWeight: "600" }}>Fotos do local</Text>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>           
            <CameraComponent setImageInput={setImageInput} />
            <GalleryComponent setImageInput={setImageInput} />
          </View>
          { imageInput ?
            (
              imageInput.length > 0 ?
                <FlatList
                  showVerticalScrollIndicator={true}
                  data={imageInput}
                  horizontal={true}
                  keyExtractor={(item) => item.key}
                  style={{ display: "flex", flexDirection: "row" }}
                  renderItem={({ item }) => 
                    <Image source={{ uri: item.uri }} style={{ width: 200, height: 200, margin: 10 }}  />
                  }
                />
              :
                <Image source={{ uri: imageInput.uri }} style={{ width: '90%', height: '30%', marginTop: "10%", marginLeft: "4%" }} /> 
              )
            :
            <Text style={styles.alerta}>Precisamos de uma a quatro fotos.</Text>
          }

            <View style={{ position: "absolute", bottom: "2%", width: "100%", left: "5%"}}>
              <View style={{ height: 20, marginBottom: 20 }}>
              {
                erro && 
                (<Text style={styles.mensagemErro}>{erro.msg}</Text>)
              }
              </View>
              <BotaoLargo
                paddingButton={10}
                fontSizeButton={20}
                texto={"Postar"}
                icone={false}
                onPress={() => handlePost() }
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",    
    margin: "auto",
    width: "100%",
    height: "100%",
    overflow: "scroll"
  },

  scrollview: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "94%",
    gap: 20
  },

  alerta: {
    fontSize: 14,
    fontWeight: "600",
    color: "#910",
    textAlign: "center"
  },

  sucesso: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0668B8",
    textAlign: "center"
  },

  mensagemErro: {
    color: "#c20202",
    textAlign: "center",
    fontWeight: "700"
  }
});