import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import { 
    StyleSheet,
    View, 
    Image, 
    Text 
} from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";
import Header from "../components/Header";

export default function MapScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.main}>

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
        padding: 10
    }
});