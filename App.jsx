import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import Header from './components/Header/Header';
import Home from './screens/Home';
import Favorites from './screens/Favorites';
import FooterActions from './components/Footer/FooterActions';
import Estrenos from './screens/Estrenos';

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
     <SafeAreaView style={styles.container}>
      <Header title="CineApp"/>
      {
        screen === 'Home' 
        ? <Home />
        : screen === 'Favoritos' 
        ? <Favorites /> 
        : screen === 'Estrenos' 
        ? <Estrenos /> : ''
      }
      <FooterActions activeScreen={screen} handleSwitchScreen={handleSwitchScreen}/>
    </SafeAreaView>
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