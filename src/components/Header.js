import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { 
    View, 
    Image, 
    Text 
} from "react-native";

import Logo from "../../assets/logo_without_name.png";

export default function Header() {

  return (
    <View className="flex mt-8 flex-row justify-between items-end border-b-2 h-20 border-slate-200 bg-slate-50 w-full p-2">
      <View className="flex-row items-end ">
        <Image source={Logo} className="w-14 h-14 mr-4" style={{ resizeMode: "stretch"}} />
        <Text className="text-3xl text-primary font-extrabold mb-2">SANEMAP</Text>
      </View>
      <View className="rounded-full border-primary border">
        <View className="p-1 border-2 rounded-full border-white bg-primary w-12 flex justify-center items-center">
            <FontAwesome name={"user"} size={40} height={40} color={"#FFF"}  /> 
        </View>
      </View>
    </View>
  );
}

