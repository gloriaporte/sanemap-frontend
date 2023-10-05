import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';
import { FontAwesome5 } from '@expo/vector-icons';

import { 
    StyleSheet,
    View, 
    Image, 
    Text,
    ScrollView
} from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";
import Header from "../components/Header";
import BotaoFlutuante from "../components/BotaoFlutuante";
import ListaDenuncias from "../components/ListaDenuncias";

export default function HomeScreen() {

    const navigation = useNavigation();
    const { user, signOut } = useContext(AuthContext);

    return (
        <View style={styles.wrapper}>
            <Header />
            {/* <View style={styles.main}>
                <BotaoLargo icone={"google"} titulo={"Entrar com Google"} onPress={signOut} texto={"Entrar com Google"} />
            </View> */}
            <BotaoFlutuante onPress={""} />
            <ListaDenuncias />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        position: "relative",
    },

    main: {
        flex: 1,
        width: "100%",
        backgroundColor: "#EEE"
    },
});