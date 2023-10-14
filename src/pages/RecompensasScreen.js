import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';
import MapView from 'react-native-maps';

import { 
    StyleSheet,
    View, 
    Image, 
    Text 
} from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";
import Header from "../components/Header";

export default function RecompensasScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.main}>
                <Text>Oie Caio, faça uma versão do logo do sanecoin igual aos ícones que usamos na barra de navegação. Uma deve ser transparente com bordas azuis, o outro deve ser preenchido em azul com a cor dos icones, "#0668B8", e bordas brancas.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        alignItems: "center"
    },

    main: {
        flex: 1,
        width: "100%",
        backgroundColor: "#EEE",
        padding: 20
    },
});