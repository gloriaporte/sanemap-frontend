import 'react-native-gesture-handler';
import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/index.js';
import AuthProvider from './src/contexts/auth';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const MyTheme = {
  colors: {
    background: '#F4F9FF'
  }
}

console.disableYellowBox=true;

export default function App() {
  return (
    <NavigationContainer className="bg-light" theme={MyTheme}>
       <AuthProvider>
         <StatusBar />
         <Routes />
       </AuthProvider>
    </NavigationContainer>
  );
}

