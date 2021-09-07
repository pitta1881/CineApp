import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import BreadNavigator from './navigation/BreadNavigator';

export default function App() {
  const [screen, setScreen] = useState('Home')
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const handleSwitchScreen = (newScreen) =>{
    setScreen(newScreen);
  }
  
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
      <BreadNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
});