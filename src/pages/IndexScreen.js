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
    return (
        <KeyboardAvoidingView className="bg-white flex-1 items-center justify-center">
            <Text>Oi</Text>
            <BotaoLargo icone={"home"} titulo={"Cadastrar"} onPress={""} texto={"Cadastrar"} />
            <BotaoLargo icone={false} titulo={"Cadastrar"} onPress={""} texto={"Cadastrar"} />
        </KeyboardAvoidingView>
    )
}