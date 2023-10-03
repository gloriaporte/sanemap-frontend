import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';

export default function BotaoLargo({ icone, titulo, texto, onPress }) {

  return (
    <TouchableOpacity title={titulo} onPress={onPress} className="border-2  border-primary w-[50%] h-16 rounded-2xl">
      { titulo !== false ?  
        <View className="d-flex flex-row items-center px-4 bg-primary border-white border-2 h-full rounded-2xl">
          <View>
            <FontAwesome5 name={icone} size={20} height={20} color={"#ffe"}  />         
          </View>
          <Text className="text-center text-slate-50 font-bold text-lg"> { texto } </Text>
        </View>
        :
        <View className="d-flex flex-row items-center px-4 bg-primary border-white border-2 h-full rounded-2xl">
          <Text className="text-center w-full text-pink-400 font-bold text-lg"> { texto } </Text>
        </View>
      }
    </TouchableOpacity>
  );
}

