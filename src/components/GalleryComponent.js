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
            console.log(result.assets);
            setImageInput(result.assets);
        } 
    };

  return (
    <View>
      <TouchableOpacity title={"Abrir Galeria"} onPress={pickImageAsync} style={{ borderColor: "#0668B8", borderWidth: 3, borderRadius: 20, padding: "4%" }}>
        <Text style={{ fontSize: 20, color: "#0668B8"}}>
          <Ionicons name="image" size={24} color="#0668B8" />
          Abrir Galeria
        </Text>
      </TouchableOpacity>
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
