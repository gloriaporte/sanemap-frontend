import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';

export default function BotaoLargo({ icone, titulo, texto, onPress }) {

  const RenderBotao = () => {
    if(icone == false) {
      return (
        <View className="d-flex flex-row items-center justify-center bg-primary border-white border-2 h-full rounded-2xl">
          <Text className="text-center w-full text-slate-50 font-bold text-lg"> { texto } </Text>
        </View>
      );
    } else {
      return (
        <View className="d-flex flex-row items-center justify-center bg-primary border-white border-2 h-full rounded-2xl">
          <View>
            <FontAwesome5 name={icone} size={24} height={28} color={"#ffe"}  />         
          </View>
          <Text className="ml-3 text-center text-slate-50 font-bold text-lg"> { texto } </Text>
        </View>
      );
    }
  }

  return (
    <TouchableOpacity title={titulo} onPress={onPress} className="border-2 border-primary w-[80vw] h-16 rounded-2xl">
     <RenderBotao />
    </TouchableOpacity>
  );
}

