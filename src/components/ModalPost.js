import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';

import TextInputStyled from "./TextInputStyled";
import CameraComponent from "./CameraComponent";
import LocationComponent from "./LocationComponent";
import BotaoLargo from "./BotaoLargo";
import GalleryComponent from "./GalleryComponent";

import { lista } from '../../assets/lista_posts';

import { 
  Modal, 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  StyleSheet ,
  TouchableOpacity,
  Image
} from "react-native";

export default function ModalPost({ isModalVisible, setModalVisible }) {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(null);
  const [locationInput, setLocationInput] = useState(null);
  const [imageInput, setImageInput] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    setCurrentDateTime(formattedDate);
  };

  const handlePost = () => {
    getCurrentDateTime();

    console.log(currentDateTime)

    const payload = {
      foto: "https://cdn.create.vista.com/api/media/medium/230785596/stock-vector-unnamed-user-icon-simple-vector-illustration?token=",
      autor: "Anônimo",
      descricao:
        description,
      data: currentDateTime,
      curtidas: 0,
      endereco: locationInput,
      latitude: location.altitude,
      longitude: location.latitude,
      imagens: [
        {
          key: 1,
          imagem:
            imageInput,
        },
      ],
    };

    lista.push({ key: lista.length + 1, ...payload})
    toggleModal();
  };

  return (
    <View>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollview}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
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
            />

          { location ?
            // <Image source={{ uri: imageInput }} style={{ width: '50%', height: '50%'}} /> 
            <Text style={styles.sucesso}>Localização pega com êxito!</Text>
            :
            <View>
              <LocationComponent setLocationFromModal={setLocation} />
              <Text style={styles.alerta}>Precisamos da sua localização atual.</Text>
            </View>
          }

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>           
            <CameraComponent setImageInput={setImageInput} />
            <GalleryComponent setImageInput={setImageInput} />
          </View>
          { imageInput.length > 0 ?
            // <Image source={{ uri: imageInput }} style={{ width: '50%', height: '50%'}} /> 
            <Text style={styles.alerta}>{imageInput}</Text>
            :
            <Text style={styles.alerta}>Precisamos de uma a quatro fotos.</Text>
          }

            <View style={{ position: "absolute", bottom: "2%", width: "100%", left: "5%"}}>
              <BotaoLargo
                paddingButton={10}
                fontSizeButton={20}
                texto={"Postar"}
                icone={false}
                onPress={handlePost}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, .4)",    
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
    height: "70%",
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
  }
})