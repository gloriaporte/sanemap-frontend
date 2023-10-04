import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import { 
    View, 
    Image, 
    Text 
} from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";
import Header from "../components/Header";

export default function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View className="bg-light flex-1 flex items-center">
            <Header />
            <View className="my-4">
                <BotaoLargo icone={"google"} titulo={"Entrar com Google"} onPress={""} texto={"Entrar com Google"} />
            </View>
        </View>
    )
}