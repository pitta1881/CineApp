import React from 'react';
import { View, Text, Platform, StyleSheet, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../../constants/colors'

const FooterActions = ({ activeScreen, navigation}) => {
  return (
    <View style={styles.footerActions}>
      <View style={styles.buttonFooter}>
        <Button
            title="Home"
            color={activeScreen === 'Home' ? "red": "#3D9970"}
            onPress={() => navigation.navigate('Home')}
          />
      </View>
      <View style={styles.buttonFooter}>
        <Button
            title="Favoritos"
            color={activeScreen === 'Favoritos' ? "red": "#3D9970"}
            onPress={() => navigation.navigate('Favoritos')}
          />
      </View>
      <View style={styles.buttonFooter}>
        <Button
            title="Estrenos"
            color={activeScreen === 'Estrenos' ? "red": "#3D9970"}
            onPress={() => navigation.navigate('Estrenos')}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerActions: {
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingHorizontal: 15,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonFooter:{
    width: Dimensions.get('window').width / 3 - 30,
  }
});

export default FooterActions;