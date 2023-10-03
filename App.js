import 'react-native-gesture-handler';
import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/index.js';
import AuthProvider from './src/contexts/auth';

NativeWindStyleSheet.setOutput({
  default: "native",
});

console.disableYellowBox=true;

export default function App() {
  return (
    <NavigationContainer>
       <AuthProvider>
         <StatusBar />
         <Routes />
       </AuthProvider>
    </NavigationContainer>
  );
}

