import React  from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DefaultTheme, Provider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../pages/HomeScreen';
import MapScreen from '../pages/MapScreen';
import MinhasDenunciasScreen from '../pages/MinhasDenunciasScreen';
import PerfilScreen from '../pages/PerfilScreen';
import RecompensasScreen from '../pages/RecompensasScreen';
import SaneCoin from '../../assets/SaneCoin';
import SaneCoinFilled from '../../assets/SaneCoinFilled';

import { TouchableOpacity, View  } from 'react-native';

const AppTab = createBottomTabNavigator();
const theme = {
    ...DefaultTheme,
    color: {
       ...DefaultTheme.colors,
        secondaryContainer: "transparent"
    }
}

export const goMap = (local) => {
    const navigation = useNavigation();
    navigation.navigate("MapScreen", { localizacao: local });
}

theme.colors.secondaryContainer = 'transparent';

const BotaoCentralizado = ({ focused, onPress }) => {
    return (
        <View style={{ position: "absolute", top: -20, justifyContent: "center", alignItems: "center", borderWidth: 3, borderRadius: 30, padding: 4, borderColor: "#0668B8", backgroundColor: "#FFF"}} >
            <MaterialCommunityIcons name={ focused ? "map-marker-radius" : "map-marker-radius-outline"} size={40} color={"#0668B8"} />
        </View>
    );
};

export default function AppRoutes() {
    
    return(
        <Provider theme={theme}>
            <AppTab.Navigator
                initialRouteName="Home"
                backBehavior='initialRoute'
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        height: 52,
                        backgroundColor: "#0668B8",
                        position: "relative",
                        paddingBottom: 4,
                        elevation: 0
                    }
               })}
            >
                <AppTab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarLabelStyle: {
                            color: "#FFF"
                        },
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name={ focused ? "home" : "home-outline"} size={26} color={ "#FFF" } />
                        )
                    }}
                />
                <AppTab.Screen 
                    name="Minhas Denúncias" 
                    component={MinhasDenunciasScreen} 
                    options={{
                        tabBarLabelStyle: {
                            color: "#FFF"
                        },
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name={ focused ? "document" : "document-outline"} size={26} color={ "#FFF" } />
                        )
                    }}
                />
                <AppTab.Screen 
                    name="Mapa" 
                    component={MapScreen} 
                    initialParams={{ localizacao: null }}
                    options={{
                        tabBarLabelStyle: {
                            color: "#FFF"
                        },
                        tabBarIcon: ({ focused }) => (
                            <BotaoCentralizado focused={ focused } />
                        )
                    }}
                />
                <AppTab.Screen 
                    name="Recompensas" 
                    component={RecompensasScreen} 
                    options={{
                        tabBarLabelStyle: {
                            color: "#FFF"
                        },
                        tabBarIcon: ({ focused }) => (
                            focused ? <SaneCoinFilled /> : <SaneCoin />
                        )
                    }}
                />
                <AppTab.Screen 
                    name="Perfil" 
                    component={PerfilScreen} 
                    options={{
                        tabBarLabelStyle: {
                            color: "#FFF"
                        },
                        barStyle: { height: 200 },
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name={ focused ? "person" : "person-outline"} size={26} color={ "#FFF" } />
                        )
                    }}
                />
            </AppTab.Navigator>
        </Provider>
    )
}
