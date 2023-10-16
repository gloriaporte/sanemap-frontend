import React, { useState, useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { Ionicons } from '@expo/vector-icons';

import { 
    View, 
    Text, 
    Modal, 
    TouchableOpacity, 
    StyleSheet, 
    Image 
} from 'react-native';

export default function GalleryComponent({ setImageInput }) {

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality:  1,
      allowsMultipleSelection: true,
      selectionLimit: 4
    });

    if (!result.canceled) {
      setImageInput(result.assets[0].uri);
    } else {
      alert('Você não selecionou nenhuma foto.');
    }
  };

  return (
    <View>
      <TouchableOpacity title={"Abrir Câmera"} onPress={pickImageAsync} style={{ borderColor: "#0668B8", borderWidth: 3, borderRadius: 20, padding: "4%" }}>
        <Text style={{ fontSize: 20 }}>
          <Ionicons name="image" size={24} color="#0668B8" />
          Abrir Galeria
        </Text>
      </TouchableOpacity>
      {/* { image &&
        <Image source={{ uri: image }} style={{ width: '50%', height: '50%'}} /> 
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  openButton: {
    flex: 3
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});
