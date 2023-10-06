import React, { useState } from "react";
import { Modal, View, Text, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import TextInputStyled from "./TextInputStyled";
import CameraComponent from "./CameraComponent";
import LocationComponent from "./LocationComponent";
import BotaoLargo from "./BotaoLargo";
import { lista } from '../../assets/lista_posts';

export default function ModalPost({ isModalVisible, setModalVisible }) {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [locationInput, setLocationInput] = useState(null);
  const [imageInput, setImageInput] = useState(null);

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
    getCurrentDateTime()
    console.log(currentDateTime)
    const post = {
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
    lista.push({ key: lista.length + 1, ...post})
    toggleModal();
  };

  return (
    <View>
      <Modal visible={isModalVisible} animationType="slide">
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              textColor="#566583"
              rippleColor="rgba(6, 104, 184, 0.3)"
              onPress={toggleModal}
              style={{ alignSelf: "flex-end", marginTop: 10 }}
            >
              Fechar
            </Button>
            <BotaoLargo
              paddingButton={10}
              fontSizeButton={15}
              texto={"Postar"}
              icone={false}
              onPress={handlePost}
            />
          </View>
          <TextInputStyled
            label="Descricão do problema"
            state={description}
            setState={setDescription}
            heightSize={200}
          />
          <LocationComponent setLocationFromModal={setLocation} />
          <TextInputStyled
            label="Localizacão do problema"
            state={locationInput}
            setState={setLocationInput}
          />
          <CameraComponent setImageInput={setImageInput} />
        </ScrollView>
      </Modal>
    </View>
  );
}
