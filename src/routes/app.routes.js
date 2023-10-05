import React, { useContext, useCallback } from 'react';
import { AuthContext } from '../contexts/auth';
import { TouchableOpacity, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DefaultTheme, Provider} from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../pages/HomeScreen';
import MapScreen from '../pages/MapScreen';

const AppTab = createBottomTabNavigator();
const theme = {
    ...DefaultTheme,
    color: {
       ...DefaultTheme.colors,
        secondaryContainer: "transparent"
    }
}

theme.colors.secondaryContainer = 'transparent';

export default function AppRoutes() {

    return(
        <Provider theme={theme}>
            <AppTab.Navigator
                initialRouteName="Home"
                backBehavior='initialRoute'
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#FFF",
                        borderColor: "#DDD"
                    }
               })}
            >
                <AppTab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name={ focused ? "home" : "home-outline"} size={26} color={ focused ? "#0668B8" : "#566583" } />
                        )
                    }}
                />

                <AppTab.Screen 
                    name="Mapa" 
                    component={MapScreen} 
                    options={{
                        barStyle: { height: 200 },
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name={focused ? "map-marker-radius" : "map-marker-radius-outline"} size={26} color={ focused ? "#0668B8" : "#566583" } />
                        )
                    }}
                />
            </AppTab.Navigator>
        </Provider>
    )
}