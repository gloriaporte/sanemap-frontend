import { useTheme } from 'react-native-paper';
import React, { useContext, useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {DefaultTheme, Provider} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../contexts/auth';

import { useFocusEffect } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../pages/HomeScreen';

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
                activeColor="#0668B8"
                inactiveColor="#fff"
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
                        tabBarIcon: ({ color, focused }) => (
                            <FontAwesome5 name={focused ? "home" : "user"} size={26} color={color} />
                        )
                    }}
                />

                {/* <AppTab.Screen 
                    name="Notificações" 
                    component={NotificacoesScreen} 
                    options={{
                        barStyle: { height: 200 },
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="exclamation-circle" size={26} color={color} />
                        )
                    }}
                /> */}
            </AppTab.Navigator>
        </Provider>
    )
}