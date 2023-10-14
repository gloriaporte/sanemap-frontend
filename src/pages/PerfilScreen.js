import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { 
    StyleSheet,
    View, 
    Text 
} from "react-native";

import BotaoQuadrado from "../components/BotaoQuadrado";
import Header from "../components/Header";

export default function PerfilScreen() {

    const navigation = useNavigation();
    const { user, signOut } = useContext(AuthContext);

    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.main}>
                <View style={styles.linha}>
                    <BotaoQuadrado titulo="Minhas Denúncias" icone={"phone-alt"} onPress={ () => console.log("oi")} />
                    <BotaoQuadrado titulo="SaneCoins" icone={"phone"} onPress={ () => console.log("oi")} />
                </View>
                <View style={styles.linha}>
                    <BotaoQuadrado titulo="Registrar Denúncias" icone={"clipboard-check"} onPress={ () => console.log("oi")} />
                    <BotaoQuadrado titulo="Recompensas" icone={"gift"} onPress={ () => console.log("oi")} />
                </View>
                <View style={styles.linha}>
                    <BotaoQuadrado titulo="Sair" icone={"sign-out-alt"} onPress={signOut} />
                </View>
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
        justifyContent: "center",
        gap: 40,
        padding: "10%"
    },

    linha: {
        flexDirection: "row",
        justifyContent: "space-around",
        flex: 0.4,
        gap: 40
    },

    opcao: {
        backgroundColor: "#FFF",
        padding: "4%",
        borderRadius: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    titulo: {
        fontSize: 18,
        color: "#333",
        fontWeight: "700",
        textAlign: "center"

    }
});