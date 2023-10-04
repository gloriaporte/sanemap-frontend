import React, { useContext, useCallback } from 'react';
import { AuthContext } from '../contexts/auth';
import { TouchableOpacity, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DefaultTheme, Provider} from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';



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
                activeColor="#EB7C34"
                inactiveColor="#fff"
                barStyle={{ backgroundColor: "#01639D" }}
                backBehavior='initialRoute'
            >
                {/* <AppTab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    initialParams={{ secao: null }}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="home" size={26} color={color} />
                        )
                    }}
                />

                <AppTab.Screen 
                    name="Notificações" 
                    component={NotificacoesScreen} 
                    options={{
                        barStyle: { height: 200 },
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="exclamation-circle" size={26} color={color} />
                        )
                    }}
                />

                <AppTab.Screen 
                    name="Sair" 
                    component={SairScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="sign-out-alt" size={26} color={color} />
                        )
                    }}
                /> */}
            </AppTab.Navigator>
        </Provider>
    )
}