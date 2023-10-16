import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import {Marker} from 'react-native-maps';

import { 
    StyleSheet,
    View, 
    Image, 
    Text 
} from "react-native";

import BotaoLargo from "../components/BotaoLargo.js";
import Header from "../components/Header";

export default function MapScreen({localizacao}) {
    const navigation = useNavigation();
    const [localizacaoMarcador, setLocalizacaoMarcador] = useState(localizacao);

    const regiaoInicial = {
        latitude: -23.8309, 
        longitude: -46.8160,
        latitudeDelta: 0,
        longitudeDelta: 0.02
    };
    
    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.main}>
                <MapView 
                    initialRegion={localizacao ? localizacao : regiaoInicial}
                    style={styles.map} 
                    provider={PROVIDER_GOOGLE}
                />
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
        backgroundColor: "#EEE"
    },

    map: {
        width: '100%',
        height: '100%',
    },
});