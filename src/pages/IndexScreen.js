import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import { 
    KeyboardAvoidingView, 
    View, 
    Image, 
    Text,
    StyleSheet
} from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";

export default function IndexScreen() {
    const navigation = useNavigation();
    const { signIn } = useContext(AuthContext);

    function handleLogin() {
        signIn("Teste", 123);
    }
    
    return (
        <KeyboardAvoidingView className="bg-light flex-1 flex items-center justify-center p-4 relative">
            <Text>Oi</Text>
            <View className="my-4">
                <BotaoLargo icone={"google"} titulo={"Entrar com Google"} onPress={handleLogin} texto={"Entrar com Google"} />
            </View>
            <BotaoLargo icone={false} titulo={"Entrar"} onPress={""} texto={"Entrar"} />
            <View className="my-4">
                <BotaoLargo titulo={"Entrar com Facebook"} onPress={() => navigation.navigate('OnBoardingScreen')} texto={"Página de OnBoarding"} />
            </View>
            <View className="my-4">
                <BotaoLargo titulo={"Entrar com Facebook"} onPress={() => navigation.navigate('LoginScreen')} texto={"Página de Login"} />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
});