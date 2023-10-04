import React from 'react';
import { 
    View, 
    Image, 
    Text 
} from "react-native";

import Logo from "../../assets/logo_with_name.svg";

export default function Header() {

  return (
    <View className="flex mt-4 flex-row items-end border-b-2 h-44 border-slate-200 bg-slate-50 w-full">
      <Image source={Logo} className="bg-red-100" style={{ height: 264, width: 264}} />
      <Text className="text-3xl text-primary font-extrabold">SANEMAP</Text>
    </View>
  );
}

