import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../pages/IndexScreen';

const AuthTab = createStackNavigator();

export default function AuthRoutes() {

    return(
        <AuthTab.Navigator 
         screenOptions={({ route, navigation }) => ({
             headerShown: false
         })}>
             <AuthTab.Screen name="IndexScren" component={IndexScreen} />
        </AuthTab.Navigator>
    )
}