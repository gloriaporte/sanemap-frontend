import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import { 
    KeyboardAvoidingView, 
    View, 
    Image, 
    Text 
} from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";

export default function IndexScreen() {
    const navigation = useNavigation()
    
    return (
        <KeyboardAvoidingView className="bg-light flex-1 flex items-center justify-center p-4">
            <Text>Oi</Text>
            <View className="my-4">
                <BotaoLargo icone={"google"} titulo={"Entrar com Google"} onPress={""} texto={"Entrar com Google"} />
            </View>
            <BotaoLargo icone={false} titulo={"Entrar"} onPress={""} texto={"Entrar"} />
            <View className="my-4">
                <BotaoLargo icone={"facebook"} titulo={"Entrar com Facebook"} onPress={""} texto={"Entrar com Facebook"} />
            </View>
            <View className="my-4">
                <BotaoLargo titulo={"Entrar com Facebook"} onPress={() => navigation.navigate('IntroScreen')} texto={"Página IntroScreen"} />
            </View>
        </KeyboardAvoidingView>
    )
}