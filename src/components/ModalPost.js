import React, { useState } from "react";
import { Modal, View, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import TextInputStyled from "./TextInputStyled";
import CameraComponent from "./CameraComponent";
import LocationComponent from "./LocationComponent";
import BotaoLargo from './BotaoLargo';


export default function ModalPost({ isModalVisible, setModalVisible }) {
  const [description, setDescription] = useState("");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePost = () => {
    console.log("Texto postado:", description);
    toggleModal();
  };

  return (
    <View>
      <Modal visible={isModalVisible} animationType="slide">
        <View
          style={{
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
              textColor='#566583'
              rippleColor='rgba(6, 104, 184, 0.3)'
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
          <View>
            <TextInputStyled
              label="Descricão do problema"
              state={description}
              setState={setDescription}
              heightSize={200}
            />
          </View>
          <View style={{ position: "relative" }}>
            <CameraComponent />
          </View>
          <View style={{ position: "relative" }}>
            <LocationComponent />
          </View>
        </View>
      </Modal>
    </View>
  );
}
