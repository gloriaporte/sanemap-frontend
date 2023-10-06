import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import BotaoLargo from './BotaoLargo';

export default function CameraComponente() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null)
  const cameraRef = useRef(null);

  const checkCameraPermission = async () => {
    requestPermission()
  };

  React.useEffect(() => {
    checkCameraPermission();
  }, []);

  const openCamera = () => {
    setIsVisible(true);
  };

  const closeCamera = () => {
    setIsVisible(false);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      console.log('Foto tirada:', uri);
      setImage(uri)
      closeCamera();
    }
  };

  if (permission === null) {
    return <View />;
  }

  if (permission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View>
      { image ?
        <Image source={{ uri: image }} style={{ width: ''}} /> : <BotaoLargo
         paddingButton={15}
         texto={"Abrir Câmera"}
         icone={false}
         onPress={openCamera}
       />
      }
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={cameraRef}
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeCamera}>
            <Ionicons name="close" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Ionicons name="camera" size={60} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
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
