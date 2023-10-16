import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/contexts/auth';

import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

import { 
    StyleSheet,
    View, 
    Image, 
    Text 
} from "react-native";

import Header from "../components/Header";

export default function MapScreen() {
    const route = useRoute();
    const local1 = route.params.localizacao;
    const local = local1.split(",");

    const [localizacaoMarcador, setLocalizacaoMarcador] = useState({
        latitude: local[0],
        longitude: local[1],
        latitudeDelta: 0,
        longitudeDelta: 0.02
    });

    console.log(localizacaoMarcador.latitude);
    
    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.main}>
                <MapView 
                    initialRegion={localizacaoMarcador}
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                >
                    <Marker 
                        coordinate={localizacaoMarcador} 
                        pinColor={"#0668B8"}
                    />
                </MapView>
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